# 交易协议对比

不是"哪个更好"，而是"哪种场景用哪个"。四大协议各自有死忠群体和淘汰不掉的优点。

## 一图总览

| 维度 | FIX | MT5 私有协议 | REST + WS | gRPC |
|---|---|---|---|---|
| 诞生 | 1992 | 2010 | 2005+ | 2016 |
| 目标用户 | 机构 / HFT / 白标 | 零售终端 + 零售券商 | 零售开发者 / 算法 | 大厂内部 + 部分加密 |
| 消息格式 | `8=FIX.4.4|35=D|...` 文本帧 | 二进制私有 | JSON (+ Protobuf WS 日增) | Protobuf |
| 传输 | TCP 长连接 | TCP 长连接 | HTTP / WebSocket | HTTP/2 长流 |
| 发现性 | 标准规范公开 | 完全闭源 | OpenAPI 文档公开 | .proto 可分享 |
| 客户端 | QuickFIX / Onix / 自研 | 必须 MT 终端 / MetaApi | 任何 HTTP lib | 官方生成 stub |
| 延迟 | 微秒（机构）～ 毫秒（典型） | 几十毫秒 | 几十 ～ 几百毫秒 | 毫秒级 |
| 开发门槛 | 高（需签协议 + 证书）| 低（终端即用）/ 高（SDK 层）| 极低 | 中 |
| Rate limit | 合约级（TPS 商议） | 终端级别 | 严格（per key、per IP） | 可商议 |
| 权限模型 | session credentials + IP 白名单 | 账号密码（MT 协议鉴权）| API Key + Secret + IP 白名单 | TLS 证书 + OAuth |

## FIX（Financial Information eXchange）

**什么是 FIX**：1992 年摩根斯坦利和所罗门兄弟联合制定的金融消息标准，随后 FIX Trading Community（2005 前叫 FIX Protocol Ltd）接手维护。

**消息样本**：
```
8=FIX.4.4|9=122|35=D|34=215|49=CLIENT12|52=20260421-10:00:00|56=BROKER23|11=MY_ORDER_ID|21=1|55=EURUSD|54=1|60=20260421-10:00:00|38=100000|40=2|44=1.17650|59=0|10=247|
```

- `8=FIX.4.4` 版本号
- `35=D` 消息类型 `NewOrderSingle`
- `11=MY_ORDER_ID` 客户方订单 ID（clOrdID）
- `55=EURUSD` 品种
- `54=1` 方向 `1=Buy`
- `38=100000` 数量
- `40=2` 订单类型 `2=Limit`
- `44=1.17650` 限价
- `10=247` 校验和

**常见版本**
- FIX 4.2 — 最普及，外汇 / 股票机构都支持
- FIX 4.4 — 主流当前版本
- FIX 5.0 SP2 + FIXT 1.1 — 分离了 session 层（FIXT）和 app 层
- **FIX API 2.x / FIXML** — JSON-like 现代化尝试，普及度不高
- **SBE**（Simple Binary Encoding）— 二进制化 FIX，CME/IEX 等速度场合用

**谁在用**
- 股票 / 期货撮合交易所（NYSE / Nasdaq / CME / LSE / TSE）
- 外汇 ECN（EBS / Hotspot / Integral）
- Prime Broker（GS / JPM / MS / Citi）
- 零售券商对 LP 的上游链路几乎全 FIX
- 零售券商对零售**不**提供（机构合约才给）

**为啥还活着**
- 金融业网络效应最大：所有对手方都支持，改不掉
- 延迟可接受（手工调 TCP + no-delay 能到亚毫秒）
- 消息编码紧凑，适合高频场合
- 会话恢复机制成熟（Sequence Number、GapFill、ResendRequest）

**缺点**
- 文本解析有性能开销 → SBE 二进制版出现
- 每家券商的 "FIX 方言" 差异大（每个 custom tag、每个状态码要查）
- 新语言接入麻烦（Python 的 QuickFIX 包也不完全符合标准）

## MT4 / MT5 私有协议

**私有性**：MetaQuotes 不公开协议规范，即使你花钱买 license 部署了 server，也不会给你协议细节。

**破解难度**：逆向工程过（有过 Linux 开源尝试），但 server 会定期升级协议版本淘汰老客户端，抓包工具跟不上节奏。

**客户端的认证**：账号密码 + server 地址（比如 `OANDA-Demo-1`）。协议内部做 challenge-response 鉴权 + 会话加密。

**订单路径**：
```
MT5 终端
   ↓ （私有 TCP，443 端口或 443x 端口段）
MT5 Server
   ├─ 内部 OMS（订单簿 + 账户 + 风控 + 日志）
   └─ 网关（MT5 Server → LP 的 FIX 桥）
          ↓ FIX.4.4
       LP 池
```

MT5 server 自己就是个功能完整的小型交易系统，它只在**净暴露**部分把单子通过 FIX 送到 LP。

**协议内含的能力**：
- 订单管理（市价 / 限价 / 停损 / 跟踪止损）
- 账户查询
- 历史查询
- 行情订阅（tick-level push）
- **图表数据拉取**（K 线的 OHLC 存在 server 端，客户端按需拉）
- **EA 交易信号推送**（MT5 是 server-side 上传 EA 也支持）
- **管理接口**（broker 后台用的，风控规则推送等）

**这就是为啥不能简单用 HTTP 代替**——MT5 生态十几年沉淀了一堆协议级特性，改一个就断零售用户生态。

## REST + WebSocket

**零售加密所、OANDA 这类现代券商标准套装**。

典型设计：
- REST 用于**状态变更**（下单、撤单、改单、查询）
- WebSocket 用于**实时推送**（行情、成交流、账户更新）
- REST 签名：HMAC-SHA256 签名 query string / body，头部带时间戳防重放
- WebSocket 鉴权：HTTP upgrade 时 header 带 API Key 或发送 `auth` 消息

**为啥主流**
- HTTP / JSON 工具链覆盖所有编程语言
- 浏览器端原生支持（WebSocket），适合 PWA / Web App
- OpenAPI / Swagger 自动生成客户端 SDK
- Rate limit + API Key 模型适合零售自助发放

**权衡**
- 延迟比 FIX 高一个量级（几十 ms vs 几 ms）
- JSON 冗余（Binance 高频用户改走 Protobuf WS）
- 每家的签名 / 参数格式不统一（ccxt 等聚合库帮你屏蔽差异）

## gRPC

**相对新**的协议栈，加密所内部 + 部分数字券商对外开放。

- 基于 HTTP/2 + Protobuf
- 支持双向流、单向流、单次 RPC
- 比 JSON 小 3-10 倍，编解码快
- 但浏览器原生不支持（要 gRPC-Web 网关）

**谁用**
- Coinbase 的内部服务对外暴露
- Binance 机构 API 部分路径
- 加密基础设施公司 (Chainflip / Hyperliquid) 对外 RPC
- 传统券商极少（生态习惯太强）

## 选型决策树

```
要接入 FTMO / TopStep / 任何零售 MT5 broker？
  → MT5 协议（用 MT5 终端或 MetaApi 云桥）

要接入零售外汇但想绕开 MT5？
  → 换券商（OANDA v20 REST / IG REST / 盈透 TWS API）

要做 HFT 或机构规模？
  → FIX（和券商商合约，要 IP 白名单）
  → 或找券商的 SBE / custom binary 版本

要玩加密原生？
  → REST + WebSocket（Binance / OKX / Bybit）
  → 或 ccxt 统一抽象层

要做前端 Web App 直接挂订单？
  → REST + WebSocket（只能这个）
  → 或把单子 relay 通过你自己的后端（规避 CORS）
```

## FIX → REST → 聚合层的历史轨迹

```
1992  FIX 诞生，机构独享
2000  零售互联网券商起飞，MT4 登场垄断零售
2005+ FIX over SSL 标准化、MT4 全球扩张
2010  MT5 发布
2012+ 加密所全 REST + WS，完全跳过 FIX
2015+ ccxt / TradeClient 等聚合层出现，屏蔽各家差异
2020+ TradingView 做"多 broker 聚合"，用户在 TV 下单，后台路由到各家 broker API
2024+ Prop Firm 开始摸 DxTrade / cTrader API 替代 MT5
```

## 参考

- FIX Trading Community 官方规范 (fixtrading.org)
- QuickFIX 开源实现 + 文档
- MetaQuotes MT5 Server Administrator Manual
- ccxt GitHub readme（150+ 交易所 API 差异地图）
- Binance / OKX / Bybit 公开的 API 文档
- CME Globex FIX / SBE 接入文档

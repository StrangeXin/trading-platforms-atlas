# 零售券商典型架构

## 总览

```
 [交易员]
   ↓
 客户端（MT5 / cTrader / Web / 自研 app / 第三方 API 客户端）
   ↓ —— 协议层（FIX / REST / WS / MT5 私有协议）——
   ↓
 [券商 OMS 订单管理系统]
   ├─ 风控引擎（保证金、仓位上限、禁交易名单）
   ├─ 账户系统（余额、持仓、历史、入金出金）
   ├─ 报价分发（MD server / multicast）
   └─ 撮合路由（Routing Engine）
       ↓
     ┌──────┴──────┐
     ↓             ↓
 [内部 Dealer 池]  [流动性提供商 LP]
 （A-Book/B-Book） （Prime Broker, ECN, Bank Pool）
```

OMS（Order Management System）是大脑：收单 → 过风控 → 撮合 / 路由 → 写账户。
所有客户端最终都是让 OMS 做这几件事。"客户端如何和 OMS 对话"就是协议选择。

## 三种接入协议

### FIX（Financial Information eXchange）

- 1992 年摩根斯坦利 + 所罗门联合制定，金融业消息标准
- TCP 长连接 + 文本消息帧（`8=FIX.4.4|9=...|35=D|...`）
- 机构级标配：几乎所有大行 / ECN / Prime Broker 都支持
- 给机构 / 量化私募 / HFT / 白标合作伙伴——**不给零售**
- 券商要提供 FIX：通常接 FIX 引擎（QuickFIX / Onix / 自研）做 session 管理、消息路由、故障转移

**为啥给**：机构单量大、交易金额高、可以减少他们自己开发 MT5 EA 的摩擦。

### REST / WebSocket

- 现代券商（OANDA / IG / IB）、加密所（Binance / OKX / Kraken）、数字原生平台普遍提供
- HTTP + JSON 接口 `POST /v3/orders`、`GET /v3/positions` + WS 行情推送
- 后端通常是 HTTP Gateway → OMS 内部 RPC，包装 OMS 为 JSON API
- 零售友好：API Key 自助生成、文档公开、rate limit 而非白名单

**为啥给**：面向开发者市场（算法交易、机器人、跟单平台聚合）。门槛比 FIX 低得多。

### MT4 / MT5 私有协议

- MetaQuotes（俄罗斯公司）做的零售级终端 + 服务端套件
- 券商租 MetaQuotes 的 server license（一年几万美刀）→ 部署 MT5 server
- MT5 server 就是功能完整的 OMS + 撮合 + 风控 + 报价分发，券商只需配置 + 接 LP
- 协议是 MetaQuotes 私有二进制，**不公开**
- 客户用 MT5 Windows/Mac/iOS/Android 终端连上去

**为啥用**：交钥匙方案，省去自己写撮合 + 客户端。Prop Firm 几乎全线 MT5。

## 三种协议对比

| 维度 | FIX | REST/WS | MT5 私有协议 |
|---|---|---|---|
| 目标用户 | 机构 / 量化 | 零售开发者 | 零售终端用户 |
| 门槛 | 签协议 + 白名单 IP | 自助 API Key | 用 MT5 客户端 |
| 消息格式 | FIX 消息 | JSON | 二进制私有 |
| 连接方式 | TCP 长连接 | HTTP + WS | 持久化 TCP |
| 订阅行情 | MDRequest | WS subscribe | MT protocol subscribe |
| 公开文档 | 有标准 + 每家方言 | 有 | 无 |
| 第三方客户端 | QuickFIX / FIXT | fetch / ccxt / 官方 SDK | 必须 MT 终端或 MetaApi |
| 延迟 | 毫秒级 | 几十毫秒 | 几十毫秒 |

## A-Book / B-Book

**A-Book**（Straight-Through Processing, STP）—— 客户订单**直接路由到外部流动性**（LP、ECN、Bank Pool）。券商赚点差返佣 / commission。

**B-Book** —— 券商**自己做对手盘**，不把单子送出去。客户亏=券商赚。零售外汇里很普遍。

**混合 Book** —— 大部分零售券商真实操作：用风控规则把"信号好的客户"走 A-Book，把"频繁亏损的客户"留 B-Book。

MT5 server 的风控模块原生支持这种分流规则。这也是 MT 在零售外汇有统治地位的隐形原因：broker 能用它低成本做 B-Book 盈利。

## Prop Firm 的特殊性

Prop Firm（FTMO / TopStep / CryptoFundTrader 等）的商业模式：

1. 卖 "challenge" 报名费（$100-$1000）
2. 给用户一个模拟 MT5 账号
3. 用户在规则内完成目标（利润目标 + 风控限制）
4. 过关后签协议，用 Prop Firm 的"真实资金"交易，分利润 80/20 或 90/10

它们的技术栈几乎等于：**MT5 套件 + 规则引擎 + 结算系统 + 营销**。

- MT5 server 提供账户 / 撮合 / 日志
- 规则引擎读 MT5 日志做 EOD 清算（日亏损 / 最大回撤 / 交易日数）
- 用户端：MT5 终端 + Prop Firm 网站看面板

参见 `../02-platforms/ftmo.md` 等具体 Prop Firm 拆解。

## 和"做市商 vs 经纪商 vs 交易所"的关系

```
做市商（Market Maker）
  ↑ 提供流动性
[经纪商 Broker]—————接——————[交易所 Exchange / ECN]
  ↑ 对接零售用户                 ↑ 集中撮合多个做市商
[终端用户]
```

- **经纪商**：面对零售，提供账户 + 终端 + 入金出金，把单子送到交易所或做市商对冲
- **交易所**：集中撮合，不直接服务零售（有些加密所身兼两职）
- **做市商**：持续在交易所挂买卖报价，靠点差赚钱

零售 FX 特殊：大部分"货币对"没有集中交易所（FX 全球分散做市），券商扮演 OMS + 半个小型交易所。
加密相反：交易所直接面向零售，因为没有历史券商中间层。

## 参考

- CFTC 《Retail Foreign Exchange Transactions》2010 rule（监管定义）
- Finance Magnates 《FX Industry Directory》年度版
- MetaQuotes 官方 broker-onboarding 文档
- "A-Book vs B-Book" — InstaForex 2019 whitepaper
- BIS Triennial Survey（外汇市场规模）

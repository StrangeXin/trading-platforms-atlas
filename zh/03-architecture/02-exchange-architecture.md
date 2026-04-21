# 加密交易所典型架构

和传统券商架构最大不同：**交易所自己就是撮合方**，没有外部流动性提供商链条。这也是为啥加密原生平台可以绕过 MT5、自己吃撮合 + 做市 + 托管全栈的根本原因。

## 总览

```
 [终端用户]
   ↓（REST / WebSocket）
 [Gateway 层]
 - Auth（JWT / API Key / 签名验证）
 - Rate limit（per IP + per account）
 - Load balancer → 路由到地域节点
   ↓
 [核心撮合引擎 Matching Engine]
 - 订单簿 Order Book（内存中）
 - 撮合算法（Price-Time Priority）
 - 微秒级延迟
   ↓
 [账户 / 风控 / 清算]
 - 账户系统（余额、持仓、历史）
 - 实时风控（margin call、爆仓）
 - 清结算（T+0 完成）
   ↓
 [资产托管]
 - 热钱包（小额实时取款）
 - 冷钱包（多签，大额）
 - 保险基金
```

所有环节都是交易所**自己的代码**，不接外部 OMS。没有 MT5 那种"套件"——每家都自研。

## 撮合引擎

是性能心脏。设计要点：

- **全内存**：订单簿常驻 RAM，不走磁盘
- **单线程撮合**（Binance、CME 都如此）：保证撮合顺序严格确定，避免并发锁
- **异步落盘**：撮合后的 trade 流到 Kafka / 自研消息队列，后台消费者写数据库
- **Lock-free 队列**传递订单到撮合引擎
- **撮合速度**：Binance 现货引擎 ~1.4M TPS 峰值，延迟 <100μs

### 主流实现语言
- **Binance**：Java / C++ 混合。早期 Node.js 后来重写。
- **OKX**：C++ 为主
- **Coinbase**：Go
- **FTX (已倒闭)**：Rust，性能标杆
- **Kraken**：C++
- **CME Globex（传统期货）**：C++

### 订单类型
标配：
- Market / Limit
- Stop / Stop-Limit / Trailing Stop
- IOC / FOK / GTC
- Post-only
- Reduce-only（杠杆合约）

不标配但越来越普遍：
- Iceberg（冰山单，拆单减少市场冲击）
- TWAP / VWAP 算法单
- OCO（One-Cancels-Other，两个条件单互相取消）

## 做市机制

交易所自己不一定做市，但会**激励专业做市商**挂双边报价维持流动性：

- **返佣 Maker Fee < Taker Fee**：挂单的做市商拿返佣，吃单的支付更高 fee。差值就是做市商的微利空间
- **VIP 级别**：按 30 天交易量划分，顶级做市商 fee 可能 -0.002%（负数，真的收钱）
- **专业做市协议**：Jump Trading、Jane Street、Wintermute、GSR、Cumberland 等和交易所签 SLA 合约，承诺挂单深度 + 时长，换更深的返佣

### 做市 bot 是怎么挂单的
- 几十档双边报价
- 基于 Avellaneda-Stoikov 模型实时调整价差
- 头寸风险超限就收窄报价或撤单
- 拿对冲：A 交易所挂多单同时 B 交易所开空单锁利

## REST + WebSocket API

和 MT5 私有协议最大差异：**文档公开、零售开放、免费接入**。

### REST
典型端点：
```
POST   /api/v3/order          下单
DELETE /api/v3/order           撤单
GET    /api/v3/order           查订单
GET    /api/v3/openOrders      查所有挂单
GET    /api/v3/allOrders       查历史订单
GET    /api/v3/account         账户余额
POST   /api/v3/transfer        内部转账
```

签名：`HMAC-SHA256(queryString, secretKey)`。Rate limit：每分钟 N 次，用户级 + IP 级。

### WebSocket
- **行情订阅**：`wss://stream.binance.com/ws/btcusdt@ticker` → 推送 24h 统计
- **深度订阅**：`btcusdt@depth` → 增量订单簿更新（100ms 或 1000ms 刷新）
- **成交流**：`btcusdt@trade` → 每笔成交
- **用户数据**：`wss://stream.binance.com/ws/listenKey` → 订单成交、账户余额变化

零售算法交易的完整链路都可以用 WebSocket 实现，不需要 REST 轮询。这是加密赛道吸引算法交易者的硬核优势。

## 托管（Custody）

加密所和传统券商最大的架构差异就在这里：**交易所自己托管用户资产**。

### 热 / 冷钱包分层
- **热钱包**：私钥在线，签名实时进出。只存小比例（Binance 公开过 3% equity 在热钱包）
- **温钱包**：多签半自动，中等额度
- **冷钱包**：完全离线（air-gapped），多签，大额储备

### 保险基金 / SAFU
- **Binance SAFU**：每笔交易 fee 10% 入库，用于黑天鹅赔付（2019 年 Binance 被盗 7000 BTC 就是 SAFU 兜的）
- **FTX**：号称有保险基金，2022 暴雷后证明大部分是 FTT 自家币

### 审计
- **Proof-of-Reserves**：Merkle tree 方式证明交易所持有足够资产匹配用户余额（FTX 暴雷后兴起）
- 但这只证明**资产端**，不证明负债端；所以 PoR 有局限性

## 合约 / 永续 (Perpetual)

加密原创的衍生品（传统期货没有永续）。本质是**无到期日的期货**，通过 funding rate 让永续价格锚定现货：

```
funding_rate = clamp(premium_index × 8h window, -0.05%, +0.05%)
每 8h 结算一次：多头支付空头（若 funding > 0）
```

机制：
- 永续价格 > 现货 → funding 正数 → 多头付空头 → 多头吃亏 → 少人做多 → 价格回落
- 反之亦然

撮合引擎上和现货一样都是订单簿，但加了：
- 爆仓引擎（清算用户保证金不足的仓位）
- 自动减仓 ADL（保险基金兜不住时强制平盈利方）
- 标记价格（防针对性爆仓，取多个现货加权）

## 地域部署

- **全球分区**：亚洲主打 Binance（币安美国是独立实体避免 SEC）
- **Binance**：新加坡、迪拜、巴哈马多总部漂移中
- **Coinbase**：美国 SEC 注册，严监管
- **OKX**：塞舌尔 + 新加坡
- **ASIC（澳大利亚）、MAS（新加坡）、BaFin（德国）**监管牌照决定能在哪家国家开放

## 和券商 + 主经纪商的对比

| 维度 | 零售券商（MT5 / IB） | 加密交易所（Binance） |
|---|---|---|
| 撮合 | 外部（LP / ECN） | 内部（自营订单簿） |
| 托管 | 银行 / Prime Broker | 自己（热冷钱包） |
| 报价源 | Bank Pool | 内部订单簿 |
| Fee 结构 | 点差 + 佣金 | Maker/Taker + VIP |
| 清算 T+ | T+2（外汇）、T+1（股票） | T+0 实时 |
| 监管 | CFTC / FCA / ASIC（严） | 多法域 / 部分灰色 |
| API 普及 | 富人 / 机构 FIX，零售 MT 协议 | 零售全 REST/WS |
| 做市 | 外部做市商 | 外部做市 + 自营 |

## 参考

- Binance Academy "How Matching Engines Work"
- Jane Street "A Guide to Market Making"
- Crypto CEX post-mortems（FTX bankruptcy docket、Mt. Gox 法律文件）
- Messari / CoinGecko 交易所 Due Diligence 报告
- 《Algorithmic Trading and DMA》（Barry Johnson）—— 虽然写传统市场但撮合引擎章节通用

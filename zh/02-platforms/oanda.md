# OANDA：历史、v20 REST API 和当前状态

## 概览

OANDA 是加拿大 / 美国的 FX broker + 金融数据公司，1996 年成立。互联网时代最老的 FX broker 之一，在多个主要辖区受监管，以开发者友好的 API 著称。2025 年 12 月起 OANDA 归 **FTMO**（捷克 prop 交易公司）所有，FTMO 从 CVC Capital Partners 手中完成收购。

---

## 创立与历史

### 1996 —— 起源

OANDA **1996 年**由 **Richard Olsen** 和 **Michael Stumm** 创立（创立城市各家说法不同；最初在温哥华 / 纽约一带）。Olsen 是学院派经济学家，此前在做高频金融数据研究；OANDA 最初是一家外汇数据服务（"OANDA" = "on-demand data" 的缩写或变体）。

与同时代多数 FX broker 最大的区别：OANDA 起家是**数据提供商**，经纪业务是后来加的，这塑造了它的技术导向。公司早期最出名的是提供免费的精细历史 FX 数据——学术研究者和 quant 都很重视的资源。

### 2000 年代 —— fxTrade 平台

OANDA 自建了交易平台 **fxTrade**，特色是：
- 小数点后 5 位定价（行业标准 4 位）
- 无最低交易规模（可交易碎单位——想交易 $1 货币也行）
- 24/5 连续做市，有竞争力的点差
- 早期 REST API（v20 之前）给算法交易员

这种开发者友好的定位吸引了一批 quant / 算法交易员成为忠实客户。

### 2018 —— CVC Capital Partners 收购

**2018 年**：OANDA 被 **CVC Capital Partners**（欧洲私募）从之前股东手中收购。CVC 聚焦放大 OANDA 的数字平台、扩展持牌实体、升级技术栈。

CVC 旗下 OANDA 在这些地方建持牌实体和领导团队：
- 纽约（美）
- 多伦多（加）
- 伦敦（英——FCA 监管）
- 华沙（波）
- 新加坡（MAS 监管）
- 东京（日——FSA 监管）
- 悉尼（澳——ASIC 监管）

### 2025 年 12 月 —— FTMO 收购

**2025 年 12 月 1 日**：FTMO 完成从 CVC Asia Fund IV 收购 OANDA。

- 协议签约：2025 年初
- 需要的监管批准：**5 个辖区**（美、加、英、新加坡、澳 / 日子集）
- 交割用时：监管流程 **~8 个月**
- 交易金额：**未披露**

FTMO 通过 UniCredit 牵头的捷克银行 **$2.5 亿授信额度**融资。

FTMO 的战略逻辑：
1. OANDA 的 broker 牌照给 FTMO 全球合规基础设施
2. OANDA 的 CFTC 注册身份让 FTMO 能对美国 prop 交易员提供 MT5（FTMO 现在是唯一在美国提供 MT5 的 prop firm）
3. OANDA 全球客户基础（企业 FX、零售交易员）让 FTMO 营收超出 prop 交易费用

据 [FTMO 新闻稿](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/)："FTMO 计划让 OANDA 集团作为完全独立的业务继续运营。"

---

## v20 REST API

### 背景：v1 vs v20

OANDA 一直并行运营两个 API 版本：
- **旧版 v1（REST）**：最初的 API，仅"v1"老账户可用。仍可工作但已弃用。
- **v20（REST + 流）**：2016 年前后上线；为 OANDA 的"v20"交易引擎设计。所有新账户都是 v20。v1 账户只能用 v1 API。

v20 API 是现代、文档完善的 JSON-over-HTTPS REST API——不是 FIX——设计上任何程序员都能上手，不需要金融背景。

### 架构概览

v20 API 遵循 REST 惯例 + 流式扩展：

**Base URL**：`https://api-fxtrade.oanda.com/v3/`（实盘）/ `https://api-fxpractice.oanda.com/v3/`（模拟）

**鉴权**：Bearer token（OAuth 式个人访问 token，在 OANDA Web 界面生成）

**主要 API namespace**：

| Namespace | 用途 |
|-----------|---------|
| `/v3/accounts/{accountID}` | 账户详情、余额、保证金、NAV |
| `/v3/accounts/{accountID}/orders` | 创建 / 修改 / 撤销订单 |
| `/v3/accounts/{accountID}/trades` | 列出未平仓交易（持仓）；修改 SL/TP |
| `/v3/accounts/{accountID}/positions` | 按品种聚合仓位 |
| `/v3/accounts/{accountID}/transactions` | 交易历史、流水 |
| `/v3/accounts/{accountID}/pricing/stream` | 实时价格流（Server-Sent Events） |
| `/v3/instruments/{instrument}/candles` | 历史 OHLCV 数据 |
| `/v3/instruments/{instrument}/orderBook` | 订单簿快照 |
| `/v3/instruments/{instrument}/positionBook` | Position book（多 / 空占比） |

### 流式定价

一个与众不同的特性：OANDA 的 pricing 端点支持 **Server-Sent Events（SSE）** 流——持久 HTTP 连接实时推价：

```
GET /v3/accounts/{accountID}/pricing/stream?instruments=EUR_USD,GBP_USD
```

流推送 JSON 格式的 `PRICE` 事件（买 / 卖 / 可交易）和 `HEARTBEAT` 事件（保活）——任何通过 OANDA 做实时价格监控的应用都用这模式。

### 订单类型

OANDA v20 支持：
- **市价单**：按最优价立即执行
- **限价单**：按指定价或更好执行
- **止损单**：价格触达触发后执行
- **Market-if-touched（MIT）**：价格触达后按市价执行
- **Trailing stop**：跟随价格的动态止损

订单可附带 **Take Profit**、**Stop Loss**、**Trailing Stop Loss**。

### 品种命名约定

OANDA 用下划线分隔的品种名：`EUR_USD`、`GBP_JPY`、`XAU_USD`（黄金）、`SPX500_USD`（S&P 500 CFD）、`BCO_USD`（布伦特原油）、`BTC_USD`。

这在 TradingView 数据集成里有体现：OANDA 数据在 TradingView 里显示为 `OANDA:EURUSD`。

### Account Snapshot 模式

v20 API 推荐的一个关键设计模式：
1. 用一次 `GET /v3/accounts/{id}` 抓完整账户状态
2. 本地维护快照
3. 反复调用 `GET /v3/accounts/{id}/changes`（或流式）只拿增量变化

相比反复抓完整状态能省带宽和计算开销。

### 限速

OANDA v20 API 对有资金的账户免费使用。限速没有像 Binance 那样粒度化发布，但 OANDA 开发者指南说：
- 每账户 + 每 IP 有限制
- 重度轮询（比如每秒账户轮询）可能触发节流
- 行情数据推荐用流式端点而非反复 REST 轮询

### Position Book API（独特功能）

OANDA 发布 **Position Book**——对主要 FX 品种在其客户群中多头 vs 空头的占比百分比。主要 FX broker 中独一份，提供零售交易员持仓视角（常被用作反向情绪指标）。

---

## OANDA 技术定位

### 优势
1. **开发者友好 API**：文档完善、一致，提供 Python/Java/JavaScript SDK
2. **多辖区监管**：FCA、CFTC、ASIC、MAS、FSA——覆盖多数主要交易辖区
3. **数据基因**：作为数据提供商的长历史；OANDAfxData 历史上向研究者免费提供精细 tick 数据
4. **零售多为 NDD**：OANDA 对零售主要走 NDD（No Dealing Desk）
5. **碎股交易**：最低交易单位为 1 个基础货币单位（相对行业 1,000 单位微手）

### 劣势
1. **点差为主的定价**：OANDA 主要营收靠点差；对高成交量 FX 交易员不总是最紧（相对 IC Markets 这类 ECN broker）
2. **产品范围有限**：主要是外汇 + CFD；无股票直接持有、无期权
3. **历史上无 MT5**：OANDA 自建平台；MT5 现在通过 FTMO 集成可用
4. **股权转换风险**：FTMO 所有权是新的；prop firm 母公司下的战略走向待观察

---

## 可交易标的

OANDA 提供：
- **70+ 外汇对**（主要、次要、小币）
- **股指 CFD**：SPX500（S&P 500）、NAS100、DE30（DAX）等
- **商品**：黄金（XAU）、白银（XAG）、石油（WTI + 布伦特）
- **债券**：美国国债、英国 Gilts（有限）
- **加密 CFD**：BTC/USD、ETH/USD（价格敞口，非实际加密）

---

## 监管状态（FTMO 收购前）

| 辖区 | 监管机构 | 牌照类型 |
|-------------|-----------|-------------|
| 美国 | CFTC / NFA | 注册 FDM + RFED |
| 加拿大 | IIROC | Dealer Member |
| 英国 | FCA | 授权 |
| 新加坡 | MAS | 资本市场服务 |
| 日本 | JFSA | 一类金融工具业务 |
| 澳洲 | ASIC | Australian Financial Services |

这套多辖区监管足迹正是 FTMO 愿意溢价收购 OANDA 的原因——单独拿这些牌照要好几年。

---

*参考：[OANDA API 介绍](https://developer.oanda.com/rest-live-v20/introduction/)、[OANDA API 对比](https://developer.oanda.com/rest-live-v20/api-comparison/)、[FTMO OANDA 收购新闻稿](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/)、[GlobeNewswire FTMO 新闻稿](https://www.globenewswire.com/news-release/2025/12/02/3197594/0/en/FTMO-Building-Global-Trading-Powerhouse-Completes-Acquisition-of-OANDA-from-CVC.html)、[CVC OANDA 出售公告](https://www.cvc.com/media/news/2025/cvc-funds-agree-sale-of-oanda-to-ftmo/)、[PickMyTrade OANDA API 指南](https://blog.pickmytrade.trade/oanda-api-automated-forex-trading-rest-v20-guide-2025/)*

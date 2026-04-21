# TradingView：深挖

## 概览

TradingView 是 2011 年成立的云端看盘 + 社交交易平台。到 2025–2026 年大概是全球最广泛使用的金融看盘工具，注册用户 **6,000 万–1 亿**（不同来源数字不同，差异主要在"用户"和"账户"的定义）。服务对象涵盖零售交易员、专业分析师、机构投资者。

TradingView 的商业模式从看盘订阅服务演化成了 broker 集成市集——**100+ 认证 broker 合作伙伴**支持从 TradingView 图表直接下单。

---

## 创立与早期历史

### 2011 —— 注册

TradingView **2011 年**由 **Stan Bokov**、**Denis Globa**、**Constantin Ivanov** 创立，三人此前在软件开发上合作过。美国注册，办公室在纽约、马拉加（西班牙）、第比利斯（格鲁吉亚）、伦敦。

起家产品是云端看盘工具——在多数交易员还在用本地桌面软件（MT4、Ninja Trader）或重 Java Web 应用的时代很特别。TradingView 最早提供：
- 浏览器里跑的完整图表（WebGL 渲染）
- 通过 WebSocket 的实时流式行情
- 社交 "Publishing Ideas" 功能，交易员可以发带标注的图表分析

### 2013 —— TechStars + CME Group

TradingView 2013 年入选 **TechStars** 创业加速器，是关键节点：

- 早期机构可信度
- 签下 **Microsoft** 和 **CME Group** 数据合同（CME 提供期货行情）
- 首轮融资 ~$3.6M，包括 iTech Capital、Right Side Capital Management、Irish Angels

CME 数据合同尤其重要——让 TradingView 能拿实时期货数据给用户，不只是历史数据。

### 2018 —— A 轮 $37M + 收购 TradeIT

**2018 年 5 月**：TradingView 完成 **$3,700 万 A 轮**，**Insight Venture Partners** 领投。

同年 TradingView 收购了 **TradeIT**——一家搭过第三方平台和美国主要 broker（TD Ameritrade、E*TRADE、Interactive Brokers 等）订单路由集成的中间件公司。这次收购是 TradingView broker 集成野心的战略基石。

### 2021 —— $298M 融资，$30 亿估值

**2021 年 10 月**：TradingView 以 **$30 亿估值**融 **$2.98 亿**，来自：
- Tiger Global Management
- Insight Partners（跟投）
- 其他机构投资者

这轮让 TradingView 成为估值最高的私人 fintech 公司之一。估值基于其庞大用户基础、订阅收入增长、broker 集成的可选性。

### 2024 —— 新 CEO

**2024 年 1 月**：**Oleg Mukhanov** 出任 CEO。创始人转任执行董事长 / 董事会角色。

---

## Pine Script：TradingView 的脚本语言

### 起源与用途

**Pine Script** 是 TradingView 自有的 DSL 脚本语言，用来写自定义技术指标、振荡器、策略回测——全在 TradingView 云端基础设施上跑（不是用户本机）。

语言设计理念和 MQL5/MQL4 不同：
- **语法更简单**：接近 Python 而非 C++；对编程背景少的交易员友好
- **云执行**：所有 Pine Script 跑在 TradingView 服务器；不用本地终端
- **发布**：交易员可把脚本发到 TradingView 库；社区脚本所有用户可浏览

### 版本史

- **Pine Script v1–v2**（早期）：基础指标构造；范围有限
- **Pine Script v3**：引入函数、内置指标
- **Pine Script v4**：特性显著扩展；引入 `strategy()`（带佣金 / 滑点建模的策略回测）
- **Pine Script v5**（2021）：类型系统大改；性能 + IDE 优化
- **Pine Script v6**（2024 年 11 月）：加 enum、动态 `request.*` 调用、运行时日志、polyline、更严格的 bool 处理。据 [TradingView blog](https://www.tradingview.com/blog/en/pine-script-v6-has-landed-48830/)。

### 社区规模

- TradingView 上发布了 **15 万+ 社区脚本**，大约一半开源
- 据 [Pine Script Wizards 计划](https://www.tradingview.com/blog/en/pine-script-wizards-2024-42618/)，TradingView 每年评选顶级 Pine Script 开发者
- Pine Script 生态已经把 MQL4/MQL5 从基于图表的技术分析主脚本环境挤下去——哪怕那些用 MT4/MT5 下单的交易员也在转

---

## Broker 集成扩张

### 模式

TradingView broker 集成允许用户：
1. 通过安全 OAuth 或 API key 把 broker 账号连到 TradingView
2. 直接从 TradingView 图表界面下单、改单、撤单
3. 在 TradingView 图表上叠加看账户余额、持仓、P&L

UX 很吸引人：TradingView 的优秀看盘 + broker 的执行基础设施。对 broker 来说这是分发渠道——进 TradingView broker 目录就是暴露给 TradingView 巨大的用户群。

### 集成数量

到 2025–2026 年：**100+ 认证 broker 合作伙伴**支持直接订单执行集成（据 [BrokerChooser](https://brokerchooser.com/best-brokers/best-brokers-for-tradingview-in-the-united-states) 和 [TradingView 自家 broker 目录](https://www.tradingview.com/brokers/)）。

重要集成 broker 包括：
- **Interactive Brokers**（IBKR）：被多家评测站评为 2026 年美国最佳 TradingView broker；机构级流动性、全资产类覆盖
- **OANDA**：深度集成含流式价格数据；OANDA 标的在 TradingView 图表里带 `OANDA:` 前缀
- **Saxo Bank**：多资产 broker；外汇、股票、期货、期权都集成
- **IG Group**：完整 CFD、spread betting 集成
- **Binance**：直接从 TradingView 做加密现货 + 合约
- **Bybit**：加密衍生品
- **Coinbase Advanced**：加了 TradingView 集成（具体年份来源未确认）
- **tastytrade**：美国期权 broker
- **Webull**：美国零售股票
- **eToro**：社交交易 + 执行
- **AMP Futures**：从 TradingView 做期货
- **Capital.com**：CFD/外汇 broker；大力推 TradingView 集成

### DxTrade 集成

**Devexperts**（DxTrade 的开发商，很多 prop firm 在用）2023 年建立了 TradingView 后端集成（据 [DxTrade 新闻稿](https://dx.trade/news/press-releases/tradingview-and-devexperts-establish-the-dxtrade-backend-integration-to-support-broker-partners/)）。意味着用 DxTrade 的 prop firm 可以把 TradingView 当前端用——prop 交易的间接 TradingView 集成。

### 增长曲线

- 2018：~10 家集成 broker（限于 TradeIT 已有的连接）
- 2020：~30 家集成 broker
- 2023：~70 家集成 broker
- 2025–2026：**100+** 认证 broker 合作伙伴

行业预期，据 [Finance Magnates Top Platforms 2025](https://www.tradingview.com/news/financemagnates:75e0a89c5094b:0-top-trading-platforms-for-brokers-in-2025/)："未来几年大多数外汇和 CFD broker 都会集成 TradingView。"

---

## 市场份额和竞争位置

### 用户规模

不同来源给出不同数字（都合理，只是不同时间点或口径）：
- **5,000 万用户**：2022–2023 年常被引用
- **6,000 万用户**：多家 2024 年来源
- **1 亿用户**：部分 2025 年说法（可能包含不活跃注册账号）

2020 年 TradingView 按 Alexa 排名进入**全球前 130 大网站**——对一个细分金融工具是个惊人指标。

### 看盘标准

TradingView 在零售交易员中已经成了**事实看盘标准**，横跨：
- 外汇
- 加密（多数主要交易所都嵌 TradingView 图表：Binance、Coinbase、Kraken）
- 股票（Webull、Robinhood 和很多 broker app 嵌 TradingView 图表）
- 期货（通过 CME 数据源）

这种嵌入式图表策略和 TradingView.com 本身不同：TradingView 把图表 widget 授权给第三方，意味着除 TradingView.com 外几十个其他网站和 app 上都有 TradingView 图表视图。

### 订阅收入模式

TradingView 通过分层订阅变现：
- **免费**：有限指标、无回放、部分市场延迟数据
- **Essential/Plus**：更多并行图表、更多指标、日内数据
- **Premium/Ultimate**：全市场实时数据、优先支持、高级告警

订阅业务由 broker referral 费用补充（用户点击"trade"然后在集成 broker 开户时产生）。

---

## 技术架构

### 云优先设计

和 MT4/MT5（broker 自己部署的服务端软件）不同，TradingView 是**完全云托管**：
- 图表和 Pine Script 在 TradingView 服务器（AWS 基建）上执行
- 行情数据从交易所中心化接入，通过 WebSocket 再分发
- 无客户端重度计算——任何带浏览器的设备都能用完整功能

这是相对 MT4/MT5 在跨设备一致性和可达性上的根本架构优势，但意味着 TradingView 控制所有用户数据，且不能离线使用。

### 行情数据基础设施

TradingView 聚合几十个来源的数据：
- **CME Group**：期货数据（ES、NQ、GC 等）
- **CBOE**：期权数据
- **主要股票交易所**：NYSE、NASDAQ、LSE、Euronext 等，通过数据供应商合作
- **加密所**：直连 WebSocket 推送（Binance、Coinbase、Bybit、OKX 等）
- **外汇数据**：通过 broker 集成（OANDA、Saxo 等）+ 聚合外汇数据提供商

第三方集成里常见的 `OANDA:EURUSD` ticker 语法直接反映 TradingView 与 OANDA 的外汇定价数据合作。

---

## 战略位置（2025–2026）

TradingView 占的位置很独特：

1. **不是 broker**（多数辖区无交易执行监管义务）
2. **不是平台供应商**（不像 MetaQuotes 那样给 broker 授权服务端软件）
3. **一层看盘 + 社区 + 集成层**坐在执行基础设施之上

这种轻资产模式让 TradingView 能同时和很多 broker 合作（包括互为对手的）。战略风险：如果某大型 broker 做出有竞争力的看盘，或 MetaQuotes 大幅改进 MT5 图表，TradingView 的护城河可能被侵蚀。

当前护城河：**Pine Script 社区 + 社交发布生态**——网络效应难以复制。

---

*参考：[TradingView Wikipedia](https://en.wikipedia.org/wiki/TradingView)、[Pine Script v6 blog](https://www.tradingview.com/blog/en/pine-script-v6-has-landed-48830/)、[TradingView broker 集成页](https://www.tradingview.com/brokerage-integration/)、[BrokerChooser TradingView broker](https://brokerchooser.com/best-brokers/best-brokers-for-tradingview-in-the-united-states)、[ForexBrokers.com TradingView](https://www.forexbrokers.com/guides/tradingview-brokers)、[Finance Magnates 2025 Top Platforms](https://www.tradingview.com/news/financemagnates:75e0a89c5094b:0-top-trading-platforms-for-brokers-in-2025/)、[DxTrade TradingView 集成](https://dx.trade/news/press-releases/tradingview-and-devexperts-establish-the-dxtrade-backend-integration-to-support-broker-partners/)*

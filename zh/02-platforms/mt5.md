# MetaTrader 5 (MT5)：深挖

## 概览

MetaTrader 5 是 **MetaQuotes Software**（塞浦路斯 / 俄罗斯）的旗舰交易平台。多资产平台，覆盖外汇、CFD、股票、期货、债券。到 2026 年全球由"数百家"broker 持牌（MetaQuotes 未公开披露具体数字），服务数百万零售交易员。

MT5 既是全球装机量最大的零售交易平台，也是在承受 TradingView、cTrader 和大量新 broker 专有方案竞争压力的平台。

---

## 技术架构

### C/S 模型

MT5 基于**三层 C/S 架构**：

1. **客户端终端**（MetaTrader 5 Desktop/Web/Mobile）：面向交易员的应用。支持 Windows、macOS、iOS、Android 以及浏览器端 WebTerminal。

2. **Broker Server（MT5 Server 软件）**：MetaQuotes 授权给 broker 的后端。管理：
   - 交易执行（市价单、挂单、止损 / 止盈）
   - 账户管理（余额、净值、保证金计算）
   - 来自流动性提供商的报价
   - 风控（A-book/B-book 路由、margin call）
   - MetaTrader Signals 订阅
   - MQL5 Market（EA / 指标市集集成）

3. **MetaQuotes 服务器基础设施**：提供辅助服务——Signals 市集、MQL5 Market、MetaTrader Ping（连通性监控）、license 校验。

### MT5 协议

MT5 客户端和 broker server 之间用**专有二进制协议**走 TCP。协议未公开文档。关键特性：
- 加密（TLS，443 端口或自定义端口）
- 持久 session——客户端保持长连接
- 订阅式行情：客户端订阅特定品种；价格由服务器推送
- 订单命令同步：客户端发单 → 服务器回确认 / 拒绝

这个专有协议对 MetaQuotes 是重大竞争优势——造成锁定 + 让非 MetaQuotes 基础设施的互操作变难。broker 不能轻易换服务器同时保留 MT5 客户端。

### MQL5 语言

**MQL5** 是 MT5 的编程语言。语法类似 C++，支持：
- 面向对象（类、继承、多态）
- 多线程（Tester 里并行策略执行）
- 标准库含数据结构、数学函数、交易函数
- 通过 OrderSend()、OrderModify() 等直连市场
- 事件驱动编程模型（OnTick、OnTimer、OnTrade 等）

MQL5 能力比 MQL4 强得多，但学习曲线也更陡。MQL5.com 市集允许开发者卖 EA、指标、脚本。

### Strategy Tester

MT5 Strategy Tester 支持：
- **单通回测**：标准顺序历史模拟
- **多品种回测**：测试同时交易多品种的 EA
- **优化**：暴力或遗传算法参数优化，吃满 CPU 核或云 agent（MetaQuotes Cloud Network）
- **Forward 测试**：优化后的外样期验证
- **可视化**：回测时逐 tick 图表回放

能用所有 CPU 核做优化（相对 MT4 单线程 Tester）是 MT5 在算法交易员中被采用的一大动因。

### 市场深度（L2）

broker 提供时 MT5 显示 **Depth of Market（DOM）**。展示多个价位的买卖流动性——MT4 没有这个。对专业交易员和订单簿深度有意义的品种，这很重要。

---

## 授权模式

### 白标结构

MetaQuotes 通过两种主要结构授权 MT5：

**完整 MT5 Server License**：大型机构和主要 broker 直接从 MetaQuotes 拿完整服务器 license。定价未公开，但显著高于白标。

**白标**：预构建版 MT5 server，broker 可以：
- 用自己的 logo / 颜色重新品牌客户端终端
- 配置自己的品种、点差、杠杆
- 接自己的流动性提供商

公开白标定价（2024–2025 近似值）：
- 初装费：**$5,000**
- 月维护：**~$1,750/月**

据 [EBS FinTech 指南](https://www.ebsfintech.com/launching-your-mt5-white-label-in-2025-2026-the-real-end-to-end-guide/) 和 [Leverate](https://leverate.com/mt4-mt5-white-label/metatrader-5/)，成本在这个区间，具体数字按谈判而异。

**灰标（现已禁止）**：历史上部分 broker 把 MT5 基础设施子授权给 prop firm 或其他实体——这是 MetaQuotes 没认可的"grey label"安排。这就是 MetaQuotes 2024 年 2 月整肃的东西。

### 2025 Q1 停发新 MT4 license

MetaQuotes 2025 Q1 停止发放所有新 MT4 license。MT5 现在是 MetaQuotes 唯一给新 broker license 的产品。

---

## 主要客户（已知 MT5 持牌方）

MetaQuotes 不公开客户列表。以下 broker 基于公开信息已知是 MT5 持牌方：

### 大成交量零售 broker
- **Exness**：全球最大成交量 FX broker 之一；大力推 MT5
- **XM Group**：196 国 2000 万+ 客户；描述为每天处理 ~1400 万笔交易
- **IC Markets**：连续六年（2021–2026）被 ForexBrokers.com 评为第一 MetaTrader broker；零售 broker 中 MT5 全球成交量最高
- **Pepperstone**：澳洲主要 broker；MT5 成交量领先
- **FP Markets**：澳洲 ECN broker；重度 MT5 用户群
- **AvaTrade**：多辖区 broker；MT5 业务强
- **RoboForex**：MT5 上多种账户类型

### 受监管传统 broker
- **Dukascopy**：瑞士银行；在自有 JForex 之外提供 MT5
- **Saxo Bank**：在 SaxoTraderGO 之外有 MT5
- **OANDA**（已被 FTMO 收购）：通过 TradingView 和直接 MT5 终端提供 MT5

### 整肃后用 MT5 的 prop firm
2024 年整肃后大多数 prop firm 失去 MetaTrader 访问。到 2025–2026：
- **FTMO**：通过收购 OANDA，唯一对美国客户提供 MT5 的 prop firm
- 部分离岸持牌的 prop firm 在非美国辖区重新获得 MT5 访问

---

## 批评

### 1. 专有锁定

没文档的二进制协议意味着交易员的 EA、脚本、数据都锁在 MetaQuotes 基础设施里。broker 不能从 MT5 换到 cTrader 而不逼所有客户迁移 EA 和学新平台。这在 MetaQuotes 视角是特性，在行业视角是批评。

### 2. 便于欺诈

MT5 的白标模式让开个欺诈 broker 变得简单。骗子花 $5,000–$20,000 拿 MT5 白标访问，就能拿出一个看起来很专业的交易平台。很多"杀猪盘"加密 / FX 骗局（2020–2023）用的就是 MT5 作平台。这对 2022 年 9 月 Apple App Store 下架有贡献。

MetaQuotes 近年引入了更严格的 broker 审核，但批评者认为伤害已经造成。

### 3. 执行不透明

MT5 本身不告诉交易员订单是在 A-book（真实市场）还是 B-book（broker 作对手）模式下执行。cTrader 相反，设计时就把 ECN/STP 透明度做卖点。这是底层架构差异，在信任透明度维度让 MT5 吃亏。

### 4. MT4 遗产碎片化

MT4 和 MT5 不向后兼容（脚本语言不同、架构不同）意味着很多 broker 两个平台都得维护，支持碎片化。行业的 MT4→MT5 迁移跑了十多年，至今未完。

### 5. 俄罗斯所有权和地缘政治风险

MetaQuotes 的俄罗斯运营背景带来持续的地缘政治风险。2022 年 App Store 下架证明这不是理论。把整个平台栈建在 MetaQuotes 基础设施上的 broker，暴露于影响 MetaQuotes 运营能力的监管或地缘事件。

到 2026 年，无公开披露表明 MetaQuotes 把研发运营搬出俄罗斯。

### 6. 复杂标的资产类支持有限

MT5 对香草外汇、CFD、期货处理得不错。期权和结构化产品处理得弱；多数机构期权台不会把 MT5 作为主平台。加密衍生品（永续、期权）要么缺失要么处理得别扭。

---

## MT5 vs 对手（简表）

| 平台 | 主要强项 | MT5 威胁级别 |
|----------|-----------------|-----------------|
| TradingView | 图表 + 社交 + broker 集成 | 高（增长中） |
| cTrader | ECN 透明度、DOM、300+ broker | 中（增长中） |
| NinjaTrader | 期货 / 算法深度 | 低（不同赛道） |
| DxTrade | prop firm 专属；浏览器原生 | 中（prop 市场） |
| MatchTrader | prop firm 专属；移动优先 | 中（prop 市场） |
| Bloomberg Terminal | 机构分析 | 无（不同市场） |

---

*参考：[MetaQuotes 公司](https://www.metaquotes.net/en/company)、[MT5 Brokers 页](https://www.metatrader5.com/en/brokers)、[ForexBrokers.com MT5 指南](https://www.forexbrokers.com/guides/metatrader-5-brokers)、[EBS FinTech 白标指南](https://www.ebsfintech.com/launching-your-mt5-white-label-in-2025-2026-the-real-end-to-end-guide/)、[B2Broker MT5 vs cTrader](https://b2broker.com/news/mt5-vs-ctrader/)、[Finance Magnates MetaQuotes prop firm 整肃](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/)、[MT4 Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)*

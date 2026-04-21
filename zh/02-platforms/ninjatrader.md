# NinjaTrader

## 概览

NinjaTrader 是美国的期货交易平台 + broker，2003 年在科罗拉多丹佛成立。美国零售期货交易员的主导平台，也是主要期货 prop firm（TopStep、Apex Trader Funding、Earn2Trade）的核心界面。2025 年 5 月加密所 Kraken（通过母公司 Payward Inc.）以 $15 亿收购 NinjaTrader——史上最大的传统金融 + 加密结合交易。

---

## 历史与创立

**NinjaTrader** 2003 年由 **Raymond Deux** 在科罗拉多丹佛创立。公司起家是纯软件运营，给期货和股票交易员提供高级图表和交易管理工具。

关键节点：
- **2003**：Raymond Deux 在丹佛创立
- **2005**：NinjaScript 推出——基于 C# 的开放交易开发框架
- **2009**：NinjaTrader Brokerage 上线，公司在软件平台之外直接提供经纪服务
- **2012**：NinjaTrader 7 成为零售期货行业标准
- **2016**：NinjaTrader 8 发布——大型架构重构；.NET 4.5、更好的多线程、性能优化
- **2019**：TopStep、Apex、Earn2Trade 等期货 prop firm 正式把 NT8 作为主平台
- **2020–2023**：成为美国零售期货 prop 交易的主导平台；Rithmic 数据源集成成为标准
- **2025 年 3 月 20 日**：Kraken 宣布 $15 亿收购 NinjaTrader
- **2025 年 5 月 2 日**：收购交割；NinjaTrader 在 Kraken/Payward 组合里作为独立平台运营
- **2025 年底**：NinjaTrader 推出 "NinjaTrader Connect"——期货和预测市场的 B2B 白标基础设施

公司总部后来从丹佛搬到**伊利诺伊州芝加哥**，离 CME Group 和期货行业聚集地更近。

---

## 平台架构

NinjaTrader 8（NT8）是多平台应用，桌面（主打 Windows）、Web、移动端都有。

### 核心组件

| 组件 | 描述 |
|---|---|
| **Charts** | 高级图表，100+ 内置指标，多周期 + 多品种 |
| **Market Analyzer** | 可扫描的品种列表，自定义列和条件 |
| **Order Flow+** | Order flow 分析插件（footprint 图、volume profile、VWAP） |
| **Level II (DOM)** | 完整市场深度窗口；最优买卖阶梯 + 每级成交量 |
| **Strategy Analyzer** | 回测 + 优化引擎 |
| **Trade Performance** | P&L 报表、交易统计、equity curve |
| **ATM Strategies** | Automated Trade Management——预设止损 / 止盈规则 |

### ATM Strategies

ATM（Automated Trade Management）是 NinjaTrader 在 prop 交易场景中最常用的特性之一：
- 入场前把止损、止盈目标、移动止损作为模板定义好
- 订单成交后自动应用——不用手动放止损
- 多种 ATM 类型：标准、MBT（多重括号）、自定义
- 对在严格回撤规则下操作的 prop firm 交易员关键——它在订单层面机械执行风险上限

### NinjaScript（C#）

NinjaScript 是 NinjaTrader 基于 C# 的自有开发框架：
- 完整访问平台所有数据（K 线、订单、仓位、账户）
- 两种模式：**Strategies**（自动执行）和 **Indicators**（仅视觉 / 信号）
- 平台内用 .NET 编译；也支持外部 IDE（Visual Studio）
- 庞大的第三方插件生态；几十家商业 NinjaScript 开发者
- 策略可在模拟或实盘运行；实盘需要 broker 连接

---

## L2 市场深度

NinjaTrader 的 Level II 窗口提供：
- 完整订单簿阶梯（每个价位的买卖数量）
- 价位历史成交量（DOM 里 footprint 风格）
- Time and Sales 集成
- 可自定义阶梯外观 + 热键下单

在 prop 期货场景里，交易员用 L2 识别吸筹模式、冰山单、流动性失衡，尤其在 ES（S&P 500 期货）、NQ（Nasdaq 期货）、CL（原油）这类流动性好的 CME 品种上。

---

## 经纪与清算

**NinjaTrader Brokerage** 是 CFTC 注册的 **Introducing Broker（IB）**。清算走 NinjaTrader Clearing, LLC，注册 Futures Commission Merchant（FCM）。经纪业务提供：

- 佣金结构：微型期货通常 $0.09/合约，标准合约也有竞争力
- 通过 CME Globex 直连 CME、CBOT、NYMEX、COMEX
- 按交易所最低要求的保证金
- 开户门槛：相对机构级 FCM 较低

Kraken 收购后，公司把 NinjaTrader 的 FCM 牌照定位为让 Kraken 在 CFTC 监督下向美国客户提供加密期货和衍生品的载体。

---

## Rithmic 数据源集成

在 prop 交易生态里，NinjaTrader 主要通过 **Rithmic** 连接——美国期货 prop firm 的行业标准数据源和路由基础设施。Rithmic 提供：

- 到 CME Globex 的超低延迟订单路由
- 带准确历史成交价的实时 tick 数据
- 账户管理 API（prop firm 用来监控回撤）
- TopStep、Apex、Earn2Trade、TradeDay 都跑在 Rithmic 基础设施上

prop firm 交易员拿到出资账号时会获得直接接入 NinjaTrader 8 的 Rithmic 凭据。

---

## Prop Firm 集成

NinjaTrader 在美国期货 prop firm 里是最常见的平台：

| Firm | NinjaTrader 集成 |
|---|---|
| **TopStep** | 官方通过 Rithmic 集成；Trading Combine 主平台 |
| **Apex Trader Funding** | NT8 通过 Rithmic；注册时送免费 NT license |
| **Earn2Trade** | Gauntlet Mini 评估用 NT8 + Rithmic 凭据 |
| **Uprofit** | 官方支持 |
| **Elite Trader Funding** | 官方支持 |
| **TradeDay** | 基于 Rithmic 的 NT8 集成 |

Quantower 是一个替代平台，部分 prop firm（含 TopStep）加为第二选项，但 NinjaTrader 仍是众数选择。

---

## Kraken 收购（2025）

**宣布**：2025 年 3 月 20 日  
**交割**：2025 年 5 月 2 日  
**价格**：$15 亿  
**收购方**：Payward Inc.（Kraken 母公司）

Architect Partners 把它描述为"史上最大传统金融 + 加密结合交易"（[Architect Partners 分析](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)）。收购给 Kraken 平台带来约 200 万用户，让 Payward 的日均交易数涨 119%。

战略逻辑：
- NinjaTrader 的 CFTC 注册 FCM 牌照让 Kraken 能提供美国合规加密期货
- Kraken 获得零售期货受众；NinjaTrader 获得加密产品能力
- 两家公司的核心人群都是专业零售交易员

收购后 NinjaTrader 推出 **NinjaTrader Connect**——B2B 基础设施平台，让 fintech 和交易平台通过 API 提供合规期货和预测市场，不需要自己的 FCM 牌照。

2026 年 4 月 Payward 还宣布以 $5.5 亿收购数字资产衍生品交易所 **Bitnomial**，和 NinjaTrader + Kraken 一起扩展衍生品基础设施。

---

## 授权模式

NinjaTrader 三档授权：

| 档位 | 成本 | 功能 |
|---|---|---|
| **免费** | $0 | 实时模拟、实盘（有限）、基础图表 |
| **租赁** | ~$33/月 | 完整平台功能、NinjaScript、实时策略 |
| **终身** | ~$1,099 一次性 | 永久 license、全部功能 |

prop firm 账号（Apex、Earn2Trade 等）常在开户时提供免费或折扣 NT license。

---

## 当前状态（2025–2026）

- 在 Kraken/Payward 组合里作独立平台运营
- 芝加哥 HQ；CFTC 注册为 IB 和 FCM
- 活跃开发：移动端改进、NinjaTrader Connect B2B 产品
- 美国核心零售期货交易平台市场份额仍强
- 和 Kraken 平台的加密集成在 roadmap 上
- 无公开财报（私人公司，Payward 未上市）

---

## 参考

- [NinjaTrader Wikipedia](https://en.wikipedia.org/wiki/NinjaTrader)
- [Kraken — 收购公告](https://blog.kraken.com/news/kraken-to-acquire-ninjatrader)
- [Architect Partners — $15 亿收购分析](https://architectpartners.com/kraken-acquires-ninjatrader-for-1-5b-the-largest-ever-bridge-deal/)
- [NinjaTrader — Level II 文档](https://ninjatrader.com/support/helpGuides/nt8/level_ii.htm)
- [NinjaTrader — 市场深度博客](https://ninjatrader.com/futures/blogs/observe-market-depth-with-the-level-ii-window/)
- [Vetted Prop Firms — 2026 年使用 NinjaTrader 的 prop firm](https://vettedpropfirms.com/prop-firms-that-use-ninjatrader/)
- [TopStepTrader 评测 — 平台详解](https://marksinsights.com/topstep/)
- [FX News Group — NinjaTrader Connect 上线](https://fxnewsgroup.com/forex-news/platforms/kraken-launches-ninjatrader-connect-platform-for-prediction-markets/)
- [CoinDesk — Bitnomial 收购](https://www.coindesk.com/business/2026/04/17/kraken-s-parent-company-payward-to-acquire-derivatives-exchange-bitnomial-for-usd550-million-in-cash-and-stock)

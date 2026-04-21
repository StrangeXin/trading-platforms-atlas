# cTrader

## 概览

cTrader 是塞浦路斯 fintech 公司 Spotware Systems 开发的零售 + 机构交易平台。在 FX/CFD broker 赛道上是 MT5 主要竞争对手。2023–2024 年 MetaQuotes 对 prop 行业未授权 MT4/MT5 部署开展整肃后，cTrader 作为替代平台获得显著增长。

---

## 历史与创立

**Spotware Systems** 2010 年在塞浦路斯利马索尔由 Andrey Pavlov 和 Ilya Holeu 创立。公司从一开始就宣称使命是"Traders First"——明确瞄准 MetaTrader 生态在定价透明度和订单执行方面的不满。

cTrader 首个公开版本 **2011 年 4 月**发布，首发 broker 是 FxPro。FxPro 至今和该平台紧密绑定，历史上把 cTrader 作为相对 MT4 主导对手的核心差异点。2011 年底 cAlgo（算法交易模块）也发布。

关键节点：
- **2011**：cTrader 1.0 上线；FxPro 首家 broker
- **2011**：cAlgo 发布（C# 脚本环境，自动化策略）
- **2013–2016**：broker 渐进采用；IC Markets 和 Pepperstone 在 MT4 之外加 cTrader
- **2019**：cTrader Copy 作为集成跟单产品上线
- **2022–2023**："cAlgo" 改名 "cTrader Automate"，平台品牌刷新
- **2024**：MetaQuotes 终止多家 prop firm 的 license → 大规模 prop firm 迁移到 cTrader
- **2025**：cTrader 5.4 为 cBot 和指标原生支持 Python——零售平台第一家

---

## 平台架构

cTrader 是一套相互连接的应用：

| 组件 | 描述 |
|---|---|
| **cTrader Desktop** | Windows 桌面应用；主界面 |
| **cTrader Web** | 浏览器端，免安装 |
| **cTrader Mobile** | iOS 和 Android |
| **cTrader Automate** | 算法交易模块（原 cAlgo） |
| **cTrader Copy** | 原生集成跟单基础设施 |

### 技术栈
- 平台核心 C#/.NET
- cBot（自动策略）用 C#；5.4 版（2025）加 Python 支持
- broker / LP 端走 FIX 协议实时连接
- Spotware 提供 cBridge：把 cTrader 桥接到 MT4、MT5、FIX API 流动性

### Level II 订单簿（DOM）
cTrader 原生暴露 Depth of Market（DOM）——完整 L2 报价，显示每个价位的 bid/ask 量。这是相对裸 MT4 的关键差异点——MT4 不给零售用户 DOM。跑 ECN/STP 配置的 broker 能把真实银行间深度透传给 cTrader 客户端。

---

## cTrader Automate（原 cAlgo）

cTrader Automate 是集成的算法交易环境：

- **语言**：C#（主）；5.4 版（2025）加 Python
- **IDE**：内嵌 cTrader Desktop；基础开发不用外部 IDE
- **cBots**：实时或回测模式执行的自动策略
- **指标**：自定义技术指标，可通过 cTrader 公共库共享
- **回测器**：基于历史数据的 tick 级回测
- **优化器**：内置基于遗传算法的策略优化

Python 加入被定位为"主流零售交易平台首个原生 Python 环境"，意在把开发者基础从 C# 玩家扩出去。

---

## cTrader Copy

cTrader Copy 是原生集成跟单产品，不是第三方叠加层：

- 策略提供者自己定订阅费和分润结构
- 投资者在 cTrader 内部直接浏览、订阅策略
- 跟单自动化；不需要人工介入
- 支持百分比和固定手数模式
- Pelican Network（第三方基础设施）和 cTrader Copy 集成，给 IC Markets、Deriv、Pepperstone 这类 broker 用（据 [FX News Group](https://fxnewsgroup.com/forex-news/platforms/ctrader-integrates-with-copy-trading-infrastructure-provider-pelican-network/)）

---

## Spotware Connect（白标）

Spotware 提供白标项目 **Spotware Connect**，让 broker 能部署自己品牌的 cTrader：

- **固定租金**或按成交量计价
- broker 保留完整品牌；cTrader 品牌可选
- 白标可以无限地再分发子白标给自己的 IB 合作伙伴
- B2BROKER 2024 年推出专门的 cTrader 白标 prop 交易方案，瞄准 prop firm 市场

这套白标基础设施让 2023–2024 年 MetaQuotes 撤销 license 时，prop firm 能快速迁过来。

---

## 提供 cTrader 的主要 broker

2025 年提供 cTrader 的主要 broker：

| Broker | 监管 | 备注 |
|---|---|---|
| **IC Markets** | ASIC、CySEC、FSA | 成交量最大的 ECN broker 之一；cTrader 上 raw spread 定价 |
| **Pepperstone** | FCA、ASIC、DFSA、BaFin | 完整 cTrader 套件（含 Copy）；澳 / 欧市场强 |
| **FxPro** | FCA、CySEC、FSCA、SCB | 2011 年首发伙伴；深度集成 |
| **Spotware** | — | Spotware 在 ct.spotware.com 跑自己的 demo/live 环境 |
| **Fusion Markets** | ASIC | 澳洲低成本 broker；cTrader 为主平台 |
| **Vantage** | ASIC、FCA | 在 MT4/MT5 之外加 cTrader |

---

## 2023–2025：Prop Firm 迁移

近年 cTrader 增长最大的驱动是 2023–2024 年**MetaQuotes 执法**：

- MetaQuotes 终止了一批跑 demo 模拟挑战但没有正规授权的 prop firm 的 MT4/MT5 白标 license
- prop firm 急需替代品；cTrader 白标基础设施成熟可用
- FundedNext、The5ers 等多家 prop firm 把 cTrader 加为平台选项
- 同期 Match-Trader（竞品平台）也抢到份额
- B2BROKER 针对需求推出专门的 cTrader prop trading 方案
- Voyage Markets 作为 cTrader 白标 prop firm 基础设施分销商上线

这波迁移让 cTrader 的装机量实打实从传统零售 FX broker 扩到了 prop 交易行业。

---

## vs MT5 竞争定位

| 维度 | cTrader | MetaTrader 5 |
|---|---|---|
| 脚本语言 | C#、Python（5.4+） | MQL5 |
| DOM / L2 | 原生 | 通过插件 |
| 透明度 | 亲 ECN，无 requote 设计 | 默认 dealer 模式 |
| 跟单 | 原生集成 | 需要第三方信号服务 |
| 白标模式 | Spotware Connect | MetaQuotes 直授 |
| 市集 | cTrader 社区库 | MetaTrader Market（付费） |
| 移动 | iOS / Android | iOS / Android |
| Prop firm 支持 | 专门 B2B 产品 | 非专门设计 |

cTrader 架构更适合要暴露真实市场深度的 ECN/STP broker。MT5 在整体装机量上因网络效应 + 庞大的 MQL5 开发者群仍占主导。

---

## 技术与 API 访问

- **FIX 协议**：broker/LP 层通过 cBridge 支持
- **cTrader Open API**：REST/WebSocket API 给第三方应用；外部系统可下单、读账户、订阅行情
- **cTrader Automate API**：本地策略开发的 C#/Python 库
- 没有给终端零售用户的原生 FIX API（不像 IBKR 或 Dukascopy）

---

## 当前状态（2025–2026）

- Spotware 仍是私人持股，未公开股权披露
- cTrader 继续全球扩张 broker 网络
- 5.4 版的 Python 脚本是面向开发者的重大新特性
- prop firm 白标需求持续是增长动能
- 截至 2026 年 4 月无已确认的并购或投资披露

---

## 参考

- [ForexBrokers.com — Best cTrader Brokers 2026](https://www.forexbrokers.com/guides/best-ctrader-brokers)
- [Spotware — FxPro becomes first cTrader broker](https://www.spotware.com/news/fxpro-becomes-the-first-broker-to-offer-ctrader/)
- [Spotware — cTrader 产品页](https://www.spotware.com/ctrader/)
- [TradeTheDay — cTrader Ultimate Guide 2026](https://tradetheday.com/platforms/ctrader)
- [Myfxbook — Trading with cTrader 2026](https://www.myfxbook.com/articles/trading-with-ctrader-everything-you-need-to-know-in-2025/7)
- [B2BROKER — cTrader 白标 prop 方案](https://b2broker.com/news/b2broker-launches-ctrader-white-label-prop-trading-solution/)
- [FX News Group — cTrader / Pelican Network](https://fxnewsgroup.com/forex-news/platforms/ctrader-integrates-with-copy-trading-infrastructure-provider-pelican-network/)
- [TradingView News — Prop firm MetaQuotes 迁移](https://www.tradingview.com/news/financemagnates:f8c595249094b:0-prop-trading-firms-renaissance-cutting-us-clients-integrating-new-trading-platforms/)

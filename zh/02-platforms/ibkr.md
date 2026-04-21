# Interactive Brokers (IBKR)

## 概览

Interactive Brokers（NASDAQ：IBKR）是全球最大的电子经纪商之一，覆盖 33 国 150+ 市场的股票、期权、期货、外汇、债券、基金等。由 Thomas Peterffy 创立，他至今仍是董事长兼最大股东。IBKR 以机构级技术、低成本定价、广泛的全球市场准入著称，通过 Trader Workstation（TWS）和多种 API 方式服务零售、专业、机构客户。

---

## 历史与创立

**Thomas Peterffy**（1944 年 9 月 30 日生）匈牙利裔美国亿万富翁，1965 年移民美国。他 1977 年买下美国证券交易所（AMEX）的一个席位，作为个体做市商交易股票期权，职业生涯由此开始。

关键节点：

- **1977**：Peterffy 买 AMEX 席位；作为个体期权做市商起步
- **1978**：成立 T.P. & Co.
- **1982**：公司改名 Timber Hill Inc.
- **1983**：Timber Hill 造出第一批交易所场内手持交易电脑
- **1987**：Peterffy 搭出第一套全自动算法交易系统——自动生成 + 自动递交订单到市场
- **1993**：Interactive Brokers 成立，把全球交易处理能力连到新的电子交易所
- **1990 年代末**：Trader Workstation（TWS）作为零售 / 专业主界面上线
- **2007**：在 NASDAQ IPO，股票代码 IBKR（2007-05-04）；Peterffy 保留多数控制权
- **2019**：Peterffy 辞任 CEO（保留董事长）；Milan Galik 接任 CEO
- **2020–2024**：持续全球扩张；IBKR GlobalTrader 移动 app 上线；碎股、ESG 工具加入
- **2021**：IBKR Desktop 上线（现代化原生桌面应用，与老 TWS 并存）
- **2024–2026**：按资产和客户量仍是全球最大在线经纪商之一

截至 2026 年，Peterffy 仍是 Interactive Brokers Group 的**董事长和最大个人股东**。

---

## 公司架构

- **母公司**：Interactive Brokers Group, Inc.（NASDAQ：IBKR）
- **运营子公司**：Interactive Brokers LLC（美国）、IBKR UK、IBKR Ireland、IBKR Canada、IBKR Japan、IBKR Hong Kong、IBKR Singapore、IBKR Australia 等
- **监管**：SEC、FINRA、FCA、MAS、ASIC、IIROC 以及各运营辖区的国家监管
- **员工**：全球 ~3,000+（据 2024 年披露）
- **上市**：NASDAQ：IBKR；Peterffy 通过 IBG LLC 持多数经济权益

---

## 交易平台

### Trader Workstation（TWS）

TWS 是 IBKR 旗舰交易应用，两种模式：

**TWS Classic**：功能密集的桌面应用；专业 + 活跃交易员首选
- 实时报价、图表、期权链、订单管理
- 单一界面支持所有资产类
- 布局高度可定制
- 支持 Windows、macOS、Linux（基于 Java）

**TWS Mosaic**：简化的拖拽式工作区，给不那么熟手的用户
- UI 比 Classic 现代
- 底层数据和订单路由相同

**IBKR Desktop**：2021 年前后推出的更新原生桌面应用，作为 TWS Classic 的轻量替代；多数功能支持，但还不是完整替代。

### Client Portal

浏览器端 Web 界面：
- 账户管理、交易历史、报表
- 基础下单
- 可连 Client Portal REST API 做程序化账户管理
- 免安装

### IBKR Mobile

iOS + Android 应用：
- 下单、组合监控、期权交易
- 内含 IBKR GlobalTrader，移动端体验更简化

### IBKR GlobalTrader

2021 年前后上线的简化移动端 app，面向零售用户；支持基础股票 / ETF 交易，开户体验比 TWS 干净。

---

## API 访问

IBKR 提供多种程序化访问方式，是全球 API 能力最强的零售 broker：

### TWS API（基于 socket）
- TCP socket 连接；要跑 TWS 或 IB Gateway
- 支持：Python、Java、C++、C#、VB.NET
- 完整订单管理、实时数据、账户查询
- IBKR Lite 账号**不可用**——仅限 Pro
- 文档：[TWS API](https://interactivebrokers.github.io/tws-api/)

### Client Portal REST API（Web API）
- RESTful HTTP 接口；不需要 TWS 实例（走 IBKR 云网关）
- 订单、组合、账户、行情端点
- 两层 session：只读 portal session + 下单用的 brokerage session
- 限速比 TWS API 严；更适合 Web / 云端应用

### FIX API
- 行业标准 FIX 4.2/4.4 协议
- 给机构客户 + 高频 / 自动化交易
- 直连市场路由；低延迟
- 要机构账号审批

### IBKR Campus / 文档
- 综合文档中心 interactivebrokers.com/campus
- 含教程、代码示例、API 参考

---

## IBKR Lite vs IBKR Pro

| 特性 | IBKR Lite | IBKR Pro |
|---|---|---|
| 美股 / ETF 交易 | 免佣 | 按股或按单定价 |
| 期权 | $0.65/合约 | 分档（高成交量最低 $0.15） |
| API 访问 | 无 | 完整（TWS API、FIX、REST） |
| 订单路由 | 订单流付费（PFOF） | 智能路由 / 直连路由 |
| 融资利率 | 标准 | 分档——业内最低之一 |
| 可用范围 | 仅美国零售 | 全球 |
| 目标用户 | 被动零售 | 活跃交易员、专业人士 |

**IBKR Pro** 定价对算法交易员和高成交量用户很关键。IBKR 的融资利率（通常以联邦基金利率为基准）远低于多数零售 broker——对杠杆交易是关键优势。

**IBKR Lite** 2019 年推出，对抗 Robinhood 这类免佣对手；用 PFOF 变现订单流，Pro 不用 PFOF。

---

## 市场准入和资产类

一个 IBKR 账号就能覆盖：

- **股票**：33 国 135+ 交易所；碎股
- **期权**：美国和国际期权市场；IBKR 期权分析工具口碑好
- **期货**：CME、CBOT、NYMEX、ICE、Eurex 等；美国 + 国际
- **外汇**：23+ 货币对；现货 + 远期；银行间级点差
- **债券**：美国国债、公司债、市政债、国际政府债
- **基金**：共同基金、ETF
- **加密**：部分加密币种给合格客户（按地区监管）

---

## 定价模式

IBKR Pro 用基于月成交量的分档定价：
- 股票：$0.0005–$0.005/股（按月成交股数分档）
- 期权：$0.15–$0.65/合约（按月合约数分档）
- 期货：$0.25–$0.85/合约，按品种
- 外汇：$0.08–$0.20 每 1,000 单位货币（在银行间点差之上加佣金）

这个模式主要对活跃交易员划算。被动、低频零售账户通常用 IBKR Lite 或其他零佣 broker 更好。

---

## 智能订单路由（SMART）

IBKR 的 **SMART** 路由算法：
- 跨多个交易所路由以寻求最佳执行
- 考虑价格、速度、各场地的 rebate/费用结构
- 客户可覆盖改为直连特定交易所
- Pro 上可用；Lite 用 PFOF 路由，不优先交易所 rebate

---

## 机构服务

**IBKR Prime** / **Prime Services**：融券、组合保证金、机构报表

**IBKR Clients' Marketplace**：第三方服务集成（分析、研究、数据）

**对冲基金 / 家办方案**：多账户管理、子账户层级、分配

---

## 关键财务和规模（据 2024–2025 披露）

- 客户账户：~300 万+
- 客户权益：$500B+
- 日均交易数（DART）：~200 万+
- 净营收：年度 ~$4B+（2024 报告）
- Peterffy 持多数经济权益（因公司结构不是完全多数投票权，但经济所有权占主导）

---

## 2023–2026 重要进展

- **2023**：IBKR 扩展国际市场加密服务；继续以融资利率竞争
- **2024**：IBKR Desktop 作为 TWS 现代替代逐步成熟
- **2025**：持续 API 优化；REST API（Web API v1.0）文档升级
- **2026 年 4 月**：按客户资产仍是全球前三大在线经纪商之一

---

## 竞争地位

IBKR 的护城河是这几样组合：
1. 零售最低的融资利率
2. 最全面的全球市场准入
3. 零售 broker 里最强的程序化 API 套件
4. 通过 SMART 路由（Pro）的真实 DMA + 价格改进

劣势：历史上复杂的用户体验（TWS 学习曲线陡）、对被动零售投资者吸引力有限——这群人用 Robinhood、Fidelity 或 Schwab 更简单。

---

## 参考

- [Interactive Brokers — About 和历史](https://www.interactivebrokers.com/en/general/about/info-and-history.php)
- [Thomas Peterffy — Wikipedia](https://en.wikipedia.org/wiki/Thomas_Peterffy)
- [Interactive Brokers — Wikipedia](https://en.wikipedia.org/wiki/Interactive_Brokers)
- [IBKR API — 主页](https://www.interactivebrokers.com/campus/ibkr-api-page/ibkr-api-home/)
- [IBKR — TWS API 文档](https://interactivebrokers.github.io/tws-api/)
- [IBKR — Client Portal REST API](https://www.interactivebrokers.com/campus/ibkr-api-page/cpapi-v1/)
- [IBKR — API 入门](https://www.interactivebrokers.com/campus/ibkr-api-page/getting-started/)

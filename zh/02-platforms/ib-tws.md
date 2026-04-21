# Interactive Brokers (IBKR) + TWS 平台

## 概览

- **公司**：Interactive Brokers Group（NASDAQ:IBKR）
- **成立**：1978 由匈牙利裔美国数学家 **Thomas Peterffy** 创立
- **控股**：Peterffy 本人仍持有 ~70% 股权（2026），是美国金融业控股最集中的上市公司之一
- **市值**：~$60-70B（2026 Q1）
- **业务覆盖**：全球 150+ 市场、26 种货币、200+ 国家开户
- **资产类**：股票、期权、期货、外汇、债券、基金、加密（有限）

## 为什么值得单独深入

IB 是**极少数同时满足"零售开放 + 机构级架构 + 自研技术栈"三重标签**的经纪商。大部分同级别同行（高盛 / 摩根）不对零售开放，大部分零售经纪（Robinhood / eToro）技术不到机构级。

## 旗舰客户端

### Trader Workstation (TWS)
- 桌面软件，Java 写（跨平台）
- 1999 年发布至今一直迭代
- **UI 被诟病复杂**（一屏 10 个窗口是常态）
- 但功能深度无出其右：期权链、算法订单、多市场聚合

### IBKR Mobile
- iOS / Android 原生
- 简化了 TWS 的复杂度，适合移动端下单

### IBKR Desktop (2023 新)
- 现代化桌面 app（React + Electron）
- 面向年轻用户简化 TWS
- 功能还在扩充中

### Client Portal Web
- 浏览器端
- 功能比 TWS 少，适合看持仓 / 基本交易

## API 生态

IB 是开发者最爱的经纪之一，因为**API 完整且免费**：

### TWS API
- 通过 TWS 中转（TWS 必须开着 + 登录状态）
- Python / Java / C# / C++ 官方 SDK
- 局限：客户端必须运行

### FIX CTCI
- 机构级 FIX 接入
- 需要 IB 手动授权 + $1,500/月
- 延迟最低

### Client Portal API (REST)
- 新一代 REST API
- 不需要 TWS 后台
- 2019 后主推，适合 serverless / 云部署

### 第三方封装
- **ib_insync**（Python，异步友好）— 民间最流行
- **IBridgePy**, **pyalgotrade**, **zipline** 等量化库都支持 IB

## 业务模式

IB 定位"低成本 + 高透明"：
- **IBKR Lite**（2019 后）：零佣金股票交易，for 零售
- **IBKR Pro**：每股 $0.0035 佣金（最低 $0.35），for 机构 + 量化 + 重度用户
- 融资融券利率是全行业最低（Pro 客户 ~BM + 0.75%）
- 外汇点差：interbank + 微薄 markup

这种成本结构带来 40%+ 的净利润率（2023 年报），远超行业平均。

## 技术架构特点

### 智能订单路由 IB SmartRouting
- 每个股票订单扫描 100+ 交易所 / 暗池寻找最优价格
- 实时拆分订单以最小化市场冲击
- 零售版 Lite 客户默认使用（同时也是 payment-for-order-flow 模式——IB 从做市商收回佣，但成本不转嫁给客户）

### 全球账户
- 一个账户登录全球所有市场
- 持仓可以跨币种（做空日股同时持有美股）
- 保证金跨资产共享（Portfolio Margin）

### 机构级清算
- 自研清算系统
- 直接接入主要交易所（不走第三方清算会员）

## 客户画像

- 经验交易员（10+ 年）
- 量化程序员 / 算法策略
- 家族办公室 + 小型对冲基金
- 跨境资产管理需求的高净值

IB 从不是零售新手的第一选择——UI 劝退。但成为"严肃交易员"迟早会换到 IB。

## 关键数字（2024 年报）

| 指标 | 数值 |
|---|---|
| 总客户账户数 | ~2.6M（2025 Q2）|
| 日均订单量 | ~3M（2024）|
| 客户总股本 | $460B+ |
| 总营收 | $4.9B（2024）|
| 净利润 | $2.1B |
| 员工数 | ~3000 |

## Thomas Peterffy 的传奇

- 匈牙利逃亡到美国（1965）
- 1977 在 AMEX 做个人交易员
- **1983** 发明了第一个交易算法（在 AMEX 地板用 NEC 打印机作为指挥系统）
- **1987** 创立 Timber Hill（做市商业务，后成为 IB 母公司业务的一部分）
- **1993** 创立 Interactive Brokers（经纪业务）
- 2007 带 IB IPO
- **仍担任董事长**（2026）—— 年近 80 不退

## 参考

- [Interactive Brokers 官网](https://www.interactivebrokers.com/)
- [SEC 10-K Annual Report](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001381197)
- 《The Front Lines of Brokerage》2018 Peterffy 访谈
- IBKR Campus（教学门户）

# Dukascopy Bank

## 概览

Dukascopy Bank SA 是瑞士注册的银行 + 零售外汇 / CFD broker，受 FINMA（瑞士金融市场监管局）监管，同时持银行和证券交易商牌照。1998 年由 Andrey Duka 博士带头的一群物理学家创立，总部日内瓦，另在里加（拉脱维亚）和香港设办公室。Dukascopy 运营 **SWFX — Swiss FX Marketplace**，这是一个自有 ECN，把零售交易员连接到来自 20+ 家主要银行的银行间流动性池。自有交易平台 **JForex** 是基于 Java 的交易环境——在零售 broker 里很少见。Dukascopy 提供 FIX API、WebSocket API、REST API 和 JForex API，是最具 API 能力的零售 FX/CFD broker 之一。

---

## 历史与创立

Dukascopy 项目 **1998 年**由 **Andrey Duka 博士**带头的一群物理学家和数学家启动。他们的使命是把数学和"经济物理学"手段用到金融市场建模，并围绕这些模型搭交易基础设施。

关键节点：

- **1998**：Dukascopy 项目启动；初期聚焦数学建模和 FX 执行基础设施
- **2004**：Dukascopy Bank SA 正式成立，由 FINMA 作为银行监管
- **2004–2007**：SWFX Swiss FX Marketplace 开发上线——自有 ECN 聚合银行间流动性
- **2007–2010**：JForex 交易平台开发完成并部署给零售 + 机构客户
- **2010**：JForex API 发布，可用 Java 写算法策略
- **2013**：Dukascopy Europe IBS AS 在拉脱维亚拿到持牌投资经纪资质（与瑞士银行分开的欧洲实体）
- **2015–2016**：加入 REST API 和 WebSocket API，把 API 访问扩到 JForex 的 Java SDK 之外
- **2019**：JForex 4 发布——下一代版本，250+ 技术指标 + UI 优化
- **2024**：条款更新（2024 年 8 月）；Dukascopy 参加 iFX EXPO Dubai（2024 年 1 月）；日内瓦、里加、香港持续运营
- **2025–2026**：持续运营；截至 2026 年 4 月无披露的并购或股权变动

---

## 公司架构

- **法律名称**：Dukascopy Bank SA
- **注册地**：瑞士日内瓦
- **监管**：FINMA（瑞士金融市场监管局）——同时持银行 + 证券交易商牌照
- **办公室**：日内瓦（HQ）、里加、香港
- **欧洲实体**：Dukascopy Europe IBS AS（拉脱维亚；受金融与资本市场委员会监管）
- **创始人**：Andrey Duka 博士
- **所有权**：私人持股；截至 2024 年无公开股东披露

---

## 为啥银行牌照重要

大多数零售 FX broker 是作为投资公司或 MSB 受监管——不是银行。Dukascopy 持 FINMA 发的**瑞士银行牌照**，要求高得多：

- 最低资本要求（完整银行牌照 ~CHF 10M+）
- 客户存款享受瑞士存款保险（esisuisse）保护
- 可以在经纪业务之外做私人银行和信托服务
- 监管力度比 CySEC、IFSC 等辖区严得多

这让 Dukascopy 成了个特别的实体：真正的瑞士银行同时做零售外汇和 CFD broker。这和那些只是通过子公司或关联方"挂个瑞士银行牌照名头"的公司不一样。

---

## 产品与服务

### 零售 FX / CFD 交易

- 外汇：60+ 货币对
- 商品：黄金、白银、石油等
- 股指：主要美、欧、英、亚洲股指 CFD
- 债券：部分政府债 CFD
- 加密货币：比特币、以太坊和部分加密 CFD；也有部分现货加密账户

### SWFX Swiss FX Marketplace

Dukascopy 的旗舰流动性基础设施：
- 自有 ECN（电子通信网络）
- 通过 FIX API 连接 **20+ 家主要银行**——提供深度银行间 FX 流动性池
- 市场参与者：银行、对冲基金、机构交易员、零售客户（通过 Dukascopy 和 Dukascopy Europe）
- L2 订单簿对客户可见——每个价位的完整买卖深度
- 所有交易自动执行；无交易员台；无 requote（按 Dukascopy 政策）
- 最低点差：EUR/USD 在流动性高峰可到 0.1 pip

SWFX 结构是 Dukascopy 讲自己的 ECN 模式时所指的东西。不像那些只是把单条通道路由给一个 LP 的 MT4 "ECN" broker，SWFX 是真正的多银行流动性池 + 真实 L2 深度。

### Dukascopy TV

Dukascopy 自办的实时财经电视频道：
- 市场评论、分析师访谈、经济数据覆盖
- dukascopy.com 免费观看
- 对一家 broker 而言是不常见的产品投入；意在把 Dukascopy 品牌做成金融信息源

### 历史 tick 数据

Dukascopy 向公众免费提供大约从 2003 年至今的 FX tick 级历史数据：
- 通过 JForex 平台或直接下载
- 格式：`.bi5` 压缩二进制；每品种每小时一个文件
- 量化研究者和学术界广泛使用
- 多个开源回测库（Backtrader、Zipline 等）内置 Dukascopy 数据导入器
- 在零售 FX broker 里这个数据资源的深度和可达性是独一份

---

## JForex 平台

JForex 是 Dukascopy 自有交易平台——基于 **Java 的桌面应用**：

- 支持：Windows、macOS、Linux（Java 运行时；跨平台）
- 还有：JForex Web（浏览器端）、JForex Mobile（iOS/Android）
- 250+ 技术指标（JForex 4）
- 完整订单簿 / DOM 访问（SWFX L2 深度）
- 内置 Java 策略开发
- 用 SWFX 历史 tick 数据回测

**为啥用 Java？**

JForex 是唯一主流零售交易平台把 Java 作为主技术。对比之下：
- MetaTrader（C++ 引擎、MQL 脚本）
- cTrader（C# 平台和脚本）
- NinjaTrader（C# / .NET）

Java 的优势：真正跨平台（Windows/macOS/Linux 不用单独编译）、成熟的企业级库、易于和机构级 Java 金融系统集成。

劣势：同等硬件下 Java Swing UI 比原生 C++ 或 C# 实现偏重、偏慢。

---

## API 访问

Dukascopy 提供四层 API——比大多数零售 broker 多：

### JForex API（Java）

- 策略开发的主 API
- 访问平台所有数据：K 线、tick、订单、账户、新闻
- 两种模式：**服务端**（跑在 Dukascopy 服务器）和**客户端**（本地跑，通过 JForex 连接）
- 文档：[JForex API Javadoc](https://www.dukascopy.com/client/javadoc/)

### FIX API（FIX 4.4）

- 行业标准 FIX 4.4 协议
- 用于接收实时数据、下单、修改 / 撤单、接收成交确认
- 通过 Dukascopy Europe 实体提供
- 给用 FIX 的机构客户和自动化交易系统

### REST API

- 基于 HTTP 的 REST API，账户管理 + 基础订单操作
- 完整度不及 JForex API；适合简单集成

### WebSocket API

- 实时数据推送（价格、订单更新）
- 比 JForex 或 FIX 更适合 Web / 移动应用开发

---

## vs 其他带 API 的 FX broker 的竞争位置

| 维度 | Dukascopy | IBKR | OANDA |
|---|---|---|---|
| 平台类型 | Java（JForex） | Java（TWS） | MT4/MT5 + REST |
| L2 可见 | 是（SWFX） | 是（TWS） | 否（零售） |
| FIX API | 是 | 是 | 否 |
| 历史 tick 数据 | 免费公开 | 付费 | 有限 |
| 银行牌照 | 瑞士 FINMA 银行 | 美国 broker-dealer | 无 |
| 地理重心 | 瑞士 / 欧洲 / 全球 | 全球 | 全球 |
| 最低入金 | ~$1,000 | $0（Lite） | $0 |

---

## 监管实体

| 实体 | 监管 | 辖区 |
|---|---|---|
| Dukascopy Bank SA | FINMA（银行 + 证券交易商） | 瑞士 |
| Dukascopy Europe IBS AS | 金融与资本市场委员会 | 拉脱维亚（欧盟） |

两个实体让 Dukascopy 能按瑞士银行监管服务瑞士居民、按欧盟 MiFID II 服务欧盟居民。

---

## 规模和当前状态

2024–2026 年情况：
- 2024 年文档更新和 iFX EXPO 参会确认业务仍在运营
- 客户数未公开披露；比头部零售 broker（IBKR、IG Group、Pepperstone）小
- 估计主要服务专业 / 半机构零售交易员、量化交易员，以及想要瑞士银行保护的客户
- 截至 2026 年 4 月无披露的并购、融资或股权变动

---

## 参考

- [Dukascopy Bank — 公司页](https://www.dukascopy.bank/company/)
- [Dukascopy Bank — Wikipedia](https://en.wikipedia.org/wiki/Dukascopy_Bank)
- [Dukascopy — About ECN Broker](https://www.dukascopy.com/swiss/english/about/company/)
- [Dukascopy Europe — FIX API](https://www.dukascopy.com/europe/english/forex/api/fix-api/)
- [Dukascopy Europe — JForex API](https://www.dukascopy.com/europe/english/forex/api/jforex-api/)
- [Dukascopy — FINMA 证券交易商牌照新闻](https://www.dukascopy.com/swiss/english/about/ournews/securities-dealer-license/)
- [TradingPedia — Dukascopy Review 2026](https://www.tradingpedia.com/forex-brokers/dukascopy/)
- [The Banks EU — Dukascopy Bank SA 资料](https://thebanks.eu/banks/9711)
- [Arincen — Dukascopy Review 2026](https://en.arincen.com/companies/Dukascopy)

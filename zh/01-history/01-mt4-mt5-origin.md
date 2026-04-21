# MetaQuotes 与 MetaTrader 家族：从起源到现在

## 公司创立

MetaQuotes Software Corporation **2000 年**在俄罗斯喀山由 **Renat Fatkhullin**（俄罗斯软件创业者）创立。首款产品是 **FX Charts**——Web 版零售 FX 看盘应用，在 2000 年那个互联网交易萌芽期算真正的新品。

据 [WikiFX 的 MetaQuotes 史料](https://www.wikifx.com/en/newsdetail/202209282994685243.html) 和 [MetaQuotes 官方公司页](https://www.metaquotes.net/en/company)，Fatkhullin 至今仍是 CEO，也是公司对外的脸面。Fatkhullin 之外的受益所有权结构没公开（见 `04-relationships/01-ownership.md`）。

公司走的是双司法辖区结构：
- **研发 + 技术支持**：俄罗斯喀山
- **销售、市场、法律主体**：塞浦路斯利马索尔（MetaQuotes Ltd，塞浦路斯注册公司）

---

## 产品演进：MetaTrader 1 到 3

### MetaTrader（MT1/MT2/MT3）—— 2002–2004

MetaQuotes 在 2000 年代初连续发了几版交易终端：

- **2001**：MetaQuotes 应用第二次大改，可交易标的从外汇对扩到 CFD。
- **2002 年初**：**MetaTrader 3** 发布——加期货合约，脚本语言升到 MQL II，客户端可以搞基础算法交易。
- **2003**：**MetaTrader CE**（Windows CE）和 **MetaTrader for Palm** 发布——比智能机时代早三年做移动交易。

这几版奠定了 MetaQuotes 的套路：迭代比对手快 + 客户端脚本能力是核心差异点。

---

## MetaTrader 4（MT4）—— 2005 上线

### 发布日期

**2005 年 7 月 1 日。** MT4 是彻底重写，不是增量升级。

### 关键技术创新

1. **MQL4 语言**：专门设计的 C 风格脚本语言，让 Expert Advisors（EA）——自动交易机器人——能直接跑在客户端终端上，还能对着 Strategy Tester 回测。
2. **Strategy Tester**：内置数据源的历史回测，让零售交易员也能搞算法开发。
3. **全新 C/S 架构**：重新设计的协议，broker 服务端通信更稳。
4. **图表 + 指标**：多周期图表 + 内置技术指标库 + 可用 MQL4 写自定义指标。

### 网络效应

MT4 催生了巨型生态：
- 论坛（后来的 MQL5 Marketplace）上成千上万的 EA 和指标
- 整整一代零售交易员是从 MT4 学起的
- broker 之间比的是 MT4 点差和服务器质量，不是平台质量
- 据 [LiteFinance 的 MT4 历史](https://www.litefinance.org/blog/for-beginners/what-is-metatrader/)，MT4 成为之后 15 年零售 FX 的统治级平台

### 市场渗透

2000 年代末 MT4 已经是事实标准。几乎所有零售 FX broker 要么直接 license MT4、要么挂 white-label。竞品（Currenex、ActForex 等）都撬不动它，原因是：
- 交易员学习成本为零——跨 broker 的社区知识可直接迁移
- MetaQuotes 定价克制（$5,000 初装 + ~$1,750/月/white-label）
- 没有像样的开源替代品

---

## MetaTrader 5（MT5）—— 2010 上线

### 发布日期

**2010 年 6 月 1 日。** MT5 又是彻底重构，与 MT4 不向后兼容。

### 和 MT4 的差异

| 特性 | MT4 | MT5 |
|---------|-----|-----|
| 资产类 | 外汇、CFD | 外汇、CFD、股票、期货、债券、加密 |
| 脚本语言 | MQL4 | MQL5（C++ 风格，OOP，更快） |
| 订单执行 | 市价 / 挂单 | 市价 / 挂单 + DOM |
| 回测 | 单线程 | 多线程（吃满 CPU 核） |
| 订单计账 | 可选 FIFO | 同时支持 hedging 和 netting |
| 盘口深度 | 不支持 | 支持（L2 显示） |
| 经济日历 | 无 | 内置 |

### MT4 为什么和 MT5 并存了这么多年

MT5 早期推广被监管问题拖累：
- 美国 CFTC 当时的 FIFO 规则让 MT5 的 hedging 模式在美国 broker 那里很敏感
- MQL4 → MQL5 迁移成本不低；EA 开发者得从头重写
- broker 已经有 MT4 server 基础设施，不愿意再花钱搭并行 MT5
- 据 [HandWiki MT5 词条](https://handwiki.org/wiki/Software:MetaTrader_5)："投资了 MT4 基建的 broker 抗拒迁移超过十年"

### MT5 渐进式普及

2015–2020 年 MT5 普及提速，原因：
- MT5 从 FX 扩到股票和期货，对多资产 broker 变得有吸引力
- 新入局的 broker 默认直接上 MT5（没有 MT4 历史包袱）
- MetaQuotes 开始限制发新 MT4 license（2025 Q1 正式定案）

在 FTMO 内部，**MT5 客户数 2020–2024 涨了 15 倍以上**（据 [FTMO 平台数据](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)）。

---

## MetaTrader Mobile

智能手机时代开始后 MetaQuotes 就一直维护 MT4 / MT5 的 iOS 和 Android app。2020 年代初它们是全球下载量最高的金融类 app 之一。

### 2022 年 App Store 下架事件

**2022 年 9 月 23 日**：Apple 悄悄把 MT4 和 MT5 从全球 App Store 下架。

Apple 没给过正式解释。行业猜测集中在两个方向：

1. **俄罗斯制裁关联**：MetaQuotes 虽然注册在塞浦路斯，运营核心在俄罗斯。2022 年 2 月俄罗斯入侵乌克兰后，西方制裁施压。社交媒体 [@awongaw](https://twitter.com/awongaw/status/1573435877610618880)（引用业内消息）发帖称："MetaQuotes 由 CEO Renat Fatkhullin 掌舵。公司在塞浦路斯，直接对接俄罗斯。欧盟在考虑封禁。"

2. **涉嫌欺诈关联**：MetaTrader 平台被大量用在投资诈骗（"杀猪盘"）里。Apple App Store 反欺诈团队可能在回应用户投诉——FP Markets 等 broker 在教育文章里抛出过这个理论。

**MetaQuotes 官方回应**："我们不认为 Apple 的动作和西方对俄制裁有任何关联。"

Android（Google Play）版本全程没受影响。

**2023 年 3 月**：差不多 6 个月后，Apple 重新上架 MT4 和 MT5。MetaQuotes 没公开解释发生了啥变化。据 [Mirage News](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)，重新上架低调进行，没任何通告。

---

## MetaQuotes 2024 年 Prop Firm 整肃

（详见 `01-history/05-prop-firm-rise.md` 和 `05-trends/01-metaquotes-v-tradingview.md`）

**2024 年 2 月**：MetaQuotes 开始系统性砍掉那些给 prop firm 做 grey-label 的 broker 的 MT4/MT5 license——尤其是服务美国客户的那些。

关键节点：
- **2024-02-06**：True Forex Funds（匈牙利）丢 license；CEO 说"MetaQuotes 事先没给任何警告"。
- **2024-02-11**：Purple Trading 终止多家 prop firm 客户。
- **2024-02-14**：Blackbull Markets 终止 Funding Pips。CEO Anish Lal："我们不幸违反了 grey label license 不能用于 prop firm 的条款，所以被迫立即关停 Funding Pips。"

据 Finance Magnates 数据，MetaTrader 在 prop firm 市场的份额 9 个月内从 **48% 跌到 24%**。

---

## MT4 走向 EOL —— 2025

**2025 Q1**：MetaQuotes 停止发放所有新 MT4 license。新的 broker 合作伙伴或 white-label 供应商不能再上 MT4；存量持牌方继续用。

**2025 年 7 月 1 日**：MetaQuotes 停止支持 MT4 和 MT5 旧版本。跑旧 build 的桌面终端失去 broker 连接。最低 build 要求：
- MT4：Build 1440（2025-02-21 发布）
- MT5：Build 4755（2024-12-13 发布）

据 [Finance Magnates](https://www.financemagnates.com/forex/metaquotes-to-end-support-for-older-metatrader-versions-in-december/)，业内普遍把这理解为 MetaQuotes 开始慢慢关停 MT4、把投入集中到 MT5。

---

## 当前状态（2026）

- **MT4**：几百家 broker 还在用；不发新 license；只有安全补丁，无新特性。
- **MT5**：MetaQuotes 主打产品；全球"数百家"broker 持牌（具体数字未披露）；持续特性更新。
- **MQL5 Marketplace**：MetaQuotes 自有应用商店，卖上千个商业 EA、指标、脚本。
- **MetaQuotes 所有权**：Renat Fatkhullin 确认是 CEO，也至少是主要受益所有人。完整股权结构未公开。公司法律主体在塞浦路斯；研发仍在俄罗斯。
- **美国市场**：MetaQuotes 限制美国 prop firm 客户访问 MT5/MT4。FTMO 在 2025 年 12 月收购 OANDA 后重返美国市场，拿到合法把 MT5 带回美国的监管通道。

---

## MetaQuotes 授权模式（简表）

| 档位 | 成本（大致） | 谁用 |
|------|-------------------|-------------|
| White Label MT5 | $5,000 初装 + $1,750/月 | 中型零售 broker |
| 完整 MT5 server license | 高得多，因客户而异 | 大型 broker、银行 |
| Grey Label（通过 white-label broker） | 含在 broker 成本里，和 MetaQuotes 无直接关系 | 历史上 prop firm 走这条路 |

Grey label 就是 MetaQuotes 2024 年整肃的那种：prop firm 通过某个持牌 broker 接入 MetaTrader 基础设施，和 MetaQuotes 没直接关系、也不直接付钱给 MetaQuotes。

---

*参考：[MetaQuotes 公司页](https://www.metaquotes.net/en/company)、[MetaTrader 4 Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)、[HandWiki MT5](https://handwiki.org/wiki/Software:MetaTrader_5)、[ValiantCEO MetaQuotes 历史](https://valiantceo.com/a-brief-history-of-metaquotes-and-its-products/)、[WikiFX 报道](https://www.wikifx.com/en/newsdetail/202209282994685243.html)、[Finance Magnates MetaQuotes 整肃](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/)、[FX News Group True Forex Funds](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)、[Mirage News App Store 重新上架](https://www.miragenews.com/apple-reinstates-metatrader-mt4-mt5-on-app-store-961954/)*

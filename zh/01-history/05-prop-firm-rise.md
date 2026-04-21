# 零售 Prop Firm 的崛起（和洗牌）

## "零售 Prop Firm" 是啥

这里说的零售自营交易公司和华尔街传统 prop desk 不一样。模式是：

1. 交易员付一笔**挑战费**（通常 $50–$600）做一次模拟交易评估。
2. 通过的（在不违反回撤规则下达到盈利目标）——公司"出资"给一个模拟实盘账号，名义规模一般 $25K–$400K。
3. 交易员操作这个账号；盈利分成（一般 70–90% 归交易员，10–30% 归公司）。
4. 公司主要赚**挑战费**（大多数交易员挂掉）；其次赚通过者的分润。

这不是传统 prop trading（公司拿自己的钱交给熟手员工去做）。更像一种技能变现服务 + 在做得好的情况下叠加一套合规风控的交易运营。

---

## 起源：2010 年代末

2015 年前 funded trader 模式还在萌芽。**TopStep**（2012 年成立，原名 TopstepTrader）在期货市场做过早期尝试，但 FX 版本很慢。

**FTMO** 被公认为把 forex prop 模式跑通的人：

### FTMO —— 创业故事

- **创始人**：Otakar Šuffner 和 Marek Vašíček，布拉格经济大学的同学。
- **想法萌发**：2013 年，两人当时是散户交易员，缺本金放大策略。
- **自力更生开发**：雇不起工程师，两个人自己写了差不多两年。
- **正式上线**：**2015 年**，最初只在捷克和斯洛伐克运营。
- **平台**：最初是 MetaTrader 4；后来加了 MT5、cTrader、DxTrade。

据 [FTMO 自家博客和 Forbes 报道](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/)："创始人 2013 年就有了想法，但没钱请人，只能自己写，花了大约两年。"

FTMO 的业务结构：FTMO s.r.o. 是捷克运营公司；OMHC 是母控股公司，也持有一些不动产资产。Šuffner 和 Vašíček 对 OMHC 各持一半。

### 早期行业格局（2015–2020）

FTMO 跑通模式后，forex prop firm 赛道快速扩张：

- **The5ers** 上线（以色列，聚焦长期出资账号 + 慢评估）
- **Lux Trading Firm**、**FundedNext** 等一堆新玩家涌入
- 2020–2024 年 "prop firms" 的搜索兴趣增长 **607%**（据 [Finance Magnates 市场规模数据](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)）
- 到 2023 年全球估计有 **600–700 家**零售 prop firm 在运营（2024 年洗牌前）

---

## 巅峰：2021–2023

### COVID-19 与零售交易潮

COVID-19 疫情给 prop firm 造就了非典型增长环境：
- 封控时代全球零售交易热情暴涨
- 零佣金股票 app（Robinhood 等）把用户拉进市场
- 社交媒体交易社区（r/wallstreetbets、TikTok 交易网红）让主动交易变主流
- Prop firm 给出一条低门槛的"用别人的钱交易"路径

### MyForexFunds —— 高峰炒作与崩盘

**MyForexFunds（MFF）** 一度是全球最大 prop firm 之一，CFTC 指控它 2021–2023 年从交易员身上赚了超过 **$3.1 亿美元**。

MFF 由 **Murtuza Kazmi**（CEO）运营，注册在加拿大多伦多。

#### CFTC/OSC 动手 —— 2023 年 8 月

**2023 年 8 月**：美国 CFTC 和安大略省证监会（OSC）同步对 MyForexFunds 下手：

- CFTC 在美国联邦法院拿到**临时禁令**和**资产冻结**。
- OSC 在安大略同步提起执法程序。
- 业务一夜之间被关停。

**CFTC 的指控**包括：
- MFF 告诉客户他们用的是真实账号、对接独立第三方流动性提供商
- 实际客户在用**模拟（demo）账号**，全部由 MFF 自己控制
- MFF 自己就是交易对手方——交易员亏钱它直接赚
- 欺诈和实质条款虚假陈述

据 [Finance Magnates](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)："$3.1 亿美元 Prop Trading 欺诈：监管冻结 My Forex Funds 资产。"

#### 剧情反转：案子崩盘

虽然一夜关停的场面很大，但法律这边散了架：

- 美国法院**驳回了 CFTC 对 MFF 的欺诈诉讼**。
- 证据显示 CFTC 的人为了拿到冻结令**"故意误述了一笔税款支付"**——严重的程序违规。
- 联邦法官判 CFTC 赔 **$310 万律师费**作为制裁——对联邦监管机构来说几乎前所未有。
- 据 [DeSilva Law Offices 分析](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)：这标志着 CFTC 在案子被驳回后还要挨罚，非常难堪。

到 2026 年 4 月，MFF 宣布计划退还客户资金，并讨论重启运营。据 [MyForexFunds X（2025 年 4 月）](https://x.com/MyForexFunds/status/1976287697615327260)："2023 年 8 月 MyForexFunds 被错误关停。CFTC 在美国的案子已被驳回，加拿大接管程序仍在进行。"

---

## MetaQuotes 整肃 —— 2024 年 2 月

### 背景：Grey-Label 问题

大多数零售 prop firm 和 MetaQuotes 没有直接关系。他们是通过 "grey label" 接入 MT4/MT5 基础设施——某家持牌 MT5 broker 把服务器访问权再授给 prop firm，严格讲已经超出 MetaQuotes 预期使用条款。

这模式对 MetaQuotes 在财务上很不划算：
- Prop firm 把交易员放在 **demo 服务器**上（模拟账号），MetaQuotes 拿到 **0 授权收入**
- grey-label broker 承担与 MetaQuotes 的关系，但 prop firm 的活动 MetaQuotes 没分到钱
- Prop firm 膨胀到几百万账号规模，白嫖 MetaQuotes 服务器基建

### 监管压力背景

MetaQuotes 还担心美国监管敞口：
- Prop firm 在接美国客户（哪怕声明不涉及监管合规）
- CFTC 对场外零售 FX 规则严格；demo-to-live 账号结构可能被视为受监管活动
- MetaQuotes 的 grey-label broker 给 prop firm 开美国通道，可能让自己 license 不保

### 整肃时间线

**2024 年 2 月 6 日**：**True Forex Funds**（匈牙利）丢掉 MT4/MT5 license。MetaQuotes 没提前打招呼。

> CEO Richard Nagy：*"因为一个毫无道理的原因 MetaQuotes 终止了我们的 license，我们只能临时冻结服务……MetaQuotes 事先没给任何警告，也没给任何机会替换不想要的供应商。"* —— [FX News Group](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)

注：True Forex Funds 此前（2023 年 6 月）也在 CFTC 的 RED List 上，因为未注册就招揽美国客户。

**2024 年 2 月 11 日**：**Purple Trading**（持牌 MT5 broker）终止多家 prop firm 客户：
- Funded Engineer
- AquaFunded
- Goat Funded Trader
- The Funded Trader
- Skilled Funded Trades

**Funded Engineer 声明**：*"未来 2 到 8 周内，MT5 服务将对美国公民和居民停用——不只是我们，是整个 prop 行业。"*

**2024 年 2 月 14 日**：**Blackbull Markets** 终止 **Funding Pips** 客户关系。

> Blackbull CEO Anish Lal：*"我们不幸违反了 grey label license 不能用于 prop firm 的条款，所以被迫立即关停 Funding Pips。"* —— [Finance Magnates](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/)

> Funding Pips CEO "Khaled"：*"MetaQuotes 因为美国活跃账号问题突然停服，事前没通知。"*

MetaQuotes 始终没发过正式公开声明解释政策。它是通过持牌 broker 合作伙伴动手。

### 洗牌规模

2024 年 2 月到 2025 年末，prop firm 行业经历了前所未有的收缩：

- 全球 **80–100 家 prop firm** 停运——约占全球运营者的 **13–14%**（据 [VeritasChain 分析](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)）
- **True Forex Funds**：2024-05-13 宣布永久关停；~$120 万未付出分润（300 名交易员）
- **SurgeTrader**：2024-05-24 关停
- **The Funded Trader**：2024-03-28 暂停；承认 $200 万+ 被拒分润
- **MetaTrader 的 prop firm 份额**：9 个月内从 **48% 跌到 24%**

### 整肃的受益者

替代平台大幅增长：
- **cTrader**（Spotware）："Finance Magnates 评为 2026 年 broker 最佳交易平台"
- **DxTrade**（Devexperts）：FTMO 2023 年底接入
- **MatchTrader**：多家公司迁过来
- **TradeLocker**：大量 prop firm 采用
- **Sirix**：少量

Finance Magnates 2024 年调研：交易员中 62% 仍偏好 MT5；9% 偏好 MT4；**27% 选 cTrader**——从接近零开始的显著涨幅。

---

## 幸存者和 2025 年复苏

### FTMO 的统治

FTMO 从危机中走出来成为毫无争议的市场领袖：

**财务表现（2024 年，据 OMHC 财报披露）**：
- 营收：**CZK 68.4 亿（~$329M USD）**——同比 +53%
- 净利润：**CZK 13 亿（~$62.5M USD）**
- 总资产：**CZK 150 亿（~$721M USD）**
- 现金：**CZK 44 亿（~$211M USD）**
- 活跃交易账号：**230 万**（YoY +33%）
- 累计交易员分润：创立至今 **$4.5 亿+**

**平台演进**：FTMO 现在提供 MT4、MT5、cTrader、DxTrade。MT5 使用量 2020–2024 年涨了 15 倍。cTrader 近几年用量差不多翻了四倍。

**收购 OANDA（2025 年 12 月）**：FTMO 从 CVC Capital Partners 手中收购 OANDA，8 个月拿了 5 个司法辖区的监管批准。战略逻辑：OANDA 给 FTMO 带来全球持牌 broker 基础设施，让 FTMO 能合法在美国提供 MT5（据 [Finance Magnates](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/)，FTMO 是目前唯一能在美国给客户提供 MT5 的 prop firm）。

### FundedNext 和 The5ers

**FundedNext**：
- 在科摩罗注册做了个 broker 品牌
- 在毛里求斯和迪拜申请牌照
- 通过 cTrader 对美国交易员开放（[TradeInformer 报道](https://tradeinformer.com/broker-news/prop-firm-fundednext-returns-to-us-through-ctrader)）
- 2025 年重返美国市场

**The5ers**：
- 以色列公司；聚焦长周期出资账号 + 外汇
- 2025 年通过替代平台重返美国

### TopStep

- 美国期货方向的 prop firm；MetaQuotes FX 导向的整肃对它影响小
- 2025 年和 **Plus500**（以色列 CFD broker / 交易所运营商）达成重大战略合作
- 继续靠 CME 期货挑战服务美国市场

---

## 监管展望：2025–2026

### CFTC

- CFTC 2024 年 9 月最终确定 **Rule 4.7 修订**，更新 Qualified Eligible Person 的组合要求；合规截止 2025-03-26。
- **Digital Asset Market Clarity（CLARITY）Act** 2025 年 7 月过众议院；如果生效，很多加密方向的 prop firm 得向 CFTC 注册为 CTA 或 CPO。

### 欧盟 / 英国

- 英国 FCA 和欧盟 ESMA 在审查 funded challenge 是不是受监管的金融活动。
- 几家公司提前拿了离岸 broker 注册（科摩罗、圣卢西亚、毛里求斯）以获得 MetaTrader license，但目前没有一家能在美国提供 MetaTrader。

### 2026 年预期变化

据 [NYC Servers prop firm 监管分析](https://newyorkcityservers.com/blog/prop-firm-rule-changes-2026)：
- 关键辖区强制发牌
- 更严的 KYC/AML
- 强制分润透明度披露
- 可能被 CFTC 归为 CTA
- 标准化新闻交易封闭期
- 更高的资本充足要求

---

## 行业规模和展望

| 指标 | 值 | 来源 |
|--------|-------|--------|
| 峰值公司数（2023） | 全球 ~600–700 | 行业估计 |
| 洗牌后公司数 | ~500–600（关停 ~80–100） | VeritasChain 2025 |
| 市场 TAM（仅评估费） | $2–4B 每年 | Finance Magnates |
| 2026 Forex & Prop 市值 | $7.14B | Business Research Insights |
| 2035 预测市场规模 | $24.55B（CAGR 10.9%） | Business Research Insights |
| 搜索兴趣增长（2020–2024） | +607% | Finance Magnates |
| 期货 vs FX 风向 | 期货在 prop 交易员中已是搜索更多的资产类 | Finance Magnates 2025 |

---

*参考：[Finance Magnates MFF $310M 欺诈](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)、[MyForexFunds X 贴](https://x.com/MyForexFunds/status/1976287697615327260)、[FX News Group True Forex Funds](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)、[Finance Magnates MetaQuotes 整肃](https://www.financemagnates.com/forex/prop-trading-and-metaquotes-funding-pips-case-may-mark-the-end-of-mt-access-to-us-clients/)、[Finance Magnates FTMO 营收](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)、[FTMO OANDA 收购](https://www.oanda.com/group/media-center/press-releases/oanda-acquired-by-ftmo/)、[VeritasChain 2024 洗牌](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)、[FTMO About 页](https://ftmo.com/en/about/)、[DeSilva Law CFTC](https://www.desilvalawoffices.com/articles/blog/2025/may/cftc-case-dismissed-my-forex-funds-controversy-h/)*

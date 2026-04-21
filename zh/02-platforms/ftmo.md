# FTMO：深挖

## 概览

FTMO 是全球按营收和活跃账号计最大的零售 prop firm。2015 年在捷克布拉格成立，把现代"出资交易员挑战"模式做通，到 2024 年营收达 $329M。2025 年 12 月 FTMO 完成对 OANDA 的收购，从纯 prop firm 转型成横跨 prop 交易、broker、金融数据的金融集团。

---

## 创立与早期历史

### 创始人

- **Otakar Šuffner**（CEO）：布拉格经济大学银行 + 保险专业
- **Marek Vašíček**（联合创始人）：布拉格经济大学同学
- 两人**对 FTMO/OMHC 各持一半**

### 起源

创始人 **2013 年**作为散户交易员时萌生了这个想法：
- 他们缺放大策略的本金
- 意识到很多熟手交易员都有同样问题
- 设想一套结构化评估系统识别真正的熟手

他们雇不起工程师，自己写了差不多两年。FTMO **2015 年**正式上线，初期只服务捷克和斯洛伐克。

据 [Forbes FTMO 封面报道](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/)：创始人在宿舍里搞这个项目，晚上和周末写代码构建能用的挑战评估系统。

---

## 商业模式

### 三段式营收引擎

**1. 挑战费（主要营收）**

交易员付一笔一次性、不退的费用参加 FTMO Challenge：
- FTMO Challenge：$55（10K 账号）到 $540（200K 账号）
- Free Trial Challenge：也有（条件受限）
- 通过后收到首次分润时费用退还

经济学逻辑：绝大多数交易员**会挂**。FTMO 没公布失败率，但行业估计 70–90% 挂在出资前。每次失败又会带来一笔挑战费。

**2. 分润（次要营收）**

通过 Challenge 和 Verification 两阶段的交易员获得"出资"账号。FTMO 保留 10–20% 的盈利。FTMO 的体量（2024 年 230 万活跃账号）意味着哪怕出资交易员平均盈利不高，也能撑起可观营收。

**3. Scaling Plan**

成功的出资交易员可以放大账号，随时间推移带来更大绝对分润。

### 不是纯挑战费生意

常见误解是 FTMO 纯靠挑战费赚钱（暗示交易员挂掉就是全部模式）。财务披露显示 FTMO 的 $329M 营收（2024）来自多个来源的真实交易收入。公司看起来确实做一些真实交易活动——但大头商业模式还是靠费用结构，不是真实 prop trading 的 P&L。

---

## 公司架构

- **OMHC**（Otakar Marek Holding Company，或类似——缩写具体含义未公开确认）：捷克控股公司，持有 FTMO s.r.o. 和关联实体；也持有一些不动产投资。
- **FTMO s.r.o.**：捷克运营公司，在布拉格商业登记册注册
- **FTMO Evaluation Global s.r.o.**：国际挑战运营关联实体
- **FTMO Trading Global s.r.o.**：交易运营关联实体
- **FTMO（2025 年 12 月后）**：也是 OANDA Global Corporation 的母公司

Šuffner 和 Vašíček 对 OMHC 各持一半。

---

## 平台与技术栈

### 平台历史

| 时期 | 可用平台 |
|--------|-------------------|
| 2015–2019 | 仅 MT4 |
| 2019–2022 | MT4 + MT5 |
| 2023 年末 | MT4 + MT5 + 新加 DxTrade |
| 2024 | MT4 + MT5 + DxTrade + cTrader（扩展） |
| 2025–2026 | MT4 + MT5 + cTrader + DxTrade（四个全活跃） |

### MetaTrader 历史和 2024 危机

FTMO 从 MT4 起家——2015 年行业标准。MT5 成熟后 FTMO 加进来；到 2024 年 MT5 客户数比 **2020 年涨了 15 倍**。

不过 2024 年 2 月 MetaQuotes 整肃波及的是更广的行业（不特别是 FTMO——作为较大的 prop firm，FTMO 和 MetaQuotes 的关系更直接）。FTMO 的应对是多元化平台栈，加 DxTrade、扩展 cTrader 可用性。

**美国市场问题**：MetaQuotes 限制 prop firm 美国用户用 MT4/MT5。FTMO 的解法就是收购 OANDA——OANDA 的 CFTC 注册身份给在美国提供 MT5 提供监管掩护。据 [Finance Magnates 2025](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/)，FTMO 现在是**唯一对美国客户提供 MT5 的 prop firm**。

### DxTrade

**2023 年末**加入，DxTrade 是 **Devexperts** 开发的基于浏览器的交易终端。FTMO 把它描述为"功能完整的界面"，提供：
- Web 原生（无需装桌面版）
- 高级图表
- 风控和订单管理工具
- 覆盖外汇、股指、商品、股票、加密

### cTrader

FTMO 的 cTrader 业务 2024 年后大幅增长。最近用户增长指标中 cTrader 使用"差不多翻了四倍"（据 FTMO 平台数据）。cTrader 是 FTMO 面向想要 ECN 式透明度 + 现代界面的交易员的首选非 MetaTrader 平台。

FTMO cTrader 在 [ct.ftmo.com](https://ct.ftmo.com/)。

---

## FTMO Challenge 和 Verification 流程

### Challenge 阶段

- **时长**：无时间限制（砍掉了——原 30 天限制被当作差异化点取消）
- **盈利目标**：账户余额 10%
- **最大日亏损**：账户余额 5%（某些版本按 equity 算，不是 balance）
- **最大损失**：账户整体回撤 10%
- **最少交易天数**：4 天（至少在 4 个不同日历日交易）

### Verification 阶段

- **时长**：无时间限制
- **盈利目标**：账户余额 5%
- **回撤规则同 Challenge 阶段**

### 出资 FTMO 账号

通过 Verification 之后：
- 交易员拿到"出资"账号（FTMO 资本承险）
- 分润：交易员 **80%**、FTMO **20%**（标准）；持续盈利交易员可升到 **90%/10%**
- Scaling plan：通过 3 个月盈利 10%+ 且单月回撤不超过 5%，账号规模上调 25%

---

## 财务表现

### 关键指标（2024，据 OMHC 财报披露）

| 指标 | 值 |
|--------|-------|
| 营收（OMHC） | CZK 68.4 亿（~$329M USD） |
| YoY 增长 | +53% |
| 净利润 | CZK 13 亿（~$62.5M USD） |
| 总资产 | CZK 150 亿（~$721M USD） |
| 现金 | CZK 44 亿（~$211M USD） |
| 活跃交易账号 | 230 万（YoY +33%） |

### 累计分润

FTMO 宣布头 10 年（2015–2025）累计向交易员支付 **$4.5 亿+**（据 [Finance Magnates](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)）。

### 2023 对比

- 2023 营业额：~$213M USD
- 2023 EBITDA：~$100M USD

---

## 和 MetaQuotes 的"分手"故事（完整叙事）

FTMO 和 MetaQuotes 的关系不像小 prop firm 那种直接摊牌。作为大型成熟公司，FTMO 议价能力更强。"分手"更细腻：

### FTMO 为啥保留 MetaTrader

FTMO 的监管结构和规模意味着它的 MetaTrader 关系比用 grey label 的小 prop firm 更站得住脚。整个 2024 年整肃期间 FTMO 都在继续提供 MT4 和 MT5。

### FTMO 为啥加替代

MetaQuotes 整肃暴露了**平台集中度风险**。FTMO 提前应对：
- **2023 年末**加 DxTrade（在整肃高峰前）
- 扩展 cTrader 使用
- 多平台 = 对单一厂商动作的韧性

### 美国的 MetaTrader 缺口

MetaQuotes 对美国的限制让 FTMO 没法用现有结构服务美国 MT5 用户。OANDA 收购解了这个问题：
- OANDA 持有 CFTC/NFA 注册
- 在 OANDA 监管伞下 FTMO 能给美国客户提供 MT5
- FTMO 是 2026 年唯一做到这一点的 prop firm

这就是 $2.5 亿+ OANDA 收购的战略意义：不只是 OANDA 业务本身，更是那套能让 FTMO 用 MetaTrader 服务巨大美国市场的监管基建。

---

## 竞争位置（2025–2026）

### FTMO 为啥统治

1. **先发优势**：比大多数对手提前 10 年
2. **品牌识别**："FTMO" 在一些交易社区里已经成为"出资账号"的代名词
3. **财务实力**：$211M 现金头寸能吸收市场冲击，不担心偿付能力
4. **地理分散**：捷克大本营 = 不在 CFTC 直接辖区；多个辖区持牌实体
5. **平台广度**：四平台 vs 大多数对手一两个
6. **OANDA 收购**：小对手复制不了的监管和基建护城河

### 竞争威胁

1. **期货原生 firm**（TopStep、OneUp Trader、Apex Trader Funding）：美国导向；在 CFTC 现有期货框架下运营，没 MetaTrader 那种监管模糊
2. **FundedNext**：钱足；扩张激进；通过 cTrader 进美国
3. **The5ers**：差异化模式（更长评估期、聚焦稳定交易员）
4. **监管变化**：如果监管把出资挑战归为受监管金融产品，合规成本会陡增

---

## 地理可用性

FTMO 全球运营，有一些限制：
- 历史上不对美国居民开放（OANDA 收购改变了这点）
- 某些 OFAC 制裁辖区受限
- 适用捷克监管框架；历史上没有向 CFTC/FCA 直接注册

---

*参考：[FTMO About 页](https://ftmo.com/en/about/)、[FTMO OANDA 收购](https://ftmo.com/en/press-release/ftmo-completes-acquisition-of-oanda-from-cvc/)、[FTMO 平台页](https://ftmo.com/en/ftmo-trading-platforms/)、[Finance Magnates FTMO 营收 $329M](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)、[Finance Magnates MT5 重返美国](https://www.financemagnates.com/forex/prop-trading-on-metatrader-5-is-back-in-the-us/)、[Finance Magnates FTMO 10 周年](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)、[Otakar Šuffner 资料](https://tradingfunder.com/otakar-suffner-ceo-and-co-founder-of-ftmo/)、[Forbes FTMO 封面报道](https://ftmo.com/en/blog/forbes-the-ftmo-cover-story/)*

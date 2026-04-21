# FX 市场结构与价格本源

"FX 是什么？价格从哪儿来？" —— 这两个问题搞清楚，再看零售 broker / Prop Firm / 跟单平台就都是表象。

## 一、FX 是什么（本质）

**FX = 两种货币之间的双边信用兑换约定**。没有"标的物"、没有中心交易所、没有官方收盘价。

和股票 / 期货对比：

| 维度 | 股票 / 期货 | FX |
|---|---|---|
| 标的 | 一家公司 / 一份合约 | 一种货币对另一种货币的兑换率 |
| 交易场所 | 中心化交易所（NYSE / CME） | **去中心化 OTC**（Over-the-Counter） |
| 对手方 | 匿名（交易所撮合） | **双边签约**（你知道对手是谁） |
| 清算 | 中央清算所（DTCC / CME Clearing） | 双边清算 or CLS Bank（大额） |
| 价格 | 单一官方 last price | **无官方价** —— 每家银行报自己的 |
| 交易时段 | 开盘 / 收盘 | **24×5** 跟着地球自转 |
| 最小交易单位 | 100 股 / 1 张合约 | 理论无限分割（OANDA 支持 1 美元起） |

FX 的"去中心化"不是互联网时代的选择 —— 是历史路径。1971 年布雷顿森林体系崩溃后浮动汇率化，各国银行自然而然在电话 / 电传上双边报价，**从来没有过中心交易所**。后来加了电子撮合 ECN，但法律上它们是"消息撮合平台"，不是交易所，不做清算。

## 二、规模与结构

### 全球 FX 日成交量

来自 BIS Triennial Survey 2022（下一期 2025-09 发布）：

- **$7.5 trillion / day** 全球外汇日成交额（spot + forward + swap + options）
- 其中 spot（即期）约 **$2.1 trillion / day**
- 零售 FX 只占 **5-10%**（$400-700B / day），大头是 interbank + 机构对冲 + 央行操作

### 参与者分层

```
[央行 Central Banks] ── 货币政策 + 干预
      ↓
[Tier-1 银行] ── JPM / Citi / Deutsche / UBS / Goldman / BoA 等
   最顶层 5-10 家做市，彼此之间撮合
      ↓
[Tier-2 银行 + 对冲基金 + 大型企业财务]
      ↓
[Prime Broker（PB）] ── 给机构客户 / 小型基金提供接入
      ↓
[Prime of Prime（PoP）] ── 给小型零售 broker 做聚合接入
      ↓
[零售 Broker] ── 最终面向个人
      ↓
[零售交易员]
```

每往下一层，点差被加价、延迟增加、可交易规模缩小。零售用户拿到的是**第 4-5 手价格**。

## 三、价格的最根本来源

### 真正的"FX 价格"诞生地：Interbank ECN

全球外汇价格发现**主要发生在两个电子撮合平台**：

**EBS（Electronic Broking Services）**
- 1990 年由多家大银行合资创立（抵抗 Reuters 垄断）
- 2006 年被 ICAP 收购，2018 年 CME Group 以 $5.5B 收购 NEX Group（ICAP 子公司）后归 CME
- **主场币对**：EUR/USD、USD/JPY、USD/CHF、EUR/JPY、EUR/CHF、USD/CNH
- 只接入 Tier-1 银行 + 部分大型 Prime Broker
- 最小交易单位通常 $1M

**Refinitiv Matching（原 Reuters Matching / Thomson Reuters）**
- Reuters 1989 年推出，演化至今
- 2021 年 Refinitiv 被 LSEG（伦敦证交所）以 $27B 收购，Matching 归 LSEG
- **主场币对**：GBP/USD、AUD/USD、NZD/USD、USD/CAD、大部分 emerging market 币对
- 类似 EBS 的客户结构

这两家**瓜分主要货币对**：EBS 主 EUR/USD、USD/JPY；Reuters 主 GBP/USD、AUD/USD、NZD/USD。历史原因是 EBS 由美日欧大陆银行主导（偏欧陆货币），Reuters 起源英联邦（偏英联邦 + 新兴市场）。

**关键点**：当你在任何地方看到的 EUR/USD "市场价"，它的"终极价格发现"都发生在 EBS 的订单簿里。一旦 EBS 的 bid/ask 变动，瀑布式传到 Reuters、Bloomberg、Prime Broker、ECN、零售 broker，**全球任何人看到的 EUR/USD 价格都基于此**。

### 央行的角色

央行不"报价"，但他们的存在决定长期方向：

- **设定政策利率** → 影响利差 → 影响中长期汇率
- **干预市场**：
  - 瑞士央行（SNB）2011-2015 维持 EUR/CHF ≥ 1.20 下限
  - 日本央行（BoJ）2022-2024 多次干预 USD/JPY 防 152+ 走高
  - 中国央行通过中间价引导 USD/CNY
- **外汇储备操作**：大型央行每天有固定的外汇买卖流，给市场提供基础流动性

央行是 FX 市场的"最终对手方"——理论上他们可以打印本币换外币，所以不会破产。但实际操作有政治 / 通胀 / 储备限制。

## 四、价格分发链条

从 Interbank ECN 到零售终端：

```
EBS / Reuters Matching (真实撮合)
  ↓ 市场数据 feed（毫秒级）
Tier-1 银行（内部消化 + 再报价）
  ↓
Prime Broker 聚合 5-20 家银行报价
  ↓
数据厂商（Bloomberg / Refinitiv / ICE Data Services）
  ↓ 卖给机构 / 零售数据供应商
零售数据聚合商（TwelveData / Polygon / Finnhub）
  ↓
零售 broker 自己的撮合 / 报价引擎
  ↓ 叠加 markup（0.1-2 pip）
零售终端（MT4 / MT5 / TradingView / 自研 app）
  ↓
你看到的 EUR/USD
```

每一层延迟累加：
- EBS → Tier-1 银行：< 1ms（物理同 colo）
- Tier-1 → PB：1-10ms
- PB → 零售 broker：10-50ms
- 零售 broker → 用户终端：50-500ms

结果：你看到 EUR/USD = 1.0850 时，EBS 上可能已经是 1.0851 了。对一般零售这点延迟影响不大；对高频 / 套利策略是生死线。

## 五、官方没有"唯一价格"—— 但有基准价

### Fixing 机制

虽然没有单一价格，但机构世界需要一个**每日参考价**来估值、清算、结算衍生品。于是有了：

**London 4pm Fix（WM/Reuters Benchmark）**
- 每工作日伦敦时间 16:00 前后 5 分钟窗口
- 取这 5 分钟内 EBS + Reuters 的成交价加权平均
- **最广泛使用的 FX 基准**：被 MSCI 指数、多数 ETF、衍生品合约引用
- 历史：2013 年曝出主要银行 FX 交易员 WhatsApp 群聊操纵 fix 丑闻 → $10B+ 罚款（JPM、Citi、UBS、Barclays、RBS）

**ECB Fix（欧央行定盘价）**
- 每工作日 CET 14:15 发布
- 覆盖 32 个 EUR 币对
- 是央行调查 + Reuters 报价综合的"参考价"，无交易约束
- 机构估值 EUR 头寸标准

**Tokyo Fix（9:55 JST）+ NY Close（17:00 EST）** 等

### 为啥零售不用这些 fix

零售订单执行的是**你当下那一刻的实时价**，不是 fix。Fix 是**历史结算参考**，给：
- ETF 再平衡
- 衍生品到期结算
- 机构组合估值
- 学术研究

用的。

## 六、24×5 的物理原因

外汇市场"24 小时"本质上是**地球自转 + 金融中心交接棒**：

| 时段（UTC） | 主导中心 | 特征 |
|---|---|---|
| 22:00 前夜 → 07:00 | 悉尼 → 东京 | 亚洲时段，AUD/NZD/JPY 活跃 |
| 07:00 → 16:00 | 伦敦（全球最大 FX 中心，占 38%） | 欧元 / 英镑 主场 |
| 12:00 → 21:00 | 纽约（第二大，19%） | 美元所有币对流动性峰值 |
| 13:00 → 16:00 | 伦敦-纽约重叠 | **全球 FX 流动性最高时段** |
| 21:00 → 22:00 | 纽约收盘 → 悉尼开盘 | 交接空窗 |

- **周六周日**闭市 —— 不是技术限制，而是 Tier-1 银行值班表。CLS Bank（大额结算）只在工作日运营。
- 中东加密永续合约 / 加密原生 FX 代币是在尝试补周末空窗，至今未主流化。

## 七、为啥零售看到的"点差"永远比银行大

你在 MT5 上看 EUR/USD 的 bid/ask spread = 0.8 pip。银行间真实 spread 可能 = 0.1 pip。这 0.7 pip 差去哪了？

```
EBS 实际 spread:     0.1 pip (一年均值)
+ Tier-1 markup:    +0.1 pip
+ PB markup:        +0.2 pip
+ Retail broker:    +0.2-2 pip
─────────────────────────────
= 零售用户看到:     0.5-2+ pip
```

零售 broker **有权 markup**，这是合法商业模式。"ECN broker" 宣称的 0 pip 其实是收 commission 代替 markup（本质一样）。

## 八、数据的"真相"对不同角色的意义

| 角色 | 他看到的"价格" | 他信任的"最根本来源" |
|---|---|---|
| 普通零售 | MT4 上 broker 给的 | 其实就是 broker 内部聚合 |
| 算法零售 | 多个 broker 取中位数 | 他自己的聚合 |
| 小型基金 | Prime Broker feed | EBS + Reuters |
| 大基金 | 自己接 EBS / Reuters | EBS / Reuters 订单簿本身 |
| 做市商 | EBS 订单簿 + 自己的风险系统 | **他就是来源** |
| 央行 | 自己的市场结束报告 | CLS Bank 结算数据 |

离"真相"越近的角色，支付的固定成本越高（Bloomberg Terminal $27K/year/seat、EBS 直连 $50K+/month），但信息优势越大。

## 九、关键事实速查

- **全球 FX 日成交 $7.5T，spot 部分 $2.1T**（BIS 2022）
- **伦敦 38% + 纽约 19% + 新加坡 9% + 香港 7% + 东京 4%** 占全球 77%
- **EUR/USD + USD/JPY + GBP/USD 合计 ~52%** 所有 FX 成交
- **零售占全球 5-10%**，但贡献了 broker 80% 的 markup 收入
- **Tier-1 银行前 10 家**（2024 JPM #1 占 9.4%、UBS #2 占 8.7%、Deutsche #3、Goldman #4...）占银行间市场 ~65%

## 十、实操启示

作为开发者 / 研究者 / 零售交易者：

1. **"EUR/USD 现在多少？"没有单一答案**。任何数据源都是近似，误差 0.1-2 pip 正常。
2. **如果你要做量化**：尽可能往上游走。TwelveData / Polygon 比零售 broker 好，机构级 Bloomberg/Refinitiv 比零售聚合商好，EBS 直连是最顶。
3. **时间戳要看 tick 来源**：很多零售 feed 的"时间"是 broker server 时间，不是 EBS 真实成交时间。差几十毫秒。
4. **Fix 机制可以套利**：每日 London 4pm Fix 前后 5-10 分钟常有"fix hunting"机会，很多算法基金做这个。
5. **周末 gap 真实存在**：周五 NY 17:00 收盘到周日 22:00 开盘，期间中东央行或大新闻会造成周一开盘跳空。

## 参考

- [BIS Triennial Central Bank Survey 2022](https://www.bis.org/statistics/rpfx22.htm)
- [ECB Euro Reference Rates](https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html)
- [NEX Group — Wikipedia（含 CME 2018 年 $5.5B 收购）](https://en.wikipedia.org/wiki/NEX_Group)
- [Refinitiv — Wikipedia（含 LSEG 2021 年 $27B 收购）](https://en.wikipedia.org/wiki/Refinitiv)
- [Forex scandal — Wikipedia（2013 fix 操纵，$10B+ 罚款明细）](https://en.wikipedia.org/wiki/Forex_scandal)
- [CLS Bank 运营统计](https://www.cls-group.com/news/)
- `02-liquidity-chain.md`：流动性链条的商业视角
- `../01-history/03-retail-fx-boom.md`：零售 FX 历史

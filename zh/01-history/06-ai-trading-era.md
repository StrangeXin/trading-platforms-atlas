# AI 交易时代（2020-2026）

零售交易历史的**第三次大变革**，发生在 2020 年 COVID 居家潮和 LLM 爆发的共振点上。前两次：2005 MT4 发布让零售有可用终端，2017 加密崛起让零售能 24×7 交易。第三次：**AI 让"分析"从稀缺变成商品化**。

## 时间线速览

```
2020-03  COVID 封锁 → 零售 FX / 股票 / 加密同时涌入
2020-06  Robinhood 单季新注册 300 万（vs 2019 全年 300 万）
2021-01  GameStop WallStreetBets 短挤压 → "meme stocks" 概念诞生
2021-10  Numerai 跨越 $1B AUM，机器学习信号市场成型
2022-11  ChatGPT 发布 → 散户第一次有了可用 AI 工具
2023-03  BloombergGPT 论文 → 机构 LLM 金融应用公开化
2023-06  TradingView Pine Script v5 + AI Ideas → 零售 AI 辅助
2024-01  Spot BTC ETF 获批 → 机构 AI 基础设施首次覆盖加密
2024-02  MetaQuotes 清洗 Prop Firm → 行业去 MT5 化开始
2024-10  SEC "AI washing" 首次对 adviser 罚款
2024-12  Pine Script v6 发布，加入 ML 相关原语
2025-02  Bybit $1.5B 黑客事件 → 加密 + AI 监管紧迫感
2025-08  FTMO 宣布 AI Coach 功能 → Prop + AI 融合
2025-12  FTMO 收购 OANDA → 大玩家整合开始
```

## 一、第三次大变革的结构性原因

### 零售工具的演化

| 代际 | 年份 | 零售能做什么 | 瓶颈 |
|---|---|---|---|
| **零售 FX 1.0** | 2000-2005 | 有账号 + 下单 | 没有标准终端 |
| **零售 FX 2.0（MT4 时代）** | 2005-2015 | 写 EA、自动交易、技术指标 | 工具多但信号质量低 |
| **零售 FX 3.0（加密 + 移动）** | 2015-2022 | 24×7 交易、手机交易、跟单 | 分析仍然靠人工 |
| **零售 FX 4.0（AI 时代）** | 2022+ | LLM 辅助分析、自动生成策略 | "分析商品化"但 alpha 依然稀缺 |

**每一代都解决了前一代的"操作瓶颈"**，但**从未解决 alpha 生成问题**。AI 时代也不会。

### 核心认知变化

- 2005-2022：**分析是稀缺资源**（需要多年学习 / 专业工具）
- 2022+：**分析是 $20/月 ChatGPT**（零售首次和专业 trader 工具对等）
- 但**分析 ≠ alpha**（见 `../07-essentials/07-copy-trading-survivorship.md` 的数学论证）
- 结果：**大家都在用 AI 做同样的"分析"** → 信号同质化 → alpha 被挤出

## 二、2020-2022：COVID + 零售热潮

### COVID 的三重影响

**影响 1：居家交易**
- 2020-03 全球封锁 → 工人在家 → 第一次有大量时间看屏幕
- Robinhood、eToro、Binance 新注册 3-10 倍增长
- Q2 2020 零售占美股成交量 **~25%**（对比 2019 的 15%）

**影响 2：刺激支票（美国）**
- 2020-04 第一轮刺激（$1,200 per 成人）
- 部分流入券商账户
- Robinhood 新入金峰值

**影响 3：低利率 / 流动性泛滥**
- Fed + ECB 降息到 0
- 风险资产（股票、加密）全线上涨
- 新手 trader 的第一次经历是**牛市**（危险）

### 2021 Meme Stock 革命

**1 月 GameStop 事件**（见 `../02-platforms/robinhood.md`）：
- WallStreetBets → 短挤压 → 散户 vs 对冲基金
- 第一次**零售社群能撬动机构**
- Robinhood 限制买入引发"散户觉醒"
- 后续 AMC、BlackBerry、BB&B 等"meme stock"

**长期影响**：
- 零售相信"社群 > 机构"
- 但同时**大量散户在后续下跌中亏损 90%+**
- **AI 时代散户的"社群式"决策模式**的起源

### 2022 加密熊市 + FTX 崩盘

- 2022-11 FTX 破产 → $8B 用户资产缺口
- 加密散户对"中心化机构"信任崩溃
- 但**结构未变**：大家继续用 CEX，只是换家

## 三、2022 年 11 月：ChatGPT 的分水岭

ChatGPT 发布时几乎没人意识到这对交易意味着什么。

### 第一波（2023 上半年）：**愚蠢的实验**

- "Teach ChatGPT to trade stocks" 类 YouTube 视频爆发（几百万播放）
- GitHub 上出现几千个 "AI trading bot" 开源项目
- 大部分是 **GPT-3.5 + 价格数据 + 简单信号**
- **Forward test 大规模失败**
- 媒体炒作"AI 取代 trader" —— 实际测试都是**数据泄露 + 回测过拟合**

### 第二波（2023 下半年）：**机构开始接入**

- **BloombergGPT** 论文（3 月）：Bloomberg 自研 500 亿参数金融 LLM
- **Renaissance、Citadel、Two Sigma** 内部大量用 GPT-4 做 research augmentation
- 但**核心下单逻辑仍然是传统 ML**（LSTM、XGBoost 等）
- **不是 LLM 取代量化，是 LLM 辅助量化**

### 第三波（2024+）：**代币化 + 营销化**

- **Numerai + LLM tournament**（2024）
- **Kaito AI**（$40M 融资）
- **Dash2Trade**、**SingularityDAO** 等"AI 代币化信号"
- **散户 AI Trading App**：Bitget Moonshot、Bybit AI Trader、eToro AI Insights
- **Prop Firm + AI**：FTMO AI Coach、Apex AI 风控

详情：`../05-trends/05-ai-in-trading.md`

## 四、关键公司 / 产品的 2020-2026 里程碑

### Robinhood

- 2020：$180M → $959M 营收（5x 增长）
- 2021-07 Nasdaq 直接上市
- 2021-01 GameStop 事件
- 2022 加密熊市 + 裁员 40%
- 2023-2025 复苏 + 多元化（IRA、信用卡）

### Binance

- 2020 年营收 $8B → 2024 $12B
- 2023-11 DOJ $4.3B 和解，CZ 辞去 CEO
- 2024+ 合规化 + 全球重建

### Coinbase

- 2021-04 NASDAQ 直接上市
- 2023-06 SEC 起诉（2024 Q1 撤诉）
- 2024 比特币 ETF 受益最大（custody 收入激增）

### FTMO

- 2020 年营收 ~$50M → 2024 $329M
- 2024-02 MetaQuotes 清洗（对 FTMO 影响有限）
- 2025-12 收购 OANDA $10B CZK

### MetaQuotes

- 2020-2023 维持绝对统治
- 2024-02 清洗 Prop Firm → 失去部分市场
- 2024-10 宣布停更旧版 MT4
- 2025+ 地位受威胁但仍然头部

### 传统退场者

- **Mt. Gox** 持续赔付 2024-2025（10 年后终于给付）
- **FXCM** 品牌继续但实质已死（Jefferies 子公司）
- **Alpari UK** 2015 倒闭后彻底消失
- **FTX** 2024-2025 清算进行中，用户部分拿回
- **MyForexFunds** 2023 被 CFTC 诉后倒闭
- **Celsius / Voyager** 2022 加密破产后用户资产部分恢复

## 五、"AI 交易时代"的特征

### 特征 1：信息过剩 + 信号稀缺

- 每分钟产生海量新闻 / 推文 / 分析
- LLM 让任何人都能消化
- 结果：**每个人看到的都是"经过 LLM 处理的"世界** → 同质化
- **真正的 alpha 来自信息不对称** —— AI 降低了不对称

### 特征 2：执行速度民主化但信号质量未民主化

- Python + REST API = 普通开发者几小时构建交易 bot
- 但**机构做市商的 tick-to-trade 几微秒**（散户永远无法匹敌）
- 对散户：**从毫秒竞争退到小时 / 日竞争**是唯一理性

### 特征 3：监管滞后扩大

- 2022-2024 加密监管混乱（SEC vs CFTC 辖权争夺）
- 2023+ AI 监管刚起步（SEC AI washing、EU AI Act）
- 每次"金融创新"领先监管 **3-5 年**
- 这期间发生的事 = **下一次 FTX / MFF**

### 特征 4：零售从"投资"变"参与"

- 2000-2015：零售认真做投资（多年持有）
- 2015-2022：零售开始短线 + 杠杆（加密 + Robinhood UI）
- 2022+：零售**追 meme / AI 叙事 / 短期波动**
- 这是**赌场化**的终极形态

## 六、2024-2026 的三大趋势（进行中）

### 趋势 1：平台整合

- FTMO + OANDA（Prop + broker）
- Kraken + NinjaTrader（加密 + 期货 broker）
- 预期 2026-2028 更多 broker + exchange + prop 纵向整合

### 趋势 2：AI 商品化 vs Alpha 稀缺化

- 人人都能做"AI 策略"
- 但**大多数 AI 策略是传统策略的 LLM 装饰**
- 真正的 alpha 还是**机构专有数据**
- 散户的 AI 工具主要**提升效率**，**不提升胜率**

### 趋势 3：监管化 vs 地缘套利

- 欧洲、美国、英国监管逐步收紧（尤其 Prop Firm + AI）
- 迪拜、BVI、塞舌尔等**低门槛辖区**承接 refugee broker
- 2026-2028 监管分化加剧

## 七、2026 之后的预测

这不是乐观 / 悲观，是**结构分析**：

1. **下一个大丑闻在 2026-2027**（见 `../07-essentials/09-scandals-are-features.md`）—— 可能是 AI trading bot 类，或者 prop firm 整合后的某家
2. **零售 FX + CFD 全球规模增速放缓**（监管 + 市场饱和）
3. **加密 + 传统金融融合加速**（BTC ETF → ETH ETF → 其他币 ETF）
4. **欧洲 AI Act 对 FX / CFD 的影响 2026 开始显现**
5. **Prop Firm 行业 2028 可能只剩 Top 10**（中尾部被挤出）
6. **移动端 + AI 助手成为标配**（MT5、TradingView 都在做）
7. **DEX UX 追赶 CEX 需要 2030+**（非近期）
8. **中国 / 俄罗斯本土平台崛起**（去美元化背景下）

## 八、和前两次大变革的对比

| 维度 | 2005 MT4 革命 | 2017 加密原生革命 | 2020-2022 AI / COVID 革命 |
|---|---|---|---|
| 触发 | MT4 发布 + CySEC license 商品化 | BTC 牛市 + 加密所上线 | COVID + ChatGPT |
| 核心变化 | 零售第一次有了专业终端 | 零售第一次有 24×7 市场 | 零售第一次有 AI 工具 |
| 头部赢家 | Alpari、FxPro、FXCM | Binance、Coinbase、Bybit | Robinhood 成熟、加密巨头 |
| 头部输家 | 传统 interbank broker | 传统股票券商（慢反应）| 中型零售 broker（被 AI 替代的 Customer Service）|
| 监管响应 | ESMA MiFID II 2018（13 年后）| 美国 FIT21 2024（7 年后）| EU AI Act 2024（2 年后，史上最快）|
| 零售净亏率 | 74-89%（ESMA 测量）| ~80%（加密熊市数据）| 预测 80-90%（还早）|

**共同模式**：每次变革都有**短暂的零售机会窗口**（早期进入者偶尔爆赚），然后快速商品化 → 回归赌场常态。

## 参考

- [ChatGPT 发布 - OpenAI](https://openai.com/blog/chatgpt)
- [BloombergGPT 论文 arXiv](https://arxiv.org/abs/2303.17564)
- [GameStop short squeeze - Wikipedia](https://en.wikipedia.org/wiki/GameStop_short_squeeze)
- [FTX Chapter 11](https://restructuring.ra.kroll.com/FTX/)
- [MetaTrader 4 - Wikipedia](https://en.wikipedia.org/wiki/MetaTrader_4)
- [Binance DOJ settlement 2023 - CFTC](https://www.cftc.gov/PressRoom/PressReleases)
- [EU AI Act - European Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [Robinhood S-1 IPO 2021](https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=0001783879)
- `00-timeline.md`：整体时间线
- `04-crypto-native-era.md`：加密原生时代
- `05-prop-firm-rise.md`：Prop Firm 崛起
- `../05-trends/05-ai-in-trading.md`：AI 的前瞻性分析
- `../07-essentials/07-copy-trading-survivorship.md`：为啥"AI 信号"无法持续

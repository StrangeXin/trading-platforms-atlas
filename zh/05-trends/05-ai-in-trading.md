# AI 在交易的三波浪潮（2020-2026）

LLM + 机器学习 + on-chain 数据引发 2020 后的 AI 交易"新周期"。对比之前的"quant 革命"（1990s 数学家入场）和"HFT 革命"（2000s FPGA + 微秒战），这是第三波 —— **生成式 AI + 散户规模化**的结合。

## 一、背景：Quant 交易的历史三波

```
Wave 1: 数学家 + 统计套利（1988-2008）
  - Renaissance Medallion、D.E. Shaw、Two Sigma
  - 隐藏在高校 / 物理系背景的 trader
  - 策略：mean reversion、stat arb、pair trading、volatility arb

Wave 2: HFT + 基础设施竞赛（2005-2015）
  - Citadel Securities、Virtu、Jump Trading、Tower Research
  - 策略：market making、latency arb、sub-millisecond 赢家
  - 装备：colo + FPGA + 微波 + 专线

Wave 3: AI + 散户规模化（2020-2026）
  - LLM（GPT、Claude）、时序 ML（Temporal Fusion Transformer）、on-chain LLM
  - Numerai、Kaito AI、QuantConnect、AI prop firms
  - 策略：sentiment、narrative trading、AI 信号聚合
  - 装备：**零售可用的 LLM API**、公开数据集、colab 笔记本
```

**Wave 3 的核心**：**任何有 $20 / 月 + 基本编程能力的人都能做 AI 交易实验**。这是前所未有的。

## 二、三个具体前沿

### 前沿 1：LLM 作为信号生成器

**方式**：用 GPT-4 / Claude / Llama 处理新闻 / 财报 / 社交媒体，输出"买 / 卖 / 中性"信号。

**代表项目（2024-2026）**：

- **Kaito AI**（2023 创立，$40M 融资 2024）：链上 + 社交媒体 sentiment 聚合 → 生成交易信号
- **BloombergGPT**（2023 发布）：Bloomberg 自研金融 LLM，内部使用
- **LLM trading bots on GitHub**（2023-2026）：上万个开源项目
- **Numerai + AI**：2024 加入 LLM tournament（用 LLM 做特征工程）

**实际效果**（2024-2026 业内研究）：

- 信号 Sharpe 0.3-0.8（刚过噪声）
- 策略容量极小（一次性投入 > $1M 滑点摧毁信号）
- **大多数"AI 信号"在 forward test 消失**
- 少量真有 alpha 的 = 被机构快速吸收

**关键问题**：
- LLM 输出的信号和**市场共识**重合度高（LLM 训练数据是历史新闻）
- 真正的 alpha 来自**市场还没定价的信息**，LLM 几乎不可能发现
- 除非你的 LLM 接入了**机构专有数据**（Bloomberg terminal feeds、satellite imagery 等）

### 前沿 2：AI 机器人 + 代币化信号

**方式**：把 AI 交易策略打包成"代币"，让散户购买代币 = 购买策略 AUM 敞口。

**代表项目**：

- **Numerai + NMR token**：机器学习竞赛，最佳模型获得 NMR 奖励
- **SingularityDAO**（2022-2024）：AGI 治理的"AI hedge fund"
- **Dash2Trade**（2022-2024）：AI 交易信号，Presale 代币 $D2T
- **BabyDAO**、**Fetch.ai**、**Autonolas** 等：各种"AI agent 经济"项目

**2024-2025 结果**：
- 大多数**代币价格归零**（2022 峰值后熊市 + 实际收益不达预期）
- 少数项目（Numerai）活下来，但规模远小于宣传
- "AI 代币化信号" **2025 行业共识是泡沫 + 少数幸存者**

**为啥大多数失败**：
1. **代币经济** vs **交易策略** 激励不对齐（代币发行者靠 FOMO 赚，不靠 alpha）
2. **规模问题**：真实 alpha 策略**容量有限**，代币化让资金涌入 → 策略失效
3. **合规灰色**：SEC 开始把这类代币定性为"证券"

### 前沿 3：AI Prop Firm（2024-2026 新物种）

**方式**：Prop Firm + AI 辅助 trader 评估 / 辅助交易 / 辅助风控。

**代表**：

- **FTMO 2024 推出 "FTMO AI Coach"**：用 LLM 分析 trader 的交易日志，提建议
- **Traderoom**：AI 分析 challenge 参与者的统计风险
- **Apex Trader Funding** 2025 接入 AI 风控 → 自动识别"copy trader"（违反 TOS）
- **更激进**：2025-2026 有几家 prop firm 尝试 "AI funded account" —— 申请者提交 AI 策略，prop firm 评估 + 实盘运行

**争议**：
- 真正有 alpha 的 AI 策略**作者不需要 Prop Firm** —— 可以直接自己交易或被机构挖走
- 进入 AI Prop Firm 的"AI 策略" = 经过包装的**现有传统策略 + LLM 装饰**
- **本质和传统 Prop Firm 没区别**，只是营销升级

## 三、散户 AI 交易 App 热潮

**2023-2026 零售 AI 交易 app 爆发**：

- **Bitget Moonshot**（加密）：AI 推荐即将爆发的 meme coins
- **Bybit AI Trader**（2024）：LLM 做交易策略推荐
- **eToro AI Insights**（2024）：用户交易历史 + LLM 复盘
- **Robinhood Snacks**（2023 推出的 LLM-generated 市场摘要，非交易信号）
- **TradingView Ideas + AI Co-pilot**（2024）：LLM 辅助的 technical analysis 解读

**数字**：
- 2024 Q4 全球 "AI Trading App" 注册用户 ~15M（第三方估算）
- 平均账户余额 $500-1500（**低于传统 broker 零售平均**）
- 用户画像：**22-35 岁，首次交易，加密 + 股票混合**

**问题**：
- 大多数"AI 推荐"只是**装饰过的 RSI / MACD**
- 真正的 alpha 模型**不会被放进零售 app**（机构持有）
- 和其他**散户趋势**（copy trading、social trading）同样的生存偏差问题

## 四、机构级 AI 交易：真发生了什么

### Jane Street、Citadel、Renaissance 怎么用 AI

- **Renaissance Technologies**（Medallion 基金）：1990s 起**一直用 ML**，但是**独家黑盒**
- **Citadel Securities**：2020 后 ML 成为主要做市信号
- **Jane Street**：OCaml + ML for market making
- **Two Sigma**：最大规模 ML 应用 hedge fund

**和 Wave 3 AI 散户热潮的差别**：

| 维度 | 机构 | 散户 |
|---|---|---|
| 数据 | 专有 + alternative data（卫星、信用卡、航运）| 公开 API |
| 算力 | 千 GPU cluster + CPU farm | 一台 MacBook |
| 人才 | PhD + 15 年经验 + $1M salary | 兴趣爱好者 |
| 基础设施 | 自建 colo + FPGA + fiber | Cloud instance |
| 交易成本 | < 1 bp | > 10 bp |
| Alpha 来源 | 专有信号 | 公开 API 的"公共信号" |

**散户的 AI 交易没有机构的数据 / 算力 / 人才优势**。这不是"技术民主化"，是**营销民主化**。

### LLM 具体的机构应用

- **Research acceleration**：LLM 快速消化财报 / 新闻 / 研究报告
- **Code generation**：自动写回测 / 策略代码
- **Anomaly detection**：监控大量数据源找到异常模式
- **Trader augmentation**：给人类 trader 提供 LLM-powered "assistant"

**但**：
- **信号生成**还是传统 ML（LSTM、Transformer、Gradient Boosting）
- LLM 仅**辅助**人类 trader，**不替代**
- 这和"散户的 AI 交易"完全不同场景

## 五、AI 时代的监管反应

### 2024 SEC 的 AI 指导

- 2023-2024 SEC 发布多份 AI 风险指导
- 重点关注 **"AI washing"**（公司夸大 AI 使用）
- 2024 年 2 月 SEC 对两家 investment adviser 罚款 $400K（虚假 AI 宣传）
- 预期 2025-2026 更多 AI 交易监管

### 欧盟 AI Act 2024

- 金融领域 AI 被归为"high-risk"
- 算法必须**透明 + 可解释 + 可审计**
- 对黑盒 LLM 交易信号提出挑战

### 监管的核心难题

- AI 模型的**可解释性**（LLM 尤其是黑盒）
- 责任归属（AI 模型造成损失是模型商还是用户的责任）
- 模型漂移 + 数据污染（训练数据过时的风险）
- **没有好答案**，监管仍在摸索

## 六、2025-2026 实际发生的事

### 已发生

- **Numerai** 2024 接入 LLM tournament
- **Perplexity Finance**（2024 Q4 推出）：AI 搜索专攻金融
- **Bloomberg GPT** 2024 升级到 v2（多模态）
- **Binance 2024 Q3 推出 AI-powered 智能订单路由**
- **Kaito AI** 2024 融资 $40M
- **FTMO AI Coach** 2024 发布
- **TradingView Pine Script v6** 2024 加入 ML 相关 API

### 预期 2026+

- AI Prop Firm 进一步整合（可能和 FTMO-OANDA 合并类似）
- 零售 "AI hedge fund" app（面向散户的基金 + AI 信号）
- CEX 的原生 AI 做市（Binance / OKX 自己的 AI desk 规模化）
- DEX 的 AI agent MEV 捕捉（自动做市 + 抢单）
- 第一个"大规模 AI trading 丑闻"（可能是 2026 Q2-Q4）

## 七、给散户的实用建议

### 什么 AI 工具真正有用

- **LLM 做 research 加速器**（消化新闻 / 财报）—— YES
- **LLM 做 sentiment 辅助** —— 可以，但别当主信号
- **LLM 写回测代码** —— YES，效率倍增
- **LLM 生成交易信号** —— 基本没用
- **AI 交易 bot 订阅** —— 基本都是坑
- **AI 代币 presale** —— 避开

### 真实竞争优势在哪

- **不是更多 AI**，是**更好的**：
  1. **独特数据**（你在某个行业 / 社区深耕的信息优势）
  2. **更长的时间尺度**（散户能做 5-10 年持有，机构做不了）
  3. **更低的交易频率**（减少成本 + 避免 HFT 竞争）
  4. **风险管理**（大多数散户死于仓位，不是信号）

**AI 不会让普通散户赢过市场**。它让你处理更多数据，但信息优势**还是来自数据本身**。

## 八、AI × 监管预测（2026-2030）

1. **黑盒 LLM 交易信号被欧盟和美国禁止**（除非可审计）
2. **AI 驱动的零售 app 被要求披露"AI 贡献度"**
3. **AI Prop Firm 监管化**（类似现在的 CFD broker）
4. **Open-source 模型 + 监管 sandbox**（类似 MiFID II Clarity Note 的 ML 版）
5. **机构 AI 继续先跑** —— 监管永远晚 3-5 年

## 参考

- [Numerai — Wikipedia 的替代方案](https://numer.ai/)
- [BloombergGPT 论文](https://arxiv.org/abs/2303.17564)
- [SEC AI washing enforcement 2024](https://www.sec.gov/newsroom/press-releases/2024-36)
- [Kaito AI 官网](https://www.kaito.ai/)
- [EU AI Act - European Commission](https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai)
- [TradingView Pine Script v6 announcement](https://www.tradingview.com/blog/en/pine-script-v6-has-landed-48830/)
- [FTMO 官方博客](https://ftmo.com/en/blog/)
- `../07-essentials/07-copy-trading-survivorship.md`：为啥大多数"AI 信号"有生存偏差
- `../07-essentials/02-prop-firm-casino.md`：Prop Firm 模式（AI 变种同理）
- `../05-trends/04-copy-trading-evolution.md`：跟单历史演变
- `../01-history/04-crypto-native-era.md`：加密原生时代背景

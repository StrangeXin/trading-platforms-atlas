# Prop Firm 对比分析

**单句论点**：Prop Firm 的营销语言几乎同质（"pass challenge + get funded + 80-90% split"），但**真实规则、费用、限制、平台、合规**差异巨大。一个错误选择可能意味着 $500-5000 的报名费完全打水漂。本章提供数据驱动的横向对比。

> **数据时间戳**：下方数字校对于 **2026-04-21**，来源为各 prop firm 官网 + 一手业内评测（WebFetch 实测）。Prop firm 规则经常变动（月度甚至周度），做决策前请先去官网核实**当前**规则。

## 一、总体对比表

对比 10 家头部 Prop Firm（2024-2026 数据）：

| 名称 | 创立 | 总部 | 主力平台 | 最高资金 | 典型分成 | 2024 营收估计 | 信任评分* |
|---|---|---|---|---|---|---|---|
| **FTMO** | 2015 | 布拉格 | cTrader + MT5 | $2M | 80-90% | $329M | ⭐⭐⭐⭐⭐ |
| **TopStep** | 2012 | 芝加哥 | TopstepX + NinjaTrader | $150K（期货）| 80-90% | $120M | ⭐⭐⭐⭐⭐ |
| **FundedNext** | 2022 | Ajman UAE | MT5 + Match-Trader | $4M | 90% | $120-150M | ⭐⭐⭐⭐ |
| **The5ers** | 2016 | 特拉维夫 | cTrader + MT5 | $4M | 80-100% | $120-180M | ⭐⭐⭐⭐ |
| **CryptoFundTrader** | 2021 | Zug 瑞士 | MT5 + Match-Trader + Bybit | $200K | 80-90% | $24-48M | ⭐⭐⭐ |
| **Apex Trader Funding** | 2022 | Austin TX | NinjaTrader + Rithmic | $300K（期货）| 90% | $60-120M | ⭐⭐⭐⭐ |
| **Maven Trading** | 2021 | Dublin | MT5 + cTrader | $2M | 80% | $24-48M | ⭐⭐⭐ |
| **FundingPips** | 2022 | Dubai | MT5 + DxTrade | $500K | 80-90% | $60-120M | ⭐⭐⭐ |
| **MyForexFunds** ❌ | 2020 | Mississauga | MT4/MT5 | - | - | - | 💀（2023 CFTC 诉讼，2024 倒闭）|
| **True Forex Funds** ❌ | 2021 | 布达佩斯 | MT4/MT5 | - | - | - | 💀（2024-02 MetaQuotes 吊牌倒闭）|

*信任评分基于：**运营年限 + 第三方审计 + payout 透明度 + 重大争议**；不是推荐指标，仅代表**历史稳定性**。

## 二、Challenge 阶段规则对比

**这是淘汰 85-93% 参与者的地方**。细微的参数差异决定了策略的可行性。

### 1-Step / 2-Step / 3-Step 模式

| Prop Firm | 模式 | 说明 |
|---|---|---|
| **FTMO** | 2-Step | Challenge 30 天 + Verification 60 天 |
| **TopStep** | 1-Step | Trading Combine 无时间限制（直到违规或达标）|
| **FundedNext** | 1-Step/2-Step 可选 | "Stellar" 1 步；"Evaluation" 2 步 |
| **The5ers** | Instant / 1-Step / 2-Step | 多种路径，"Instant" 无 challenge（但费用更高）|
| **CryptoFundTrader** | 1-Step/2-Step 可选 | |
| **Apex Trader Funding** | 1-Step | 无时间限制，可重复尝试 |
| **Maven Trading** | 2-Step | 标准 |
| **FundingPips** | 1-Step/2-Step 可选 | |

**实操要点**：
- **1-Step 看起来容易**，但通常规则更严（日亏损 3-4% vs 2-Step 的 5%）
- **无时间限制**（TopStep、Apex）对稳健策略有利
- **有时间限制**（FTMO 30 天）逼你激进 → 失败率更高

### 关键参数（以 $100K 账户 FX / CFD prop 为主，期货 prop 单独说明）

**FTMO**（2026-04-21 verified at ftmo.com/en/trading-objectives/）

| 产品 | 利润目标 | 日亏损 | 最大亏损 | 最低交易天数 | 时间窗口 |
|---|---|---|---|---|---|
| **1-Step Challenge** | 10% | 3% | 10%（**trailing**，withdraw 后 reset）| 无 | **无时间限制** |
| **2-Step Challenge** | 10% | 5% | 10%（static）| 4 天 | **无时间限制** |
| **2-Step Verification** | 5% | 5% | 10%（static）| 4 天 | 无时间限制 |
| **Best Day Rule**（1-Step 独有）| 最大盈利日 ≤ 总利润 50% |

**TopStep**（2026-04-21，TopstepX 已成默认产品）

| 维度 | TopstepX（默认）| Classic TopStep（老产品）|
|---|---|---|
| 类型 | 期货 1-Step | 期货 2-Step |
| 日亏损 | **无**（靠 EOD trailing DD 替代）| 按账户大小 $1K-$3K |
| 最大回撤 | EOD trailing（每日根据余额调整）| EOD trailing + hard 日亏损 |
| Best day 规则 | ≤ 50% 总利润 | ≤ 50% 总利润 |
| 最低 winning days | 5 天（Funded 前）| 5 天 |
| 时间限制 | **无** | 无 |
| 新闻交易 | 允许（含 Tilt™ 工具） | 允许 |

**FundedNext Stellar**（2026-04-21 verified at fundednext.com）

| 产品 | 阶段 1 目标 | 阶段 2 目标 | 日亏损 | 最大亏损 | 最低天数 | 时间窗口 |
|---|---|---|---|---|---|---|
| **Stellar 2-Step** | 8% | 5% | 5% | 10% | 5 天 | **无时间限制** |
| **Stellar 1-Step** | 8% | - | 5% | 10% | 5 天 | **无时间限制** |
| 首次 payout | 21 天 | | | | | |
| 分成 | 最高 95% | | | | | |

**The5ers Hyper Growth**（2026-04-21 verified at the5ers.com/hyper-growth）

| 维度 | 数值 |
|---|---|
| Evaluation 目标 | 10% |
| 日亏损 | 3% |
| 最大回撤（"Stop Out"）| **6%**（非 10%）|
| 最低交易天数 | **无** |
| 时间限制 | **无**（30 天不活跃会账户过期）|
| 杠杆上限 | 1:30 |
| 评估账户最大资金 | **$40K**（不是 $4M；$4M 是完整 scaling 后的总池）|

**CryptoFundTrader**（2026-04-21 verified at cryptofundtrader.com）

| 产品 | 目标 | 日亏损 | 最大亏损 | 最低天数 | 时间窗口 |
|---|---|---|---|---|---|
| **Instant**（1-Step）| 10%（"double ups"）| 4% | 6% | 无 | 无 |
| **Accelerated**（2-Phase）| 8% + 5% | 5% | 10% | 5 天 / phase | 无 |
| **Ascend**（2-Phase）| 8% + 5% | 5% | 10% | 无 | 无 |
| 分成（Live）| 80% 起 | | | | |
| 杠杆 | 最高 1:100 | | | | |

**Apex Trader Funding**（2026-04-21，来源 vettedpropfirms.com 二次源，官网 403）

| 维度 | 数值 |
|---|---|
| 类型 | 期货 1-Step |
| 日亏损 | **无**（靠 trailing threshold 替代）|
| 最大回撤 | "Live trailing threshold"（按账户大小浮动）|
| 分成 | **100% 首 $25K，之后 90%** |
| Payout 周期 | 每 **8 个自然日** |
| 新闻 / 节假日 | 允许（23 小时 / 天）|
| 最多同时账户 | 20 个 |

**Maven Trading**（2026-04-21 verified via maventrading.com/blog + proptradingvibes.com + dealpropfirm.com）

| 产品 | 利润目标 | 日亏损 | 最大回撤 | 最低条件 | 时间窗口 |
|---|---|---|---|---|---|
| **2-Step Challenge**（主流）| 8% + 5% | **2%** | **8%**（static）| 每阶段 ≥ 3 个盈利日（每日 ≥ 0.5%）| **无时间限制** |
| **1-Step Challenge** | ~8% | 2-4% | 3-8%（trailing 或 static）| 无 | 无 |
| **Instant Funding** | 3%（首次 payout 最小值）| 2-4% trailing | 3-8% trailing | 无 | 无 |
| 分成 | 80% 起 | | | | |
| Payout 周期 | 10 个工作日 | | | | |
| 费用退还 | 第 3 次成功 payout 后原费退还 | | | | |

**FundingPips**（2026-04-21 verified via proptradingvibes.com/prop-firms/fundingpips + fundingpips.com 官方）

| 产品 | 阶段 1 目标 | 阶段 2 目标 | 日亏损 | 最大回撤 | 最低天数 | 杠杆 |
|---|---|---|---|---|---|---|
| **2-Step Standard**（主流）| 8% | 5% | 5% | 10% (static) | 3 天 / phase | |
| **2-Step Pro** | 6% | 6% | **3%** | **6%** | 3 天 / phase | |
| **1-Step** | 10% | - | 4% | 6% (static) | - | 1:50 |
| **Zero (Instant Funding)** | - | - | 3% | **5% trailing** | - | |
| 分成 | 80% | | | | | |
| 账户规模 | $5K 到 $100K | | | | | |
| 费用退还 | 第 4 次成功 payout 后原费退还 | | | | | |
| Scaling | 4 个级别（Launchpad/Ascender/Trailblazer/Hot Seat），最高到 $2M + 100% split | | | | | |

**数学观察**：
- 所有规则集都在"**30 天 10% 利润**"附近 → 年化 120%+
- 对应 Kelly 仓位远超 20%
- **必然性**：风控从**可选**变**不可能**
- 这是 85%+ 失败率的**直接数学原因**（见 `../07-essentials/06-leverage-is-liquidation-countdown.md`）

### 特殊限制

| 限制 | 哪些 Prop Firm 有 | 影响 |
|---|---|---|
| **禁止持仓过夜** | 少数 | 对波段 / 趋势策略致命 |
| **禁止周末持仓** | FTMO、FundedNext 部分账户 | 对 FX 策略影响中等 |
| **禁止新闻交易** | 多数（2-5 分钟前后窗口）| 对宏观交易致命 |
| **禁止 EA / 自动交易** | 少数 | 对量化策略致命 |
| **禁止 HFT（scalping <60s）** | FTMO（最严 2 分钟持仓最低）| 对 scalping 致命 |
| **禁止 copy trading** | 全部 | 防跨账户对冲 |
| **最低止损要求** | FTMO（可选）| 逼你在每单设 SL |
| **一致性规则**（Consistency）| 多数 | 最大盈利天 < 总盈利的 50%，防止"单日大赚过关"|

## 三、Funded 阶段规则对比

通过 Challenge 后进入 Funded。这里的规则**几乎和 Challenge 一样**（**没有放宽**）：

| Prop Firm | Funded 日亏损 | 最大回撤 | 利润分成 | Scaling（增资）规则 |
|---|---|---|---|---|
| **FTMO** | 5% | 10% | 80%（基础）到 90%（加分成）| 每月 > 10% 利润可翻倍 |
| **TopStep** | $3K | $5K | 90% 首 $5K，之后 90% | 取决于 trading days + profit targets |
| **FundedNext** | 5% | 10% | 85-95% | 每 6% 利润 scale up 25% |
| **The5ers Hyper** | 5% | 10% | 80% 起，scaling 到 100% | 5 次 scaling 后可达 100% split |
| **CryptoFundTrader** | 5% | 10% | 80% 起 | 类似 FTMO |
| **Apex** | $2K（2%）| $2.5K（2.5%）| 90% 首 $25K，之后 90% | 账户大小翻倍门槛 |
| **Maven Trading** | 5% | 10% | 80% | 手动 scaling（公司评估）|
| **FundingPips** | 5% | 10% | 80-90% | 类似 FTMO |

**关键观察**：
- Funded 阶段**不是新开始**，是 Challenge 规则的**延续**
- 违规 → 账户关闭 → 要重新付 Challenge 费
- **预期 funded 阶段寿命**（业内）：**6-12 个月后 60-75% 违规出局**
- "Scaling" 听起来好，但要求**持续盈利 + 不违规** → 实际达到的 < 5%

### Payout 周期

| Prop Firm | 最快 Payout | 典型周期 |
|---|---|---|
| **FTMO** | 14 天（首次）+ 每 14 天 | 双周 |
| **TopStep** | 每日 request（首次通过 10 天）| 每日 |
| **FundedNext** | 首次 15 天 + 每 7 天 | 周 |
| **The5ers** | 14 天 | 双周 |
| **CryptoFundTrader** | 首次 14 天 + 每 7 天 | 周 |
| **Apex** | 每日 | 每日 |
| **Maven Trading** | 14 天 | 双周 |
| **FundingPips** | 14 天 | 双周 |

## 四、费用对比（Challenge 价格）

**核对口径**：2026-04-21 标价；**期货 prop（TopStep / Apex）是月度订阅，其他是一次性 Challenge 费**。数字会变，购买前官网再核。

**一次性 Challenge 费**（FX / CFD prop，$100K 账户 baseline）：

| Prop Firm | 产品 | $100K 费用 | 备注 |
|---|---|---|---|
| **FTMO** | 2-Step | **$345 / €439** | $10K-$200K 从 €89 到 €1,080；**2-Step 首次 payout 后退费** |
| **FundedNext** | Stellar 2-Step | ~$499 | 账户 $6K-$200K，从 $49.99 起 |
| **The5ers** | Hyper Growth | $470 | $100K 费用 |
| **CryptoFundTrader** | Instant | $660 | $10K 起 $240；Accelerated / Ascend 不同定价 |
| **Maven Trading** | 2-Step Challenge | **$379** | 起步价 $13（$2K 3-Step）；**3 次 payout 后退费** |
| **FundingPips** | 2-Step Standard | **~$444-499** | **4 次 payout 后退费**（行业最慷慨）|

**月度订阅**（期货 prop，2026-04-21 verified via blog.pickmytrade.io + vettedpropfirms.com）：

| Prop Firm | $50K | $100K | $150K | $300K |
|---|---|---|---|---|
| **TopStep TopstepX**（默认） | $49（含零佣金）| $129 | $165 | — |
| **TopStep Classic** | $49 + $25 平台费 | $129 + $50 平台费 | $165 + data fees | — |
| **Apex Trader Funding** | — | — | — | $137-$597（按 size） |

**TopStep Funded activation**：$149（含每月 1 次 free reset）
**Apex Funded monthly**：$85 / 月
**Apex Evaluation reset**：$80 / 次

**月度订阅**（期货 prop）：

| Prop Firm | $25K | $50K | $100K | $150K | $200K | $300K |
|---|---|---|---|---|---|---|
| **TopStep TopstepX** | - | $49（零佣金）| $129 | $165 | - | - |
| **TopStep Classic** | - | $49 + $25 平台费 | $129 + $50 平台费 | $165 + data fees | - | - |
| **Apex Trader Funding** | - | - | - | - | - | $137-$597（按 size） |

**TopStep Funded activation**：$149（含每月 1 次 free reset）

**关键观察**：
- **费用退还机制**是区分优质 prop 的信号：
  - FTMO 2-Step：首次 payout 后退费（但 1-Step 不退）
  - Maven：第 3 次 payout 后退费
  - FundingPips：第 4 次 payout 后退费（门槛最高）
  - 其他主流 prop 多数**不退**
- **TopStep、Apex 是月度订阅** —— 连续交易更划算，间歇性更贵
- **$200K 账户是主流上限**；超过的（FTMO $2M、FundedNext $4M、FundingPips $2M）是 scaling 后的总池上限，单账户仍在 $100-200K 量级
- **折扣 + 返佣**：几乎所有 prop 常年 **30-50% off**（通过 affiliate / referral / 节日）—— 实际成本比表价低 30-50%
- **CryptoFundTrader 贵**：价格显著高于 FX prop（1.5-2x），因为 Instant program 是"最快 payout"但费用最重

### Challenge ROI 数学

假设你付 $500 买 $100K challenge，目标 10% = $10,000 利润。

**概率**（业内估算）：
- 通过 Challenge phase 1：~15-25%
- 通过 phase 2（2-Step）：40-60%（条件于通过 phase 1）
- 从付费到拿到第一次 payout：~5-10%

**期望 ROI（单次 Challenge）**：
```
通过 concept：
  10% × $10,000 利润 × 80% 分成 = $800 期望收益
  但这是"pass 后"
  
真实期望：
  5% pass-to-payout × $800 = $40 期望
  - 成本 $500
  = 期望 -$460（亏）
```

**即使用最保守参数，单次 Challenge 的期望值都是负的**。Prop Firm 靠的是**重复参与者**（沉没成本 + 证明自己）。

## 五、平台支持矩阵

| Prop Firm | MT4 | MT5 | cTrader | TopstepX | NinjaTrader | Match-Trader | DxTrade | TradingView | Bybit |
|---|---|---|---|---|---|---|---|---|---|
| **FTMO** | ❌ 停 | ✅ | ✅ (ct.ftmo.com) | ❌ | ❌ | ❌ | ❌ | 部分 | ❌ |
| **TopStep** | ❌ | ❌ | ❌ | ✅ (主力) | ✅ | ❌ | ❌ | ✅ | ❌ |
| **FundedNext** | ✅ | ✅ | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ | ❌ |
| **The5ers** | ❌ 停 | ✅ | ✅ (2025 新)| ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **CryptoFundTrader** | ❌ | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ | ❌ | ✅ (直连)|
| **Apex** | ❌ | ❌ | ❌ | ❌ | ✅ (主力) | ❌ | ❌ | ❌ | ❌ |
| **Maven Trading** | ❌ | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **FundingPips** | ❌ 停 | ✅ | ❌ | ❌ | ❌ | ✅ | ✅ | ❌ | ❌ |

**观察**：
- MT4 **全行业已弃用**（2024-2025 迁出潮）
- cTrader 在 FX prop firm 中快速扩张（FTMO 带头）
- NinjaTrader 主宰美国期货 prop（TopStep + Apex）
- Match-Trader 是中型 FX prop 的主流选择
- **TopstepX 是 TopStep 自研**，其他都是第三方白标

## 六、市场 / 品种对比

| Prop Firm | FX | 指数 CFD | 股票 CFD | 加密 | 期货 | 大宗 |
|---|---|---|---|---|---|---|
| **FTMO** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **TopStep** | ❌ | ❌ | ❌ | 加密期货 | ✅ (主力) | ✅ |
| **FundedNext** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **The5ers** | ✅ | ✅ | ❌ | ✅ | ❌ | ✅ |
| **CryptoFundTrader** | ❌ | ❌ | ❌ | ✅ (主力) | ❌ | ❌ |
| **Apex** | ❌ | ❌ | ❌ | 加密期货 | ✅ (主力) | ✅ |
| **Maven Trading** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |
| **FundingPips** | ✅ | ✅ | ✅ | ✅ | ❌ | ✅ |

**清晰的分流**：
- **FX / CFD 派**：FTMO、FundedNext、The5ers、Maven、FundingPips —— 覆盖最广
- **期货派**：TopStep、Apex —— 美国合规（NFA），专注期货
- **加密派**：CryptoFundTrader —— 专注加密现货（Bybit 集成）

## 七、按用户画像推荐

### 想做 FX / 大宗 / 股指波段

**首选**：FTMO 或 The5ers
- 品牌最稳、payout 最透明
- cTrader 支持（对量化 / 算法友好）
- 代价：Challenge 费贵 10-20%

**性价比**：FundedNext 或 Maven Trading
- 规则类似，费用 20-30% 便宜
- 风险：品牌历史短

### 想做美国期货（ES、NQ、GC 等）

**首选**：TopStep
- Trading Combine 模式发明人
- 14 年运营历史
- **月度订阅**对连续交易者划算

**次选**：Apex Trader Funding
- 规则更严（2% 日亏损）但价格更低
- 爆发式增长但历史短（2022 创立）

### 想做加密

**唯一专业选择**：CryptoFundTrader
- 直接 Bybit 集成 = 真实加密市场
- 715+ 加密对
- 代价：信任度中等（运营仅 3-4 年）

### 想同时做 FX + 加密

**妥协**：FundedNext 或 The5ers
- 都有加密 CFD（非现货）
- **加密 CFD ≠ 真加密交易**（见 `../02-platforms/plus500.md`）

### 美国用户（2024-2026 复杂期）

- MFF 事件后 2024 年几乎所有 prop 停美国
- 2025-08 FTMO 通过 OANDA 重新进入（MT5 + CFTC license）
- The5ers 2025 年恢复部分美国服务
- **实际选择有限**：FTMO 是主流

## 八、红旗警告清单

评估任何 prop firm 都应检查的红灯：

### ❌ 立即排除

1. **不公开披露累计 payout**（要求"信任我们的 Trustpilot 评分"）
2. **Trustpilot 评分被 Trustpilot 自己警告**（CryptoFundTrader 曾有此情况）
3. **承诺"100% 通过率"**或类似不可能的营销
4. **要求"保证金" / "保险金"而非单一 Challenge 费**
5. **Trading 规则突然变更**且不通知已付费用户
6. **客服回复时间 > 48 小时**
7. **Discord / Telegram 群里大量用户抱怨 payout 被卡**
8. **创始人 / 管理层匿名**或**身份不一致**
9. **注册地是高风险辖区**（塞舌尔、伯利兹、马绍尔群岛）**且**无其他实体

### ⚠️ 谨慎

1. 运营 < 2 年（包括 CryptoFundTrader、Maven、FundingPips）
2. 创始人为**第一次做 prop firm**（vs 有 FX broker / trading 背景）
3. 单一平台依赖（如仅 MT5）
4. 不支持对冲交易（锁仓）
5. "Consistency rule" 定义模糊
6. 分成结构复杂不明确

### ⚠️ 具体公司标记

- **FundingPips**：2024 年被 MetaQuotes 清洗过，存在 license 风险
- **Maven Trading**：运营仅 3 年，scale 增长太快需谨慎
- **The5ers**：2024 年有用户投诉"一致性规则" 解释不清
- **FundedNext**：2024 年有印度 / 中东客户反映提现周期延长
- **Apex**：2024 年规则收紧，一些老用户觉得"越来越严"

## 九、历史教训：倒闭的 Prop Firm

两个**必须了解**的失败案例：

### MyForexFunds（MFF）— 2023 CFTC 诉讼

- 2020-2023 全球第二大（按客户数）
- 2023-08 CFTC 起诉 $310M "fraud"
- **核心指控**：funded 账户**从未对冲到外部市场** → 纯 B-book 诈骗
- 2024 年倒闭，用户无法提现
- 2025-05 CFTC 调查被特别专员质疑程序问题，部分撤诉
- **教训**：即使"看起来正规"，**business model 本身**就可能有问题

### True Forex Funds（TFF）— 2024 MetaQuotes 吊牌

- 布达佩斯 2020 创立，快速增长到 top 5
- 2024-02-06 MetaQuotes **突然吊销** MT5 license
- **原因**：使用第三方"equity sync"违反 MT5 TOS
- 一夜之间 **$3-5M 营收归零**
- 2024-03 公司停运
- **教训**：单一平台依赖 = 单点故障

## 十、怎么选：决策流程

### Step 1：确定市场

- 想做什么？**FX? 期货? 加密? 全部?**
- 对应到上表的"市场 / 品种对比"

### Step 2：确定预算

- 付得起多少 Challenge 费 × 失败次数？
- 建议预算 = **可承担损失的 2-3 倍**（覆盖平均失败次数）

### Step 3：评估你的策略匹配度

- 你的策略 R:R 比？持仓时间？
- 对应到 Challenge 规则（日亏损 / max DD / consistency rule）
- **不匹配的规则 = 必然失败**

### Step 4：检查信任度

- 优先：FTMO、TopStep（历史长 + 披露透明）
- 次选：The5ers、FundedNext、Apex
- 谨慎：新兴品牌
- **避免**：倒闭 / 被诉 / 匿名管理层

### Step 5：小额试水

- 从**最小账户**（$10-25K）开始，不要直接上 $100K
- 通过第一次后再考虑放大
- **不要**连续付多个 Challenge（沉没成本陷阱）

### Step 6：设定退出规则

- 给自己**最多 3 次尝试**
- 3 次失败 → 停 90 天
- 仍失败 → 考虑换策略，不是换 prop firm

## 十一、参考

### 各 Prop Firm 单独档案

- `../02-platforms/ftmo.md`
- `../02-platforms/topstep.md`
- `../02-platforms/fundednext.md`
- `../02-platforms/the5ers.md`
- `../02-platforms/cryptofundtrader.md`

### 相关分析

- `05-prop-firm-ecosystem.md`：prop firm 生态关系图
- `../05-trends/03-prop-firm-consolidation.md`：prop firm 并购历史
- `../07-essentials/02-prop-firm-casino.md`：prop firm 本质分析

### 业内报告

- [FTMO 2024 年报 - Finance Magnates](https://www.financemagnates.com/forex/ftmos-parent-netted-over-62-million-on-329m-revenue-in-2024/)
- [FTMO 10 周年 $450M 累计 payout](https://www.financemagnates.com/forex/ftmo-announces-over-450-million-paid-out-as-prop-trading-firm-turns-10/)
- [MyForexFunds CFTC 诉讼](https://www.financemagnates.com/forex/310-million-prop-trading-fraud-regulators-freeze-assets-of-my-forex-funds/)
- [True Forex Funds 被 MetaQuotes 吊牌](https://fxnewsgroup.com/forex-news/retail-forex/exclusive-prop-trading-firm-true-forex-funds-shut-down-by-metaquotes-move/)
- [Retail Prop Trading Market - Finance Magnates](https://www.financemagnates.com/thought-leadership/taking-stock-of-the-retail-prop-trading-market/)
- [Prop Firm 2026 规则变化预测](https://newyorkcityservers.com/blog/prop-firm-rule-changes-2026)
- [VeritasChain 2025 Prop Firm 复盘](https://veritaschain.org/blog/posts/2025-12-28-prop-trading-reckoning/)
- [TopstepX vs Classic 对比](https://blog.pickmytrade.io/topstepx-vs-topstep-classic-better-2025/)
- [FundedNext DailyForex 评测](https://www.dailyforex.com/forex-brokers/fundednext-review)
- [The5ers Trustpilot 评分](https://www.forexpropfirms.com/propfirms/the5ers-review)
- [CryptoFundTrader × Bybit 合作](https://cryptofundtrader.com/cryptofundtrader-x-bybit-redefining-the-future-of-crypto-prop-trading/)

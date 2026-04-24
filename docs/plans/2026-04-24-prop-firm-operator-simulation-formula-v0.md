# Prop Firm Operator - Simulation Formula v0

Date: 2026-04-24
Status: exploration

## 核心判断

第一版公式不应该追求真实财务精度。

它应该追求三件事：

1. 坏决定短期真的有效
2. 好看的增长会改变人群质量
3. 延迟后果能在 2-4 周后回来找玩家

这份文档的目标是：

**把周结算顺序里的 audience shift、signups、passes、costs、resource update 写成第一版可调公式。**

## 公式总原则

### 1. 所有资源仍然 clamp 到 0-100

```ts
const clamp100 = (x: number) => Math.max(0, Math.min(100, x));
```

### 2. 控制档位先转成偏移

5 档旋钮统一转为 `-2` 到 `+2`。

```ts
const levelBias = (level: 1 | 2 | 3 | 4 | 5) => level - 3;
```

例如：

- `1 = -2`
- `3 = 0`
- `5 = +2`

### 3. 每周先算结果，再算结构

顺序必须保持：

1. delayed effects
2. audience shift
3. signups
4. pass/fail
5. financials
6. resource updates
7. hidden counters
8. event trigger
9. snapshot

如果先改资源再算结果，玩家会更难理解因果。

## 输入变量

### Resources

```ts
cash
flow
passRate
payoutLiability
trust
regulatoryHeat
```

### Controls

```ts
challengeFee
profitTarget
maxDrawdown
payoutSplit
marketingTone
```

### Hidden Counters

```ts
complaintEcho
winnerVisibility
promoDebt
processorPatience
skilledCluster
```

### Audience

```ts
novice
gambler
skilled
```

## Step 1: Apply Delayed Effects

先把本周到期的 delayed effects 应用到当前 state。

```ts
for (const effect of dueDelayedEffects) {
  applyEffect(effect);
}
```

### 设计原则

到期后果要进 snapshot：

- createdWeek
- applyWeek
- sourceId
- narrativeHint

这样 Digest 能说清楚“这不是突然发生”。

## Step 2: Audience Shift

### 控制偏移

```ts
const fee = levelBias(challengeFee);
const target = levelBias(profitTarget);
const drawdown = levelBias(maxDrawdown);
const split = levelBias(payoutSplit);
const tone = levelBias(marketingTone);
```

如果旋钮 locked，用默认 `0`。

### 人群变化草模

```ts
noviceDelta =
  tone * 0.018
  - fee * 0.006
  - split * 0.004
  + promoDebt * 0.001;

gamblerDelta =
  tone * 0.012
  + fee * 0.008
  + target * 0.006
  + promoDebt * 0.0015
  - trustAbove60 * 0.004;

skilledDelta =
  split * 0.012
  + trustAbove50 * 0.006
  + winnerVisibility * 0.001
  - target * 0.004
  - tone * 0.004;
```

辅助值：

```ts
const trustAbove50 = Math.max(0, trust - 50) / 50;
const trustAbove60 = Math.max(0, trust - 60) / 40;
```

### Normalize

```ts
const raw = {
  novice: novice + noviceDelta,
  gambler: gambler + gamblerDelta,
  skilled: skilled + skilledDelta,
};

const total = raw.novice + raw.gambler + raw.skilled;

audience = {
  novice: raw.novice / total,
  gambler: raw.gambler / total,
  skilled: raw.skilled / total,
};
```

### 预期效果

- 高营销会显著推高新手和赌徒
- 高费用会减少新手但推高赌徒
- 高 split / 高 trust / winner visibility 会推高真高手

## Step 3: Signups

### 基础报名

```ts
baseSignups =
  30
  + flow * 0.8
  + marketingToneBias * 8
  + trust * 0.25
  + winnerVisibility * 0.25
  - regulatoryHeat * 0.35
  - challengeFeeBias * 5;
```

其中：

```ts
marketingToneBias = levelBias(marketingTone);
challengeFeeBias = levelBias(challengeFee);
```

### 人群质量修正

```ts
qualityMultiplier =
  1
  + audience.novice * 0.10
  + audience.gambler * 0.18
  - audience.skilled * 0.08;
```

### 最终报名

```ts
signups = Math.max(0, Math.round(baseSignups * qualityMultiplier));
```

### 设计意图

赌徒和新手会让报名更好看。

真高手不一定让报名总量暴涨，但会让后面的 payout 更危险。

## Step 4: Effective Pass Rate

`passRate` 是当前平台可见通过率基线，但本周有效通过率还受人群和旋钮影响。

### 公式

```ts
effectivePassRate =
  passRate
  + audience.skilled * 18
  - audience.novice * 5
  - profitTargetBias * 2.4
  + drawdownBias * 2.2
  + payoutSplitBias * 0.8
  + trustMomentum;
```

其中：

```ts
profitTargetBias = levelBias(profitTarget);
drawdownBias = levelBias(maxDrawdown);
payoutSplitBias = levelBias(payoutSplit);
trustMomentum = (trust - 50) * 0.03;
```

然后：

```ts
effectivePassRate = clamp(effectivePassRate, 3, 32);
```

### 解释

- 目标越高，通过率越低
- drawdown 越宽，通过率越高
- 真高手越多，通过率越高
- trust 高时，玩家感到平台更可过，但这个影响很小

## Step 5: Outcomes

```ts
passes = Math.round(signups * effectivePassRate / 100);
failures = signups - passes;
```

### Payout Requests

不是所有 passes 都立刻 payout。

```ts
payoutRequests =
  Math.round(
    passes
    * (0.35 + audience.skilled * 0.9)
    * (0.8 + payoutSplitBias * 0.12)
  );
```

### Successful Payouts

第一版不做复杂审核系统。

```ts
reviewFriction =
  flags.reviewsTightened ? 0.70 : 1;

processorFriction =
  processorPatience < 45 ? 0.85 : 1;

successfulPayouts =
  Math.round(payoutRequests * reviewFriction * processorFriction);
```

### 设计意图

- 真高手越多，payout requests 越多
- 加严审核能短期压住 successful payouts
- 支付耐心下降会让 payout 执行变差，并继续伤信任

## Step 6: Financials

### Fee Unit

```ts
feeUnit = 1.0 + challengeFeeBias * 0.18;
```

### Revenue

```ts
feeRevenue = signups * feeUnit * 0.18;
```

### Promo Cost

```ts
promoCost =
  marketingTone * 1.8
  + Math.max(0, marketingToneBias) * 2.5;
```

### Support Cost

```ts
supportCost =
  signups * 0.035
  + complaintEcho * 0.22
  + promoDebt * 0.18;
```

### Payout Cost

```ts
splitMultiplier = 0.75 + payoutSplitBias * 0.12;

payoutCost =
  successfulPayouts
  * splitMultiplier
  * 1.4;
```

### Cash Delta

```ts
cashDelta =
  feeRevenue
  - promoCost
  - supportCost
  - payoutCost;
```

然后压缩成资源变化：

```ts
cashResourceDelta = cashDelta * 0.55;
```

## Step 7: Resource Updates

### Cash

```ts
cashEnd = clamp100(cash + cashResourceDelta);
```

### Flow

```ts
flowDelta =
  marketingToneBias * 5
  + winnerVisibility * 0.08
  + trust * 0.04
  - regulatoryHeat * 0.06
  - challengeFeeBias * 3
  - complaintEcho * 0.04;

flowEnd = clamp100(flow + flowDelta);
```

### Pass Rate

可见 `passRate` 不要每周完全等于 effective pass rate。

它应该是平台结构的慢变量。

```ts
passRateDelta =
  - profitTargetBias * 1.4
  + drawdownBias * 1.2
  + audience.skilled * 1.5
  - audience.novice * 0.7;

passRateEnd = clamp(passRate + passRateDelta, 3, 32);
```

### Payout Liability

```ts
payoutLiabilityDelta =
  passes * 0.22
  + payoutRequests * 0.45
  + audience.skilled * 6
  + winnerVisibility * 0.05
  + payoutSplitBias * 2
  - successfulPayouts * 0.35;

payoutLiabilityEnd = clamp100(payoutLiability + payoutLiabilityDelta);
```

### Trust

```ts
trustDelta =
  successfulPayouts * 0.55
  + payoutSplitBias * 1.8
  + drawdownBias * 1.0
  - complaintEcho * 0.12
  - marketingToneBias * 1.8
  - Math.max(0, -cashDelta) * 0.08
  - regulatoryHeat * 0.04;

if (flags.reviewsTightened) trustDelta -= 3;
if (processorPatience < 45) trustDelta -= 2;

trustEnd = clamp100(trust + trustDelta);
```

### Regulatory Heat

```ts
regulatoryHeatDelta =
  marketingToneBias * 2.4
  + complaintEcho * 0.10
  + Math.max(0, 50 - trust) * 0.05
  + Math.max(0, payoutLiability - 40) * 0.04
  - Math.max(0, 65 - regulatoryHeat) * 0.02;

regulatoryHeatEnd = clamp100(regulatoryHeat + regulatoryHeatDelta);
```

### 设计注意

`Regulatory Heat` 有轻微自然冷却，但冷却很弱。

这能表达：

- 监管压力不是每天归零
- 但如果长期收敛，也能慢慢降温

## Step 8: Hidden Counter Updates

### Complaint Echo

```ts
newComplaints =
  Math.max(0, 10 - effectivePassRate) * 0.9
  + Math.max(0, marketingToneBias) * 2.2
  + Math.max(0, 45 - trust) * 0.08
  + supportCost * 0.25
  + promoDebt * 0.12;

complaintEchoEnd =
  complaintEcho * 0.72
  + newComplaints;
```

Clamp:

```ts
complaintEchoEnd = clamp100(complaintEchoEnd);
```

### Winner Visibility

```ts
newWinnerSignal =
  successfulPayouts * 1.8
  + Math.max(0, trust - 50) * 0.06
  + Math.max(0, payoutSplitBias) * 2.0;

winnerVisibilityEnd =
  winnerVisibility * 0.78
  + newWinnerSignal;
```

### Promo Debt

```ts
promoDebtEnd =
  promoDebt * 0.68
  + Math.max(0, marketingToneBias) * 1.8;
```

### Processor Patience

```ts
processorPatienceDelta =
  - regulatoryHeat * 0.08
  - complaintEcho * 0.06
  - Math.max(0, payoutRequests - successfulPayouts) * 1.5
  + Math.max(0, 60 - regulatoryHeat) * 0.03;

processorPatienceEnd =
  clamp100(processorPatience + processorPatienceDelta);
```

### Skilled Cluster

```ts
skilledClusterDelta =
  audience.skilled * 8
  + winnerVisibility * 0.10
  + payoutSplitBias * 1.5
  + Math.max(0, trust - 50) * 0.04
  - profitTargetBias * 0.8;

skilledClusterEnd =
  clamp100(skilledCluster * 0.82 + skilledClusterDelta);
```

## Step 9: Event Trigger Scoring

每周计算事件权重。

第一局可以半导演，但仍建议保留 scoring。

### 示例

```ts
scoreWeekendPromo =
  week === 3
    ? 100
    : cash < 55 || flow < 60
      ? 60
      : 0;

scoreFeelsRigged =
  complaintEchoEnd >= 22 || passRateEnd <= 8
    ? 40 + complaintEchoEnd * 0.8
    : 0;

scoreViralWinner =
  week === 6
    ? 100
    : winnerVisibilityEnd >= 16
      ? 35 + winnerVisibilityEnd
      : 0;

scoreSilentWinners =
  week === 8
    ? 100
    : skilledClusterEnd >= 16 || payoutLiabilityEnd >= 32
      ? 30 + skilledClusterEnd
      : 0;

scorePaymentWarning =
  week === 10
    ? 100
    : regulatoryHeatEnd >= 42 || processorPatienceEnd <= 52
      ? 45 + regulatoryHeatEnd - processorPatienceEnd * 0.3
      : 0;

scoreRegulatorLetter =
  week >= 12 && regulatoryHeatEnd >= 50
    ? 50 + regulatoryHeatEnd
    : 0;
```

### 选择规则

```ts
eligibleEvents
  .filter(notTriggered)
  .sort(byScoreDesc)
  .at(0)
```

第一版每周最多触发 1 个事件。

## Step 10: Ending Preview Scoring

Week 12 不做完整 ending，而是 diagnosis。

### 规则

```ts
if (trust <= 25) return "trust_collapse_preview";

if (payoutLiability >= 55 && cash <= 45) {
  return "payout_shock_preview";
}

if (regulatoryHeat >= 55) return "room_is_shrinking";

if (trust >= 55 && payoutLiability >= 42) {
  return "credibility_is_expensive";
}

if (cash >= 65 && trust <= 42) return "dirty_momentum";

return "crowd_still_believes";
```

### 诊断证据

每个 diagnosis 应该显示 3 个证据：

- 1 个资源
- 1 个 hidden counter 的可见影子
- 1 个玩家 flag 或关键选择

例如：

```text
Dirty Momentum
- Cash stayed above 70.
- Complaint pressure kept rising under the surface.
- You used promo growth and tightened reviews when pressure arrived.
```

## 三条路线的预期结果

### Route A: 脏增长

设置倾向：

- 高 `marketingTone`
- 中高 `challengeFee`
- 高 `profitTarget`
- 低 `payoutSplit`

预期：

- Week 1-5 cash / flow 好看
- Week 6-9 complaint echo 上升
- Week 10 processor warning 更尖锐
- Week 12 进入 `dirty_momentum` 或 `room_is_shrinking`

### Route B: 伪公平

设置倾向：

- 中等 `marketingTone`
- 中等规则
- 中高 `payoutSplit`
- 较宽 `maxDrawdown`

预期：

- trust 更稳
- winner visibility 上升
- payout liability 更早变重
- Week 12 进入 `credibility_is_expensive` 或 `payout_shock_preview`

### Route C: 理性勒紧

设置倾向：

- 低营销
- 高 `profitTarget`
- 紧 `maxDrawdown`
- 中低 `payoutSplit`

预期：

- cash 短期稳定
- flow 变冷
- pass rate 偏低
- complaint echo 慢慢聚集
- Week 12 进入 `trust_collapse_preview` 或低增长诊断

## 调参优先级

### 如果太容易

优先调：

1. `complaintEcho` 对 trust 的伤害
2. `regulatoryHeat` 对 flow 的压制
3. `payoutLiability` 的增长系数

### 如果太难

优先调：

1. Week 1-4 的 cashDelta multiplier
2. supportCost 的 complaint 系数
3. payment warning 的触发阈值

### 如果玩家看不懂反噬

不要先改公式。

先改：

1. delayed effect narrative hints
2. risk card 文案
3. snapshot 回顾

## v0 红线

### 红线 1

任何路线都不应该 Week 3 前暴毙。

### 红线 2

高营销路线必须 Week 1-4 明显更爽。

### 红线 3

高 trust / 高 split 路线必须明显更贵。

### 红线 4

赢家事件必须同时提高 `Trust` 和 `Payout Liability`。

### 红线 5

支付/监管事件必须让玩家感觉经营空间变窄，而不是只是扣血。

## 一句话总结

Simulation Formula v0 的目标，不是算出真实 prop firm 的财务模型，

而是给原型一套可调的因果机器：

**让增长先变甜，让人群变脏，让赢家变贵，让后果晚一点但准时回来。**

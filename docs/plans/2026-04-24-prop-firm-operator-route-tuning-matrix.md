# Prop Firm Operator - Route Tuning Matrix

Date: 2026-04-24
Status: v0-sim

## 核心判断

公式写完以后，最容易发生的坏事不是数值不准。

而是：

- 三条路线玩起来像同一条
- 高风险打法不够甜
- 体面打法不够贵
- 玩家死法没有人格差异

这份文档的目标是：

**把脏增长、伪公平、理性勒紧三条路线的每周预期数值区间和失败/诊断目标列成调参矩阵。**

## 使用方式

每次改公式后，跑三条 scripted routes。

检查每周关键资源是否落在目标区间。

如果偏离，不要立刻重写系统。

先调：

- 系数
- 事件 timing
- delayed effect 强度
- digest 文案提示

## 三条 Scripted Routes

### Route A: Dirty Growth

玩家姿态：

- 高营销
- 中高费用
- 高 profit target
- 偏紧 drawdown
- 低 payout split

推荐 controls：

```ts
{
  challengeFee: 4,
  profitTarget: 4,
  maxDrawdown: 2,
  payoutSplit: 2,
  marketingTone: 5
}
```

预期感觉：

**钱和流量太好看，以至于玩家愿意忽略味道。**

### Route B: Pseudo Fair

玩家姿态：

- 中营销
- 中费用
- 中等 profit target
- 偏宽 drawdown
- 高 payout split

推荐 controls：

```ts
{
  challengeFee: 3,
  profitTarget: 3,
  maxDrawdown: 4,
  payoutSplit: 4,
  marketingTone: 3
}
```

预期感觉：

**品牌更稳，但真实性很快变成账单。**

### Route C: Rational Tightening

玩家姿态：

- 低营销
- 中高费用
- 高 profit target
- 紧 drawdown
- 中低 payout split

推荐 controls：

```ts
{
  challengeFee: 4,
  profitTarget: 5,
  maxDrawdown: 1,
  payoutSplit: 2,
  marketingTone: 2
}
```

预期感觉：

**看起来理性风控，实际上把用户体验压成慢性不信任。**

## Route A: Dirty Growth Matrix

### Week 1-3

目标区间：

- `Cash`: 66-82
- `Flow`: 85-100
- `Pass Rate`: 7-12
- `Payout Liability`: 12-22
- `Trust`: 40-52
- `Regulatory Heat`: 22-34
- `Complaint Echo`: 10-24

应触发感觉：

- 玩家觉得自己开局很好
- Promo 非常诱人
- Trust 下滑不应立刻吓退玩家

调参红线：

- 如果 `Cash < 55`，脏增长不够甜
- 如果 `Complaint Echo > 35`，惩罚太早

### Week 4-6

目标区间：

- `Cash`: 72-90
- `Flow`: 88-100
- `Pass Rate`: 5-10
- `Payout Liability`: 18-34
- `Trust`: 32-46
- `Regulatory Heat`: 30-46
- `Complaint Echo`: 24-45

应触发事件：

- `Feels Rigged Forum Post`
- `Viral Winner Thread`

应触发感觉：

- 现金仍好看
- 舆情开始有记忆
- winner thread 让玩家想继续放大增长

### Week 7-9

目标区间：

- `Cash`: 60-84
- `Flow`: 72-95
- `Pass Rate`: 4-9
- `Payout Liability`: 28-48
- `Trust`: 24-40
- `Regulatory Heat`: 42-62
- `Complaint Echo`: 40-65

应触发事件：

- `Silent Winners Cluster`
- `Support Queue` 或 forum echo

应触发感觉：

- 玩家第一次觉得外面还热，里面已经裂
- 玩家可能会加严审核或买时间

### Week 10-12

目标区间：

- `Cash`: 45-78
- `Flow`: 55-85
- `Pass Rate`: 3-8
- `Payout Liability`: 42-65
- `Trust`: 18-36
- `Regulatory Heat`: 55-78
- `Complaint Echo`: 55-80

目标 diagnosis：

- `dirty_momentum`
- 或 `room_is_shrinking`
- 极端时 `trust_collapse_preview`

调参红线：

- 如果 Week 12 仍然 `Trust > 50`，脏增长太无代价
- 如果 Week 12 `Cash < 20`，惩罚过猛，玩家只会觉得暴毙

## Route B: Pseudo Fair Matrix

### Week 1-3

目标区间：

- `Cash`: 55-70
- `Flow`: 72-90
- `Pass Rate`: 11-17
- `Payout Liability`: 16-26
- `Trust`: 50-62
- `Regulatory Heat`: 20-30
- `Winner Visibility`: 8-18

应触发感觉：

- 增长没有 Route A 爽
- 但玩家觉得平台更体面
- 现金略有压力

调参红线：

- 如果 `Cash` 比 Route A 还高，体面路线太便宜
- 如果 `Trust` 没有明显更高，体面路线没有意义

### Week 4-6

目标区间：

- `Cash`: 48-68
- `Flow`: 70-88
- `Pass Rate`: 14-22
- `Payout Liability`: 28-45
- `Trust`: 56-72
- `Regulatory Heat`: 22-34
- `Winner Visibility`: 18-34

应触发事件：

- `Viral Winner Thread`

应触发感觉：

- 成功案例令人开心
- 但 payout 请求开始让现金变紧

### Week 7-9

目标区间：

- `Cash`: 38-60
- `Flow`: 64-84
- `Pass Rate`: 16-25
- `Payout Liability`: 42-62
- `Trust`: 54-70
- `Regulatory Heat`: 28-42
- `Skilled Cluster`: 24-45

应触发事件：

- `Silent Winners Cluster`

应触发感觉：

- 玩家发现信任不是护盾，是入口
- 真高手让平台变得更贵

### Week 10-12

目标区间：

- `Cash`: 25-52
- `Flow`: 55-78
- `Pass Rate`: 16-28
- `Payout Liability`: 58-82
- `Trust`: 48-68
- `Regulatory Heat`: 34-52
- `Winner Visibility`: 35-60

目标 diagnosis：

- `credibility_is_expensive`
- 或 `payout_shock_preview`

调参红线：

- 如果 `Payout Liability < 45`，体面路线不够贵
- 如果 `Trust < 30`，体面路线和脏增长没有区别

## Route C: Rational Tightening Matrix

### Week 1-3

目标区间：

- `Cash`: 60-76
- `Flow`: 60-78
- `Pass Rate`: 5-10
- `Payout Liability`: 10-20
- `Trust`: 42-54
- `Regulatory Heat`: 18-28
- `Complaint Echo`: 12-26

应触发感觉：

- 玩家觉得自己在做稳健风控
- 增长没有那么爽
- 投诉还没爆，但有“不好过”的味道

### Week 4-6

目标区间：

- `Cash`: 60-80
- `Flow`: 48-68
- `Pass Rate`: 4-8
- `Payout Liability`: 14-26
- `Trust`: 34-48
- `Regulatory Heat`: 22-36
- `Complaint Echo`: 26-44

应触发事件：

- `Feels Rigged Forum Post`

应触发感觉：

- 玩家觉得明明控制住了风险，却越来越难卖
- 用户开始把失败归因给平台

### Week 7-9

目标区间：

- `Cash`: 50-72
- `Flow`: 35-58
- `Pass Rate`: 3-7
- `Payout Liability`: 18-34
- `Trust`: 24-42
- `Regulatory Heat`: 30-48
- `Complaint Echo`: 42-62

应触发感觉：

- 平台没有立刻死
- 但增长变冷，投诉变硬
- 玩家可能想通过大促救流量

### Week 10-12

目标区间：

- `Cash`: 38-66
- `Flow`: 25-50
- `Pass Rate`: 3-7
- `Payout Liability`: 18-38
- `Trust`: 18-36
- `Regulatory Heat`: 38-58
- `Complaint Echo`: 55-78

目标 diagnosis：

- `trust_collapse_preview`
- 或低增长版 `dirty_momentum`

调参红线：

- 如果 `Cash` 太高且 `Trust` 也高，紧规则路线太强
- 如果 `Flow` 太快归零，玩家会失去操作空间

## 横向差异检查

每次跑完三条路线，检查下面差异。

### Week 6

应满足：

- Route A `Cash` 最高
- Route B `Trust` 最高
- Route C `Pass Rate` 最低
- Route B `Payout Liability` 开始追上或超过 Route A

### Week 9

应满足：

- Route A `Complaint Echo` 高
- Route B `Skilled Cluster` 高
- Route C `Flow` 明显更低
- 三条路线至少触发 2 种不同事件组合

### Week 12

应满足：

- Route A 更像脏成功或监管压缩
- Route B 更像兑现压力
- Route C 更像信任慢性崩塌
- 至少 2 种 diagnosis
- 最好 3 种 diagnosis

## 调参决策表

### 脏增长不够甜

优先提高：

- marketingTone 对 signups 的影响
- promo immediate cash
- feeRevenue multiplier

不要降低：

- complaintEcho 延迟后果

### 脏增长不够脏

优先提高：

- marketingTone 对 complaintEcho
- complaintEcho 对 trust
- regulatoryHeat 对 flow 的中后期压制

### 体面路线不够贵

优先提高：

- payoutSplit 对 payoutLiability
- skilled audience 对 payoutRequests
- successfulPayouts 对 cash cost

### 体面路线太难

优先提高：

- payoutSplit 对 trust
- trust 对 flow 的正反馈
- successfulPayouts 对 winnerVisibility 的正反馈

### 理性勒紧太强

优先提高：

- low pass rate 对 complaintEcho
- low pass rate 对 flow 的负面影响
- tight drawdown 对 trust 的负面影响

### 理性勒紧太弱

优先提高：

- low payoutLiability 对 cash 稳定性的帮助
- high target 对 short-term cash 的帮助

## Playtest 对照

### 如果玩家不做脏增长

说明 Route A Week 1-3 不够甜。

### 如果玩家只做脏增长

说明 Route A Week 7-12 反噬不够可读，或 Route B/C 的优势不明显。

### 如果玩家觉得赢家是纯好事

说明 Route B 的 payout liability 上升不够快，或 Digest 没有把 winner risk 说清。

### 如果玩家觉得所有路线都随机

说明 route 差异没有在 Week 5-9 形成清晰模式。

## 一句话总结

Route Tuning Matrix 的目标，不是把数值锁死，

而是给未来调参一个判断尺：

**三条路线都该短期有道理，长期有账单，而且每张账单都像不同人格亲手签下的。**

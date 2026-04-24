# Prop Firm Operator - Playtest Runbook

Date: 2026-04-24
Status: exploration

## 核心判断

第一轮 playtest 不是展示 demo。

它是一场小型诊断：

**看玩家会不会在 20-30 分钟里被增长诱惑、替坏决定找理由、在反噬出现时意识到那是自己喂出来的。**

这份 runbook 的目标是：

**把 5-8 人试玩流程写成主持脚本、观察表、结束访谈和结果整理模板。**

## Playtest 目标

第一轮只验证 5 件事：

1. 玩家是否能在 5 分钟内理解自己经营的是什么
2. 玩家是否能在 Week 1-3 感到增长爽感
3. 玩家是否会主动做一次短期合理但长期有毒的选择
4. 玩家是否能在 Week 5-10 理解延迟后果
5. 玩家是否在 Week 12 后想重开另一种路线

## 样本建议

总人数：

- `5-8 人`

结构：

- 2-3 个经营 sim 玩家
- 2-3 个熟悉交易/金融平台的人
- 1-2 个不懂 prop firm 但玩策略游戏的人

单场时长：

- `45-60 分钟`

实际试玩：

- `20-30 分钟`

访谈：

- `15-20 分钟`

## 准备材料

### 主持人需要

- 可运行原型
- 观察表
- 计时器
- 录屏或笔记工具
- 试玩者编号
- 一份空白 route export 文件夹

### 原型需要

- reset run
- export snapshots
- debug panel 仅主持人可见
- Week 12 diagnosis

### 不要准备

- 长教程
- 行业解释 slide
- “正确玩法”说明
- 公式说明

这场测试要看玩家自然读懂多少。

## 主持人开场脚本

可以照读：

```text
今天我们测试的是一个很早期的经营原型，不是完成品。

你会接手一家增长很快的挑战平台。目标是在 12 周内让它继续增长，同时别让结构太早崩。

我不会提前解释每个系统，因为我们想看界面和反馈本身是否足够清楚。

请你尽量边玩边说出你的想法：你在看什么、为什么这么选、你觉得发生了什么。

这不是测试你会不会玩，而是测试这个原型有没有把事情说清楚。
```

## 试玩中主持原则

### 可以说

- “你现在在看什么？”
- “你为什么想选这个？”
- “你觉得这周发生了什么？”
- “这个结果像是你造成的吗？”
- “你现在最担心哪个指标？”

### 不要说

- “这个选择其实会……”
- “这里你应该……”
- “这个是因为上周你……”
- “你看，这就是我们想表达的……”

主持人只追问，不教学。

## 试玩流程

### Phase 0: Setup

时长：

- `2-3 分钟`

动作：

- 读开场脚本
- 确认玩家会 think aloud
- 打开原型
- 从 Week 1 开始

观察：

- 玩家是否马上扫资源
- 是否理解 `Cash` / `Flow` / `Pass Rate`
- 是否问“prop firm 是什么”

### Phase 1: Week 1-3

目标：

- 看增长爽感是否成立
- 看第一次诱惑是否成立

主持问题：

- “你现在最想改善哪个数字？”
- “这个按钮给你的感觉是什么？”
- “这次促销像不像一个合理选择？”

观察重点：

- first_excitement_moment
- first_dirty_choice
- dirty_choice_self_justification

危险信号：

- 玩家完全没有爽感
- 玩家一开始就道德拒绝所有增长按钮
- 玩家觉得所有按钮都只是数值优化

### Phase 2: Week 4-6

目标：

- 看玩家是否理解赢家双重性
- 看 digest 是否让故事变清楚

主持问题：

- “有人成功 payout，你觉得这是好事还是坏事？”
- “你会不会想放大这个 winner thread？”
- “你觉得现在平台更安全吗，还是更贵了？”

观察重点：

- winner_risk_understood
- most_watched_metric
- narrative_feed_read

危险信号：

- 玩家把赢家当纯奖励
- 玩家跳过 narrative feed
- 玩家不知道 `Payout Liability` 是什么

### Phase 3: Week 7-10

目标：

- 看延迟反噬是否可理解
- 看支付/监管是否像经营空间变窄

主持问题：

- “你觉得这个问题为什么现在出现？”
- “这像随机事件，还是像之前选择的后果？”
- “你现在是在解决问题，还是把问题推迟？”

观察重点：

- delayed_consequence_understood
- felt_random_event
- first_regret_moment

危险信号：

- 玩家说“这怎么突然发生”
- 玩家觉得 payment warning 只是扣分事件
- 玩家无法回忆 Week 3 或 Week 6 的选择

### Phase 4: Week 11-12

目标：

- 看 diagnosis 是否让玩家理解自己路线
- 看是否产生重开欲望

主持问题：

- “你觉得这张诊断像你刚才这局吗？”
- “你觉得自己这局经营成了什么样的平台？”
- “如果重开，你最想换哪条打法？”

观察重点：

- desired_replay_route
- one_sentence_player_diagnosis
- diagnosis_fit_score

危险信号：

- 玩家只问“我赢了吗”
- 玩家不记得自己的路线
- 玩家没有任何重开想法

## 观察表模板

每位玩家一张。

```text
Player ID:
Date:
Persona type:

Time to understand business:
First excitement moment:
First dirty choice:
Self-justification quote:
Most watched metric:
Ignored panel:
First confusion point:

Did they understand delayed consequence?
[ ] Yes
[ ] Partial
[ ] No
Evidence:

Did they understand winner risk?
[ ] Yes
[ ] Partial
[ ] No
Evidence:

Did any event feel random?
[ ] Yes
[ ] No
Which:

Did they want to replay?
[ ] Yes
[ ] Maybe
[ ] No
Desired replay route:

One-sentence player diagnosis:
```

## Event Moment Log

事件发生时，观察者快速记：

```text
Week:
Event:
Option chosen:
Player reason:
Did they mention short-term benefit?
Did they mention long-term cost?
Did they connect later consequence to this event?
```

这张表最重要的是 `Player reason`。

产品的核心不是玩家选了什么，而是玩家为什么觉得那样选合理。

## 结束访谈脚本

### Section 1: Understanding

1. 你觉得你刚才经营的到底是什么生意？
2. 你觉得这家公司主要靠什么赚钱？
3. 哪个资源最重要？哪个最不清楚？

### Section 2: Temptation

1. 哪个选择让你第一次觉得“这招有效”？
2. 有没有一个选择你知道不太好，但还是想按？
3. 你当时给自己的理由是什么？

### Section 3: Consequence

1. 哪个坏结果你觉得是自己造成的？
2. 哪个坏结果像随机惩罚？
3. 你希望系统怎样提醒你前几周埋下的风险？

### Section 4: Winners

1. 当有人成功拿到 payout 时，你第一反应是什么？
2. 你什么时候意识到赢家也可能是风险？
3. winner thread 有没有改变你的玩法？

### Section 5: Replay

1. 你想不想立刻再玩一局？
2. 如果重开，你会换什么打法？
3. 你觉得自己这局活成了哪种平台？

## 评分表

每个玩家结束后，主持人给 1-5 分。

### A. Fantasy Clarity

玩家是否理解自己在经营挑战平台。

- 1 = 完全不懂
- 3 = 大致懂，但需要解释
- 5 = 自己能说清商业逻辑

### B. Temptation Strength

玩家是否感到坏决定短期诱人。

- 1 = 完全没诱惑
- 3 = 有一点，但像游戏选项
- 5 = 主动为坏决定找经营理由

### C. Consequence Legibility

玩家是否理解反噬来自早期选择。

- 1 = 全部像随机
- 3 = 部分理解
- 5 = 能主动追溯到前几周

### D. Winner Ambivalence

玩家是否理解赢家既是资产也是负债。

- 1 = 赢家是纯奖励
- 3 = 访谈后能理解
- 5 = 试玩中自己意识到

### E. Replay Pull

玩家是否想重开。

- 1 = 不想
- 3 = 可能想试
- 5 = 明确提出新路线

## 成功门槛

第一轮 5 人测试，建议用下面门槛判断是否继续做 UI polish。

### Green Light

- 平均 `Fantasy Clarity >= 4`
- 平均 `Temptation Strength >= 3.5`
- 平均 `Consequence Legibility >= 3.5`
- 至少 3/5 玩家想重开

### Yellow Light

- Fantasy 清楚，但 temptation 或 consequence 低
- 继续调数值和 digest，不扩内容

### Red Light

- 多数玩家不知道自己在经营什么
- 多数事件被理解成随机惩罚
- 多数玩家不想重开

Red Light 不代表题材死了。

它通常意味着：

- onboarding 不够直接
- Week 1-3 不够甜
- delayed consequence 没有可见影子

## 结果整理模板

每轮 playtest 后写一页 summary。

```text
Playtest Batch:
Date:
Number of players:

Average scores:
- Fantasy Clarity:
- Temptation Strength:
- Consequence Legibility:
- Winner Ambivalence:
- Replay Pull:

Top 3 observed moments:
1.
2.
3.

Top 3 breakdowns:
1.
2.
3.

Quotes that matter:
-
-
-

Decision:
[ ] Green Light
[ ] Yellow Light
[ ] Red Light

Next changes:
1.
2.
3.
```

## 第一轮后怎么决策

### 如果 Green Light

下一步：

- 做 UI hierarchy polish
- 加 debug export
- 做第 2 个 founder stub
- 准备第二轮 8-12 人测试

### 如果 Yellow Light

下一步：

- 只改数值、digest 和 event timing
- 不加新事件
- 不做新模式

### 如果 Red Light

下一步：

- 回到 onboarding
- 重写 Week 1-3
- 降低概念负担
- 强化“报名费 + 失败率 + payout 账单”的首屏解释

## 一句话总结

Playtest Runbook 的目标，不是让玩家夸原型，

而是逼出最重要的证据：

**这台机器是否能让玩家先相信自己在经营，随后发现自己其实已经开始替机器辩护。**

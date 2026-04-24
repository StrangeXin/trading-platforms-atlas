# Prop Firm Operator - Open Questions Log

Date: 2026-04-24
Status: exploration

## 核心判断

进入实现前，不需要把所有问题都想完。

但必须区分：

- 哪些问题现在必须回答
- 哪些问题可以用默认假设先做
- 哪些问题必须等 playtest 或 route tuning 回答

这份文档的目标是：

**记录进入实现前仍未确定的问题、默认假设、何时需要通过 playtest 或调参回答。**

## Decision Rule

每个 open question 都要有一个默认处理方式。

不要让未决问题阻塞 v0，除非它会影响：

- 12-week run 是否能成立
- simulation schema 是否稳定
- playtest 是否能测到核心 loop

## Product Questions

### Q1: v0 是否需要多个 founder？

Default:

- 不需要。
- 只实现 `The Showman`。

Why:

- v0 测的是核心 loop，不是 replay breadth。

When to revisit:

- 如果 5 人 playtest 中至少 3 人想重开但不知道换什么路线。

Answer source:

- Playtest replay intent.

### Q2: v0 是否需要多个 scenario？

Default:

- 不需要。
- 只实现 `Bull Euphoria`。

Why:

- 牛市场景最容易制造早期诱惑。

When to revisit:

- 如果核心 loop 成立，但玩家第二轮觉得同一市场气候变化少。

Answer source:

- 第二轮 playtest.

### Q3: Week 12 应该是结局还是诊断？

Default:

- 诊断。

Why:

- v0 不是完整 run。
- 诊断比 ending 更适合测试路线理解和重开欲望。

When to revisit:

- 如果玩家普遍问“所以我赢了吗”，但仍能理解路线。

Answer source:

- Playtest interview.

## Simulation Questions

### Q4: 资源是否全部保持 0-100？

Default:

- 是。

Why:

- v0 需要可调和可读，不需要真实财务精度。

When to revisit:

- 如果玩家误以为 `Cash = 70` 是真实金额，或数值缺乏经营感。

Answer source:

- UI comprehension notes.

### Q5: pass rate 是否应该可见？

Default:

- 可见。

Why:

- 这是平台最伪中立也最关键的变量。
- 玩家需要看到自己在设计失败率。

Risk:

- 玩家可能把它理解成越高越好。

Mitigation:

- 状态词使用 `Engineered` / `Tight` / `Leaking`，而不是 good/bad。

When to revisit:

- 如果玩家持续把 pass rate 当普通成功率优化。

### Q6: hidden counters 是否完全隐藏？

Default:

- 数字隐藏，影子可见。

Why:

- 直接显示会变成 min-max。
- 完全隐藏会让反噬像随机。

Implementation:

- Debug panel 显示数字。
- RiskCard / Digest / Diagnosis 显示人话影子。

When to revisit:

- 如果玩家仍然无法理解 delayed consequences。

## Event Questions

### Q7: 事件应该固定还是随机？

Default:

- v0 半导演。

Implementation:

- Week 3 / 6 / 8 / 10 有强权重事件。
- 事件内容和后果读取当前状态。

Why:

- 第一局需要证明因果，不需要证明内容池。

When to revisit:

- 如果第二轮玩家觉得 replay 缺少变化。

### Q8: 事件选项是否应该显示精确数值后果？

Default:

- 不显示。

Show:

- Direction chips.
- Delayed risk hint.

Why:

- 精确数字会让玩家 min-max。
- v0 需要经营姿态，不是 spreadsheet。

When to revisit:

- 如果玩家完全无法理解选择方向。

### Q9: 支付/监管事件是否太晚？

Default:

- `Payment Processor Warning` 不早于 Week 10。
- `First Regulator Letter` 不早于 Week 12。

Why:

- 早期要先让玩家尝到增长。

When to revisit:

- 如果 Week 7-10 缺少足够压迫感。

## UI Questions

### Q10: 是否需要单独 Rule Desk / Growth Desk / Trust & Risk 页面？

Default:

- v0 不需要。
- 先在 Control Room + modal/digest 里完成。

Why:

- 多页面会增加 navigation friction。
- v0 测的是 loop，不是完整 IA。

When to revisit:

- 如果玩家理解了 loop，但觉得控制区太拥挤。

### Q11: 是否需要图表？

Default:

- 不需要复杂图表。

Allowed:

- Tiny deltas
- Mini status bars
- Simple trend hints

Why:

- 图表会吸走第一版的实现时间。

When to revisit:

- 如果玩家无法回忆前几周变化，需要更强历史表达。

### Q12: 是否需要移动端适配？

Default:

- 只做最低限度。

Why:

- 第一轮 playtest 应在 desktop/laptop 上进行。

When to revisit:

- 如果未来要公开试玩或网页 demo。

## Playtest Questions

### Q13: 第一轮测几个人？

Default:

- 5 人起步。

Why:

- 足够发现 loop 级问题。

When to expand:

- Green or Yellow Light 后再测 8-12 人。

### Q14: 是否允许主持人解释 prop firm？

Default:

- 不解释商业模式。

Allowed setup:

- “你接手了一家增长很快的挑战平台。”

Why:

- 如果必须靠主持人解释，onboarding 不成立。

When to revisit:

- 如果所有陌生玩家都卡在题材入口，但经营 sim 玩家能顺利进入。

### Q15: 怎么判断玩家真的被诱惑？

Default signal:

- 玩家主动选择短期有毒按钮，并说出经营理由。

Examples:

- “先把现金拉回来。”
- “这个 winner thread 现在不用就浪费了。”
- “审核紧一点应该能撑过去。”

Not enough:

- 玩家只是说按钮看起来好。

## Implementation Questions

### Q16: Zustand 还是 reducer？

Default:

- 先用 React reducer 或轻 Zustand，选项目启动时更快的。

Decision rule:

- 如果状态流很快复杂，用 Zustand。
- 如果只是一条 run state，reducer 足够。

Do not block:

- 不要因为状态库选择拖延 Day 1。

### Q17: 是否需要测试框架？

Default:

- 至少需要 simulation smoke script。

Optional:

- Vitest 如果 scaffold 很顺手。

Must have:

- scripted routes
- route assertions

### Q18: route export 格式是否要稳定？

Default:

- v0 需要稳定到可复盘，但不承诺长期兼容。

Required fields:

- runId
- snapshots
- choices
- delayed effects
- events
- diagnosis

When to revisit:

- 第一轮 playtest 后再定 export schema v1。

## Highest-Priority Unknowns

These must be answered by v0:

1. Does Week 1-3 feel tempting?
2. Do delayed consequences feel traceable?
3. Do winners feel ambivalent?
4. Do routes differentiate?
5. Does diagnosis create replay desire?

Everything else can wait.

## 一句话总结

Open Questions Log 的目标，不是把不确定性消灭，

而是把不确定性放到正确的位置：

**能用默认假设前进的就前进，必须靠玩家回答的就让原型去问。**

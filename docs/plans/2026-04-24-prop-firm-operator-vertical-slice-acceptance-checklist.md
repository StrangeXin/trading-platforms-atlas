# Prop Firm Operator - Vertical Slice Acceptance Checklist

Date: 2026-04-24
Status: v0-playtest

## 核心判断

第一版 playable vertical slice 不需要像完整游戏。

但它必须像一台已经能工作的机器：

- 12 周能跑完
- 三条路线能分化
- 事件能记账
- Digest 能解释反噬
- 玩家能导出路线
- playtest 主持人能独立跑完整场

这份文档的目标是：

**把第一版 playable vertical slice 的验收清单整理成 launch gate，决定什么时候可以进入 playtest。**

## Gate 0: Scope Discipline

进入 playtest 前，确认没有做偏。

### 必须有

- [ ] 1 个 founder: `The Showman`
- [ ] 1 个 scenario: `Bull Euphoria`
- [ ] 12 周 run
- [ ] 5 个 controls
- [ ] 6 个 visible resources
- [ ] 5 个 hidden counters
- [ ] 6 个 events
- [ ] Week Digest
- [ ] Week 12 Diagnosis
- [ ] Route export

### 必须没有

- [ ] 没有 backend
- [ ] 没有 login
- [ ] 没有多 founder 选择
- [ ] 没有多 scenario unlock
- [ ] 没有 meta progression
- [ ] 没有完整 ending cinematic
- [ ] 没有复杂图表系统

Gate 0 失败处理：

- 删除或隐藏超范围功能。
- 不要带着超范围功能进入第一轮测试。

## Gate 1: Simulation Works

### 基础运行

- [ ] `createInitialRun` 能创建合法 RunState。
- [ ] 所有 visible resources 在 0-100。
- [ ] audience mix 总和为 1。
- [ ] Week 1 controls 正确锁定。
- [ ] `simulateWeek` 能生成 WeekSnapshot。
- [ ] 12 周能跑完，不报错。

### Weekly Snapshot

每个 snapshot 必须包含：

- [ ] week
- [ ] controls
- [ ] resourcesStart / resourcesEnd
- [ ] countersStart / countersEnd
- [ ] audienceStart / audienceEnd
- [ ] outcome
- [ ] digest
- [ ] delayedEffectsApplied
- [ ] delayedEffectsCreated

### Delayed Effects

- [ ] 至少 4 个事件能创建 delayed effects。
- [ ] 到期 effects 会应用。
- [ ] applied effects 会写入 snapshot。
- [ ] Digest 能显示至少一条 delayed effect hint。

Gate 1 失败处理：

- 不进入 UI polish。
- 先修 simulation 和 snapshot。

## Gate 2: Route Differentiation

必须跑三条 scripted routes：

- [ ] Dirty Growth
- [ ] Pseudo Fair
- [ ] Rational Tightening

### Week 6 横向检查

- [ ] Dirty Growth 的 `Cash` 最高或接近最高。
- [ ] Pseudo Fair 的 `Trust` 最高。
- [ ] Rational Tightening 的 `Pass Rate` 最低。
- [ ] Pseudo Fair 的 `Payout Liability` 开始追上。

### Week 9 横向检查

- [ ] Dirty Growth 的 `Complaint Echo` 明显高。
- [ ] Pseudo Fair 的 `Skilled Cluster` 明显高。
- [ ] Rational Tightening 的 `Flow` 明显更低。
- [ ] 三条路线至少触发 2 种不同事件组合。

### Week 12 横向检查

- [ ] 至少出现 2 种 diagnosis。
- [ ] 最好出现 3 种 diagnosis。
- [ ] Dirty Growth 更像脏成功或监管压缩。
- [ ] Pseudo Fair 更像兑现压力。
- [ ] Rational Tightening 更像信任慢性崩塌。

Gate 2 失败处理：

- 不进入 playtest。
- 回到 formula / route matrix 调参。

## Gate 3: Event Layer

### Required Events

第一版至少接入：

- [ ] `Weekend Promo Temptation`
- [ ] `Feels Rigged Forum Post`
- [ ] `Viral Winner Thread`
- [ ] `Silent Winners Cluster`
- [ ] `Payment Processor Warning`
- [ ] `First Regulator Letter`

### Event Timing

- [ ] Week 3 能触发 promo。
- [ ] Week 6 能触发 winner thread。
- [ ] Week 8 能触发 silent winners。
- [ ] Week 10 能触发 payment warning。
- [ ] Week 12 能进入 regulator 或 diagnosis。

### Event Quality

- [ ] 每个事件有 3 个选项。
- [ ] 每个选项有 direction chips。
- [ ] 至少一个选项短期诱人但长期有毒。
- [ ] 至少一个选项更体面但更贵。
- [ ] 事件不会像随机抽卡。

Gate 3 失败处理：

- 如果事件像随机，补 trigger explanation 和 delayed hints。
- 如果选项无诱惑，重写 immediate effects。

## Gate 4: UI Readability

### Control Room

- [ ] 5 秒内能看到 current week。
- [ ] 10 秒内能看到平台赚钱/亏钱。
- [ ] 15 秒内能指出本周主风险。
- [ ] 六大资源显示 value / delta / status。
- [ ] locked controls 显示 unlock reason。
- [ ] Run Week button 状态清楚。

### Control Panel

- [ ] 五个 controls 可调。
- [ ] locked controls 不像 bug。
- [ ] Impact preview 显示方向而非公式。
- [ ] Impact preview 包含 audience sentence。

### Event Modal

- [ ] title / body / options 清楚。
- [ ] 三个 option 都能点击。
- [ ] option chip 不只靠颜色表达。
- [ ] delayed risk hint 可见。

### Week Digest

- [ ] Digest title 有周叙事感。
- [ ] Headline changes 最多 3 个。
- [ ] Narrative feed 3-5 条。
- [ ] 至少一条正反馈和一条负反馈。
- [ ] RiskCard 只突出一个主风险。
- [ ] Delayed effect hint 可见。

### Diagnosis Card

- [ ] title 不是简单 Win/Lose。
- [ ] subtitle 描述平台变成了什么。
- [ ] 3 个 evidence 可见。
- [ ] evidence 包含 resource / hidden shadow / player flag。
- [ ] replay prompt 清楚。
- [ ] reset / export 可用。

Gate 4 失败处理：

- 如果玩家读不懂，不加教程，先改信息层级。

## Gate 5: Playtest Tooling

### Export

- [ ] Export button 可用。
- [ ] 导出 JSON 能打开。
- [ ] 包含 runId。
- [ ] 包含 snapshots。
- [ ] 包含 events triggered。
- [ ] 包含 event options chosen。
- [ ] 包含 delayed effects applied。
- [ ] 包含 final diagnosis。
- [ ] 不包含玩家个人信息。

### Debug Panel

- [ ] 默认折叠。
- [ ] 能显示 hidden counters。
- [ ] 能显示 active delayed effects。
- [ ] 能显示 event scores。
- [ ] 试玩时可隐藏。

### Reset / Recovery

- [ ] Reset 可用。
- [ ] 刷新页面不会破坏当前 run，或明确不支持恢复。
- [ ] 如果支持 local storage，schema 版本变更能清空旧数据。

Gate 5 失败处理：

- 没有 export 不进入 playtest。
- 因为没有 route data，测试后无法复盘。

## Gate 6: Content and Tone

### Required Copy

- [ ] Opening setup 简短。
- [ ] 12 个 digest titles。
- [ ] 6 个 event bodies。
- [ ] 18 个 event option labels。
- [ ] resource status labels。
- [ ] risk lines。
- [ ] diagnosis titles and subtitles。

### Tone Check

- [ ] 文案像平台运营，不像教程。
- [ ] 文案不直接骂玩家。
- [ ] 脏决定被写成现实经营诱惑。
- [ ] 赢家文案同时有资产和负债含义。
- [ ] 支付/监管文案像空间变窄，不像单纯扣血。

Gate 6 失败处理：

- 如果文案像道德寓言，重写事件正文。
- 如果文案像金融后台，重写 CTA 和 risk card。

## Gate 7: Playtest Readiness

### Runbook

- [ ] 主持脚本准备好。
- [ ] 观察表准备好。
- [ ] Event Moment Log 准备好。
- [ ] 访谈问题准备好。
- [ ] 评分表准备好。
- [ ] Green / Yellow / Red Light 标准准备好。

### Dry Run

至少做 1 次内部 dry run。

检查：

- [ ] 主持人不需要解释公式。
- [ ] 20-30 分钟可以跑完。
- [ ] Route export 成功。
- [ ] 观察表能填满。
- [ ] 至少出现一个可讨论的坏决定。

Gate 7 失败处理：

- Dry run 如果超过 40 分钟，减少 UI friction 或缩短解释。
- Dry run 如果没有坏决定，回调 Week 1-3。

## Final Launch Gate

只有下面全部成立，才进入第一轮外部 playtest：

- [ ] Gate 0: Scope Discipline pass
- [ ] Gate 1: Simulation Works pass
- [ ] Gate 2: Route Differentiation pass
- [ ] Gate 3: Event Layer pass
- [ ] Gate 4: UI Readability pass
- [ ] Gate 5: Playtest Tooling pass
- [ ] Gate 6: Content and Tone pass
- [ ] Gate 7: Playtest Readiness pass

## Go / No-Go Decision

### Go

条件：

- 所有 gates pass。
- scripted routes 至少 2 种 diagnosis。
- internal dry run 出现至少 1 个自我辩护式坏决定。

### Conditional Go

条件：

- 只有 UI polish 小问题。
- simulation / export / route differentiation 均通过。

允许：

- 进入小范围 2 人 pilot test。

### No-Go

任一情况出现：

- 12 周跑不完
- route export 不可用
- 三条路线无差异
- 事件像随机惩罚
- Week 1-3 没有诱惑

## 一句话总结

Vertical Slice Acceptance Checklist 的目标，不是追求完成度，

而是保护第一轮 playtest 的可信度：

**只有当机器能跑、能分化、能记账、能导出，才值得把玩家放进去。**

# Prop Firm Operator - Prototype Implementation Plan

Date: 2026-04-24
Status: v0-control

## 核心判断

现在最危险的下一步，是直接做一个“看起来像游戏”的东西。

更好的实施顺序是：

**先做会算、会记仇、会诊断的系统，再做让它看起来像控制室的界面。**

这份计划的目标，是把 paper sim、bare weekly loop、event layer 和 digest UI 拆成真正的工程任务顺序。

## 原型交付目标

第一版 playable prototype 应做到：

1. 能跑 `12 weeks`
2. 有 `5 controls`
3. 有 `6 resources`
4. 有 `3 audience groups`
5. 有 `5 hidden counters`
6. 有 `6 key events`
7. 有 Week Digest
8. 有 Week 12 diagnosis

不追求：

- 多开局
- 多场景
- 完整 meta progression
- 完整美术
- 精确行业数据

## 推荐技术形态

如果只是验证体验，建议用一个轻量前端原型。

### 最小形态

- Single page app
- Client-side state
- Static data files
- No backend
- No persistence beyond local storage

### 为什么不先做后端

因为第一轮要验证的是：

- loop 是否成立
- 数值是否有毒性
- 玩家是否误判
- 事件是否能咬回来

这些不需要服务器。

## Milestone 0: Paper Sim Freeze

### 目标

把纸面规则收束到第一版可实现范围。

### 产出

- 资源默认值
- 旋钮默认值
- 12 周开放节奏
- 6 个事件的触发条件
- Week 12 diagnosis 规则

### 任务

1. 从 `paper-sim-sheet-spec` 提取字段。
2. 从 `playable-run-spec` 提取 Week 1-12 的导演顺序。
3. 确认第一版只实现 `The Showman` 和 `Bull Euphoria`。
4. 写一个手工表格或 JSON 草样，跑 2-3 条路线。

### Done 标准

- 脏增长路线能短期变好看
- 体面路线能更贵
- 至少 3 个事件会在 12 周内出现
- Week 12 能给出不同 diagnosis

### Kill Criteria

- 某一套旋钮连续 12 周明显最优
- 延迟后果无法被玩家追溯
- 赢家始终只是好消息

## Milestone 1: Data Layer

### 目标

先把系统对象写成数据，不碰 UI 细节。

### 产出

- `Resources`
- `HiddenCounters`
- `AudienceMix`
- `PlayerControls`
- `EventCard`
- `DelayedEffect`
- `WeekSnapshot`
- `FounderMode`
- `Scenario`

### 推荐文件边界

如果做前端项目，可以大致拆成：

- `src/data/events.ts`
- `src/data/founders.ts`
- `src/data/scenarios.ts`
- `src/data/runSpec.ts`
- `src/sim/types.ts`

### 任务

1. 定义 types。
2. 写默认 run seed。
3. 写 6 张事件卡。
4. 写 12 周标题和风险句池。
5. 写 control availability。

### Done 标准

- 不启动 UI，也能 import 一份默认 run。
- 所有事件都有 immediate effects 和 delayed effects。
- 所有 data 都能被 TypeScript 或 schema 校验通过。

## Milestone 2: Weekly Simulation Engine

### 目标

做出一个没有 fancy UI 的周循环。

### 核心函数

建议最少有这几个函数：

```ts
createInitialRun(founderId, scenarioId): RunState
applyControls(run, controls): RunState
simulateWeek(run): WeekSnapshot
applyDelayedEffects(run): RunState
selectEvent(run): EventCard | null
resolveEvent(run, eventId, optionId): RunState
buildDigest(snapshot): WeekDigest
buildEndingPreview(run): EndingPreview
```

### 每周结算顺序

1. 读取玩家旋钮
2. 应用本周到期 delayed effects
3. 计算 audience shift
4. 计算 signups / failures / passes
5. 计算 fee revenue / support cost / payout cost
6. 更新六大资源
7. 更新 hidden counters
8. 判断事件触发
9. 应用事件选择
10. 生成 WeekSnapshot 和 Digest

### Done 标准

- 可以在 console 里跑完 12 周。
- 每周都有 snapshot。
- 至少能跑三条路线：
  - 脏增长
  - 伪公平
  - 理性勒紧
- 三条路线的 Week 12 diagnosis 不完全相同。

## Milestone 3: Bare Control Room

### 目标

做出最小可操作界面。

### 屏幕

只做 2 个视图也可以：

1. `Control Room`
2. `Week Digest`

`Event Choice` 可以先作为 Digest 里的 modal。

### UI 必须有

- 当前 week
- 六大资源
- 五个旋钮
- control availability lock
- projected pressure shift
- run week button
- digest title
- narrative feed
- risk card
- next week button

### UI 暂时不必有

- 复杂图表
- 动效
- 多页面导航
- 完整结局动画
- 皮肤化美术

### Done 标准

- 玩家可以不看开发者解释跑完 12 周。
- 每周能调旋钮。
- 锁住的旋钮不会误导玩家。
- Digest 能说明这一周发生了什么。

## Milestone 4: Event Layer

### 目标

把事件从硬编码剧情变成由状态触发的压力测试。

### 第一版 6 个事件

1. `Weekend Promo Temptation`
2. `Feels Rigged Forum Post`
3. `Viral Winner Thread`
4. `Silent Winners Cluster`
5. `Payment Processor Warning`
6. `First Regulator Letter`

### 实施策略

第一版事件可以半导演：

- Week 3 固定 promo
- Week 6 固定 winner thread
- Week 8 优先 silent winners
- Week 10 优先 payment warning
- Week 12 根据状态选 diagnosis preview

但事件内容和后果必须读当前状态。

### Done 标准

- 事件不会像随机抽卡。
- 事件选项有短期诱惑。
- 至少 4 个事件会创建 delayed effects。
- 玩家能在 Week 5-10 看见早期选择回来。

## Milestone 5: Week Digest Pass

### 目标

让每周结算从“数值变化”变成“平台状态故事”。

### Digest 信息层级

1. 标题
2. 3-5 个关键数字
3. 本周 narrative feed
4. risk card
5. resource status labels
6. one-line diagnosis

### 内容规则

- 每周只突出一个主风险。
- Feed 不要超过 5 条。
- 支付/监管声音不要太早淹没用户声音。
- Winner 相关 feed 必须同时有正负含义。

### Done 标准

- 玩家能复述“这周发生了什么”。
- 玩家不仅记得数字，也记得一条声音。
- 风险卡能让玩家改变下一周选择。

## Milestone 6: Week 12 Diagnosis

### 目标

第一版不做完整 ending，做一张足够锋利的 diagnosis card。

### 诊断类型

- `Dirty Momentum`
- `Credibility Is Getting Expensive`
- `The Room Is Shrinking`
- `The Crowd Still Believes`
- `Trust Collapse Preview`
- `Payout Shock Preview`

### 卡片内容

- 标题
- 一句副标题
- 3 个证据
- 1 个玩家路线总结
- 1 个重开诱因

### Done 标准

- 玩家能看懂自己这局“活成了什么平台”。
- 玩家会自然想试另一种路线。
- 诊断不是简单赢/输。

## Milestone 7: Playtest Build

### 目标

准备第一轮 5-8 人 playtest。

### 必备功能

- reset run
- run seed 固定
- snapshot export
- lightweight debug panel
- route summary

### Debug panel 建议显示

只给开发/观察者看：

- `Complaint Echo`
- `Winner Visibility`
- `Promo Debt`
- `Processor Patience`
- `Skilled Cluster`
- active delayed effects

### Done 标准

- 试玩时无需人工解释核心规则。
- 观察者能记录玩家每周选择。
- 试玩后能导出路线摘要。

## 推荐实现顺序总表

1. Types and data seed
2. Weekly simulation engine
3. Console 12-week run
4. Bare Control Room UI
5. Digest UI
6. Event modal
7. Delayed effects visibility pass
8. Week 12 diagnosis
9. Debug/export tools
10. First playtest

## 第一版最容易踩的坑

### 1. 过早做漂亮 UI

如果系统不会咬人，漂亮 UI 只会把问题藏得更久。

### 2. 过早做随机事件

第一局应该导演化。

玩家需要先理解因果，再接受变体。

### 3. 过早做多 founder / scenario

先证明一条线真的有毒。

再做认知滤镜和世界滤镜。

### 4. 过早追求真实财务

真实数字会把调参成本拉爆。

第一版更需要可感知的方向性。

### 5. 让 hidden counters 永远隐藏

隐藏变量不需要上成大数字，但它们的影子必须出现在 feed、risk card 和 diagnosis 里。

## 第一轮 QA 清单

在交给 playtest 前，至少检查：

1. Week 1 是否能在 60 秒内跑起来
2. Week 3 的 promo 是否足够诱人
3. Week 5 是否能看见 promo 或低通过率后果
4. Week 6 的 winner 是否既甜又危险
5. Week 8 的 skilled cluster 是否让玩家紧张
6. Week 10 的 payment warning 是否像经营空间变窄
7. Week 12 diagnosis 是否说得出玩家路线
8. 三条不同打法是否能产生不同状态

## 一句话总结

Prototype Implementation Plan 的目标，不是把功能排满，

而是保护原型最重要的实施顺序：

**先让机器会算，再让机器会记仇，再让玩家看见自己亲手喂出了什么。**

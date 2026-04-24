# Prop Firm Operator - Prototype Project Scaffold Plan

Date: 2026-04-24
Status: exploration

## 核心判断

当前仓库是 `Trading Platforms Atlas`，主体是 Markdown research atlas。

所以原型项目不应该直接混进 `zh/`、`en/` 或现有章节结构里。

最稳妥的方式是：

**在仓库内新增一个隔离的 `prototype/prop-firm-operator/` 前端原型目录，或在另一个 workspace 建同名项目，然后把 docs/plans 里的设计资产搬成 data seed。**

这份文档的目标是：

**选择最轻的前端原型结构，定义目录、文件边界、状态流和第一天开工顺序。**

## 推荐技术栈

### 首选

- Vite
- React
- TypeScript
- Zustand 或 React reducer
- CSS modules / plain CSS
- Local storage

### 暂不需要

- 后端
- 数据库
- 登录
- 复杂路由
- 服务端渲染
- 图表库
- 动画库

### 为什么选这个栈

原型第一阶段的关键不是工程规模，而是：

- 快速跑 12 周
- 快速调公式
- 快速看 UI 是否让玩家读懂因果
- 快速导出 playtest snapshot

Vite + React + TS 足够轻，类型又能保护 simulation schema。

## 推荐目录结构

如果放在当前仓库内：

```text
prototype/
  prop-firm-operator/
    package.json
    index.html
    vite.config.ts
    tsconfig.json
    src/
      app/
        App.tsx
        app.css
      data/
        content.seed.ts
        events.seed.ts
        founder.seed.ts
        scenario.seed.ts
        run.seed.ts
      sim/
        types.ts
        constants.ts
        clamp.ts
        createInitialRun.ts
        applyEffects.ts
        formula.ts
        simulateWeek.ts
        selectEvent.ts
        resolveEvent.ts
        buildDigest.ts
        buildEndingPreview.ts
      state/
        runStore.ts
        routeExport.ts
      ui/
        ControlRoom.tsx
        ResourceStrip.tsx
        ControlPanel.tsx
        ImpactPreview.tsx
        EventModal.tsx
        WeekDigest.tsx
        NarrativeFeed.tsx
        RiskCard.tsx
        DiagnosisCard.tsx
        DebugPanel.tsx
      styles/
        tokens.css
        layout.css
      dev/
        scriptedRoutes.ts
        smokeRun.ts
```

## 文件边界说明

### `src/data/`

只放静态内容。

包括：

- founder 文案
- scenario 文案
- 事件卡
- 12 周 digest seed
- 状态词
- ending preview 文案

不要在这里写计算逻辑。

### `src/sim/`

只放模拟逻辑。

包括：

- 类型
- 公式
- delayed effects
- event scoring
- ending preview scoring

不要在这里写 React。

### `src/state/`

连接 UI 和 sim。

负责：

- 当前 run state
- 当前 event modal
- reset run
- export snapshots
- local storage

### `src/ui/`

只负责呈现和交互。

不直接计算复杂经济结果。

UI 可以调用 store action，但不应该自己改 resource。

## 状态流

### 基础流

```text
Player adjusts controls
  -> store validates control availability
  -> player clicks Run Week
  -> simulateWeek(run)
  -> selectEvent(run)
  -> if event: show EventModal
  -> resolveEvent(option)
  -> buildDigest(snapshot)
  -> show WeekDigest
  -> player clicks Next Week
```

### Week 12 流

```text
simulateWeek(week 12)
  -> apply event or skip
  -> buildEndingPreview(run)
  -> show DiagnosisCard
  -> offer Reset / Export Route
```

### 重要约束

`RunState` 是唯一真相源。

不要让 UI 组件维护自己的资源副本。

## 第一版页面结构

### 1. Control Room

首屏就是操作界面。

必须包含：

- `Week`
- `Founder / Scenario`
- 六大资源
- 本周主风险短句
- 五个旋钮
- 本周 projected pressure shift
- `Run Week` 按钮

### 2. Event Modal

事件出现时覆盖在 Control Room 上。

必须包含：

- 事件标题
- 事件正文
- 三个选项
- 每个选项的方向提示

第一版不要显示完整公式影响。

只显示：

- `Cash ↑`
- `Trust ↓`
- `Heat ↑`

### 3. Week Digest

每周结算页。

必须包含：

- Digest title
- 关键数字变化
- narrative feed
- risk card
- delayed effect hint
- `Proceed to Next Week`

### 4. Diagnosis Card

Week 12 结束后显示。

必须包含：

- diagnosis title
- subtitle
- 3 个证据
- route summary
- replay prompt
- export button

## 第一天开工顺序

### Hour 0-1: Scaffold

任务：

1. 创建 Vite React TS 项目。
2. 建目录。
3. 加基础 CSS tokens。
4. 跑通空白 App。

Done：

- 本地能打开页面。
- 页面显示 `Prop Firm Operator` 和空 Control Room shell。

### Hour 1-3: Types and Seed

任务：

1. 写 `types.ts`。
2. 写 `run.seed.ts`。
3. 写 `content.seed.ts` 的最小版。
4. 写 `createInitialRun`。

Done：

- App 能显示初始六大资源。
- Founder / Scenario 能显示。

### Hour 3-5: Formula Console Run

任务：

1. 写 `formula.ts`。
2. 写 `simulateWeek.ts`。
3. 写 `scriptedRoutes.ts`。
4. 跑三条路线。

Done：

- Console 能输出 12 个 snapshots。
- 三条路线至少两个 diagnosis 不同。

### Hour 5-7: Bare Interaction

任务：

1. 做五个 slider。
2. 做 control availability。
3. 接 `Run Week`。
4. 显示 Week Digest。

Done：

- 用户可以手动跑 Week 1-3。
- locked controls 不可操作。

### Hour 7-8: First Event

任务：

1. 接 `Weekend Promo Temptation`。
2. 做 Event Modal。
3. 选项能应用 effects。
4. Digest 能显示事件结果。

Done：

- Week 3 必定能触发促销事件。
- 选择大促后 Week 5 能看见 delayed effect。

## 第一周开工顺序

### Day 1: Loop Alive

目标：

- 12 周可以跑完
- Week 3 有事件
- Digest 能显示

### Day 2: Event Layer

目标：

- 6 个事件全部接入
- delayed effects 可见
- event scoring 能工作

### Day 3: Digest and Diagnosis

目标：

- 每周有不同 digest
- Week 12 有 diagnosis
- route summary 可导出

### Day 4: UI Pass

目标：

- Control Room 信息层级清楚
- 资源状态词统一
- 风险卡突出
- 不做复杂动效

### Day 5: Playtest Build

目标：

- reset run
- export snapshots
- debug panel
- observer notes template
- 5 人试玩准备好

## 最小 TypeScript 类型落点

第一天必须先写这些类型：

```ts
type ResourceKey =
  | "cash"
  | "flow"
  | "passRate"
  | "payoutLiability"
  | "trust"
  | "regulatoryHeat";

type CounterKey =
  | "complaintEcho"
  | "winnerVisibility"
  | "promoDebt"
  | "processorPatience"
  | "skilledCluster";

type ControlLevel = 1 | 2 | 3 | 4 | 5;
```

然后再写：

- `Resources`
- `HiddenCounters`
- `AudienceMix`
- `PlayerControls`
- `RunState`
- `WeekSnapshot`
- `EventCard`
- `DelayedEffect`

## 最小测试策略

第一版不用复杂 e2e。

但至少要有 4 个 simulation tests：

### Test 1: Initial Run

- 初始资源在 0-100
- audience 总和接近 1
- Week = 1

### Test 2: Dirty Growth Route

- 高 marketing 运行 6 周
- `flow` 应上升或维持高位
- `complaintEcho` 应上升

### Test 3: Winner Route

- 高 split / 高 trust 运行 8 周
- `winnerVisibility` 应上升
- `payoutLiability` 应上升

### Test 4: Diagnosis Split

- 跑三条 scripted route
- 至少出现两个不同 diagnosis

## 不要第一天做的事

### 1. 不要接真实图表库

条形/数字/小 sparkline 足够。

### 2. 不要做多页面导航

Control Room + Modal + Digest 足够。

### 3. 不要做漂亮 landing page

首屏就是控制室。

### 4. 不要实现所有 founder/scenario

只做 `The Showman` 和 `Bull Euphoria`。

### 5. 不要做保存槽

只做 reset 和 export JSON。

## 项目与 atlas 的关系

建议保持：

- `docs/plans/` 是设计源
- `prototype/prop-firm-operator/src/data/` 是可运行 seed
- `prototype/prop-firm-operator/src/sim/` 是公式实现

如果原型逐渐变大，再考虑移出 atlas 成独立 repo。

## 一句话总结

Prototype Project Scaffold Plan 的目标，不是搭一个漂亮工程，

而是给第一版原型一个足够清楚的开工姿势：

**先把 12 周机器跑活，再把控制室接上，最后才让它变得像一个产品。**

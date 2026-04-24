# Prop Firm Operator - Implementation Ticket Breakdown

Date: 2026-04-24
Status: exploration

## 核心判断

现在这组文档已经足够进入实现。

但真正开工前，还需要把“做一个原型”拆成可以验收、可以并行、可以停损的 tickets。

这份文档的目标是：

**把 scaffold、types、data seed、simulation、UI、playtest export 拆成可直接开工的 issue/ticket 列表。**

## 总体切法

第一版建议拆成 7 个 milestone：

1. Project Scaffold
2. Data and Types
3. Simulation Engine
4. Scripted Route Tuning
5. Playable UI
6. Playtest Tools
7. Polish and QA

每个 ticket 都应该有：

- Scope
- Files
- Acceptance Criteria
- Out of Scope

## Milestone 1: Project Scaffold

### Ticket 1.1 - Create Vite React Prototype App

Scope:

- 在 `prototype/prop-firm-operator/` 创建 Vite + React + TypeScript app。
- 建立基础目录。
- 加基础 npm scripts。

Files:

- `prototype/prop-firm-operator/package.json`
- `prototype/prop-firm-operator/index.html`
- `prototype/prop-firm-operator/vite.config.ts`
- `prototype/prop-firm-operator/tsconfig.json`
- `prototype/prop-firm-operator/src/app/App.tsx`

Acceptance Criteria:

- `npm install` 成功。
- `npm run dev` 能启动。
- 页面显示空 Control Room shell。
- 没有引入后端、路由或数据库。

Out of Scope:

- simulation 逻辑
- 完整 UI
- content seed

### Ticket 1.2 - Add Base CSS Tokens and Layout Shell

Scope:

- 建立工业化控制室风格的基础 tokens。
- 定义颜色、spacing、radius、type scale。
- 做 `AppShell` 的静态布局。

Files:

- `src/styles/tokens.css`
- `src/styles/layout.css`
- `src/app/app.css`
- `src/ui/AppShell.tsx`

Acceptance Criteria:

- 页面有深色工作台基调。
- 卡片圆角小于等于 8px。
- 顶部 shell 能显示 platform / week / founder / scenario。
- 不出现 landing page。

Out of Scope:

- 真实状态
- 动效
- 移动端深度适配

## Milestone 2: Data and Types

### Ticket 2.1 - Define Core Simulation Types

Scope:

- 定义原型所有核心类型。

Files:

- `src/sim/types.ts`

Acceptance Criteria:

- 包含 `Resources`、`HiddenCounters`、`AudienceMix`、`PlayerControls`、`RunState`、`WeekSnapshot`。
- 包含 `EventCard`、`EventOption`、`Effect`、`DelayedEffect`。
- 包含 `FounderMode`、`Scenario`、`EndingPreview`。
- TypeScript 无类型错误。

Out of Scope:

- 公式实现
- React 组件

### Ticket 2.2 - Port Content Seed

Scope:

- 把内容 seed 从规划文档搬进代码。

Files:

- `src/data/founder.seed.ts`
- `src/data/scenario.seed.ts`
- `src/data/run.seed.ts`
- `src/data/events.seed.ts`
- `src/data/content.seed.ts`

Acceptance Criteria:

- 有 `The Showman`。
- 有 `Bull Euphoria`。
- 有默认 initial run。
- 有 6 个事件。
- 有 12 周 digest seeds。
- 所有 event options 有 immediate effects 和 delayed effects 字段。

Out of Scope:

- 事件 scoring
- UI 呈现

### Ticket 2.3 - Control Availability

Scope:

- 实现 Week 1-12 的控制开放规则。

Files:

- `src/data/controlAvailability.seed.ts`
- `src/sim/controlAvailability.ts`

Acceptance Criteria:

- Week 1 只开放 fee / target / tone。
- Week 2-3 开放 drawdown。
- Week 4 开放 payout split。
- Week 5-12 全部开放。
- locked control 返回原因文案。

Out of Scope:

- slider UI

## Milestone 3: Simulation Engine

### Ticket 3.1 - Initial Run Creation

Scope:

- 根据 founder + scenario + run seed 创建初始 RunState。

Files:

- `src/sim/createInitialRun.ts`
- `src/sim/clamp.ts`

Acceptance Criteria:

- resources clamp 到 0-100。
- audience normalize 到总和 1。
- founder/scenario mods 生效。
- 初始 week 为 1。

Out of Scope:

- week simulation

### Ticket 3.2 - Effect Application

Scope:

- 实现 generic effect application。

Files:

- `src/sim/applyEffects.ts`

Acceptance Criteria:

- 支持 `resources.*`。
- 支持 `counters.*`。
- 支持 `audience.*`。
- 支持 flags set。
- 所有数值变更后 clamp / normalize。

Out of Scope:

- event selection

### Ticket 3.3 - Formula v0

Scope:

- 实现 audience shift、signups、effective pass rate、outcomes、financials、resource update、hidden counters。

Files:

- `src/sim/formula.ts`

Acceptance Criteria:

- 输入 RunState + controls，输出 weekly calculation result。
- 包含 signups、failures、passes、payoutRequests、successfulPayouts。
- 包含 feeRevenue、promoCost、supportCost、payoutCost、cashDelta。
- 不直接修改 RunState。

Out of Scope:

- event resolution
- UI digest

### Ticket 3.4 - Simulate Week

Scope:

- 串联 delayed effects、formula、snapshot 生成。

Files:

- `src/sim/simulateWeek.ts`

Acceptance Criteria:

- 每次运行生成 `WeekSnapshot`。
- 到期 delayed effects 会被应用并记录。
- currentWeek 递增。
- snapshots history 保留。

Out of Scope:

- 玩家事件选择

### Ticket 3.5 - Event Selection and Resolution

Scope:

- 实现 event scoring、选择和选项结算。

Files:

- `src/sim/selectEvent.ts`
- `src/sim/resolveEvent.ts`

Acceptance Criteria:

- Week 3 优先 promo。
- Week 6 优先 winner thread。
- Week 8 优先 silent winners。
- Week 10 优先 payment warning。
- Week 12 可触发 regulator 或 diagnosis。
- Event option 能创建 delayed effects。

Out of Scope:

- Event modal UI

### Ticket 3.6 - Ending Preview Builder

Scope:

- 实现 Week 12 diagnosis。

Files:

- `src/sim/buildEndingPreview.ts`

Acceptance Criteria:

- 支持至少 5 种 ending preview。
- evidence 包含 resource、hidden counter shadow、player flag。
- route summary 使用 snapshots。

Out of Scope:

- meta progression

## Milestone 4: Scripted Route Tuning

### Ticket 4.1 - Scripted Routes

Scope:

- 写三条路线的自动运行脚本。

Files:

- `src/dev/scriptedRoutes.ts`
- `src/dev/smokeRun.ts`

Acceptance Criteria:

- Dirty Growth 跑完 12 周。
- Pseudo Fair 跑完 12 周。
- Rational Tightening 跑完 12 周。
- 控制台输出每周 key resources。
- 输出 final diagnosis。

Out of Scope:

- 可视化 chart

### Ticket 4.2 - Route Matrix Assertions

Scope:

- 对三条路线做粗粒度目标区间检查。

Files:

- `src/dev/routeAssertions.ts`

Acceptance Criteria:

- Week 6 / Week 9 / Week 12 有横向差异检查。
- 至少要求 2 种不同 diagnosis。
- 失败时输出偏离项。

Out of Scope:

- 单元测试框架深度配置

## Milestone 5: Playable UI

### Ticket 5.1 - Run Store

Scope:

- 建立 UI 状态层。

Files:

- `src/state/runStore.ts`

Acceptance Criteria:

- 支持 reset。
- 支持 updateControls。
- 支持 runWeek。
- 支持 resolveEvent。
- 支持 proceedToNextWeek。
- 支持 exportRoute。

Out of Scope:

- UI styling polish

### Ticket 5.2 - Top Pulse Bar and Resource Cards

Scope:

- 显示六大资源。

Files:

- `src/ui/TopPulseBar.tsx`
- `src/ui/ResourceCard.tsx`

Acceptance Criteria:

- 每张卡显示 label / value / delta / status。
- worsening 和 improving 有不同视觉语义。
- critical 不靠颜色单独表达。

Out of Scope:

- historical chart

### Ticket 5.3 - Control Room Core

Scope:

- 实现首页操作界面。

Files:

- `src/ui/ControlRoom.tsx`
- `src/ui/MetricSummaryGrid.tsx`
- `src/ui/RiskCard.tsx`
- `src/ui/NarrativeFeed.tsx`

Acceptance Criteria:

- 页面显示本周 key metrics。
- 显示主风险。
- 显示 feed。
- Run Week button 可用。

Out of Scope:

- event modal

### Ticket 5.4 - Control Panel and Impact Preview

Scope:

- 实现五个旋钮与方向预览。

Files:

- `src/ui/ControlPanel.tsx`
- `src/ui/ControlSlider.tsx`
- `src/ui/ImpactPreview.tsx`

Acceptance Criteria:

- locked controls 显示 unlock week。
- 改动 slider 后出现 projected pressure shift。
- impact preview 包含 audience sentence。

Out of Scope:

- 精确数字 preview

### Ticket 5.5 - Event Modal

Scope:

- 事件触发后显示三选一。

Files:

- `src/ui/EventModal.tsx`

Acceptance Criteria:

- 显示 title / body / three options。
- 每个 option 显示 direction chips。
- 选择后应用 option effects。
- 显示 delayed risk hint。

Out of Scope:

- 复杂动画

### Ticket 5.6 - Week Digest

Scope:

- 实现每周结算页。

Files:

- `src/ui/WeekDigest.tsx`

Acceptance Criteria:

- 显示 week title。
- 显示 headline changes。
- 显示 feed。
- 显示 risk card。
- 显示 delayed effect hint。
- Proceed button 进入下一周。

Out of Scope:

- 多 tab digest

### Ticket 5.7 - Diagnosis Card

Scope:

- 实现 Week 12 诊断。

Files:

- `src/ui/DiagnosisCard.tsx`

Acceptance Criteria:

- 显示 title / subtitle。
- 显示 3 个 evidence。
- 显示 route summary。
- 显示 replay prompt。
- 支持 reset / export。

Out of Scope:

- 完整 ending cinematic

## Milestone 6: Playtest Tools

### Ticket 6.1 - Route Export

Scope:

- 导出 playtest route JSON。

Files:

- `src/state/routeExport.ts`

Acceptance Criteria:

- 导出 runId、snapshots、events、choices、diagnosis。
- 文件名包含 timestamp。
- 不包含隐私信息。

Out of Scope:

- 上传服务器

### Ticket 6.2 - Debug Panel

Scope:

- 给观察者显示 hidden counters 和 event scores。

Files:

- `src/ui/DebugPanel.tsx`

Acceptance Criteria:

- 默认折叠。
- 显示 5 个 hidden counters。
- 显示 active delayed effects。
- 显示 current event scores。

Out of Scope:

- 玩家可见教程

### Ticket 6.3 - Local Storage Recovery

Scope:

- 本地保存当前 run。

Files:

- `src/state/runPersistence.ts`

Acceptance Criteria:

- 刷新页面后可恢复。
- reset 会清空。
- schema 版本变更时能丢弃旧存档。

Out of Scope:

- 多存档槽

## Milestone 7: Polish and QA

### Ticket 7.1 - UI QA Pass

Scope:

- 对照 UI spec 做可读性检查。

Acceptance Criteria:

- 5 秒内看见 week。
- 10 秒内看见平台赚钱/亏钱。
- 15 秒内能指出主风险。
- locked controls 不像 bug。
- Event option 有短期诱惑。
- Digest 能解释至少一个延迟后果。

### Ticket 7.2 - Playtest Build Checklist

Scope:

- 准备第一轮 5 人试玩包。

Acceptance Criteria:

- dev server 稳定。
- reset/export 可用。
- debug panel 可用。
- route export 经人工打开检查。
- runbook 可跟着执行。

## 推荐并行方式

### 可并行

- Ticket 2.2 content seed 和 Ticket 3.1 initial run
- Ticket 5.2 resource cards 和 Ticket 5.4 control panel
- Ticket 6.1 export 和 Ticket 6.2 debug panel

### 不建议并行

- Formula v0 和 route tuning assertions
- Event selection 和 Event modal
- Diagnosis builder 和 Diagnosis card

原因：

这些任务前后依赖强，过早并行会制造返工。

## 第一版 Done Definition

整个 prototype v0 完成的标准：

1. 玩家可以从 Week 1 跑到 Week 12。
2. 三条 scripted routes 产生至少 2 种 diagnosis。
3. Week 3 / 6 / 8 / 10 至少触发 3 个关键事件。
4. delayed effect 至少 2 次在 Digest 中被解释。
5. route export 可用于 playtest 复盘。
6. 不需要人工解释公式也能完成一局。

## 一句话总结

Implementation Ticket Breakdown 的目标，不是把任务排得漂亮，

而是让实现保持在正确顺序里：

**先有数据骨架，再有会咬人的模拟，最后才让控制室把这台机器显影出来。**

# Prop Firm Operator - Documentation Index Cleanup

Date: 2026-04-24
Status: meta

## 核心判断

现在文档已经足够多，继续只按创建顺序列会变得难找。

更好的索引方式是按用途分组：

1. Research Foundation
2. Product Design
3. Prototype Design
4. Implementation
5. Playtest and Validation
6. Decision and Governance

这份文档的目标是：

**把全部 planning docs 按 research、prototype design、implementation、playtest 四类重排索引，方便后续查找。**

## 1. Research Foundation

这些文档回答：

**为什么这个题材成立？它从 trading platforms atlas 里继承了什么世界观？**

### Core Exploration

- `docs/plans/2026-04-24-prop-firm-operator-exploration.md`
- 用途：总探索记录，定义产品方向、MVP 边界、资源模型、AI 人群、回合结构、事件系统与 fun loop。

### Core Economic Simulation

- `docs/plans/2026-04-24-prop-firm-operator-core-economic-simulation.md`
- 用途：定义六大资源之间的因果回路、延迟后果与平台真实经济机器。

### Commercial Packaging

- `docs/plans/2026-04-24-prop-firm-operator-commercial-packaging.md`
- 用途：定义为什么这款产品能卖、卖给谁、Steam 首屏该呈现什么 fantasy。

### Narrative Tone Pack

- `docs/plans/2026-04-24-prop-firm-operator-narrative-tone-pack.md`
- 用途：定义用户、KOL、内部、支付与监管五类声音。

## 2. Product Design

这些文档回答：

**完整产品长什么样？玩家为什么会反复回来？**

### Run Structure & Endings

- `docs/plans/2026-04-24-prop-firm-operator-run-structure-endings.md`
- 用途：定义一局 24-36 周的阶段推进、压强曲线、死法与路线型结局。

### Founder Archetypes

- `docs/plans/2026-04-24-prop-firm-operator-founder-archetypes.md`
- 用途：定义 replay 中不同操盘人格的经营哲学、盲点与诱惑路径。

### Founder Modes Pack

- `docs/plans/2026-04-24-prop-firm-operator-founder-modes-pack.md`
- 用途：把 founder archetype 压成可选开局模式，包括开局偏向、事件口吻、隐藏弱点与结局复盘口吻。

### Scenario Unlocks

- `docs/plans/2026-04-24-prop-firm-operator-scenario-unlocks.md`
- 用途：定义不同市场气候下，平台如何从不同人性与叙事里抽取利润。

### Scenario Content Pack

- `docs/plans/2026-04-24-prop-firm-operator-scenario-content-pack.md`
- 用途：把核心场景压成内容包，包括起始资源偏向、人群偏移、事件权重与语气差异。

### Meta Progression

- `docs/plans/2026-04-24-prop-firm-operator-meta-progression.md`
- 用途：定义 replay 奖励应是更深一层的平台真相，而不是传统强度成长。

## 3. Experience and Interface Design

这些文档回答：

**玩家第一次如何进入？界面如何让系统变得可读？**

### Onboarding

- `docs/plans/2026-04-24-prop-firm-operator-onboarding.md`
- 用途：定义 5 分钟 onboarding 与前 15 分钟体验脚本。

### First 30 Minutes Script

- `docs/plans/2026-04-24-prop-firm-operator-first-30-minutes-script.md`
- 用途：把前 30 分钟体验拆成导演脚本。

### Visual & Interaction

- `docs/plans/2026-04-24-prop-firm-operator-visual-interaction.md`
- 用途：定义视觉基调、颜色语义、交互原则与周报 Digest 形式。

### Dashboard & IA

- `docs/plans/2026-04-24-prop-firm-operator-dashboard-ia.md`
- 用途：定义首页结构、四大一级页面与信息释放节奏。

### Interface Wireframe Notes

- `docs/plans/2026-04-24-prop-firm-operator-interface-wireframe-notes.md`
- 用途：把四个核心屏幕拆成线框级信息摆放与阅读顺序。

### Prototype UX Copy Pass

- `docs/plans/2026-04-24-prop-firm-operator-prototype-ux-copy-pass.md`
- 用途：统一开场、四屏按钮、状态词、风险卡与结局卡文案。

### Prototype UI System Spec

- `docs/plans/2026-04-24-prop-firm-operator-prototype-ui-system-spec.md`
- 用途：把 Control Room、Digest、Event Modal、Diagnosis Card 写成可实现 UI spec。

## 4. Prototype System Design

这些文档回答：

**第一版 playable slice 到底做什么？数据和公式怎么跑？**

### Prototype Scope

- `docs/plans/2026-04-24-prop-firm-operator-prototype-scope.md`
- 用途：定义超轻原型必须保留和必须砍掉的系统。

### Prototype Build Order

- `docs/plans/2026-04-24-prop-firm-operator-prototype-build-order.md`
- 用途：定义从 paper sim 到 playable UI 的正确顺序。

### Paper Sim Sheet Spec

- `docs/plans/2026-04-24-prop-firm-operator-paper-sim-sheet-spec.md`
- 用途：定义纸面模拟字段、周结算顺序、隐藏计数器与公式草模。

### Playable Run Spec

- `docs/plans/2026-04-24-prop-firm-operator-playable-run-spec.md`
- 用途：定义 Week 1-12 的旋钮范围、事件顺序、Digest 标题和目标情绪。

### Prototype Data Schema

- `docs/plans/2026-04-24-prop-firm-operator-prototype-data-schema.md`
- 用途：定义 RunState、WeekSnapshot、EventCard、DelayedEffect、Founder、Scenario 等数据骨架。

### Prototype Content Pack

- `docs/plans/2026-04-24-prop-firm-operator-prototype-content-pack.md`
- 用途：列出原型第一局可上屏的文本资产。

### Prototype Content JSON Seed

- `docs/plans/2026-04-24-prop-firm-operator-prototype-content-json-seed.md`
- 用途：把事件、digest、状态词、风险句、Founder 和 Scenario 压成接近代码的数据 seed。

### Simulation Formula v0

- `docs/plans/2026-04-24-prop-firm-operator-simulation-formula-v0.md`
- 用途：定义 audience shift、signups、passes、costs、resource update、hidden counters 和事件评分公式。

### Numeric Balancing Notes

- `docs/plans/2026-04-24-prop-firm-operator-numeric-balancing-notes.md`
- 用途：定义原型资源区间、旋钮方向、隐藏计数器与调平衡原则。

### Route Tuning Matrix

- `docs/plans/2026-04-24-prop-firm-operator-route-tuning-matrix.md`
- 用途：定义三条核心路线的目标数值曲线和调参判断尺。

### Event Deck

- `docs/plans/2026-04-24-prop-firm-operator-event-deck.md`
- 用途：定义第一版 12 张高质量事件卡及其触发、选项与反噬逻辑。

## 5. Implementation

这些文档回答：

**真正开工时，目录怎么建，tickets 怎么拆，README 怎么写？**

### Prototype Implementation Plan

- `docs/plans/2026-04-24-prop-firm-operator-prototype-implementation-plan.md`
- 用途：把 paper sim、weekly loop、event layer、digest UI 和 playtest build 拆成工程顺序。

### Prototype Project Scaffold Plan

- `docs/plans/2026-04-24-prop-firm-operator-prototype-project-scaffold-plan.md`
- 用途：定义轻量前端原型结构、目录、文件边界、状态流和第一天开工顺序。

### Implementation Ticket Breakdown

- `docs/plans/2026-04-24-prop-firm-operator-implementation-ticket-breakdown.md`
- 用途：把 scaffold、types、data seed、simulation、UI、playtest export 拆成 tickets。

### Prototype README Draft

- `docs/plans/2026-04-24-prop-firm-operator-prototype-readme-draft.md`
- 用途：给未来原型目录准备 README。

## 6. Playtest and Validation

这些文档回答：

**如何知道这个原型是真的成立，而不是看起来完成了？**

### Playtest Questions Pack

- `docs/plans/2026-04-24-prop-firm-operator-playtest-questions-pack.md`
- 用途：定义第一轮试玩该观察和追问什么。

### Playtest Runbook

- `docs/plans/2026-04-24-prop-firm-operator-playtest-runbook.md`
- 用途：定义主持脚本、观察表、访谈问题、评分表和 Green/Yellow/Red Light 标准。

### Prototype Risk Register

- `docs/plans/2026-04-24-prop-firm-operator-prototype-risk-register.md`
- 用途：定义实现和玩法验证的主要风险、触发信号、缓解方案和停损标准。

### Vertical Slice Acceptance Checklist

- `docs/plans/2026-04-24-prop-firm-operator-vertical-slice-acceptance-checklist.md`
- 用途：定义第一版 playable slice 进入 playtest 前必须通过的 gates。

## 7. Decision and Governance

这些文档回答：

**现在是否开工？下一步怎么决策？**

### Research Map

- `docs/plans/2026-04-24-prop-firm-operator-research-map.md`
- 用途：总索引与当前进度地图。

### Build Decision Memo

- `docs/plans/2026-04-24-prop-firm-operator-build-decision-memo.md`
- 用途：把当前文档收束成是否开工、先做什么、不做什么、成功/停损标准的决策备忘录。

### Documentation Index Cleanup

- `docs/plans/2026-04-24-prop-firm-operator-documentation-index-cleanup.md`
- 用途：把全部 planning docs 按用途分组，方便后续查找。

## 推荐阅读路径

### 如果要判断是否值得做

1. `exploration`
2. `core-economic-simulation`
3. `commercial-packaging`
4. `build-decision-memo`

### 如果要开始实现

1. `prototype-scope`
2. `prototype-data-schema`
3. `prototype-content-json-seed`
4. `simulation-formula-v0`
5. `prototype-project-scaffold-plan`
6. `implementation-ticket-breakdown`

### 如果要做 UI

1. `visual-interaction`
2. `interface-wireframe-notes`
3. `prototype-ux-copy-pass`
4. `prototype-ui-system-spec`

### 如果要调数值

1. `numeric-balancing-notes`
2. `simulation-formula-v0`
3. `route-tuning-matrix`
4. `vertical-slice-acceptance-checklist`

### 如果要 playtest

1. `playtest-questions-pack`
2. `playtest-runbook`
3. `prototype-risk-register`
4. `vertical-slice-acceptance-checklist`

## 一句话总结

Documentation Index Cleanup 的目标，不是再多写一层文档，

而是让这组资产从“很多好东西”变成“随时能找到下一把工具”：

**判断方向看 foundation，开工看 implementation，测真伪看 validation。**

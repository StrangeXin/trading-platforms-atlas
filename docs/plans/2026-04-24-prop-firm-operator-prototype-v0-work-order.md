# Prop Firm Operator - Prototype v0 Work Order

Date: 2026-04-24
Status: exploration

## 核心判断

现在已经不缺方向，不缺系统，也不缺 tickets。

真正开始实现时，最需要的是一张短而硬的工作单：

- 第一天做什么
- 第二天做什么
- 每天交付什么
- 什么情况不能进入下一天

这份文档的目标是：

**把 build decision 和 ticket breakdown 收束成一份按天执行的 v0 工作单，方便直接开始实现。**

## v0 总目标

5 个工作日内做出一个可内部 dry run 的 playable vertical slice。

必须能：

1. 从 Week 1 跑到 Week 12
2. 调 5 个 controls
3. 看到 6 个 resources
4. 触发核心事件
5. 看到 delayed consequences
6. 得到 Week 12 diagnosis
7. 导出 route JSON

不做：

- 多 founder
- 多 scenario
- meta progression
- backend
- polished marketing page
- full game ending

## Day 0: Setup Decision

### Objective

确认开工边界，不在第一天讨论 scope。

### Tasks

1. 确认项目路径：`prototype/prop-firm-operator/`
2. 确认技术栈：Vite + React + TypeScript
3. 确认只实现 `The Showman` / `Bull Euphoria`
4. 确认第一轮只测 12-week run
5. 确认不接 backend

### Deliverable

- 一条明确 decision note:

```text
Proceed with v0 vertical slice. Scope locked to one founder, one scenario, one 12-week run.
```

### No-Go

如果还在争论多模式、多场景、完整游戏结构，不进入 Day 1。

## Day 1: Project and Data Spine

### Objective

让项目启动，并有可 import 的数据骨架。

### Tasks

1. Scaffold Vite React TS app.
2. Create directory structure.
3. Add base CSS tokens.
4. Write `src/sim/types.ts`.
5. Port initial run seed.
6. Port founder/scenario seed.
7. Port control availability.

### Deliverable

- Dev server runs.
- App shows empty control room shell.
- Initial resources render from data.

### Acceptance

- `npm run dev` works.
- `npm run build` works or has only known scaffold-level issue.
- Initial RunState can be created without UI hacks.

### No-Go To Day 2

- Types are missing core objects.
- Initial run is hardcoded in React component.
- App cannot start.

## Day 2: Simulation Core

### Objective

让机器在 console 里跑完 12 周。

### Tasks

1. Implement `clamp`.
2. Implement `createInitialRun`.
3. Implement `applyEffects`.
4. Implement `formula v0`.
5. Implement `simulateWeek`.
6. Implement delayed effect application.
7. Add basic smoke runner.

### Deliverable

- Console can run 12 weeks with default controls.
- Snapshots are produced each week.

### Acceptance

- All visible resources remain 0-100.
- Audience remains normalized.
- Snapshots contain resources, counters, audience, outcomes.
- No UI required for simulation to work.

### No-Go To Day 3

- 12-week run crashes.
- Snapshots do not record enough history.
- Formula mutates state unpredictably.

## Day 3: Events, Diagnosis, Routes

### Objective

让系统开始“记仇”和分化。

### Tasks

1. Port 6 event cards.
2. Implement event scoring.
3. Implement event resolution.
4. Implement delayed effects from events.
5. Implement Week 12 diagnosis.
6. Add scripted routes:
   - Dirty Growth
   - Pseudo Fair
   - Rational Tightening
7. Add route assertions.

### Deliverable

- Three scripted routes run to Week 12.
- At least 2 diagnosis types appear.

### Acceptance

- Week 3 promo can trigger.
- Week 6 winner thread can trigger.
- Week 8 silent winners can trigger.
- Week 10 payment warning can trigger.
- Route assertions print warnings.

### No-Go To Day 4

- All routes produce same diagnosis.
- Events feel purely random in logs.
- No delayed effects appear by Week 6.

## Day 4: Playable Control Room

### Objective

让人可以不用 console 跑一局。

### Tasks

1. Implement run store.
2. Implement TopPulseBar.
3. Implement ResourceCard.
4. Implement ControlPanel.
5. Implement ImpactPreview.
6. Implement ControlRoom.
7. Implement WeekDigest.

### Deliverable

- Player can run Week 1-3 manually.
- Controls lock/unlock correctly.
- Digest appears after a week runs.

### Acceptance

- Week is visible.
- Six resources are visible.
- Five controls are visible.
- Locked controls explain unlock timing.
- Digest shows at least one narrative feed item.

### No-Go To Day 5

- Player cannot understand how to run week.
- Controls bypass availability rules.
- Digest is only raw numbers.

## Day 5: Events, Diagnosis, Export, Dry Run

### Objective

把 v0 变成可内部试玩的 vertical slice。

### Tasks

1. Implement EventModal.
2. Implement DiagnosisCard.
3. Implement route export.
4. Implement DebugPanel.
5. Add reset.
6. Run internal dry run.
7. Compare against vertical slice checklist.

### Deliverable

- One person can complete Week 1-12 in UI.
- Route export JSON works.
- Week 12 diagnosis appears.

### Acceptance

- Export includes snapshots, events, choices, delayed effects, diagnosis.
- Debug panel shows hidden counters and delayed effects.
- At least one delayed effect is explained in Digest.
- Dry run produces at least one self-justified bad decision.

### No-Go To External Playtest

- Export missing.
- Three baseline routes not differentiated.
- Event consequences feel random.
- Week 1-3 has no temptation.

## Daily Review Questions

At the end of each day, answer:

1. Did we make the machine more testable?
2. Did we avoid adding full-game scope?
3. Did we preserve delayed consequences?
4. Did we improve route differentiation?
5. Is the next day unblocked?

## Work Order Priorities

### Priority 1

Machine works.

### Priority 2

Machine remembers.

### Priority 3

Player can operate it.

### Priority 4

Observer can export and analyze it.

### Priority 5

UI feels like a credible control room.

## What To Cut First If Behind

Cut in this order:

1. Local storage recovery
2. Debug panel styling
3. Advanced impact preview
4. Mobile polish
5. Extra narrative feed variations

Do not cut:

- route export
- delayed effects
- Week 12 diagnosis
- route assertions
- event option consequences

## One-Sentence Work Rule

When uncertain, choose the task that makes the loop more observable.

## 一句话总结

Prototype v0 Work Order 的目标，不是把所有 tickets 再说一遍，

而是把开工周压成一条不会漂移的路线：

**第一天有骨架，第二天会算，第三天会记仇，第四天能玩，第五天能测。**

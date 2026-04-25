# Prop Firm Operator Prototype - README Draft

Date: 2026-04-24
Status: v0-scaffold

## 用途

这份文档是未来 `prototype/prop-firm-operator/README.md` 的草稿。

目标是让任何人进入原型目录后，能快速知道：

- 这是什么
- 怎么启动
- 怎么跑 scripted routes
- 怎么导出 playtest route
- 怎么调数值
- 哪些东西暂时不要做

## README 草稿

```md
# Prop Firm Operator Prototype

A lightweight playable prototype for testing the core loop of **Prop Firm Operator**:

- tune challenge rules
- attract different trader groups
- harvest short-term growth
- create delayed trust, payout, payment, and regulatory consequences
- reach a Week 12 operating diagnosis

This is not a finished game. It is a first playable testbed for the machine.

## Prototype Goal

The prototype exists to test one question:

**Can a player be tempted into making short-term rational decisions that later return as structural consequences?**

If that loop does not work, more content and better UI will not fix the product.

## Tech Stack

- Vite
- React
- TypeScript
- Client-side state
- Static content seed
- Local storage

No backend, database, auth, or server simulation.

## Getting Started

Install dependencies:

\`\`\`bash
npm install
\`\`\`

Run the dev server:

\`\`\`bash
npm run dev
\`\`\`

Open the local URL printed by Vite.

## Scripts

\`\`\`bash
npm run dev
npm run build
npm run preview
npm run test:sim
npm run smoke:routes
\`\`\`

### `npm run smoke:routes`

Runs the three scripted route baselines:

1. Dirty Growth
2. Pseudo Fair
3. Rational Tightening

The smoke run should print:

- weekly resources
- triggered events
- final diagnosis
- route matrix warnings

## Project Structure

\`\`\`text
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
    runPersistence.ts
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
    routeAssertions.ts
    smokeRun.ts
\`\`\`

## Core Concepts

### Visible Resources

All visible resources use a 0-100 scale:

- `Cash`
- `Flow`
- `Pass Rate`
- `Payout Liability`
- `Trust`
- `Regulatory Heat`

### Hidden Counters

Hidden counters drive delayed consequences:

- `Complaint Echo`
- `Winner Visibility`
- `Promo Debt`
- `Processor Patience`
- `Skilled Cluster`

These should not be shown directly to players in normal play, but their shadows must appear in feed, risk cards, and diagnosis.

### Controls

The first playable has 5 controls:

- `Challenge Fee`
- `Profit Target`
- `Max Drawdown`
- `Payout Split`
- `Marketing Tone`

Controls use levels 1-5.

## Weekly Loop

Each week follows this order:

1. Apply due delayed effects
2. Shift audience mix
3. Calculate signups
4. Calculate passes, failures, payout requests
5. Calculate financials
6. Update visible resources
7. Update hidden counters
8. Select event
9. Resolve event option if needed
10. Build Week Digest
11. Store Week Snapshot

Do not reorder this casually. The current order is part of the design.

## Events

The first playable uses 6 core events:

1. `Weekend Promo Temptation`
2. `Feels Rigged Forum Post`
3. `Viral Winner Thread`
4. `Silent Winners Cluster`
5. `Payment Processor Warning`
6. `First Regulator Letter`

Events should feel like pressure tests, not random cards.

## Route Baselines

The prototype should support three baseline routes.

### Dirty Growth

High marketing, tighter rules, low payout generosity.

Expected:

- early cash and flow look strong
- complaint pressure rises
- trust weakens
- regulatory heat becomes visible

Likely diagnosis:

- `dirty_momentum`
- `room_is_shrinking`
- `trust_collapse_preview`

### Pseudo Fair

Moderate marketing, wider rules, higher payout split.

Expected:

- trust improves
- winners become visible
- payout liability gets expensive

Likely diagnosis:

- `credibility_is_expensive`
- `payout_shock_preview`

### Rational Tightening

Low marketing, high target, tight drawdown.

Expected:

- cash stays controlled early
- flow cools
- complaint echo rises slowly
- trust decays through frustration

Likely diagnosis:

- `trust_collapse_preview`

## Playtest Export

Use the Export button after a run to download route data.

Export should include:

- run id
- founder
- scenario
- snapshots
- events triggered
- event options chosen
- delayed effects applied
- final diagnosis

Do not include player names or personal identifiers.

## Debug Panel

The debug panel is for observers and tuning only.

It may show:

- hidden counters
- active delayed effects
- event scores
- current diagnosis score

Keep it collapsed during playtests unless the observer needs it.

## Tuning Rules

When tuning formulas, use the route matrix.

Do not optimize for fairness between routes.

The goal is:

- dirty growth should be sweetest early
- pseudo fair should be more trusted but more expensive
- rational tightening should look controlled but slowly poison trust

If all routes feel equally good, the product is losing its point.

## First Playtest Success Criteria

Green light if:

- most players understand the business within 5 minutes
- most players feel tempted by at least one bad-but-useful choice
- most players can connect one later consequence to an earlier decision
- at least 3/5 players want to replay with a different route

## Out of Scope for v0

Do not add these yet:

- backend
- login
- multiple founders
- multiple scenarios
- meta progression
- full ending cinematics
- complex charting
- real financial data
- multiplayer

## Design Sources

The prototype is implemented from planning docs in:

\`\`\`text
../../docs/plans/
\`\`\`

Most relevant docs:

- `2026-04-24-prop-firm-operator-prototype-data-schema.md`
- `2026-04-24-prop-firm-operator-prototype-content-json-seed.md`
- `2026-04-24-prop-firm-operator-simulation-formula-v0.md`
- `2026-04-24-prop-firm-operator-prototype-ui-system-spec.md`
- `2026-04-24-prop-firm-operator-route-tuning-matrix.md`
- `2026-04-24-prop-firm-operator-playtest-runbook.md`

## Working Principle

First make the machine calculate.

Then make it remember.

Then make the player see what they fed it.
\`\`\`

## README 使用备注

等真正创建 `prototype/prop-firm-operator/` 后，可以把上面的 fenced block 直接作为 README 起点。

需要根据最终 package scripts 调整：

- `npm run test:sim`
- `npm run smoke:routes`

如果第一版没有测试框架，也可以先只保留：

- `npm run dev`
- `npm run build`
- `npm run preview`

## 一句话总结

Prototype README Draft 的目标，是让未来原型目录一打开就不会迷路：

**它不是完整游戏仓库，而是一台用来验证诱惑、延迟后果和路线诊断的第一版机器。**

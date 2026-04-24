# Prop Firm Operator v0 Development Execution Plan

> **For implementation agent:** execute this plan task by task. Keep the scope locked unless this document is explicitly updated.

**Goal:** Build a playable 12-week browser prototype that proves the core loop: growth temptation -> dirty but rational choice -> delayed consequence -> route diagnosis -> replay desire.

**Architecture:** A Vite + React + TypeScript client-only app lives under `prototype/prop-firm-operator/`. Static content seed stays in `src/data/`, pure simulation logic stays in `src/sim/`, UI state and export helpers stay in `src/state/`, and React components stay in `src/ui/`.

**Tech Stack:** Vite, React, TypeScript, Vitest, plain CSS, local browser download for route export. Prefer React reducer/context for v0 state unless the implementation team chooses Zustand before Day 1 starts.

---

## Scope Lock

### Build In v0

- One founder: `The Showman`
- One scenario: `Bull Euphoria`
- One platform identity: `HyperGrowth Capital`
- 12-week run
- Five controls: `Challenge Fee`, `Profit Target`, `Max Drawdown`, `Payout Split`, `Marketing Tone`
- Six visible resources: `Cash`, `Flow`, `Pass Rate`, `Payout Liability`, `Trust`, `Regulatory Heat`
- Five hidden counters: `Complaint Echo`, `Winner Visibility`, `Promo Debt`, `Processor Patience`, `Skilled Cluster`
- Three audience groups: `Novice`, `Gambler`, `Skilled`
- Six events:
  - `Weekend Promo Temptation`
  - `Feels Rigged Forum Post`
  - `Viral Winner Thread`
  - `Silent Winners Cluster`
  - `Payment Processor Warning`
  - `First Regulator Letter`
- Week Digest
- Week 12 Diagnosis
- Route export JSON
- Debug panel for playtest observers

### Do Not Build In v0

- Backend
- Login
- Database
- Public landing page
- Real payment integration
- Multi-founder UI
- Multi-scenario unlocks
- Meta progression
- Real market data
- Complex chart library
- Full ending cinematics
- Multi-language product UI

Commercial, payment, unlock, and Founder Access docs are kept as Phase 2 material after the playable loop passes validation.

## Product Proof

The prototype is successful only if it proves these moments:

1. The player understands the business within 5 minutes.
2. The player sees early cash and flow become tempting.
3. The player voluntarily chooses at least one short-term useful but structurally dirty option.
4. A Week 1-6 decision returns later as a visible consequence.
5. The Week 12 diagnosis feels route-specific.
6. The player can explain what kind of platform they became.
7. The observer can export the run and reconstruct why it happened.

If two or more of these fail in internal dry run, stop adding content and tune the loop.

## Milestone Plan

### Milestone 0: Scope and Scaffold Boundary

**Goal:** Remove ambiguity before coding starts.

**Deliverables:**

- `prototype/prop-firm-operator/` is confirmed as the implementation path.
- v0 scope is locked to one founder, one scenario, one 12-week run.
- The implementation team confirms no backend, auth, database, payment, or landing page work.

**Gate:**

- A new contributor can explain what v0 does and what it refuses to do in under 2 minutes.

### Milestone 1: Project and Data Spine

**Goal:** The app starts, renders a control room shell, and imports real typed seed data.

**Create:**

- `prototype/prop-firm-operator/package.json`
- `prototype/prop-firm-operator/index.html`
- `prototype/prop-firm-operator/vite.config.ts`
- `prototype/prop-firm-operator/tsconfig.json`
- `prototype/prop-firm-operator/src/app/App.tsx`
- `prototype/prop-firm-operator/src/app/app.css`
- `prototype/prop-firm-operator/src/styles/tokens.css`
- `prototype/prop-firm-operator/src/styles/layout.css`
- `prototype/prop-firm-operator/src/sim/types.ts`
- `prototype/prop-firm-operator/src/data/founder.seed.ts`
- `prototype/prop-firm-operator/src/data/scenario.seed.ts`
- `prototype/prop-firm-operator/src/data/run.seed.ts`
- `prototype/prop-firm-operator/src/data/controlAvailability.seed.ts`

**Implementation Notes:**

- Start with Vite React TypeScript.
- Use the directory layout from `source-doc-map.md`.
- Port only the minimum seed needed to render Week 1.
- Keep initial state creation outside React components.
- Add CSS tokens before component polish so UI work stays consistent.

**Commands:**

```bash
cd prototype/prop-firm-operator
npm install
npm run dev
npm run build
```

**Gate:**

- Dev server starts.
- Build succeeds.
- App displays platform name, Week 1, founder, scenario, and six resources.
- No simulation logic is hardcoded inside React components.

### Milestone 2: Simulation Core

**Goal:** The machine runs 12 weeks in console before the UI becomes fancy.

**Create:**

- `prototype/prop-firm-operator/src/sim/clamp.ts`
- `prototype/prop-firm-operator/src/sim/createInitialRun.ts`
- `prototype/prop-firm-operator/src/sim/applyEffects.ts`
- `prototype/prop-firm-operator/src/sim/formula.ts`
- `prototype/prop-firm-operator/src/sim/simulateWeek.ts`
- `prototype/prop-firm-operator/src/sim/buildDigest.ts`
- `prototype/prop-firm-operator/src/dev/smokeRun.ts`
- `prototype/prop-firm-operator/src/dev/scriptedRoutes.ts`

**Calculation Order:**

1. Apply delayed effects.
2. Shift audience mix.
3. Calculate signups.
4. Calculate passes, failures, payout requests, and successful payouts.
5. Calculate financials.
6. Update visible resources.
7. Update hidden counters.
8. Store snapshot.
9. Prepare digest.

Do not reorder this without writing down why.

**Tests To Add:**

- `createInitialRun` clamps resources to 0-100.
- audience mix normalizes to 1.
- `simulateWeek` creates a `WeekSnapshot`.
- a default route reaches Week 12.
- delayed effects due this week are applied and recorded.

**Commands:**

```bash
cd prototype/prop-firm-operator
npm run test
npm run build
```

**Gate:**

- Console smoke run reaches Week 12.
- Every snapshot includes controls, resources start/end, counters start/end, audience start/end, outcomes, digest, delayed effects applied, and delayed effects created.
- Resources never leave 0-100.
- The simulation can run without React.

### Milestone 3: Events, Memory, Diagnosis, Route Tuning

**Goal:** The system starts to remember and differentiate player style.

**Create:**

- `prototype/prop-firm-operator/src/data/events.seed.ts`
- `prototype/prop-firm-operator/src/data/content.seed.ts`
- `prototype/prop-firm-operator/src/sim/selectEvent.ts`
- `prototype/prop-firm-operator/src/sim/resolveEvent.ts`
- `prototype/prop-firm-operator/src/sim/buildEndingPreview.ts`
- `prototype/prop-firm-operator/src/dev/routeAssertions.ts`

**Event Timing Targets:**

- Week 3: `Weekend Promo Temptation`
- Week 6: `Viral Winner Thread`
- Week 8: `Silent Winners Cluster`
- Week 10: `Payment Processor Warning`
- Week 12: `First Regulator Letter` or diagnosis

**Scripted Routes:**

```ts
const dirtyGrowth = {
  challengeFee: 4,
  profitTarget: 4,
  maxDrawdown: 2,
  payoutSplit: 2,
  marketingTone: 5,
};

const pseudoFair = {
  challengeFee: 3,
  profitTarget: 3,
  maxDrawdown: 4,
  payoutSplit: 4,
  marketingTone: 3,
};

const rationalTightening = {
  challengeFee: 4,
  profitTarget: 5,
  maxDrawdown: 1,
  payoutSplit: 2,
  marketingTone: 2,
};
```

**Gate:**

- Three scripted routes reach Week 12.
- At least two diagnosis types appear.
- At least four events can create delayed effects.
- Digest can explain at least one delayed effect with a source week.
- Events do not feel like random punishments in logs.

### Milestone 4: Playable Control Room

**Goal:** A player can run Week 1-3 without console help.

**Create:**

- `prototype/prop-firm-operator/src/state/runStore.ts`
- `prototype/prop-firm-operator/src/state/routeExport.ts`
- `prototype/prop-firm-operator/src/ui/AppShell.tsx`
- `prototype/prop-firm-operator/src/ui/TopPulseBar.tsx`
- `prototype/prop-firm-operator/src/ui/ResourceCard.tsx`
- `prototype/prop-firm-operator/src/ui/ControlRoom.tsx`
- `prototype/prop-firm-operator/src/ui/MetricSummaryGrid.tsx`
- `prototype/prop-firm-operator/src/ui/RiskCard.tsx`
- `prototype/prop-firm-operator/src/ui/NarrativeFeed.tsx`
- `prototype/prop-firm-operator/src/ui/ControlPanel.tsx`
- `prototype/prop-firm-operator/src/ui/ControlSlider.tsx`
- `prototype/prop-firm-operator/src/ui/ImpactPreview.tsx`
- `prototype/prop-firm-operator/src/ui/WeekDigest.tsx`

**UI Principles:**

- First screen is the control room, not a landing page.
- Dense, readable, operational.
- Cards use radius 8px or less.
- Text must not overlap on mobile or desktop.
- Impact preview shows direction, not exact formulas.
- Hidden counters appear only as shadows in risk lines, digest hints, and diagnosis evidence.

**Gate:**

- Week is visible within 5 seconds.
- Cash/flow/profitability direction is visible within 10 seconds.
- Main risk is visible within 15 seconds.
- Locked controls show unlock reason.
- Player can run Week 1-3 manually.
- Digest shows at least one narrative feed item and one risk hint.

### Milestone 5: Event Modal, Diagnosis, Export, Debug

**Goal:** The vertical slice is ready for internal dry run.

**Create:**

- `prototype/prop-firm-operator/src/ui/EventModal.tsx`
- `prototype/prop-firm-operator/src/ui/DiagnosisCard.tsx`
- `prototype/prop-firm-operator/src/ui/DebugPanel.tsx`

**Required Behaviors:**

- Event modal shows title, body, three options, direction chips, and delayed risk hint.
- Choosing an option applies immediate effects and queues delayed effects.
- Week 12 shows diagnosis, evidence, route summary, reset, and export.
- Export includes runId, snapshots, triggered events, chosen options, delayed effects, final diagnosis.
- Debug panel is folded by default and can show hidden counters, active delayed effects, and event scores.

**Gate:**

- One full UI run reaches Week 12.
- Route export JSON opens and is useful for review.
- Week 12 diagnosis appears.
- At least one delayed effect is explained in Digest.
- Internal dry run produces at least one self-justified bad decision.

### Milestone 6: Visual Asset and Presentation Pass

**Goal:** Make the playable prototype feel like a credible late-night operations desk without hiding the system.

**Inputs:**

- AI design pack
- shot list
- asset production system
- visual interaction spec
- UI system spec

**Create or Integrate:**

- `prototype/prop-firm-operator/src/assets/` if generated assets are used by the app.
- Control room background plate.
- Week digest background texture.
- Event art for the six required events.
- Brand strip for `HyperGrowth Capital`.

**Rules:**

- Generated images support the UI; they do not replace readable UI.
- No text-critical information should live only inside an AI image.
- Do not let visual polish delay route export, simulation tests, or diagnosis.

**Gate:**

- The control room feels credible before unsettling.
- The UI remains readable with assets enabled.
- No asset is referenced only from `$CODEX_HOME` or another local generated-image folder.
- All project-bound images live under the prototype or documented design asset folder.

### Milestone 7: Playtest Readiness

**Goal:** Decide whether the prototype deserves external playtest.

**Required Gates:**

- Gate 0: Scope discipline passes.
- Gate 1: Simulation works.
- Gate 2: Route differentiation passes.
- Gate 3: Event layer passes.
- Gate 4: UI readability passes.
- Gate 5: Playtest tooling passes.
- Gate 6: Content and tone passes.
- Gate 7: Dry run passes.

**Go Criteria:**

- 12-week run completes.
- Three scripted routes produce at least two diagnosis types.
- Week 3, 6, 8, and 10 events can trigger.
- At least two delayed effects appear and are explained in Digest.
- Route export works.
- Week 12 diagnosis appears.
- Internal dry run produces at least one self-justified dirty choice.

**No-Go Criteria:**

- 12 weeks cannot complete.
- Route export is missing.
- All routes feel identical.
- Events feel random.
- Week 1-3 has no temptation.
- Players cannot explain what they are operating.

## Phase 2 Parking Lot

These workstreams are documented but should not block v0:

- Founder Access buy page
- Unlock page
- Manual payment fulfillment
- Alternative payment methods
- Public monetization page
- Steam or commercial packaging
- Multi-founder expansion
- Multi-scenario expansion
- Meta progression
- 24-36 week full run
- Full endings

Start Phase 2 only after v0 playtest is at least conditional green.

## Commit Cadence

Prefer one commit per working slice:

- scaffold
- types and seed
- simulation core
- events and diagnosis
- route assertions
- control room UI
- event/digest/diagnosis UI
- export/debug tooling
- visual pass

Each commit should leave `npm run build` passing. Simulation commits should also leave `npm run test` passing once tests exist.

## Final Execution Rule

When uncertain, choose the next task that makes the loop more observable.

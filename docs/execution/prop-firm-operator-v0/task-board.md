# Prop Firm Operator v0 Task Board

Date: 2026-04-24
Status: ready-to-execute

## Working Rules

- Keep v0 scoped to one founder, one scenario, one 12-week run.
- Make simulation work before UI polish.
- Add tests around pure simulation logic before relying on manual UI testing.
- Keep React components presentation-focused.
- Commit after each completed task group.
- Do not add backend, auth, payment, landing page, or meta progression.

## P0 Tasks

### Task 0.1: Confirm v0 Boundary

**Files:**

- Read: `docs/execution/prop-firm-operator-v0/development-execution-plan.md`
- Read: `docs/plans/2026-04-24-prop-firm-operator-pre-implementation-handoff.md`

**Steps:**

1. Confirm implementation path is `prototype/prop-firm-operator/`.
2. Confirm stack is Vite + React + TypeScript.
3. Confirm no backend, login, database, payment, or landing page in v0.
4. Confirm v0 run is `The Showman` + `Bull Euphoria` + 12 weeks.

**Acceptance:**

- Scope is clear enough that implementation can start without more product debate.

### Task 1.1: Scaffold Vite React App

**Files:**

- Create: `prototype/prop-firm-operator/package.json`
- Create: `prototype/prop-firm-operator/index.html`
- Create: `prototype/prop-firm-operator/vite.config.ts`
- Create: `prototype/prop-firm-operator/tsconfig.json`
- Create: `prototype/prop-firm-operator/src/app/App.tsx`
- Create: `prototype/prop-firm-operator/src/main.tsx`

**Steps:**

1. Scaffold a Vite React TypeScript app.
2. Add scripts for `dev`, `build`, `test`, and `test:run`.
3. Render a minimal `Prop Firm Operator` shell.
4. Add Vitest setup.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm install
npm run build
npm run test:run
```

**Acceptance:**

- Build passes.
- Tests run, even if only a placeholder test exists.
- Page renders a shell without simulation logic.

**Commit:**

```bash
git add prototype/prop-firm-operator
git commit -m "Create prop firm operator prototype scaffold"
```

### Task 1.2: Add Layout and CSS Tokens

**Files:**

- Create: `prototype/prop-firm-operator/src/styles/tokens.css`
- Create: `prototype/prop-firm-operator/src/styles/layout.css`
- Create: `prototype/prop-firm-operator/src/app/app.css`
- Create: `prototype/prop-firm-operator/src/ui/AppShell.tsx`

**Steps:**

1. Define color tokens for dark graphite, green growth, blue trust, amber heat, red crisis, and magenta contamination.
2. Define spacing, radius, text sizes, and stable button/card dimensions.
3. Build a static app shell with platform, week, founder, scenario, reset, and export slots.
4. Keep card radius at 8px or less.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Acceptance:**

- App looks like an operations desk shell, not a landing page.
- Text does not overflow in the static shell.
- No generated assets are required yet.

**Commit:**

```bash
git add prototype/prop-firm-operator/src
git commit -m "Add prototype app shell and style tokens"
```

### Task 2.1: Define Simulation Types

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/types.ts`

**Steps:**

1. Define `ResourceKey`, `CounterKey`, `AudienceKey`, and `ControlLevel`.
2. Define `Resources`, `HiddenCounters`, `AudienceMix`, `PlayerControls`.
3. Define `Effect`, `DelayedEffect`, `EventCard`, `EventOption`.
4. Define `WeekSnapshot`, `RunState`, `FounderMode`, `Scenario`, and `EndingPreview`.
5. Ensure all objects needed for export are represented.

**Acceptance:**

- TypeScript can represent resources start/end, counters start/end, audience start/end, outcomes, delayed effects, events, and diagnosis.
- Types are UI-agnostic.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim/types.ts
git commit -m "Define prop firm simulation types"
```

### Task 2.2: Port Minimal Seed Data

**Files:**

- Create: `prototype/prop-firm-operator/src/data/founder.seed.ts`
- Create: `prototype/prop-firm-operator/src/data/scenario.seed.ts`
- Create: `prototype/prop-firm-operator/src/data/run.seed.ts`
- Create: `prototype/prop-firm-operator/src/data/controlAvailability.seed.ts`

**Steps:**

1. Port `The Showman`.
2. Port `Bull Euphoria`.
3. Port initial resources, counters, audience, controls, and max weeks.
4. Port control availability by week.
5. Export typed seed objects.

**Acceptance:**

- Initial seed can create a Week 1 run without reading from React.
- Week 1 only fee, target, and tone are unlocked.
- Week 4 unlocks payout split.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/data
git commit -m "Add v0 founder scenario and run seed"
```

### Task 3.1: Create Initial Run

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/clamp.ts`
- Create: `prototype/prop-firm-operator/src/sim/createInitialRun.ts`
- Test: `prototype/prop-firm-operator/src/sim/createInitialRun.test.ts`

**Steps:**

1. Implement `clamp100`.
2. Implement audience normalization.
3. Implement `createInitialRun`.
4. Test resource clamping, audience normalization, initial week, status, and empty snapshot history.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run -- createInitialRun
npm run build
```

**Acceptance:**

- `createInitialRun` returns a legal `RunState`.
- No mutation of imported seed objects.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim
git commit -m "Create initial run state"
```

### Task 3.2: Implement Effect Application

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/applyEffects.ts`
- Test: `prototype/prop-firm-operator/src/sim/applyEffects.test.ts`

**Steps:**

1. Support effects against `resources.*`, `counters.*`, `audience.*`, and flags.
2. Clamp resources and counters.
3. Normalize audience after audience effects.
4. Return a new state object.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run -- applyEffects
```

**Acceptance:**

- Immediate and delayed effects can share the same application path.
- Effects are recorded by caller, not silently swallowed.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim
git commit -m "Implement generic effect application"
```

### Task 3.3: Implement Formula v0

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/formula.ts`
- Test: `prototype/prop-firm-operator/src/sim/formula.test.ts`

**Steps:**

1. Convert control levels to `-2` to `+2` bias.
2. Implement audience shift.
3. Implement signups.
4. Implement effective pass rate.
5. Implement failures, passes, payout requests, successful payouts.
6. Implement fee revenue, promo cost, support cost, payout cost, and cash delta.
7. Implement visible resource updates and hidden counter updates.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run -- formula
npm run build
```

**Acceptance:**

- Formula does not mutate `RunState`.
- Dirty growth is sweeter early than pseudo fair.
- Outputs include enough data for Week Digest.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim
git commit -m "Implement weekly formula v0"
```

### Task 3.4: Simulate Week and Store Snapshots

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/simulateWeek.ts`
- Create: `prototype/prop-firm-operator/src/sim/buildDigest.ts`
- Test: `prototype/prop-firm-operator/src/sim/simulateWeek.test.ts`

**Steps:**

1. Apply due delayed effects before formula.
2. Run formula.
3. Build a snapshot with start/end resources, start/end counters, start/end audience, outcome, digest, applied delayed effects, and created delayed effects.
4. Increment current week.
5. End status after Week 12.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run -- simulateWeek
```

**Acceptance:**

- A 12-week default route completes.
- Snapshots contain enough data for diagnosis and export.
- Delayed effects are visible in snapshot history.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim
git commit -m "Simulate weekly run snapshots"
```

### Task 4.1: Port Six Events

**Files:**

- Create: `prototype/prop-firm-operator/src/data/events.seed.ts`
- Create: `prototype/prop-firm-operator/src/data/content.seed.ts`

**Steps:**

1. Port six required events.
2. Give each event three options.
3. Give each option immediate effects, delayed effects, direction chips, and a risk hint.
4. Keep text operational, not moralizing.

**Acceptance:**

- 6 events exist.
- 18 options exist.
- At least 4 events create delayed effects.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/data
git commit -m "Add v0 event and content seeds"
```

### Task 4.2: Select and Resolve Events

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/selectEvent.ts`
- Create: `prototype/prop-firm-operator/src/sim/resolveEvent.ts`
- Test: `prototype/prop-firm-operator/src/sim/events.test.ts`

**Steps:**

1. Implement event scoring from week, resources, counters, flags, and triggered event history.
2. Prefer expected timing windows for Week 3, 6, 8, 10, and 12.
3. Resolve selected option effects.
4. Add created delayed effects to the queue.
5. Mark event as triggered.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run -- events
```

**Acceptance:**

- Events relate to state.
- Events do not repeat unless explicitly allowed.
- Event options create visible and delayed consequences.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim
git commit -m "Implement event selection and resolution"
```

### Task 4.3: Diagnosis and Route Assertions

**Files:**

- Create: `prototype/prop-firm-operator/src/sim/buildEndingPreview.ts`
- Create: `prototype/prop-firm-operator/src/dev/scriptedRoutes.ts`
- Create: `prototype/prop-firm-operator/src/dev/routeAssertions.ts`
- Create: `prototype/prop-firm-operator/src/dev/smokeRun.ts`

**Steps:**

1. Build at least five diagnosis candidates.
2. Include evidence from resources, hidden counter shadows, and player flags.
3. Add three scripted routes.
4. Add Week 6, Week 9, and Week 12 assertions.
5. Print route summary and final diagnosis.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run test:run
npm run build
```

**Acceptance:**

- Dirty Growth, Pseudo Fair, and Rational Tightening all reach Week 12.
- At least two diagnosis types appear.
- Failed route assertions print useful tuning hints.

**Commit:**

```bash
git add prototype/prop-firm-operator/src/sim prototype/prop-firm-operator/src/dev
git commit -m "Add diagnosis and route assertions"
```

### Task 5.1: Run Store and Route Export

**Files:**

- Create: `prototype/prop-firm-operator/src/state/runStore.ts`
- Create: `prototype/prop-firm-operator/src/state/routeExport.ts`

**Steps:**

1. Implement reset.
2. Implement update controls with availability guard.
3. Implement run week.
4. Implement resolve event.
5. Implement proceed to next week.
6. Implement export route JSON.

**Acceptance:**

- UI can call store actions without directly mutating resources.
- Export includes runId, snapshots, triggered events, chosen options, delayed effects, and final diagnosis.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/state
git commit -m "Connect run state and export"
```

### Task 5.2: Resource Pulse and Control Room

**Files:**

- Create: `prototype/prop-firm-operator/src/ui/TopPulseBar.tsx`
- Create: `prototype/prop-firm-operator/src/ui/ResourceCard.tsx`
- Create: `prototype/prop-firm-operator/src/ui/ControlRoom.tsx`
- Create: `prototype/prop-firm-operator/src/ui/MetricSummaryGrid.tsx`
- Create: `prototype/prop-firm-operator/src/ui/RiskCard.tsx`
- Create: `prototype/prop-firm-operator/src/ui/NarrativeFeed.tsx`

**Steps:**

1. Render six resources with label, value, delta, status, and heat marker.
2. Render current week and main risk.
3. Render narrative feed from latest digest/snapshot.
4. Keep information dense and readable.

**Acceptance:**

- Player can tell current week, cash/flow direction, and main risk quickly.
- Critical state does not rely on color alone.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/ui
git commit -m "Build control room resource pulse"
```

### Task 5.3: Controls and Impact Preview

**Files:**

- Create: `prototype/prop-firm-operator/src/ui/ControlPanel.tsx`
- Create: `prototype/prop-firm-operator/src/ui/ControlSlider.tsx`
- Create: `prototype/prop-firm-operator/src/ui/ImpactPreview.tsx`

**Steps:**

1. Render five controls.
2. Lock controls by week and show unlock reason.
3. Update controls through store only.
4. Show directional preview and audience sentence.
5. Add `Run Week` action.

**Acceptance:**

- Player can run Week 1-3 manually.
- Locked controls do not look broken.
- Preview does not expose raw formulas.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/ui
git commit -m "Add controls and impact preview"
```

### Task 5.4: Digest, Event Modal, Diagnosis

**Files:**

- Create: `prototype/prop-firm-operator/src/ui/WeekDigest.tsx`
- Create: `prototype/prop-firm-operator/src/ui/EventModal.tsx`
- Create: `prototype/prop-firm-operator/src/ui/DiagnosisCard.tsx`

**Steps:**

1. Show Week Digest after a week is simulated.
2. Show event modal when an event is selected.
3. Resolve event option and return to run flow.
4. Show diagnosis after Week 12.
5. Provide reset and export actions.

**Acceptance:**

- Event modal has title, body, three options, direction chips, and delayed risk hint.
- Digest contains headline changes, feed, main risk, and delayed effect hint.
- Diagnosis contains title, subtitle, three evidence items, route summary, reset, and export.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src/ui
git commit -m "Add digest event and diagnosis views"
```

### Task 6.1: Debug Panel and Internal Dry Run

**Files:**

- Create: `prototype/prop-firm-operator/src/ui/DebugPanel.tsx`
- Create: `prototype/prop-firm-operator/src/dev/internalDryRun.md`

**Steps:**

1. Add folded debug panel.
2. Show hidden counters, delayed effects, event scores, and route flags.
3. Run one full UI playthrough.
4. Record friction, confusing copy, event randomness, and route export status.

**Acceptance:**

- One person can complete Week 1-12 in 20-30 minutes.
- Export JSON works.
- At least one self-justified dirty choice happens.
- Host does not need to explain formulas.

**Verify:**

```bash
cd prototype/prop-firm-operator
npm run build
npm run test:run
```

**Commit:**

```bash
git add prototype/prop-firm-operator/src prototype/prop-firm-operator/src/dev
git commit -m "Add debug panel and dry run notes"
```

## P1 Tasks

### Task 7.1: AI Asset Integration Pass

**Files:**

- Create as needed: `prototype/prop-firm-operator/src/assets/`
- Read: `docs/plans/2026-04-24-prop-firm-operator-ai-design-pack-v0.md`
- Read: `docs/plans/2026-04-24-prop-firm-operator-ai-shot-list-and-prompts.md`
- Read: `docs/plans/2026-04-24-prop-firm-operator-asset-production-system.md`

**Steps:**

1. Pick one direction-locked control room background.
2. Pick one digest background.
3. Pick six event artworks only if they improve event recognition.
4. Copy project-bound assets into the prototype or documented design asset folder.
5. Update UI references.

**Acceptance:**

- UI remains readable with assets enabled.
- No project asset references `$CODEX_HOME`.
- AI text is not used as final readable UI copy.

### Task 7.2: Playtest Gate Review

**Files:**

- Read: `docs/plans/2026-04-24-prop-firm-operator-vertical-slice-acceptance-checklist.md`
- Read: `docs/plans/2026-04-24-prop-firm-operator-playtest-runbook.md`
- Read: `docs/plans/2026-04-24-prop-firm-operator-playtest-questions-pack.md`

**Steps:**

1. Run through Gates 0-7.
2. Mark every failure as No-Go, Conditional Go, or Go.
3. Run one internal dry run.
4. Export route JSON and inspect it.

**Acceptance:**

- Playtest readiness decision is explicit.
- If No-Go, the next fix is formula, event, UI readability, or export, not content expansion.

## P2 Parking Lot

These tasks are intentionally deferred:

- Founder Access buy page
- Unlock page
- Manual payment review queue
- Alternative payment method flow
- Commercial packaging page
- Meta progression
- Multi-founder mode
- Multi-scenario mode
- Full 24-36 week run
- Full endings

Only start these after v0 validates the toxic loop.

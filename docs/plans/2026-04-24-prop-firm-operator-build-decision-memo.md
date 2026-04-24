# Prop Firm Operator - Build Decision Memo

Date: 2026-04-24
Status: exploration

## Decision

**Proceed to a contained playable prototype.**

The current research package is strong enough to justify building a first vertical slice, but not a full game.

The next step should be:

**a 12-week single-scenario playable prototype that tests whether the core toxic loop works.**

## Why Proceed

### 1. The core fantasy is specific

This is no longer a vague “financial management game.”

It has a sharp fantasy:

- take over a prop challenge platform
- tune rules, pricing, payout generosity, and marketing tone
- enjoy short-term growth
- watch user quality, winners, complaints, payment pressure, and regulatory heat come back later

The player role is legible.

### 2. The simulation has a clear spine

The system now has:

- 6 visible resources
- 5 player controls
- 3 audience groups
- 5 hidden counters
- 6 key prototype events
- 12-week playable run
- Week 12 diagnosis

That is enough to build without inventing new design while coding.

### 3. The prototype scope is constrained

The package repeatedly says what not to build:

- no backend
- no login
- no meta progression
- no multi-founder implementation
- no multi-scenario implementation
- no complex charts
- no full ending cinematic

This is a good sign. The work has a fence around it.

### 4. The test is falsifiable

The first prototype has clear success and failure criteria:

- players understand the business within 5 minutes
- Week 1-3 creates growth temptation
- players make at least one short-term rational but long-term toxic choice
- Week 5-10 consequences are traceable
- Week 12 creates replay desire

If those fail, the team knows where to go back.

## What To Build First

Build only:

1. `The Showman`
2. `Bull Euphoria`
3. `HyperGrowth Capital`
4. 12-week run
5. 5 controls
6. 6 resources
7. 5 hidden counters
8. 6 events
9. Week Digest
10. Week 12 Diagnosis
11. route export
12. debug panel

This is the whole v0.

## First Implementation Order

### Phase 1: Machine

Goal:

- make the system run in console

Must finish:

- types
- content seed
- initial run
- formula v0
- simulate week
- delayed effects
- event selection
- ending preview
- scripted routes

Do not touch visual polish until this works.

### Phase 2: Control Surface

Goal:

- make the player operate the machine

Must finish:

- AppShell
- TopPulseBar
- ControlRoom
- ControlPanel
- ImpactPreview
- EventModal
- WeekDigest
- DiagnosisCard

Do not add new screens.

### Phase 3: Playtest Readiness

Goal:

- make the prototype observable

Must finish:

- route export
- debug panel
- reset
- local recovery or explicit no-recovery behavior
- internal dry run
- runbook package

Do not recruit external testers before export works.

## What Not To Build Yet

### Do not build more content

Do not add:

- all 12 event cards
- all founder modes
- all scenarios
- long-run endings
- unlocks
- archives
- meta progression

The first test is about loop validity, not content volume.

### Do not build a realistic trading simulator

Do not add:

- live markets
- candlesticks
- order books
- broker routing
- real trader performance simulation

The game is about platform economics and social consequences, not trading skill.

### Do not build a backend

No backend is needed for:

- 12-week local run
- route export
- playtest observation
- formula tuning

Backend work would only slow the first truth test.

### Do not polish before route differentiation

If the three scripted routes do not diverge, UI polish is waste.

Route differentiation must pass before the team spends time on visual finish.

## Success Criteria For v0

v0 is successful if:

1. A player can finish a 12-week run in 20-30 minutes.
2. At least 3/5 players make one knowingly dirty but practical decision.
3. At least 3/5 players connect one later consequence to an earlier choice.
4. At least 2/5 players independently understand winner ambivalence.
5. At least 3/5 players want to replay with a different route.
6. The export data explains what happened.

## Stop Criteria

Stop expanding the prototype if:

1. Players do not understand the business after 5 minutes.
2. Players do not feel early growth temptation.
3. Events feel random to most testers.
4. Winners feel like pure rewards.
5. Three baseline routes collapse into the same diagnosis.

If any of these happen, return to the relevant design layer:

- onboarding
- Week 1-3 tuning
- delayed effect visibility
- winner/payout modeling
- route tuning matrix

## Main Risks

### Highest-risk product question

Can the prototype make bad decisions feel operationally reasonable?

If not, the core fantasy loses its teeth.

### Highest-risk simulation question

Can delayed effects feel traceable instead of random?

If not, players will not feel implicated.

### Highest-risk UI question

Can the Control Room show profit and structural heat at the same time without becoming noisy?

If not, players will only read numbers or only read story, not both.

### Highest-risk playtest question

Can the test observe self-justification instead of just preference?

If not, the wrong thing will be measured.

## Recommended First Week Plan

### Day 1

- scaffold project
- define types
- port seed
- create initial run

### Day 2

- formula v0
- simulate week
- delayed effects
- console route run

### Day 3

- event selection
- event resolution
- ending preview
- route assertions

### Day 4

- AppShell
- TopPulseBar
- ControlRoom
- ControlPanel
- WeekDigest

### Day 5

- EventModal
- DiagnosisCard
- export
- debug panel
- internal dry run

## Decision Summary

Build the vertical slice.

Keep it small.

Measure the toxic loop, not content appetite.

Do not let the project become a full game before it proves that the first 12 weeks can make a player think:

**I know why this is bad. I also know why I pressed it.**

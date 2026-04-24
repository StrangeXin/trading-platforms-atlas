# Prop Firm Operator - Pre-Implementation Handoff

Date: 2026-04-24
Status: exploration

## Purpose

This is the one-page handoff for whoever starts building `prototype/prop-firm-operator/`.

Read this first.

Then open the linked docs only when needed.

## Current Decision

Proceed with a contained v0 vertical slice.

Build:

- one founder: `The Showman`
- one scenario: `Bull Euphoria`
- one 12-week run
- five controls
- six visible resources
- five hidden counters
- six events
- weekly digest
- Week 12 diagnosis
- route export
- debug panel

Do not build the full game.

## Project Location

Recommended path:

```text
prototype/prop-firm-operator/
```

Recommended stack:

- Vite
- React
- TypeScript
- client-side state
- static content seed
- local route export

No backend.

## Day 1 Checklist

Do these in order:

1. Scaffold Vite React TypeScript app.
2. Create directory structure from scaffold plan.
3. Add base CSS tokens.
4. Write `src/sim/types.ts`.
5. Port `initialRunSeed`.
6. Port `The Showman`.
7. Port `Bull Euphoria`.
8. Port control availability.
9. Render initial resources in a shell UI.

Day 1 is done when:

- `npm run dev` starts
- `npm run build` works
- app displays platform name, Week 1, founder, scenario, six resources
- no simulation logic is hardcoded in React components

## Core Design Rule

First make the machine calculate.

Then make it remember.

Then make the player see what they fed it.

## Required Docs For Implementation

### Start Here

- `docs/plans/2026-04-24-prop-firm-operator-build-decision-memo.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-v0-work-order.md`
- `docs/plans/2026-04-24-prop-firm-operator-implementation-ticket-breakdown.md`

### Data and Formula

- `docs/plans/2026-04-24-prop-firm-operator-prototype-data-schema.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-content-json-seed.md`
- `docs/plans/2026-04-24-prop-firm-operator-simulation-formula-v0.md`

### UI

- `docs/plans/2026-04-24-prop-firm-operator-prototype-ui-system-spec.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-ux-copy-pass.md`

### Tuning and Validation

- `docs/plans/2026-04-24-prop-firm-operator-route-tuning-matrix.md`
- `docs/plans/2026-04-24-prop-firm-operator-vertical-slice-acceptance-checklist.md`
- `docs/plans/2026-04-24-prop-firm-operator-playtest-runbook.md`

## Must Preserve

### Weekly calculation order

1. Apply delayed effects
2. Shift audience mix
3. Calculate signups
4. Calculate pass/fail/payout requests
5. Calculate financials
6. Update resources
7. Update hidden counters
8. Select event
9. Resolve event
10. Build digest
11. Store snapshot

Do not reorder this without writing down why.

### Hidden counter philosophy

Do not show hidden counter numbers to players.

Do show their shadows:

- risk cards
- digest hints
- narrative feed
- diagnosis evidence

### Event philosophy

Events are pressure tests, not random cards.

Each event should:

- relate to prior state
- force a stance
- have short-term temptation
- create or reveal delayed consequences

## Do Not Build

Do not add:

- backend
- auth
- real market data
- multi-founder UI
- multi-scenario UI
- meta progression
- long-run 36-week mode
- full ending cinematics
- complex chart library
- public landing page

If tempted, write it in a future backlog, not v0.

## First Smoke Tests

Before UI polish, console-run:

1. Dirty Growth
2. Pseudo Fair
3. Rational Tightening

Required:

- all reach Week 12
- at least 2 diagnosis types
- Week 6 / 9 / 12 route differences visible
- at least 2 delayed effects applied and explained

## First Internal Dry Run

Run one full UI playthrough before external testing.

Pass if:

- one person finishes in 20-30 minutes
- Week 3 promo feels tempting
- one delayed consequence is traceable
- Week 12 diagnosis feels route-specific
- export JSON opens and contains snapshots

Fail if:

- host must explain the business repeatedly
- events feel random
- route export fails
- player cannot tell what to do next

## Known Defaults

- v0 founder: `The Showman`
- v0 scenario: `Bull Euphoria`
- v0 platform: `HyperGrowth Capital`
- v0 run length: `12 weeks`
- v0 ending style: diagnosis, not full ending
- v0 test size: 5 players first

## One-Sentence Goal

Build the smallest version that can make a player say:

**I know why this is bad. I also know why I pressed it.**

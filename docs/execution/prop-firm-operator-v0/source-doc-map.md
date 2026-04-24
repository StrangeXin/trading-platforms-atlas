# Prop Firm Operator v0 Source Document Map

Date: 2026-04-24
Status: reference

## How To Use This Map

Use this file when implementation needs deeper context. Do not read every planning document before every task.

The shortest read path is:

1. `planning-package-final-summary`
2. `pre-implementation-handoff`
3. `prototype-v0-work-order`
4. this execution folder

Then open only the source docs needed for the current task.

## Execution Control Docs

Read these before coding:

- `docs/plans/2026-04-24-prop-firm-operator-planning-package-final-summary.md`
- `docs/plans/2026-04-24-prop-firm-operator-pre-implementation-handoff.md`
- `docs/plans/2026-04-24-prop-firm-operator-build-decision-memo.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-v0-work-order.md`
- `docs/plans/2026-04-24-prop-firm-operator-implementation-ticket-breakdown.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-build-order.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-scope.md`

Use for:

- scope lock
- daily build order
- commit slicing
- No-Go criteria
- what not to build

## Scaffold and Architecture Docs

- `docs/plans/2026-04-24-prop-firm-operator-prototype-project-scaffold-plan.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-data-schema.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-readme-draft.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-v0-changelog-seed.md`

Use for:

- app directory layout
- file boundaries
- state flow
- README/changelog later

## Simulation and Balancing Docs

- `docs/plans/2026-04-24-prop-firm-operator-core-economic-simulation.md`
- `docs/plans/2026-04-24-prop-firm-operator-simulation-formula-v0.md`
- `docs/plans/2026-04-24-prop-firm-operator-numeric-balancing-notes.md`
- `docs/plans/2026-04-24-prop-firm-operator-paper-sim-sheet-spec.md`
- `docs/plans/2026-04-24-prop-firm-operator-route-tuning-matrix.md`

Use for:

- formula order
- audience shift
- signups/pass/fail/payout model
- hidden counters
- route assertions
- tuning red lines

Critical rule from these docs:

```text
delayed effects -> audience shift -> signups -> pass/fail/payout -> financials -> resources -> hidden counters -> event -> snapshot
```

## Content and Event Docs

- `docs/plans/2026-04-24-prop-firm-operator-event-deck.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-content-pack.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-content-json-seed.md`
- `docs/plans/2026-04-24-prop-firm-operator-scenario-content-pack.md`
- `docs/plans/2026-04-24-prop-firm-operator-narrative-tone-pack.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-ux-copy-pass.md`
- `docs/plans/2026-04-24-prop-firm-operator-first-30-minutes-script.md`

Use for:

- event titles and bodies
- event option labels
- delayed risk hints
- digest titles
- risk lines
- opening copy
- tone checks

v0 event subset:

- `Weekend Promo Temptation`
- `Feels Rigged Forum Post`
- `Viral Winner Thread`
- `Silent Winners Cluster`
- `Payment Processor Warning`
- `First Regulator Letter`

## UI and Interaction Docs

- `docs/plans/2026-04-24-prop-firm-operator-prototype-ui-system-spec.md`
- `docs/plans/2026-04-24-prop-firm-operator-dashboard-ia.md`
- `docs/plans/2026-04-24-prop-firm-operator-interface-wireframe-notes.md`
- `docs/plans/2026-04-24-prop-firm-operator-visual-interaction.md`

Use for:

- control room layout
- resource card states
- event modal structure
- digest layout
- diagnosis card
- visual semantics
- interaction density

UI rule:

```text
The first screen is the usable control room, not a marketing or explanatory landing page.
```

## Visual Asset Docs

- `docs/plans/2026-04-24-prop-firm-operator-ai-design-pack-v0.md`
- `docs/plans/2026-04-24-prop-firm-operator-ai-shot-list-and-prompts.md`
- `docs/plans/2026-04-24-prop-firm-operator-asset-production-system.md`

Use for:

- background plates
- event art
- brand strips
- generated-asset naming and review
- visual acceptance criteria

Asset rule:

```text
AI generates visual support, not final readable UI.
```

## Validation and Playtest Docs

- `docs/plans/2026-04-24-prop-firm-operator-vertical-slice-acceptance-checklist.md`
- `docs/plans/2026-04-24-prop-firm-operator-playtest-runbook.md`
- `docs/plans/2026-04-24-prop-firm-operator-playtest-questions-pack.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-risk-register.md`
- `docs/plans/2026-04-24-prop-firm-operator-open-questions-log.md`

Use for:

- launch gates
- dry run protocol
- external playtest readiness
- risk triggers
- stopping criteria

Do not enter external playtest unless:

- 12-week run completes
- route export works
- three scripted routes differentiate
- events do not feel random
- Week 1-3 has real temptation

## Commercial and Payment Docs

- `docs/plans/2026-04-24-prop-firm-operator-commercial-packaging.md`
- `docs/plans/2026-04-24-prop-firm-operator-web-monetization-strategy.md`
- `docs/plans/2026-04-24-prop-firm-operator-web-payment-integration-spec.md`
- `docs/plans/2026-04-24-prop-firm-operator-alt-payment-manual-fulfillment-spec.md`
- `docs/plans/2026-04-24-prop-firm-operator-china-payout-options.md`

Use for Phase 2 only:

- Founder Access
- buy page
- unlock page
- manual fulfillment
- payment methods
- commercial messaging

Do not use these to widen v0. v0 validates playability, not monetization.

## Expansion and Deferred Design Docs

- `docs/plans/2026-04-24-prop-firm-operator-founder-archetypes.md`
- `docs/plans/2026-04-24-prop-firm-operator-founder-modes-pack.md`
- `docs/plans/2026-04-24-prop-firm-operator-scenario-unlocks.md`
- `docs/plans/2026-04-24-prop-firm-operator-meta-progression.md`
- `docs/plans/2026-04-24-prop-firm-operator-run-structure-endings.md`
- `docs/plans/2026-04-24-prop-firm-operator-prototype-backlog-icebox.md`

Use for:

- future founders
- future scenarios
- future 24-36 week runs
- meta progression
- full endings
- post-v0 backlog

Do not implement these before v0 playtest.

## Atlas Research Context

The broader `en/` and `zh/` atlas chapters provide domain context about prop firms, broker economics, platform incentives, leverage, regulators, and survivorship narratives.

Most relevant areas:

- `zh/07-essentials/`
- `en/07-essentials/`
- `zh/04-relationships/05-prop-firm-ecosystem.md`
- `en/04-relationships/05-prop-firm-ecosystem.md`
- `zh/02-platforms/ftmo.md`
- `en/02-platforms/ftmo.md`

Use these for tone and domain grounding, not as implementation tickets.

## Source Priority During Conflicts

If source docs disagree, use this priority:

1. `planning-package-final-summary`
2. `pre-implementation-handoff`
3. `prototype-v0-work-order`
4. `vertical-slice-acceptance-checklist`
5. specific system spec for the task
6. older exploration docs

Default answer to scope conflict:

```text
Do the smaller v0 thing first.
```

# Prop Firm Operator - Planning Package Final Summary

Date: 2026-04-24
Status: v0-control

## One-Line Summary

`Prop Firm Operator` is a proposed management sim about running a fast-growing prop challenge platform, where short-term profitable decisions create delayed payout, trust, payment, and regulatory consequences.

## Current Decision

Proceed to a contained v0 playable prototype.

Do not build the full game yet.

The first build should validate the toxic loop:

**growth temptation -> dirty but rational choice -> delayed consequence -> route diagnosis -> replay desire**

## v0 Scope

Build:

- 1 founder: `The Showman`
- 1 scenario: `Bull Euphoria`
- 1 platform: `HyperGrowth Capital`
- 12-week run
- 5 controls
- 6 visible resources
- 5 hidden counters
- 3 audience groups
- 6 key events
- Week Digest
- Week 12 Diagnosis
- Route export
- Debug panel

Do not build:

- backend
- login
- multi-founder mode
- multi-scenario mode
- meta progression
- full endings
- real market simulation
- complex chart system
- public landing page

## Core System

### Visible Resources

- `Cash`
- `Flow`
- `Pass Rate`
- `Payout Liability`
- `Trust`
- `Regulatory Heat`

### Hidden Counters

- `Complaint Echo`
- `Winner Visibility`
- `Promo Debt`
- `Processor Patience`
- `Skilled Cluster`

### Player Controls

- `Challenge Fee`
- `Profit Target`
- `Max Drawdown`
- `Payout Split`
- `Marketing Tone`

### Audience Groups

- `Novice`
- `Gambler`
- `Skilled`

## v0 Events

Implement these 6:

1. `Weekend Promo Temptation`
2. `Feels Rigged Forum Post`
3. `Viral Winner Thread`
4. `Silent Winners Cluster`
5. `Payment Processor Warning`
6. `First Regulator Letter`

These cover:

- growth temptation
- fairness suspicion
- winner proof
- skilled-user risk
- payment pressure
- regulatory compression

## First Route Baselines

### Dirty Growth

High marketing, tighter rules, lower payout generosity.

Expected:

- sweetest early cash / flow
- rising complaint pressure
- trust decay
- regulatory heat

### Pseudo Fair

Moderate marketing, wider rules, higher payout split.

Expected:

- better trust
- visible winners
- higher payout liability
- expensive legitimacy

### Rational Tightening

Low marketing, high targets, tight drawdown.

Expected:

- controlled cash early
- lower flow
- low pass rate
- slow trust collapse through frustration

## Build Order

### Day 1

- scaffold app
- types
- seed data
- initial run renders

### Day 2

- formula v0
- simulate week
- delayed effects
- console 12-week run

### Day 3

- events
- diagnosis
- scripted routes
- route assertions

### Day 4

- control room
- controls
- impact preview
- digest

### Day 5

- event modal
- diagnosis card
- export
- debug panel
- internal dry run

## Go Criteria For Playtest

Enter first external playtest only if:

1. 12-week run completes.
2. Three scripted routes produce at least 2 diagnosis types.
3. Week 3 / 6 / 8 / 10 events can trigger.
4. At least 2 delayed effects appear and are explained in Digest.
5. Route export works.
6. Week 12 diagnosis appears.
7. Internal dry run produces at least one self-justified dirty choice.

## Playtest Success Criteria

Green Light if:

- most players understand the business within 5 minutes
- most players feel tempted by at least one bad-but-useful choice
- most players connect one later consequence to an earlier decision
- at least 2/5 understand winner ambivalence
- at least 3/5 want to replay with a different route

## Biggest Risks

### Risk 1: Bad choices are not tempting

Mitigation:

- make Week 1-3 cash / flow sweeter
- keep early punishment soft
- write promo as operational rescue, not evil choice

### Risk 2: Consequences feel random

Mitigation:

- delayed effect hints
- Digest echo lines
- snapshot history

### Risk 3: Winners feel like pure rewards

Mitigation:

- pair winner trust boost with payout liability rise
- show skilled cluster pressure

### Risk 4: Routes feel identical

Mitigation:

- route assertions
- route tuning matrix
- diagnosis evidence from player flags

## Essential Docs

### Build First

- `2026-04-24-prop-firm-operator-pre-implementation-handoff.md`
- `2026-04-24-prop-firm-operator-prototype-v0-work-order.md`
- `2026-04-24-prop-firm-operator-implementation-ticket-breakdown.md`

### Implement Data / Sim

- `2026-04-24-prop-firm-operator-prototype-data-schema.md`
- `2026-04-24-prop-firm-operator-prototype-content-json-seed.md`
- `2026-04-24-prop-firm-operator-simulation-formula-v0.md`

### Implement UI

- `2026-04-24-prop-firm-operator-prototype-ui-system-spec.md`
- `2026-04-24-prop-firm-operator-prototype-ux-copy-pass.md`

### Validate

- `2026-04-24-prop-firm-operator-route-tuning-matrix.md`
- `2026-04-24-prop-firm-operator-vertical-slice-acceptance-checklist.md`
- `2026-04-24-prop-firm-operator-playtest-runbook.md`
- `2026-04-24-prop-firm-operator-prototype-risk-register.md`

## Final Recommendation

Start implementation.

Keep scope locked.

Do not add content until the first 12-week machine proves it can make players feel implicated.

The v0 prototype succeeds if it makes the player think:

**I know why this is bad. I also know why I pressed it.**

# Prop Firm Operator - Prototype v0 Changelog Seed

Date: 2026-04-24
Status: exploration

## Purpose

This is the seed structure for a future `prototype/prop-firm-operator/CHANGELOG.md`.

The prototype will change through formula tuning, event rewriting, UI hierarchy passes, and playtest findings.

Those changes need reasons, not just version labels.

## Changelog Principle

Every meaningful prototype change should record:

- what changed
- why it changed
- which signal caused it
- which route or playtest behavior it should affect

Do not write vague entries like:

- improved balance
- polished UI
- fixed events

Write entries that preserve the learning.

## Recommended Format

```md
# Changelog

## [Unreleased]

### Simulation

- Changed:
- Reason:
- Expected effect:
- Watch:

### Content

- Changed:
- Reason:
- Expected effect:
- Watch:

### UI

- Changed:
- Reason:
- Expected effect:
- Watch:

### Playtest

- Finding:
- Decision:
- Follow-up:
```

## Initial Changelog Draft

```md
# Changelog

## [0.0.0] - Planning Baseline

### Scope

- Locked v0 to one founder, one scenario, one 12-week run.
- Founder: The Showman.
- Scenario: Bull Euphoria.
- Platform: HyperGrowth Capital.

Reason:

- The first playable should validate the toxic loop, not content breadth.

### Simulation

- Defined 6 visible resources: Cash, Flow, Pass Rate, Payout Liability, Trust, Regulatory Heat.
- Defined 5 hidden counters: Complaint Echo, Winner Visibility, Promo Debt, Processor Patience, Skilled Cluster.
- Defined 5 player controls: Challenge Fee, Profit Target, Max Drawdown, Payout Split, Marketing Tone.
- Defined formula v0 for audience shift, signups, pass rate, outcomes, costs, resource updates, hidden counters, and event scoring.

Reason:

- The prototype needs a compact machine that can create short-term gains and delayed consequences.

Watch:

- Whether delayed effects feel traceable.
- Whether pass rate is misunderstood as simply good/bad.
- Whether hidden counters are too hidden.

### Events

- Selected 6 v0 events:
  - Weekend Promo Temptation
  - Feels Rigged Forum Post
  - Viral Winner Thread
  - Silent Winners Cluster
  - Payment Processor Warning
  - First Regulator Letter

Reason:

- These cover growth temptation, fairness suspicion, winner proof, skilled-user risk, payment pressure, and regulatory compression.

Watch:

- Whether events feel like consequences rather than random cards.

### UI

- Defined industrial control-room visual direction.
- Defined core screens:
  - Control Room
  - Event Modal
  - Week Digest
  - Diagnosis Card
  - Debug Panel

Reason:

- The player must read profit and structural heat at the same time.

Watch:

- Whether Control Room becomes noisy.
- Whether players can identify main risk within 15 seconds.

### Routes

- Defined three scripted baselines:
  - Dirty Growth
  - Pseudo Fair
  - Rational Tightening

Reason:

- The first simulation must show route differentiation before UI polish.

Watch:

- Whether at least 2 diagnosis types appear by Week 12.

### Playtest

- Defined first playtest target: 5 players.
- Defined primary success condition: players make a short-term rational but long-term toxic choice and later connect consequence to choice.

Reason:

- The prototype should test self-justification, not general satisfaction.
```

## Change Categories

### Simulation

Use for:

- formula coefficients
- resource update rules
- hidden counter tuning
- event scoring
- diagnosis rules

### Content

Use for:

- event body changes
- option label changes
- digest copy
- risk card text
- diagnosis copy

### UI

Use for:

- layout changes
- component hierarchy
- visual state changes
- accessibility changes
- information density changes

### Playtest

Use for:

- observed behavior
- interview findings
- Green / Yellow / Red Light decisions
- route export review

## Example Entries

### Good Entry

```md
### Simulation

- Changed: Increased delayed complaint effect from promo by +4.
- Reason: In pilot dry run, Week 3 promo felt useful but Week 5 consequence was not noticed.
- Expected effect: Dirty Growth should still feel strong early, but support/friction should become visible by Week 5.
- Watch: Whether players now connect Week 5 complaints to the Week 3 promo.
```

### Bad Entry

```md
- Improved promo balance.
```

The bad entry loses the learning.

## Version Suggestions

### `0.0.x`

Planning and scaffold.

### `0.1.x`

Simulation and console routes.

### `0.2.x`

Playable UI vertical slice.

### `0.3.x`

Internal dry run and first playtest build.

### `0.4.x`

Post-playtest tuning.

## 一句话总结

Prototype v0 Changelog Seed 的目标，不是制造流程负担，

而是确保每一次调整都留下产品学习：

**不要只记录改了什么，要记录这台机器为什么需要那样改。**

# Prop Firm Operator v0 Execution Folder

Date: 2026-04-24
Status: ready-for-implementation-planning

## Purpose

This folder turns the full `docs/plans/` planning package into a smaller execution command center for building the `Prop Firm Operator` playable v0.

The source docs are intentionally broad. This folder is intentionally narrow:

- what to build first
- what to avoid building
- which files to create
- how to test each milestone
- when the prototype is ready for internal dry run and external playtest

## Current Decision

Proceed with a contained v0 vertical slice in:

```text
prototype/prop-firm-operator/
```

Build one playable 12-week run:

- founder: `The Showman`
- scenario: `Bull Euphoria`
- platform: `HyperGrowth Capital`
- 5 controls
- 6 visible resources
- 5 hidden counters
- 3 audience groups
- 6 events
- Week Digest
- Week 12 Diagnosis
- route export
- debug panel

Do not build backend, login, multi-founder selection, multi-scenario unlocks, meta progression, full endings, public landing page, or real payment flow in v0.

## Files In This Folder

- `development-execution-plan.md` is the main implementation plan.
- `task-board.md` is the working ticket board for coding.
- `source-doc-map.md` maps the large planning package back to implementation areas.

## Recommended Use

1. Read `development-execution-plan.md` first.
2. Execute tasks from `task-board.md` in order.
3. Use `source-doc-map.md` only when a task needs deeper design context.
4. At the end of each milestone, run the gate listed in the main plan before moving on.

## Execution Motto

First make the machine calculate.

Then make it remember.

Then make the player see what they fed it.

import { describe, expect, it } from "vitest";
import { runAllScriptedRoutes } from "../dev/scriptedRoutes";
import { reportTuning } from "../dev/tuneReport";

/**
 * Calibration guardrails. These don't require every metric to sit in its
 * route-tuning-matrix band (that would over-constrain future tuning and
 * conflicts with the matrix being aspirational). Instead they lock in the
 * *structural* properties that make the sim playable: diagnosis diversity,
 * no permanent edge saturation, and route differentiation.
 *
 * If these break during future calibration, the sim has regressed.
 * Update the thresholds deliberately, not reflexively.
 */
describe("calibration guardrails", () => {
  const runs = runAllScriptedRoutes();

  it("produces at least 2 distinct ending diagnoses across scripted routes", () => {
    const kinds = new Set(
      runs.map((run) => run.state.diagnosis?.type).filter(Boolean),
    );
    expect(kinds.size).toBeGreaterThanOrEqual(2);
  });

  it("keeps cash non-zero for all routes at Week 12 (no full bankruptcy)", () => {
    for (const { route, state } of runs) {
      const week12 = state.snapshots.find((s) => s.week === 12);
      expect(week12, `${route.label} missing Week 12`).toBeDefined();
      expect(
        week12!.resourcesEnd.cash,
        `${route.label} cash hit 0 — too brutal`,
      ).toBeGreaterThan(0);
    }
  });

  it("never holds any [0, 100] resource at a cap for 6+ consecutive weeks", () => {
    const RESOURCES = ["cash", "flow", "trust", "regulatoryHeat", "payoutLiability"] as const;
    for (const { route, state } of runs) {
      for (const metric of RESOURCES) {
        let lowStreak = 0;
        let highStreak = 0;
        for (const snap of state.snapshots) {
          const value = snap.resourcesEnd[metric];
          lowStreak = value <= 0.5 ? lowStreak + 1 : 0;
          highStreak = value >= 99.5 ? highStreak + 1 : 0;
          expect(
            lowStreak,
            `${route.label} ${metric} floored for 6+ weeks`,
          ).toBeLessThan(6);
          expect(
            highStreak,
            `${route.label} ${metric} capped for 6+ weeks`,
          ).toBeLessThan(6);
        }
      }
    }
  });

  it("preserves route differentiation at Week 6", () => {
    const week6 = new Map(
      runs.map(({ route, state }) => [
        route.id,
        state.snapshots.find((s) => s.week === 6)!,
      ]),
    );
    const dirty = week6.get("dirty_growth")!;
    const fair = week6.get("pseudo_fair")!;
    const tight = week6.get("rational_tightening")!;

    // Fair should lead on trust (the brand-first archetype)
    expect(fair.resourcesEnd.trust).toBeGreaterThan(dirty.resourcesEnd.trust);
    expect(fair.resourcesEnd.trust).toBeGreaterThan(tight.resourcesEnd.trust);

    // Rational should lead on the cold side (passRate pinned low, flow coldest)
    expect(tight.resourcesEnd.passRate).toBeLessThanOrEqual(dirty.resourcesEnd.passRate);
    expect(tight.resourcesEnd.flow).toBeLessThan(dirty.resourcesEnd.flow);

    // Dirty should lead on cash extraction — but matrix allows Rational
    // to run it close, so the check is within 5 points.
    expect(dirty.resourcesEnd.cash).toBeGreaterThanOrEqual(
      Math.max(fair.resourcesEnd.cash, tight.resourcesEnd.cash) - 5,
    );
  });

  it("keeps out-of-band metric count within calibration budget", () => {
    // Baseline captured 2026-04-24 after Pass 15: 37.
    // Raise ceiling cautiously; lowering it indicates real progress.
    const issues = reportTuning();
    expect(issues.length).toBeLessThanOrEqual(42);
  });
});

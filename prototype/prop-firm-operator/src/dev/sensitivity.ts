import { defaultTuningConfig, type TuningConfig } from "../sim/tuningConfig";
import { runAllScriptedRoutes } from "./scriptedRoutes";
import type { RunState } from "../sim/types";

type RouteSnapshot = {
  routeId: string;
  diagnosis: string | undefined;
  week12Cash: number;
  week12Trust: number;
  week12Flow: number;
  week12RegHeat: number;
  week12PayoutLiability: number;
};

function snapshotRoute(state: RunState, routeId: string): RouteSnapshot {
  const last = state.snapshots.find((s) => s.week === 12);
  if (!last) throw new Error(`${routeId} missing Week 12`);
  return {
    routeId,
    diagnosis: state.diagnosis?.type,
    week12Cash: last.resourcesEnd.cash,
    week12Trust: last.resourcesEnd.trust,
    week12Flow: last.resourcesEnd.flow,
    week12RegHeat: last.resourcesEnd.regulatoryHeat,
    week12PayoutLiability: last.resourcesEnd.payoutLiability,
  };
}

function runWith(tuning: TuningConfig): RouteSnapshot[] {
  const runs = runAllScriptedRoutes(tuning);
  return runs.map(({ route, state }) => snapshotRoute(state, route.id));
}

function diff(a: number, b: number): string {
  const d = b - a;
  if (Math.abs(d) < 0.05) return "  ─  ";
  return d > 0 ? `+${d.toFixed(1).padStart(5)}` : d.toFixed(1).padStart(6);
}

const PERTURBATIONS: Array<{ key: keyof TuningConfig; mults: number[] }> = [
  { key: "temptationDamper", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "trustReversionLowK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "trustReversionHighK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "payoutLiabilityTrustDrag", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "regHeatReversionVeryHighK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "regHeatReversionHighK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "regHeatReversionMidK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "regHeatReversionLowK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "flowReversionLowK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "flowReversionHighK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "flowReversionMidK", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "splitMultiplierSlope", mults: [0.7, 0.85, 1.15, 1.3] },
  { key: "payoutCostMultiplier", mults: [0.92, 0.96, 1.04, 1.08] },
];

export function reportSensitivity() {
  const baseline = runWith(defaultTuningConfig);
  const baselineByRoute = new Map(baseline.map((r) => [r.routeId, r]));

  console.log("=== Sensitivity report ===");
  console.log("Baseline diagnoses:", baseline.map((r) => `${r.routeId}=${r.diagnosis}`).join(", "));
  console.log();
  console.log("Per coefficient × multiplier, Δ(metric) at Week 12 vs baseline.");
  console.log("Routes: D=Dirty Growth, F=Pseudo Fair, R=Rational Tightening.");
  console.log("Columns: cash / trust / flow / regHeat / payoutLiability.");
  console.log("Diagnosis flips marked [Δ:type].");
  console.log();

  for (const { key, mults } of PERTURBATIONS) {
    const baseValue = defaultTuningConfig[key];
    console.log(`--- ${key} (default ${baseValue}) ---`);
    for (const mult of mults) {
      const overridden: TuningConfig = {
        ...defaultTuningConfig,
        [key]: baseValue * mult,
      };
      const snaps = runWith(overridden);
      const tag = `${(mult * 100).toFixed(0)}%`.padStart(5);
      for (const route of ["dirty_growth", "pseudo_fair", "rational_tightening"] as const) {
        const before = baselineByRoute.get(route)!;
        const after = snaps.find((s) => s.routeId === route)!;
        const flipped =
          before.diagnosis !== after.diagnosis
            ? ` [Δ:${after.diagnosis}]`
            : "";
        const r = route === "dirty_growth" ? "D" : route === "pseudo_fair" ? "F" : "R";
        console.log(
          `  ${tag} ${r}: cash ${diff(before.week12Cash, after.week12Cash)} ` +
            `trust ${diff(before.week12Trust, after.week12Trust)} ` +
            `flow ${diff(before.week12Flow, after.week12Flow)} ` +
            `heat ${diff(before.week12RegHeat, after.week12RegHeat)} ` +
            `liab ${diff(before.week12PayoutLiability, after.week12PayoutLiability)}` +
            flipped,
        );
      }
    }
    console.log();
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  reportSensitivity();
}

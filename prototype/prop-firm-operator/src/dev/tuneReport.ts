import { runAllScriptedRoutes } from "./scriptedRoutes";
import type { RunState, WeekSnapshot } from "../sim/types";

type Band = [number, number];
type CheckpointTargets = {
  week: number;
  cash?: Band;
  flow?: Band;
  passRate?: Band;
  payoutLiability?: Band;
  trust?: Band;
  regulatoryHeat?: Band;
  complaintEcho?: Band;
  winnerVisibility?: Band;
  skilledCluster?: Band;
};

// Pulled from docs/plans/.../route-tuning-matrix.md.
// Each checkpoint is the LAST week of the "Week X-Y" band in the doc.
const DIRTY_GROWTH: CheckpointTargets[] = [
  { week: 3, cash: [66, 82], flow: [85, 100], passRate: [7, 12], payoutLiability: [12, 22], trust: [40, 52], regulatoryHeat: [22, 34], complaintEcho: [10, 24] },
  { week: 6, cash: [72, 90], flow: [88, 100], passRate: [5, 10], payoutLiability: [18, 34], trust: [32, 46], regulatoryHeat: [30, 46], complaintEcho: [24, 45] },
  { week: 9, cash: [60, 84], flow: [72, 95], passRate: [4, 9], payoutLiability: [28, 48], trust: [24, 40], regulatoryHeat: [42, 62], complaintEcho: [40, 65] },
  { week: 12, cash: [45, 78], flow: [55, 85], passRate: [3, 8], payoutLiability: [42, 65], trust: [18, 36], regulatoryHeat: [55, 78], complaintEcho: [55, 80] },
];

const PSEUDO_FAIR: CheckpointTargets[] = [
  { week: 3, cash: [55, 70], flow: [72, 90], passRate: [11, 17], payoutLiability: [16, 26], trust: [50, 62], regulatoryHeat: [20, 30], winnerVisibility: [8, 18] },
  { week: 6, cash: [48, 68], flow: [70, 88], passRate: [14, 22], payoutLiability: [28, 45], trust: [56, 72], regulatoryHeat: [22, 34], winnerVisibility: [18, 34] },
  { week: 9, cash: [38, 60], flow: [64, 84], passRate: [16, 25], payoutLiability: [42, 62], trust: [54, 70], regulatoryHeat: [28, 42], skilledCluster: [24, 45] },
  { week: 12, cash: [25, 52], flow: [55, 78], passRate: [16, 28], payoutLiability: [58, 82], trust: [48, 68], regulatoryHeat: [34, 52], winnerVisibility: [35, 60] },
];

const RATIONAL_TIGHTENING: CheckpointTargets[] = [
  { week: 3, cash: [60, 76], flow: [60, 78], passRate: [5, 10], payoutLiability: [10, 20], trust: [42, 54], regulatoryHeat: [18, 28], complaintEcho: [12, 26] },
  { week: 6, cash: [60, 80], flow: [48, 68], passRate: [4, 8], payoutLiability: [14, 26], trust: [34, 48], regulatoryHeat: [22, 36], complaintEcho: [26, 44] },
  { week: 9, cash: [50, 72], flow: [35, 58], passRate: [3, 7], payoutLiability: [18, 34], trust: [24, 42], regulatoryHeat: [30, 48], complaintEcho: [42, 62] },
  { week: 12, cash: [38, 66], flow: [25, 50], passRate: [3, 7], payoutLiability: [18, 38], trust: [18, 36], regulatoryHeat: [38, 58], complaintEcho: [55, 78] },
];

const ROUTE_TARGETS: Record<string, CheckpointTargets[]> = {
  dirty_growth: DIRTY_GROWTH,
  pseudo_fair: PSEUDO_FAIR,
  rational_tightening: RATIONAL_TIGHTENING,
};

function snapshotAt(state: RunState, week: number): WeekSnapshot {
  const snap = state.snapshots.find((s) => s.week === week);
  if (!snap) throw new Error(`snapshot missing for week ${week}`);
  return snap;
}

function metricValue(snap: WeekSnapshot, key: string): number {
  if (key in snap.resourcesEnd) {
    return (snap.resourcesEnd as Record<string, number>)[key];
  }
  return (snap.countersEnd as Record<string, number>)[key];
}

function bandCheck(actual: number, band: Band): "in" | "low" | "high" {
  if (actual < band[0]) return "low";
  if (actual > band[1]) return "high";
  return "in";
}

function fmtNumber(n: number) {
  return n.toFixed(1).padStart(6);
}

function fmtBand(band: Band) {
  return `[${band[0].toString().padStart(3)}, ${band[1].toString().padStart(3)}]`;
}

function tagForStatus(status: "in" | "low" | "high"): string {
  if (status === "in") return "  ok  ";
  if (status === "low") return " LOW  ";
  return "HIGH  ";
}

export function reportTuning() {
  const runs = runAllScriptedRoutes();
  const issues: Array<{ route: string; week: number; metric: string; actual: number; band: Band; status: "low" | "high" }> = [];

  console.log("=== Route tuning report vs docs/plans/.../route-tuning-matrix ===\n");

  for (const { route, state } of runs) {
    const targets = ROUTE_TARGETS[route.id];
    if (!targets) continue;
    console.log(`--- ${route.label} (${route.id}) — diagnosis: ${state.diagnosis?.type ?? "n/a"} ---`);
    for (const checkpoint of targets) {
      const snap = snapshotAt(state, checkpoint.week);
      console.log(`  Week ${checkpoint.week}:`);
      for (const [key, band] of Object.entries(checkpoint) as [string, Band | number][]) {
        if (key === "week") continue;
        const b = band as Band;
        const actual = metricValue(snap, key);
        const status = bandCheck(actual, b);
        const tag = tagForStatus(status);
        console.log(
          `    ${key.padEnd(18)} ${tag} actual=${fmtNumber(actual)}  target=${fmtBand(b)}`,
        );
        if (status !== "in") {
          issues.push({ route: route.id, week: checkpoint.week, metric: key, actual, band: b, status });
        }
      }
    }
    console.log();
  }

  console.log(`=== Summary: ${issues.length} out-of-band metrics ===`);
  const byRoute = new Map<string, number>();
  for (const issue of issues) {
    byRoute.set(issue.route, (byRoute.get(issue.route) ?? 0) + 1);
  }
  for (const [route, count] of byRoute.entries()) {
    console.log(`  ${route}: ${count}`);
  }

  return issues;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const issues = reportTuning();
  if (issues.length === 0) process.exit(0);
}

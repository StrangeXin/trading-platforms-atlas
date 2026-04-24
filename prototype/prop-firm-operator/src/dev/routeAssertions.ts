import type { RunState } from "../sim/types";
import { runAllScriptedRoutes } from "./scriptedRoutes";

type RouteRun = {
  route: { id: string; label: string };
  state: RunState;
};

function snapshotAt(run: RouteRun, week: number) {
  const snapshot = run.state.snapshots.find((candidate) => candidate.week === week);
  if (!snapshot) {
    throw new Error(`${run.route.label} is missing Week ${week}`);
  }
  return snapshot;
}

function assert(condition: boolean, message: string, failures: string[]) {
  if (!condition) {
    failures.push(message);
  }
}

export function assertRouteDifferentiation(runs = runAllScriptedRoutes()) {
  const failures: string[] = [];
  const dirty = runs.find((run) => run.route.id === "dirty_growth")!;
  const fair = runs.find((run) => run.route.id === "pseudo_fair")!;
  const tight = runs.find((run) => run.route.id === "rational_tightening")!;

  for (const run of runs) {
    assert(run.state.snapshots.length === 12, `${run.route.label} did not run 12 weeks`, failures);
    assert(Boolean(run.state.diagnosis), `${run.route.label} is missing diagnosis`, failures);
  }

  const week6Dirty = snapshotAt(dirty, 6).resourcesEnd;
  const week6Fair = snapshotAt(fair, 6).resourcesEnd;
  const week6Tight = snapshotAt(tight, 6).resourcesEnd;

  assert(
    week6Dirty.cash >= Math.max(week6Fair.cash, week6Tight.cash) - 4,
    "Week 6 Dirty Growth cash should lead or be close to leading",
    failures,
  );
  assert(
    week6Fair.trust > week6Dirty.trust && week6Fair.trust > week6Tight.trust,
    "Week 6 Pseudo Fair trust should be highest",
    failures,
  );
  assert(
    week6Tight.passRate < week6Dirty.passRate && week6Tight.passRate < week6Fair.passRate,
    "Week 6 Rational Tightening pass rate should be lowest",
    failures,
  );

  const week9Dirty = snapshotAt(dirty, 9);
  const week9Fair = snapshotAt(fair, 9);
  const week9Tight = snapshotAt(tight, 9);

  assert(
    week9Dirty.countersEnd.complaintEcho > week9Fair.countersEnd.complaintEcho,
    "Week 9 Dirty Growth complaint echo should beat Pseudo Fair",
    failures,
  );
  assert(
    week9Fair.countersEnd.skilledCluster > week9Dirty.countersEnd.skilledCluster,
    "Week 9 Pseudo Fair skilled cluster should beat Dirty Growth",
    failures,
  );
  assert(
    week9Tight.resourcesEnd.flow < week9Dirty.resourcesEnd.flow,
    "Week 9 Rational Tightening flow should be colder than Dirty Growth",
    failures,
  );

  const diagnosisTypes = new Set(
    runs.map((run) => run.state.diagnosis?.type).filter(Boolean),
  );
  assert(
    diagnosisTypes.size >= 2,
    `Expected at least 2 diagnosis types, got ${Array.from(diagnosisTypes).join(", ")}`,
    failures,
  );

  return {
    ok: failures.length === 0,
    failures,
    summary: runs.map((run) => ({
      id: run.route.id,
      label: run.route.label,
      diagnosis: run.state.diagnosis?.type,
      week6: snapshotAt(run, 6).resourcesEnd,
      week9: snapshotAt(run, 9).resourcesEnd,
      week12: snapshotAt(run, 12).resourcesEnd,
      counters: snapshotAt(run, 12).countersEnd,
      events: run.state.eventHistory.map((event) => event.eventId),
    })),
  };
}

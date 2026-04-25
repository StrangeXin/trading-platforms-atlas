import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "../sim/createInitialRun";
import { simulateWeek } from "../sim/simulateWeek";
import type { EventCard, PlayerControls, RunState } from "../sim/types";

const BASELINE_CONTROLS: Pick<
  PlayerControls,
  "challengeFee" | "profitTarget" | "marketingTone"
> = {
  challengeFee: 3,
  profitTarget: 3,
  marketingTone: 4,
};

export function createBaselineRun(): RunState {
  return createInitialRun({
    seed: initialRunSeed,
    founder: founderModes[0],
    scenario: scenarios[0],
  });
}

export function runBaselineRun(): RunState {
  let state = createBaselineRun();

  while (state.status !== "ended") {
    const controls: Partial<PlayerControls> = {
      ...BASELINE_CONTROLS,
      maxDrawdown: state.currentWeek >= 2 ? 3 : "locked",
      payoutSplit: state.currentWeek >= 4 ? 3 : "locked",
    };

    state = simulateWeek(state, {
      controls,
      chooseOption: (event: EventCard) =>
        event.options[1]?.id ?? event.options[0].id,
    });
  }

  return state;
}

export type BaselineWeekLine = {
  week: number;
  phase: string;
  digest: string;
  event?: string;
  cash: number;
  flow: number;
  trust: number;
  passRate: number;
  regulatoryHeat: number;
  payoutLiability: number;
  complaintEcho: number;
  winnerVisibility: number;
  skilledCluster: number;
  audience: { novice: number; gambler: number; skilled: number };
};

export function summarizeBaseline(state: RunState): BaselineWeekLine[] {
  return state.snapshots.map((snapshot) => ({
    week: snapshot.week,
    phase: snapshot.phase,
    digest: snapshot.digest.title,
    event: snapshot.event?.eventId,
    cash: snapshot.resourcesEnd.cash,
    flow: snapshot.resourcesEnd.flow,
    trust: snapshot.resourcesEnd.trust,
    passRate: snapshot.resourcesEnd.passRate,
    regulatoryHeat: snapshot.resourcesEnd.regulatoryHeat,
    payoutLiability: snapshot.resourcesEnd.payoutLiability,
    complaintEcho: snapshot.countersEnd.complaintEcho,
    winnerVisibility: snapshot.countersEnd.winnerVisibility,
    skilledCluster: snapshot.countersEnd.skilledCluster,
    audience: {
      novice: round(snapshot.audienceEnd.novice, 3),
      gambler: round(snapshot.audienceEnd.gambler, 3),
      skilled: round(snapshot.audienceEnd.skilled, 3),
    },
  }));
}

function round(value: number, digits: number) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const state = runBaselineRun();
  const trace = summarizeBaseline(state);

  console.log("=== Baseline run (Showman + Bull Euphoria, recommended controls) ===");
  console.log(JSON.stringify(trace, null, 2));
  console.log("\n=== Starting state ===");
  console.log(
    JSON.stringify(
      {
        resources: state.snapshots[0].resourcesStart,
        counters: state.snapshots[0].countersStart,
        audience: {
          novice: round(state.snapshots[0].audienceStart.novice, 3),
          gambler: round(state.snapshots[0].audienceStart.gambler, 3),
          skilled: round(state.snapshots[0].audienceStart.skilled, 3),
        },
      },
      null,
      2,
    ),
  );
  console.log("\n=== Diagnosis ===");
  console.log(JSON.stringify(state.diagnosis, null, 2));
}

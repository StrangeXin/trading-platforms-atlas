import type {
  EventCard,
  EventScore,
  EventTrigger,
  RunState,
  TriggerCondition,
} from "./types";

function valueAtPath(state: RunState, path: TriggerCondition["path"]) {
  if (path === "currentWeek") return state.currentWeek;
  const [scope, key] = path.split(".");

  if (scope === "resources") return state.resources[key as keyof typeof state.resources];
  if (scope === "counters") return state.counters[key as keyof typeof state.counters];
  if (scope === "audience") return state.audience[key as keyof typeof state.audience];
  if (scope === "flags") return state.flags[key as keyof typeof state.flags];

  return undefined;
}

function compare(actual: unknown, condition: TriggerCondition) {
  switch (condition.op) {
    case ">=":
      return Number(actual) >= Number(condition.value);
    case ">":
      return Number(actual) > Number(condition.value);
    case "<=":
      return Number(actual) <= Number(condition.value);
    case "<":
      return Number(actual) < Number(condition.value);
    case "==":
      return actual === condition.value;
    case "!=":
      return actual !== condition.value;
  }
}

function triggerMatches(state: RunState, trigger: EventTrigger) {
  if (trigger.blockedByFlags?.some((flag) => state.flags[flag])) return false;
  if (trigger.requiredFlags?.some((flag) => !state.flags[flag])) return false;

  const allPass =
    !trigger.all?.length ||
    trigger.all.every((condition) => compare(valueAtPath(state, condition.path), condition));
  const anyPass =
    !trigger.any?.length ||
    trigger.any.some((condition) => compare(valueAtPath(state, condition.path), condition));

  return allPass && anyPass;
}

function isEligible(state: RunState, event: EventCard) {
  if (state.triggeredEventIds.includes(event.id)) return false;
  if (event.minWeek && state.currentWeek < event.minWeek) return false;
  if (event.maxWeek && state.currentWeek > event.maxWeek) return false;
  if (event.minWeek === event.maxWeek && state.currentWeek === event.minWeek) {
    return true;
  }
  return triggerMatches(state, event.trigger);
}

function scoreEvent(state: RunState, event: EventCard): EventScore {
  let score = event.weight;
  let reason = "base event weight";

  if (event.id === "weekend_promo_temptation") {
    score =
      state.currentWeek === 3
        ? 1000
        : state.resources.cash < 55 || state.resources.flow < 60
          ? 60
          : 0;
    reason = "cash or flow needs a sweetener";
  }

  if (event.id === "feels_rigged_forum_post") {
    score =
      state.counters.complaintEcho >= 22 || state.resources.passRate <= 8
        ? 40 + state.counters.complaintEcho * 0.8
        : 0;
    reason = "complaint memory or tight pass rate";
  }

  if (event.id === "viral_winner_thread") {
    score =
      state.currentWeek === 6
        ? 1000
        : state.counters.winnerVisibility >= 16
          ? 35 + state.counters.winnerVisibility
          : 0;
    reason = "winner proof is becoming visible";
  }

  if (event.id === "silent_winners_cluster") {
    score =
      state.currentWeek === 8
        ? 1000
        : state.counters.skilledCluster >= 16 ||
            state.resources.payoutLiability >= 32
          ? 30 + state.counters.skilledCluster
          : 0;
    reason = "skilled cluster or payout liability";
  }

  if (event.id === "payment_processor_warning") {
    score =
      state.currentWeek === 10
        ? 1000
        : state.resources.regulatoryHeat >= 42 ||
            state.counters.processorPatience <= 52
          ? 45 +
            state.resources.regulatoryHeat -
            state.counters.processorPatience * 0.3
          : 0;
    reason = "processor patience is thinning";
  }

  if (event.id === "first_regulator_letter") {
    score =
      state.currentWeek >= 12 && state.resources.regulatoryHeat >= 50
        ? 50 + state.resources.regulatoryHeat
        : 0;
    reason = "heat is now legible to outsiders";
  }

  return {
    eventId: event.id,
    score: Number(score.toFixed(2)),
    reason,
  };
}

export function selectEvent(state: RunState, events: EventCard[]) {
  const scores = events.map((event) =>
    isEligible(state, event)
      ? scoreEvent(state, event)
      : { eventId: event.id, score: 0, reason: "not eligible" },
  );

  const selectedScore = scores
    .filter((score) => score.score > 0)
    .sort((a, b) => b.score - a.score)[0];

  return {
    scores,
    event: selectedScore
      ? events.find((event) => event.id === selectedScore.eventId)
      : undefined,
  };
}

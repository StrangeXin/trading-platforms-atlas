import type {
  AudienceKey,
  CounterKey,
  Effect,
  HiddenCounters,
  ResourceKey,
  Resources,
  RunFlags,
  RunState,
} from "./types";
import { clamp100, clampPassRate, normalizeAudience, softenEventDelta } from "./clamp";

// Resources/counters that soften event deltas near the 0/100 edges so the
// final 15 points behave like diminishing returns. Cash and promoDebt stay
// raw — their designed feel is "you chose this, you pay full price".
const SOFTENED_RESOURCES = new Set<ResourceKey>([
  "trust",
  "flow",
  "regulatoryHeat",
  "payoutLiability",
]);
const SOFTENED_COUNTERS = new Set<CounterKey>([
  "winnerVisibility",
  "complaintEcho",
  "skilledCluster",
]);

function applyResourceEffect(
  resources: Resources,
  key: ResourceKey,
  delta: number,
) {
  if (key === "passRate") {
    return { ...resources, passRate: clampPassRate(resources.passRate + delta) };
  }
  const softenedDelta = SOFTENED_RESOURCES.has(key)
    ? softenEventDelta(resources[key], delta)
    : delta;
  return {
    ...resources,
    [key]: clamp100(resources[key] + softenedDelta),
  };
}

function applyCounterEffect(
  counters: HiddenCounters,
  key: CounterKey,
  delta: number,
) {
  const softenedDelta = SOFTENED_COUNTERS.has(key)
    ? softenEventDelta(counters[key], delta)
    : delta;
  return {
    ...counters,
    [key]: clamp100(counters[key] + softenedDelta),
  };
}

export function applyEffects(state: RunState, effects: Effect[]): RunState {
  let resources = { ...state.resources };
  let counters = { ...state.counters };
  let audience = { ...state.audience };

  for (const effect of effects) {
    const [scope, key] = effect.path.split(".") as [
      "resources" | "counters" | "audience",
      string,
    ];

    if (scope === "resources") {
      resources = applyResourceEffect(resources, key as ResourceKey, effect.delta);
    }

    if (scope === "counters") {
      counters = applyCounterEffect(counters, key as CounterKey, effect.delta);
    }

    if (scope === "audience") {
      audience = {
        ...audience,
        [key]: audience[key as AudienceKey] + effect.delta,
      };
    }
  }

  return {
    ...state,
    resources,
    counters,
    audience: normalizeAudience(audience),
  };
}

export function applyFlags(
  flags: RunFlags,
  flagsSet: Array<keyof RunFlags> | undefined,
): RunFlags {
  if (!flagsSet?.length) {
    return flags;
  }

  return flagsSet.reduce<RunFlags>(
    (next, flag) => ({
      ...next,
      [flag]: true,
    }),
    { ...flags },
  );
}

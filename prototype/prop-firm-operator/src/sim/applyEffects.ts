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
import { clamp100, clampPassRate, normalizeAudience } from "./clamp";

function applyResourceEffect(
  resources: Resources,
  key: ResourceKey,
  delta: number,
) {
  const value = resources[key] + delta;
  return {
    ...resources,
    [key]: key === "passRate" ? clampPassRate(value) : clamp100(value),
  };
}

function applyCounterEffect(
  counters: HiddenCounters,
  key: CounterKey,
  delta: number,
) {
  return {
    ...counters,
    [key]: clamp100(counters[key] + delta),
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

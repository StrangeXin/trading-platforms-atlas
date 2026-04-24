import type {
  AudienceKey,
  CounterKey,
  FounderMode,
  HiddenCounters,
  InitialRunSeed,
  ResourceKey,
  Resources,
  RunFlags,
  RunState,
  Scenario,
} from "./types";
import { clamp100, clampPassRate, normalizeAudience } from "./clamp";

type CreateInitialRunInput = {
  seed: InitialRunSeed;
  founder: FounderMode;
  scenario: Scenario;
};

const defaultFlags: RunFlags = {
  promoUsed: false,
  winnerThreadAmplified: false,
  processorWarned: false,
  regulatorContacted: false,
  payoutDelayed: false,
  reviewsTightened: false,
};

function makeRunId() {
  return `run_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`;
}

function applyResourceMods(
  base: Resources,
  ...mods: Array<Partial<Resources>>
): Resources {
  return (Object.keys(base) as ResourceKey[]).reduce<Resources>((next, key) => {
    const value = mods.reduce((sum, mod) => sum + (mod[key] ?? 0), base[key]);
    next[key] = key === "passRate" ? clampPassRate(value) : clamp100(value);
    return next;
  }, { ...base });
}

function applyCounterMods(
  base: HiddenCounters,
  ...mods: Array<Partial<HiddenCounters>>
): HiddenCounters {
  return (Object.keys(base) as CounterKey[]).reduce<HiddenCounters>(
    (next, key) => {
      const value = mods.reduce((sum, mod) => sum + (mod[key] ?? 0), base[key]);
      next[key] = clamp100(value);
      return next;
    },
    { ...base },
  );
}

function applyAudienceMods(
  base: CreateInitialRunInput["seed"]["audience"],
  mods: Partial<CreateInitialRunInput["seed"]["audience"]>,
) {
  const next = (Object.keys(base) as AudienceKey[]).reduce(
    (audience, key) => {
      audience[key] = base[key] + (mods[key] ?? 0);
      return audience;
    },
    { ...base },
  );

  return normalizeAudience(next);
}

export function createInitialRun({
  seed,
  founder,
  scenario,
}: CreateInitialRunInput): RunState {
  return {
    runId: makeRunId(),
    platformName: seed.platformName,
    currentWeek: 1,
    maxWeeks: seed.maxWeeks,
    founderModeId: founder.id,
    scenarioId: scenario.id,
    resources: applyResourceMods(
      seed.resources,
      founder.startingResourceMods,
      scenario.startingResourceMods,
    ),
    counters: applyCounterMods(
      seed.counters,
      founder.startingCounterMods,
      scenario.startingCounterMods,
    ),
    audience: applyAudienceMods(seed.audience, scenario.audienceMods),
    controls: { ...seed.controls },
    delayedEffects: [],
    triggeredEventIds: [],
    eventHistory: [],
    snapshots: [],
    flags: { ...defaultFlags },
    eventScores: [],
    status: "active",
  };
}

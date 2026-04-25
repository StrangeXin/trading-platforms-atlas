import { eventCards } from "../data/events.seed";
import { applyEffects } from "./applyEffects";
import { buildDigest } from "./buildDigest";
import { buildEndingPreview } from "./buildEndingPreview";
import { calculateWeek } from "./formula";
import { resolveEvent } from "./resolveEvent";
import { selectEvent } from "./selectEvent";
import { defaultTuningConfig, type TuningConfig } from "./tuningConfig";
import type {
  DelayedEffect,
  EventCard,
  EventOption,
  EventResolution,
  PlayerControls,
  RunState,
  WeekPhase,
  WeekSnapshot,
} from "./types";

type SimulateWeekOptions = {
  events?: EventCard[];
  controls?: Partial<PlayerControls>;
  chooseOption?: (event: EventCard, state: RunState) => EventOption["id"];
  tuningConfig?: TuningConfig;
};

function phaseForWeek(week: number): WeekPhase {
  if (week <= 3) return "temptation";
  if (week <= 6) return "crack";
  if (week <= 9) return "reveal";
  return "reckoning";
}

function applyDueDelayedEffects(state: RunState) {
  const due = state.delayedEffects.filter(
    (effect) => effect.applyWeek <= state.currentWeek,
  );
  const pending = state.delayedEffects.filter(
    (effect) => effect.applyWeek > state.currentWeek,
  );
  const effects = due.flatMap((effect) => effect.effects);
  const next = effects.length
    ? applyEffects({ ...state, delayedEffects: pending }, effects)
    : { ...state, delayedEffects: pending };

  return { state: next, applied: due };
}

/**
 * Returns the event that would trigger if `simulateWeek(state, { controls })`
 * were called next. Pure: never mutates the input state. Use in UI flows
 * to decide whether to open an event modal before committing the week.
 *
 * Without this, range-trigger events (e.g. feels_rigged_forum_post Week 5-9)
 * silently fail in the player UI: simulateWeek selects them, but with no
 * chooseOption callback they're never resolved, so the player never sees
 * the modal even though the trigger fired.
 */
export function peekWeekEvent(
  state: RunState,
  options: Pick<SimulateWeekOptions, "events" | "controls" | "tuningConfig"> = {},
): EventCard | undefined {
  if (state.status === "ended") return undefined;
  const events = options.events ?? eventCards;
  const stateWithControls = options.controls
    ? { ...state, controls: { ...state.controls, ...options.controls } }
    : state;
  const tuning = options.tuningConfig ?? defaultTuningConfig;
  const { state: delayedState } = applyDueDelayedEffects(stateWithControls);
  const result = calculateWeek(delayedState, tuning);
  const formulaState: RunState = {
    ...delayedState,
    resources: result.resources,
    counters: result.counters,
    audience: result.audience,
  };
  return selectEvent(formulaState, events).event;
}

export function simulateWeek(state: RunState, options: SimulateWeekOptions = {}) {
  if (state.status === "ended") {
    return state;
  }

  const events = options.events ?? eventCards;
  const stateWithControls = options.controls
    ? { ...state, controls: { ...state.controls, ...options.controls } }
    : state;

  const resourcesStart = { ...stateWithControls.resources };
  const countersStart = { ...stateWithControls.counters };
  const audienceStart = { ...stateWithControls.audience };
  const tuning = options.tuningConfig ?? defaultTuningConfig;
  const { state: delayedState, applied } = applyDueDelayedEffects(stateWithControls);
  const result = calculateWeek(delayedState, tuning);
  const formulaState: RunState = {
    ...delayedState,
    resources: result.resources,
    counters: result.counters,
    audience: result.audience,
  };

  const { event, scores } = selectEvent(formulaState, events);
  let resolvedState = { ...formulaState, eventScores: scores };
  let eventResolution: EventResolution | undefined;
  let delayedEffectsCreated: DelayedEffect[] = [];

  if (event && options.chooseOption) {
    const optionId = options.chooseOption(event, formulaState);
    const resolved = resolveEvent(formulaState, event, optionId);
    resolvedState = {
      ...resolved.state,
      eventScores: scores,
    };
    eventResolution = resolved.resolution;
    delayedEffectsCreated = resolved.resolution.delayedEffectsCreated;
  }

  const snapshotBase: Omit<WeekSnapshot, "digest"> = {
    week: stateWithControls.currentWeek,
    phase: phaseForWeek(stateWithControls.currentWeek),
    controls: { ...stateWithControls.controls },
    resourcesStart,
    resourcesEnd: { ...resolvedState.resources },
    countersStart,
    countersEnd: { ...resolvedState.counters },
    audienceStart,
    audienceEnd: { ...resolvedState.audience },
    outcome: result.outcome,
    event: eventResolution,
    delayedEffectsApplied: applied,
    delayedEffectsCreated,
  };

  const snapshot: WeekSnapshot = {
    ...snapshotBase,
    digest: buildDigest(snapshotBase),
  };

  const nextWeek = stateWithControls.currentWeek + 1;
  const ended = stateWithControls.currentWeek >= stateWithControls.maxWeeks;
  const nextState: RunState = {
    ...resolvedState,
    currentWeek: nextWeek,
    snapshots: [...resolvedState.snapshots, snapshot],
    diagnosis: ended ? buildEndingPreview(resolvedState) : resolvedState.diagnosis,
    status: ended ? "ended" : "active",
  };

  return nextState;
}

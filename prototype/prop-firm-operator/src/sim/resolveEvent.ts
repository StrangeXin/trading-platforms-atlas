import type { DelayedEffect, EventCard, EventOption, EventResolution, RunState } from "./types";
import { applyEffects, applyFlags } from "./applyEffects";

function createDelayedEffects(
  state: RunState,
  event: EventCard,
  option: EventOption,
): DelayedEffect[] {
  return option.delayedEffects.map((template, index) => ({
    ...template,
    id: `${event.id}_${option.id}_${state.currentWeek}_${index}`,
    createdWeek: state.currentWeek,
    applyWeek: state.currentWeek + template.delayWeeks,
    sourceType: "event",
    sourceId: `${event.id}.${option.id}`,
  }));
}

export function resolveEvent(
  state: RunState,
  event: EventCard,
  optionId: string,
): { state: RunState; resolution: EventResolution } {
  const option = event.options.find((candidate) => candidate.id === optionId);

  if (!option) {
    throw new Error(`Unknown option ${optionId} for event ${event.id}`);
  }

  const delayedEffectsCreated = createDelayedEffects(state, event, option);
  const stateWithImmediateEffects = applyEffects(state, option.immediateEffects);
  const resolution: EventResolution = {
    eventId: event.id,
    optionId: option.id,
    title: event.title,
    optionLabel: option.label,
    immediateEffects: option.immediateEffects,
    delayedEffectsCreated,
  };

  return {
    state: {
      ...stateWithImmediateEffects,
      flags: applyFlags(state.flags, option.flagsSet),
      delayedEffects: [...state.delayedEffects, ...delayedEffectsCreated],
      triggeredEventIds: [...state.triggeredEventIds, event.id],
      eventHistory: [...state.eventHistory, resolution],
    },
    resolution,
  };
}

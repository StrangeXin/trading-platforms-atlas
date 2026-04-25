import { describe, expect, it } from "vitest";
import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "./createInitialRun";
import { selectEvent } from "./selectEvent";
import type { EventCard, RunState } from "./types";

function baseState(): RunState {
  return createInitialRun({
    seed: initialRunSeed,
    founder: founderModes[0],
    scenario: scenarios[0],
  });
}

const scriptedWeek3Event: EventCard = {
  id: "directorial_beat",
  title: "Directorial Beat",
  body: "fixed-week event whose trigger would normally never pass",
  minWeek: 3,
  maxWeek: 3,
  weight: 100,
  tags: ["directorial"],
  trigger: {
    all: [{ path: "resources.cash", op: ">=", value: 999_999 }],
  },
  options: [
    {
      id: "only",
      label: "only",
      description: "",
      immediateEffects: [],
      delayedEffects: [],
      directionChips: [],
    },
  ],
};

const conditionalEvent: EventCard = {
  id: "conditional_beat",
  title: "Conditional Beat",
  body: "range event that must pass its trigger to fire",
  minWeek: 3,
  maxWeek: 7,
  weight: 100,
  tags: ["conditional"],
  trigger: {
    all: [{ path: "resources.cash", op: ">=", value: 999_999 }],
  },
  options: [
    {
      id: "only",
      label: "only",
      description: "",
      immediateEffects: [],
      delayedEffects: [],
      directionChips: [],
    },
  ],
};

describe("selectEvent eligibility", () => {
  it("fires scripted-week events on their pinned week regardless of trigger", () => {
    const state: RunState = { ...baseState(), currentWeek: 3 };
    const { event } = selectEvent(state, [scriptedWeek3Event]);
    expect(event?.id).toBe("directorial_beat");
  });

  it("does not fire scripted-week events before their pinned week", () => {
    const state: RunState = { ...baseState(), currentWeek: 2 };
    const { event } = selectEvent(state, [scriptedWeek3Event]);
    expect(event).toBeUndefined();
  });

  it("does not fire scripted-week events after their pinned week", () => {
    const state: RunState = { ...baseState(), currentWeek: 4 };
    const { event } = selectEvent(state, [scriptedWeek3Event]);
    expect(event).toBeUndefined();
  });

  it("suppresses a range event whose trigger cannot pass", () => {
    const state: RunState = { ...baseState(), currentWeek: 5 };
    const { event } = selectEvent(state, [conditionalEvent]);
    expect(event).toBeUndefined();
  });

  it("skips scripted-week events already in triggeredEventIds", () => {
    const state: RunState = {
      ...baseState(),
      currentWeek: 3,
      triggeredEventIds: ["directorial_beat"],
    };
    const { event } = selectEvent(state, [scriptedWeek3Event]);
    expect(event).toBeUndefined();
  });
});

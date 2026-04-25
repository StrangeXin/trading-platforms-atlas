import { describe, expect, it } from "vitest";
import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "./createInitialRun";
import { peekWeekEvent, simulateWeek } from "./simulateWeek";
import type { RunState } from "./types";

function freshRun(): RunState {
  return createInitialRun({
    seed: initialRunSeed,
    founder: founderModes[0],
    scenario: scenarios[0],
  });
}

function snapshot(state: unknown) {
  return JSON.parse(JSON.stringify(state));
}

describe("peekWeekEvent", () => {
  it("returns the scripted-week event on its pinned week", () => {
    const state: RunState = { ...freshRun(), currentWeek: 3 };
    expect(peekWeekEvent(state)?.id).toBe("weekend_promo_temptation");
  });

  it("returns no event before any pinned week with no triggers met", () => {
    const state: RunState = { ...freshRun(), currentWeek: 1 };
    expect(peekWeekEvent(state)).toBeUndefined();
  });

  it("returns the range event when its trigger condition is met", () => {
    // feels_rigged_forum_post: minWeek 5, maxWeek 9, fires when
    // complaintEcho >= 22 OR passRate <= 8.
    const base = freshRun();
    const state: RunState = {
      ...base,
      currentWeek: 5,
      counters: { ...base.counters, complaintEcho: 30 },
    };
    expect(peekWeekEvent(state)?.id).toBe("feels_rigged_forum_post");
  });

  it("does not return a range event when its trigger condition is not met", () => {
    // Week 7 with low complaint and high pass rate — feels_rigged shouldn't fire.
    const base = freshRun();
    const state: RunState = {
      ...base,
      currentWeek: 7,
      counters: { ...base.counters, complaintEcho: 5 },
      resources: { ...base.resources, passRate: 20 },
    };
    expect(peekWeekEvent(state)).toBeUndefined();
  });

  it("does not mutate the input state", () => {
    const state = freshRun();
    const before = snapshot(state);
    peekWeekEvent(state);
    expect(snapshot(state)).toEqual(before);
  });

  it("agrees with simulateWeek on which event will fire", () => {
    // Construct a Week 5 state that should trigger feels_rigged.
    const base = freshRun();
    const state: RunState = {
      ...base,
      currentWeek: 5,
      counters: { ...base.counters, complaintEcho: 30 },
    };
    const peeked = peekWeekEvent(state);
    expect(peeked).toBeDefined();
    // Now actually simulate the week and check it fires.
    const next = simulateWeek(state, {
      chooseOption: (event) => event.options[0].id,
    });
    expect(next.eventHistory.at(-1)?.eventId).toBe(peeked!.id);
  });
});

import { describe, expect, it } from "vitest";
import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "./createInitialRun";
import { simulateWeek } from "./simulateWeek";

function freezeDeep<T>(obj: T): T {
  if (obj && typeof obj === "object") {
    for (const key of Object.keys(obj)) {
      freezeDeep((obj as Record<string, unknown>)[key]);
    }
    Object.freeze(obj);
  }
  return obj;
}

function snapshot(obj: unknown) {
  return JSON.parse(JSON.stringify(obj));
}

describe("simulateWeek immutability", () => {
  it("does not mutate the input RunState across a single week", () => {
    const state = createInitialRun({
      seed: initialRunSeed,
      founder: founderModes[0],
      scenario: scenarios[0],
    });
    const before = snapshot(state);
    freezeDeep(state);

    const next = simulateWeek(state, {
      controls: { challengeFee: 4, profitTarget: 4, marketingTone: 5 },
      chooseOption: (event) => event.options[0].id,
    });

    expect(next).not.toBe(state);
    expect(snapshot(state)).toEqual(before);
  });

  it("does not mutate the input RunState across a full 12-week run", () => {
    let state = createInitialRun({
      seed: initialRunSeed,
      founder: founderModes[0],
      scenario: scenarios[0],
    });
    const before = snapshot(state);
    freezeDeep(state);

    let cursor = state;
    while (cursor.status !== "ended") {
      cursor = simulateWeek(cursor, {
        controls: { challengeFee: 3, profitTarget: 3, marketingTone: 3 },
        chooseOption: (event) => event.options[0].id,
      });
    }

    expect(snapshot(state)).toEqual(before);
    expect(cursor.snapshots).toHaveLength(12);
  });
});

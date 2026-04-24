import { describe, expect, it } from "vitest";
import { founderModes } from "../data/founder.seed";
import { initialRunSeed } from "../data/run.seed";
import { scenarios } from "../data/scenario.seed";
import { createInitialRun } from "./createInitialRun";

describe("createInitialRun", () => {
  it("creates a legal initial run with founder and scenario mods", () => {
    const run = createInitialRun({
      seed: initialRunSeed,
      founder: founderModes[0],
      scenario: scenarios[0],
    });

    expect(run.currentWeek).toBe(1);
    expect(run.status).toBe("active");
    expect(run.resources.flow).toBe(90);
    expect(run.resources.trust).toBe(49);
    expect(run.counters.winnerVisibility).toBe(15);
    expect(run.snapshots).toHaveLength(0);
    expect(run.audience.novice + run.audience.gambler + run.audience.skilled).toBeCloseTo(1);
  });
});

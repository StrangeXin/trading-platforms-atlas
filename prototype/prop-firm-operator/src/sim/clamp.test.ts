import { describe, expect, it } from "vitest";
import { clamp, clamp100, clampPassRate, levelBias, normalizeAudience } from "./clamp";

describe("clamp", () => {
  it("passes values through when in range", () => {
    expect(clamp(5, 0, 10)).toBe(5);
  });

  it("floors below min", () => {
    expect(clamp(-4, 0, 10)).toBe(0);
  });

  it("caps above max", () => {
    expect(clamp(42, 0, 10)).toBe(10);
  });
});

describe("clamp100", () => {
  it.each([
    [-50, 0],
    [0, 0],
    [50, 50],
    [100, 100],
    [250, 100],
  ])("clamp100(%f) -> %f", (input, expected) => {
    expect(clamp100(input)).toBe(expected);
  });
});

describe("clampPassRate", () => {
  it("enforces [3, 32] — 3 is the design floor", () => {
    expect(clampPassRate(0)).toBe(3);
    expect(clampPassRate(3)).toBe(3);
    expect(clampPassRate(15)).toBe(15);
    expect(clampPassRate(32)).toBe(32);
    expect(clampPassRate(99)).toBe(32);
  });
});

describe("levelBias", () => {
  it("returns 0 for locked controls", () => {
    expect(levelBias("locked")).toBe(0);
  });

  it("centers at level 3", () => {
    expect(levelBias(1)).toBe(-2);
    expect(levelBias(3)).toBe(0);
    expect(levelBias(5)).toBe(2);
  });
});

describe("normalizeAudience", () => {
  it("sums to 1 for a normal mix", () => {
    const out = normalizeAudience({ novice: 0.6, gambler: 0.3, skilled: 0.1 });
    expect(out.novice + out.gambler + out.skilled).toBeCloseTo(1);
  });

  it("lifts negative values to the 0.01 floor before normalizing", () => {
    const out = normalizeAudience({ novice: -0.5, gambler: 0.3, skilled: 0.2 });
    expect(out.novice).toBeGreaterThan(0);
    expect(out.novice + out.gambler + out.skilled).toBeCloseTo(1);
  });

  it("never returns zero for any segment", () => {
    const out = normalizeAudience({ novice: 0, gambler: 0, skilled: 1 });
    expect(out.novice).toBeGreaterThan(0);
    expect(out.gambler).toBeGreaterThan(0);
    expect(out.skilled).toBeGreaterThan(0);
  });

  it("is stable when called twice", () => {
    const once = normalizeAudience({ novice: 0.58, gambler: 0.26, skilled: 0.16 });
    const twice = normalizeAudience(once);
    expect(twice.novice).toBeCloseTo(once.novice);
    expect(twice.gambler).toBeCloseTo(once.gambler);
    expect(twice.skilled).toBeCloseTo(once.skilled);
  });
});

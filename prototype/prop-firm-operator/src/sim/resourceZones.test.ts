import { describe, expect, it } from "vitest";
import { phaseForCurrentWeek, phaseLabel, zoneFor } from "./resourceZones";

describe("zoneFor", () => {
  it("maps cash to four bands per numeric-balancing notes", () => {
    expect(zoneFor("cash", 20).label).toBe("Survival");
    expect(zoneFor("cash", 45).label).toBe("Anxious");
    expect(zoneFor("cash", 70).label).toBe("Healthy");
    expect(zoneFor("cash", 95).label).toBe("Comfortable");
  });

  it("maps trust with corrupt at the bottom and brand at the top", () => {
    expect(zoneFor("trust", 15).label).toBe("Corrupt");
    expect(zoneFor("trust", 35).label).toBe("Cracked");
    expect(zoneFor("trust", 60).label).toBe("Sellable");
    expect(zoneFor("trust", 80).label).toBe("Brand");
  });

  it("flags rigged-zone passRate as critical", () => {
    expect(zoneFor("passRate", 5).tone).toBe("critical");
    expect(zoneFor("passRate", 12).tone).toBe("warning");
  });

  it("treats high payoutLiability as explosive", () => {
    expect(zoneFor("payoutLiability", 80).tone).toBe("critical");
    expect(zoneFor("payoutLiability", 10).tone).toBe("good");
  });
});

describe("phase mapping", () => {
  it.each([
    [1, "temptation"],
    [3, "temptation"],
    [4, "crack"],
    [6, "crack"],
    [7, "reveal"],
    [9, "reveal"],
    [10, "reckoning"],
    [12, "reckoning"],
  ] as const)("week %i -> %s", (week, expected) => {
    expect(phaseForCurrentWeek(week)).toBe(expected);
  });

  it("returns human-readable label", () => {
    expect(phaseLabel("temptation")).toBe("Temptation");
    expect(phaseLabel("reckoning")).toBe("Reckoning");
  });
});

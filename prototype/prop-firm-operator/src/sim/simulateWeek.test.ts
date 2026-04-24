import { describe, expect, it } from "vitest";
import { assertRouteDifferentiation } from "../dev/routeAssertions";
import { runScriptedRoute, scriptedRoutes } from "../dev/scriptedRoutes";

describe("simulateWeek", () => {
  it("runs a scripted route through 12 weeks", () => {
    const run = runScriptedRoute(scriptedRoutes[0]);

    expect(run.status).toBe("ended");
    expect(run.snapshots).toHaveLength(12);
    expect(run.diagnosis).toBeDefined();
    expect(run.snapshots[0].resourcesEnd.cash).toBeGreaterThan(0);
  });

  it("keeps route differentiation visible", () => {
    const result = assertRouteDifferentiation();

    expect(result.failures).toEqual([]);
    expect(new Set(result.summary.map((route) => route.diagnosis)).size).toBeGreaterThanOrEqual(2);
  });
});

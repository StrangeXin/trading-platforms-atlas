import { describe, expect, it } from "vitest";
import { runBaselineRun, summarizeBaseline } from "../dev/baselineRun";

/**
 * Guards playable-run-spec expectations for the default 12-week run.
 * If these break, either the spec or the calibration has drifted —
 * reconcile before shipping.
 */
describe("baseline run (playable-run-spec default)", () => {
  const state = runBaselineRun();
  const trace = summarizeBaseline(state);

  it("finishes all 12 weeks and produces a diagnosis", () => {
    expect(state.status).toBe("ended");
    expect(trace).toHaveLength(12);
    expect(state.diagnosis).toBeDefined();
  });

  it("triggers the scripted event on its scripted week", () => {
    const byWeek = new Map(trace.map((line) => [line.week, line.event]));
    expect(byWeek.get(3)).toBe("weekend_promo_temptation");
    expect(byWeek.get(6)).toBe("viral_winner_thread");
    expect(byWeek.get(8)).toBe("silent_winners_cluster");
    expect(byWeek.get(10)).toBe("payment_processor_warning");
  });

  it("Week 1 grows cash and flow (spec: strong start)", () => {
    const week1 = state.snapshots[0];
    expect(week1.resourcesEnd.cash).toBeGreaterThan(week1.resourcesStart.cash);
    expect(week1.resourcesEnd.flow).toBeGreaterThanOrEqual(week1.resourcesStart.flow);
  });

  it("later weeks show the trust/flow split the spec calls for", () => {
    const week1 = trace[0];
    const week9 = trace[8];
    expect(week9.complaintEcho).toBeGreaterThan(week1.complaintEcho);
  });
});

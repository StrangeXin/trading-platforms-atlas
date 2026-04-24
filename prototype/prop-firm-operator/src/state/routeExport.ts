import type { RunState } from "../sim/types";

export function buildRouteExport(run: RunState) {
  return {
    exportedAt: new Date().toISOString(),
    runId: run.runId,
    platformName: run.platformName,
    founderModeId: run.founderModeId,
    scenarioId: run.scenarioId,
    maxWeeks: run.maxWeeks,
    finalStatus: run.status,
    finalResources: run.resources,
    finalCounters: run.counters,
    finalAudience: run.audience,
    flags: run.flags,
    triggeredEventIds: run.triggeredEventIds,
    events: run.eventHistory,
    activeDelayedEffects: run.delayedEffects,
    snapshots: run.snapshots,
    diagnosis: run.diagnosis,
  };
}

export function downloadRouteExport(run: RunState) {
  const json = JSON.stringify(buildRouteExport(run), null, 2);
  const blob = new Blob([json], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `prop-firm-route-${run.runId}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

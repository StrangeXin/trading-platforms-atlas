import { endingCopy } from "../data/content.seed";
import type { EndingPreview, EndingType, RunState } from "./types";

function selectEndingType(state: RunState): EndingType {
  const { cash, payoutLiability, regulatoryHeat, trust } = state.resources;

  // Most specific patterns first. A run that ended with "cash up, trust gone"
  // is structurally `dirty_momentum` — the player won the money game and lost
  // the belief game. That's a different story from `trust_collapse_preview`,
  // which describes a run that simply failed on belief without the cash win.
  if (cash >= 65 && trust <= 42) return "dirty_momentum";

  // trust < 25 is the "corrupt zone" per numeric-balancing notes (0-24).
  // 25-44 is cracked but not yet collapsed.
  if (trust < 25) return "trust_collapse_preview";

  if (payoutLiability >= 55 && cash <= 45) {
    return "payout_shock_preview";
  }

  if (regulatoryHeat >= 55) return "room_is_shrinking";

  if (trust >= 55 && payoutLiability >= 42) {
    return "credibility_is_expensive";
  }

  return "crowd_still_believes";
}

export function buildEndingPreview(state: RunState): EndingPreview {
  const type = selectEndingType(state);
  const copy = endingCopy[type];
  const evidenceFlags = Object.entries(state.flags)
    .filter(([, enabled]) => enabled)
    .map(([flag]) => flag as keyof RunState["flags"])
    .slice(0, 3);

  const evidence = [
    {
      label: "Resource signature",
      detail: `Cash ${Math.round(state.resources.cash)}, trust ${Math.round(
        state.resources.trust,
      )}, heat ${Math.round(state.resources.regulatoryHeat)}.`,
      kind: "resource" as const,
    },
    {
      label: "Shadow pressure",
      detail: `Complaint echo ${Math.round(
        state.counters.complaintEcho,
      )}, skilled cluster ${Math.round(state.counters.skilledCluster)}.`,
      kind: "counter-shadow" as const,
    },
    {
      label: "Player memory",
      detail: evidenceFlags.length
        ? `Recorded choices: ${evidenceFlags.join(", ")}.`
        : "The run stayed quiet enough that no major choice flag dominated.",
      kind: "choice" as const,
    },
  ];

  return {
    type,
    title: copy.title,
    subtitle: copy.subtitle,
    evidence,
    evidenceMetricIds: ["cash", "trust", "regulatoryHeat", "payoutLiability"],
    evidenceFlags,
    replayPrompt: copy.replayPrompt,
  };
}

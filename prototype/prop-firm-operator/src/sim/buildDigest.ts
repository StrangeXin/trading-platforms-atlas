import { statusLabels } from "../data/content.seed";
import type {
  HiddenCounters,
  NarrativeItem,
  ResourceKey,
  Resources,
  WeekDigest,
  WeekSnapshot,
} from "./types";

function labelForResource(key: ResourceKey, value: number) {
  return statusLabels[key](value);
}

function riskFrom(resources: Resources, counters: HiddenCounters): WeekDigest["riskCard"] {
  if (resources.regulatoryHeat >= 55) {
    return {
      title: "Operating room is narrowing",
      body: "Heat is high enough that payment and messaging options should start to feel smaller.",
      severity: "critical",
      relatedCounterIds: ["processorPatience"],
    };
  }

  if (resources.payoutLiability >= 48) {
    return {
      title: "Winners are becoming a bill",
      body: "The platform looks more credible because it is carrying more real obligations.",
      severity: "high",
      relatedCounterIds: ["winnerVisibility", "skilledCluster"],
    };
  }

  if (counters.complaintEcho >= 38 || resources.trust <= 35) {
    return {
      title: "Complaint memory is hardening",
      body: "Users are starting to repeat the same suspicion in different words.",
      severity: "high",
      relatedCounterIds: ["complaintEcho"],
    };
  }

  if (resources.flow >= 82) {
    return {
      title: "Traffic quality is changing",
      body: "Growth is still the best-looking number, which is exactly why it deserves suspicion.",
      severity: "medium",
      relatedCounterIds: ["promoDebt"],
    };
  }

  return {
    title: "Pressure is still quiet",
    body: "Nothing is broken yet. The system is still collecting material.",
    severity: "low",
    relatedCounterIds: [],
  };
}

export function buildDigest(
  partial: Pick<
    WeekSnapshot,
    | "week"
    | "resourcesStart"
    | "resourcesEnd"
    | "countersEnd"
    | "outcome"
    | "delayedEffectsApplied"
  >,
): WeekDigest {
  const cashDelta = partial.resourcesEnd.cash - partial.resourcesStart.cash;
  const trustDelta = partial.resourcesEnd.trust - partial.resourcesStart.trust;
  const liabilityDelta =
    partial.resourcesEnd.payoutLiability - partial.resourcesStart.payoutLiability;

  const headlineMetricIds: string[] = ["cash", "flow", "trust"];
  if (Math.abs(liabilityDelta) > 4) headlineMetricIds.push("payoutLiability");
  if (partial.resourcesEnd.regulatoryHeat >= 40) headlineMetricIds.push("regulatoryHeat");

  const narrativeFeed: NarrativeItem[] = [
    {
      source: "internal" as const,
      tone: cashDelta >= 0 ? ("positive" as const) : ("warning" as const),
      text:
        cashDelta >= 0
          ? `Finance likes the week: cash moved ${cashDelta.toFixed(1)} points.`
          : `Cash tightened by ${Math.abs(cashDelta).toFixed(1)} points.`,
      relatedMetricIds: ["cash"],
    },
    {
      source: "user" as const,
      tone: trustDelta >= 0 ? ("neutral" as const) : ("warning" as const),
      text:
        trustDelta >= 0
          ? "The platform still reads as believable to the current crowd."
          : "User mood is remembering more than the headline numbers show.",
      relatedMetricIds: ["trust", "complaintEcho"],
    },
  ];

  if (partial.outcome.successfulPayouts > 0) {
    narrativeFeed.push({
      source: "kol",
      tone: "positive",
      text: `${partial.outcome.successfulPayouts} payout stories can help the platform look real.`,
      relatedMetricIds: ["winnerVisibility", "payoutLiability"],
    });
  }

  const delayedEffectHints = partial.delayedEffectsApplied
    .map((effect) =>
      effect.narrativeHint
        ? `Week ${effect.createdWeek} echo: ${effect.narrativeHint}`
        : `Week ${effect.createdWeek} decision is now visible.`,
    )
    .slice(0, 3);

  return {
    title: `Week ${partial.week} Digest`,
    headlineMetricIds,
    narrativeFeed,
    riskCard: riskFrom(partial.resourcesEnd, partial.countersEnd),
    statusLabels: Object.fromEntries(
      (Object.keys(partial.resourcesEnd) as ResourceKey[]).map((key) => [
        key,
        labelForResource(key, partial.resourcesEnd[key]),
      ]),
    ) as Record<ResourceKey, string>,
    delayedEffectHints,
  };
}

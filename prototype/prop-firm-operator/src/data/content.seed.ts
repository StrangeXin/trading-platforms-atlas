import type { EndingType, ResourceKey } from "../sim/types";
import { zoneFor } from "../sim/resourceZones";

// Thin shim around resourceZones so existing buildDigest call sites keep
// working. Single source of truth for band labels lives in resourceZones.ts;
// see numeric-balancing-notes.md "六大资源的危险区间设计".
export const statusLabels: Record<ResourceKey, (value: number) => string> = {
  cash: (v) => zoneFor("cash", v).label,
  flow: (v) => zoneFor("flow", v).label,
  passRate: (v) => zoneFor("passRate", v).label,
  payoutLiability: (v) => zoneFor("payoutLiability", v).label,
  trust: (v) => zoneFor("trust", v).label,
  regulatoryHeat: (v) => zoneFor("regulatoryHeat", v).label,
};

export const weeklyDigestTitleSeeds = [
  "Week 1 - Strong Start",
  "Week 2 - Cheap Traffic, Fast Money",
  "Week 3 - Growth Still Looks Clean",
  "Week 4 - Strong Growth, Strange Smell",
  "Week 5 - More Sign-Ups, More Friction",
  "Week 6 - The Winners Are Getting Louder",
  "Week 7 - Cash Up, Confidence Splitting",
  "Week 8 - Good Numbers, Bad Temperature",
  "Week 9 - Trust Starts to Crack",
  "Week 10 - The Cost of Looking Real",
  "Week 11 - Everyone Is Watching Different Things",
  "Week 12 - The Machine Wants Feeding",
];

export const endingCopy: Record<
  EndingType,
  { title: string; subtitle: string; replayPrompt: string }
> = {
  dirty_momentum: {
    title: "Dirty Momentum",
    subtitle:
      "The machine is profitable. It is also learning what it can get away with.",
    replayPrompt:
      "Try running the same growth story without letting every shortcut become policy.",
  },
  credibility_is_expensive: {
    title: "Credibility Is Getting Expensive",
    subtitle:
      "The platform looks more real because it is carrying more real obligations.",
    replayPrompt:
      "Try proving legitimacy without letting winners define your balance sheet.",
  },
  room_is_shrinking: {
    title: "The Room Is Shrinking",
    subtitle: "You can still operate, just not as loosely as before.",
    replayPrompt:
      "Try growing before the paper trail starts writing your strategy for you.",
  },
  crowd_still_believes: {
    title: "The Crowd Still Believes",
    subtitle:
      "The story is still intact, but the next version of the machine will ask for cleaner proof.",
    replayPrompt:
      "Try a more extreme route and watch which pressure arrives first.",
  },
  trust_collapse_preview: {
    title: "Trust Collapse Preview",
    subtitle: "The money did not stop first. Belief did.",
    replayPrompt:
      "Try taking fewer easy cash saves and see which costs arrive later instead.",
  },
  payout_shock_preview: {
    title: "Payout Shock Preview",
    subtitle: "Winners helped sell the story. Then they became the bill.",
    replayPrompt:
      "Try being less generous, or being generous only after you can afford it.",
  },
};

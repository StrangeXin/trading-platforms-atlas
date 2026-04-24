import type { EndingType, ResourceKey } from "../sim/types";

export const statusLabels: Record<ResourceKey, Array<{ min: number; label: string }>> = {
  cash: [
    { min: 80, label: "Strong" },
    { min: 55, label: "Comfortable" },
    { min: 35, label: "Tight" },
    { min: 0, label: "Bleeding" },
  ],
  flow: [
    { min: 75, label: "Hot" },
    { min: 50, label: "Rising" },
    { min: 30, label: "Cooling" },
    { min: 0, label: "Drying" },
  ],
  passRate: [
    { min: 25, label: "Leaking" },
    { min: 16, label: "Loose" },
    { min: 8, label: "Engineered" },
    { min: 0, label: "Tight" },
  ],
  payoutLiability: [
    { min: 65, label: "Critical" },
    { min: 40, label: "Loaded" },
    { min: 20, label: "Building" },
    { min: 0, label: "Low" },
  ],
  trust: [
    { min: 70, label: "Stable" },
    { min: 45, label: "Mixed" },
    { min: 25, label: "Slipping" },
    { min: 0, label: "Poisoned" },
  ],
  regulatoryHeat: [
    { min: 65, label: "Closing In" },
    { min: 40, label: "Watching" },
    { min: 20, label: "Warm" },
    { min: 0, label: "Quiet" },
  ],
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

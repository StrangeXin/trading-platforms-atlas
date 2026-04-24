import type { FounderMode } from "../sim/types";

export const founderModes: FounderMode[] = [
  {
    id: "showman",
    name: "The Showman",
    subtitle: "If they're watching, they're halfway in.",
    weaknessLine: "You mistake noise for strength.",
    startingResourceMods: {
      flow: 6,
      trust: -3,
    },
    startingCounterMods: {
      winnerVisibility: 4,
    },
    biasTags: ["growth", "visibility", "narrative"],
    eventAdviceOverrides: {
      viral_winner_thread: "This is momentum. Use it before it cools.",
      feels_rigged_forum_post:
        "If the story stays strong, the complaints stay small.",
      weekend_promo_temptation: "Attention compounds faster than caution.",
    },
    endingVoice: {
      dirty_momentum: "You didn't build trust. You built gravity.",
      trust_collapse_preview:
        "The story held until it had to carry the whole business by itself.",
    },
  },
];

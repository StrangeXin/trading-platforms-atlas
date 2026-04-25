import type { Scenario } from "../sim/types";

export const scenarios: Scenario[] = [
  {
    id: "bull_euphoria",
    name: "Bull Euphoria",
    subtitle: "When everything is going up, even bad structures feel brilliant.",
    misreadLine: "Most players mistake market heat for platform quality.",
    startingResourceMods: {
      flow: 10,
      trust: 4,
      regulatoryHeat: -2,
    },
    startingCounterMods: {
      winnerVisibility: 5,
    },
    audienceMods: {
      novice: 0.04,
      gambler: 0.02,
      skilled: -0.06,
    },
    eventWeightMods: {
      weekend_promo_temptation: 1.25,
      viral_winner_thread: 1.2,
    },
    digestTitlePool: [
      "Everyone Looks Smarter in This Market",
      "Hot Traffic, Thin Judgment",
      "The Story Is Selling Itself",
    ],
    riskLinePool: [
      "The market is flattering everyone, including you.",
      "Hot conditions hide ugly mechanics well.",
      "More people believe. That does not mean more people understand.",
    ],
  },
];

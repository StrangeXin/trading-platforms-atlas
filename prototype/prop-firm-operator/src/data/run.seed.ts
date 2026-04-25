import type { InitialRunSeed } from "../sim/types";

export const initialRunSeed: InitialRunSeed = {
  platformName: "HyperGrowth Capital",
  founderModeId: "showman",
  scenarioId: "bull_euphoria",
  maxWeeks: 12,
  resources: {
    cash: 62,
    flow: 68,
    passRate: 11,
    payoutLiability: 14,
    trust: 51,
    regulatoryHeat: 22,
  },
  counters: {
    complaintEcho: 8,
    winnerVisibility: 2,
    promoDebt: 0,
    processorPatience: 70,
    skilledCluster: 5,
  },
  audience: {
    novice: 0.58,
    gambler: 0.26,
    skilled: 0.16,
  },
  controls: {
    challengeFee: 3,
    profitTarget: 3,
    maxDrawdown: "locked",
    payoutSplit: "locked",
    marketingTone: 4,
  },
};

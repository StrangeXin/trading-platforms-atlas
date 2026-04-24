import type { ControlAvailability } from "../sim/types";

export const controlAvailability: ControlAvailability[] = [
  {
    fromWeek: 1,
    toWeek: 1,
    challengeFee: [2, 4],
    profitTarget: [2, 4],
    maxDrawdown: "locked",
    payoutSplit: "locked",
    marketingTone: [2, 5],
  },
  {
    fromWeek: 2,
    toWeek: 3,
    challengeFee: [2, 4],
    profitTarget: [2, 4],
    maxDrawdown: [2, 4],
    payoutSplit: "locked",
    marketingTone: [2, 5],
  },
  {
    fromWeek: 4,
    toWeek: 4,
    challengeFee: [1, 5],
    profitTarget: [1, 5],
    maxDrawdown: [2, 4],
    payoutSplit: [2, 4],
    marketingTone: [2, 5],
  },
  {
    fromWeek: 5,
    toWeek: 12,
    challengeFee: [1, 5],
    profitTarget: [1, 5],
    maxDrawdown: [1, 5],
    payoutSplit: [1, 5],
    marketingTone: [1, 5],
  },
];

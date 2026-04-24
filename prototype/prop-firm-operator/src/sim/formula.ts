import type { FormulaResult, PlayerControls, RunState } from "./types";
import {
  clamp100,
  clampPassRate,
  levelBias,
  normalizeAudience,
} from "./clamp";

function unlockedControls(controls: PlayerControls): Required<PlayerControls> {
  return {
    challengeFee: controls.challengeFee,
    profitTarget: controls.profitTarget,
    maxDrawdown: controls.maxDrawdown === "locked" ? 3 : controls.maxDrawdown,
    payoutSplit: controls.payoutSplit === "locked" ? 3 : controls.payoutSplit,
    marketingTone: controls.marketingTone,
  };
}

export function calculateWeek(state: RunState): FormulaResult {
  const resourcesStart = state.resources;
  const countersStart = state.counters;
  const audienceStart = state.audience;
  const controls = unlockedControls(state.controls);

  const feeBias = levelBias(controls.challengeFee);
  const targetBias = levelBias(controls.profitTarget);
  const drawdownBias = levelBias(controls.maxDrawdown);
  const splitBias = levelBias(controls.payoutSplit);
  const toneBias = levelBias(controls.marketingTone);

  const trustAbove50 = Math.max(0, resourcesStart.trust - 50) / 50;
  const trustAbove60 = Math.max(0, resourcesStart.trust - 60) / 40;

  const audience = normalizeAudience({
    novice:
      audienceStart.novice +
      toneBias * 0.018 -
      feeBias * 0.006 -
      splitBias * 0.004 +
      countersStart.promoDebt * 0.001,
    gambler:
      audienceStart.gambler +
      toneBias * 0.012 +
      feeBias * 0.008 +
      targetBias * 0.006 +
      countersStart.promoDebt * 0.0015 -
      trustAbove60 * 0.004,
    skilled:
      audienceStart.skilled +
      splitBias * 0.012 +
      trustAbove50 * 0.006 +
      countersStart.winnerVisibility * 0.001 -
      targetBias * 0.004 -
      toneBias * 0.004,
  });

  const baseSignups =
    30 +
    resourcesStart.flow * 0.8 +
    toneBias * 8 +
    resourcesStart.trust * 0.25 +
    countersStart.winnerVisibility * 0.25 -
    resourcesStart.regulatoryHeat * 0.35 -
    feeBias * 5;

  const qualityMultiplier =
    1 + audience.novice * 0.1 + audience.gambler * 0.18 - audience.skilled * 0.08;

  const signups = Math.max(0, Math.round(baseSignups * qualityMultiplier));

  const effectivePassRate = clampPassRate(
    resourcesStart.passRate +
      audience.skilled * 18 -
      audience.novice * 5 -
      targetBias * 2.4 +
      drawdownBias * 2.2 +
      splitBias * 0.8 +
      (resourcesStart.trust - 50) * 0.03,
  );

  const passes = Math.round((signups * effectivePassRate) / 100);
  const failures = signups - passes;

  const payoutRequests = Math.round(
    passes * (0.35 + audience.skilled * 0.9) * (0.8 + splitBias * 0.12),
  );

  const reviewFriction = state.flags.reviewsTightened ? 0.7 : 1;
  const processorFriction = countersStart.processorPatience < 45 ? 0.85 : 1;
  const successfulPayouts = Math.round(
    payoutRequests * reviewFriction * processorFriction,
  );

  const feeUnit = 1 + feeBias * 0.18;
  const failureEconomics =
    failures *
    (0.015 + Math.max(0, targetBias) * 0.01 + Math.max(0, -drawdownBias) * 0.008);
  const feeRevenue = signups * feeUnit * 0.18 + failureEconomics;
  const promoCost = controls.marketingTone * 1.8 + Math.max(0, toneBias) * 2.5;
  const supportCost =
    signups * 0.035 +
    countersStart.complaintEcho * 0.22 +
    countersStart.promoDebt * 0.18;
  const splitMultiplier = 0.75 + splitBias * 0.12;
  const payoutCost = successfulPayouts * splitMultiplier * 1.4;
  const coldFunnelCost = Math.max(0, 60 - resourcesStart.flow) * 0.25;
  const quietBrandCost = Math.max(0, -toneBias) * 4;
  const cashDelta =
    feeRevenue -
    promoCost -
    supportCost -
    payoutCost -
    coldFunnelCost -
    quietBrandCost;

  const flowDelta =
    toneBias * 5 +
    countersStart.winnerVisibility * 0.08 +
    resourcesStart.trust * 0.04 -
    resourcesStart.regulatoryHeat * 0.06 -
    feeBias * 3 -
    countersStart.complaintEcho * 0.04;

  const passRateDelta =
    -targetBias * 0.35 +
    drawdownBias * 0.35 +
    audience.skilled * 1.2 -
    audience.novice * 0.4;

  const payoutLiabilityDelta =
    passes * 0.22 +
    payoutRequests * 0.45 +
    audience.skilled * 6 +
    countersStart.winnerVisibility * 0.05 +
    splitBias * 2 -
    successfulPayouts * 0.35;

  let trustDelta =
    successfulPayouts * 0.55 +
    splitBias * 1.8 +
    drawdownBias * 1 +
    -countersStart.complaintEcho * 0.12 -
    toneBias * 1.8 -
    Math.max(0, -cashDelta) * 0.08 -
    resourcesStart.regulatoryHeat * 0.04;

  if (state.flags.reviewsTightened) trustDelta -= 3;
  if (countersStart.processorPatience < 45) trustDelta -= 2;

  const regulatoryHeatDelta =
    toneBias * 2.4 +
    countersStart.complaintEcho * 0.1 +
    Math.max(0, 50 - resourcesStart.trust) * 0.05 +
    Math.max(0, resourcesStart.payoutLiability - 40) * 0.04 -
    Math.max(0, 65 - resourcesStart.regulatoryHeat) * 0.02;

  const newComplaints =
    Math.max(0, 10 - effectivePassRate) * 0.9 +
    Math.max(0, toneBias) * 2.2 +
    Math.max(0, 45 - resourcesStart.trust) * 0.08 +
    supportCost * 0.25 +
    countersStart.promoDebt * 0.12;

  const newWinnerSignal =
    successfulPayouts * 1.8 +
    Math.max(0, resourcesStart.trust - 50) * 0.06 +
    Math.max(0, splitBias) * 2;

  const processorPatienceDelta =
    -resourcesStart.regulatoryHeat * 0.08 -
    countersStart.complaintEcho * 0.06 -
    Math.max(0, payoutRequests - successfulPayouts) * 1.5 +
    Math.max(0, 60 - resourcesStart.regulatoryHeat) * 0.03;

  const skilledClusterDelta =
    audience.skilled * 8 +
    countersStart.winnerVisibility * 0.1 +
    splitBias * 1.5 +
    Math.max(0, resourcesStart.trust - 50) * 0.04 -
    targetBias * 0.8;

  return {
    resources: {
      cash: clamp100(resourcesStart.cash + cashDelta * 0.55),
      flow: clamp100(resourcesStart.flow + flowDelta),
      passRate: clampPassRate(resourcesStart.passRate + passRateDelta),
      payoutLiability: clamp100(
        resourcesStart.payoutLiability + payoutLiabilityDelta,
      ),
      trust: clamp100(resourcesStart.trust + trustDelta),
      regulatoryHeat: clamp100(
        resourcesStart.regulatoryHeat + regulatoryHeatDelta,
      ),
    },
    counters: {
      complaintEcho: clamp100(countersStart.complaintEcho * 0.72 + newComplaints),
      winnerVisibility: clamp100(
        countersStart.winnerVisibility * 0.78 + newWinnerSignal,
      ),
      promoDebt: clamp100(countersStart.promoDebt * 0.68 + Math.max(0, toneBias) * 1.8),
      processorPatience: clamp100(
        countersStart.processorPatience + processorPatienceDelta,
      ),
      skilledCluster: clamp100(
        countersStart.skilledCluster * 0.82 + skilledClusterDelta,
      ),
    },
    audience,
    outcome: {
      signups,
      failures,
      passes,
      payoutRequests,
      successfulPayouts,
      feeRevenue: Number(feeRevenue.toFixed(2)),
      promoCost: Number(promoCost.toFixed(2)),
      supportCost: Number(supportCost.toFixed(2)),
      payoutCost: Number(payoutCost.toFixed(2)),
      cashDelta: Number(cashDelta.toFixed(2)),
      effectivePassRate: Number(effectivePassRate.toFixed(2)),
    },
  };
}

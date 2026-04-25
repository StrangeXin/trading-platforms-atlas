/**
 * Calibration knobs that the sensitivity tool perturbs. Anything not here is
 * intentionally not part of the calibration surface (audience/signup/pass-rate
 * formulas are stable; tuning knobs are the reversion + damper system that the
 * 15-pass calibration centered on).
 *
 * Historical baseline (after Pass 15): 37 out-of-band metrics.
 *
 * To probe sensitivity:
 *   import { defaultTuningConfig } from "./tuningConfig";
 *   const overridden = { ...defaultTuningConfig, trustReversionLowK: 0.25 };
 *   simulateWeek(state, { tuningConfig: overridden });
 */
export type TuningConfig = {
  // Week 1-3 multiplier on tone-driven trust/regHeat/complaint loss.
  temptationDamper: number;

  // Trust mean reversion (asymmetric around 35).
  trustReversionLowK: number;
  trustReversionHighK: number;

  // Trust drag from heavy payout liability above 30.
  payoutLiabilityTrustDrag: number;

  // Regulatory heat reversion tiers.
  regHeatReversionVeryHighK: number; // > 78
  regHeatReversionHighK: number; //  60-78
  regHeatReversionMidK: number; //  45-60
  regHeatReversionLowK: number; //  < 45

  // Flow reversion (asymmetric).
  flowReversionLowK: number; // flow < 40
  flowReversionHighK: number; // flow > 90
  flowReversionMidK: number; // 40-90

  // Payout cost amplifier — makes Fair "more expensive".
  splitMultiplierSlope: number; // coefficient of splitBias
  payoutCostMultiplier: number; // base multiplier on successfulPayouts
};

export const defaultTuningConfig: TuningConfig = {
  temptationDamper: 0.55,

  trustReversionLowK: 0.35,
  trustReversionHighK: 0.06,

  payoutLiabilityTrustDrag: 0.08,

  regHeatReversionVeryHighK: 0.3,
  regHeatReversionHighK: 0.1,
  regHeatReversionMidK: 0.04,
  regHeatReversionLowK: 0.03,

  flowReversionLowK: 0.18,
  flowReversionHighK: 0.15,
  flowReversionMidK: 0.035,

  splitMultiplierSlope: 0.15,
  payoutCostMultiplier: 1.25,
};

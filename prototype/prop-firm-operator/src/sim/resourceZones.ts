import type { ResourceKey, WeekPhase } from "./types";

export type ZoneTone = "good" | "neutral" | "warning" | "critical";

export type Zone = {
  label: string;
  tone: ZoneTone;
};

// Bands and labels lifted from
// docs/plans/2026-04-24-prop-firm-operator-numeric-balancing-notes.md "六大资源的危险区间设计".
const ZONE_TABLE: Record<ResourceKey, Array<{ max: number; zone: Zone }>> = {
  cash: [
    { max: 34, zone: { label: "Survival", tone: "critical" } },
    { max: 54, zone: { label: "Anxious", tone: "warning" } },
    { max: 79, zone: { label: "Healthy", tone: "good" } },
    { max: 100, zone: { label: "Comfortable", tone: "neutral" } },
  ],
  flow: [
    { max: 29, zone: { label: "Depleted", tone: "critical" } },
    { max: 49, zone: { label: "Cooling", tone: "warning" } },
    { max: 74, zone: { label: "Operating", tone: "good" } },
    { max: 100, zone: { label: "Hot", tone: "neutral" } },
  ],
  passRate: [
    { max: 7, zone: { label: "Rigged", tone: "critical" } },
    { max: 15, zone: { label: "False healthy", tone: "warning" } },
    { max: 24, zone: { label: "Trustable", tone: "good" } },
    { max: 100, zone: { label: "Out of control", tone: "neutral" } },
  ],
  payoutLiability: [
    { max: 19, zone: { label: "Ignorable", tone: "good" } },
    { max: 39, zone: { label: "Forming", tone: "neutral" } },
    { max: 64, zone: { label: "Pressure", tone: "warning" } },
    { max: 100, zone: { label: "Explosive", tone: "critical" } },
  ],
  trust: [
    { max: 24, zone: { label: "Corrupt", tone: "critical" } },
    { max: 44, zone: { label: "Cracked", tone: "warning" } },
    { max: 69, zone: { label: "Sellable", tone: "neutral" } },
    { max: 100, zone: { label: "Brand", tone: "good" } },
  ],
  regulatoryHeat: [
    { max: 19, zone: { label: "Quiet", tone: "good" } },
    { max: 39, zone: { label: "Attention", tone: "neutral" } },
    { max: 64, zone: { label: "Friction", tone: "warning" } },
    { max: 100, zone: { label: "Pressure", tone: "critical" } },
  ],
};

export function zoneFor(key: ResourceKey, value: number): Zone {
  const tiers = ZONE_TABLE[key];
  return tiers.find((tier) => value <= tier.max)!.zone;
}

const PHASE_LABELS: Record<WeekPhase, string> = {
  temptation: "Temptation",
  crack: "Crack",
  reveal: "Reveal",
  reckoning: "Reckoning",
};

export function phaseLabel(phase: WeekPhase): string {
  return PHASE_LABELS[phase];
}

export function phaseForCurrentWeek(week: number): WeekPhase {
  if (week <= 3) return "temptation";
  if (week <= 6) return "crack";
  if (week <= 9) return "reveal";
  return "reckoning";
}

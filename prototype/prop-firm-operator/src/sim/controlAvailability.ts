import { controlAvailability } from "../data/controlAvailability.seed";
import type { ControlKey, ControlLevel, PlayerControls } from "./types";

export function getControlAvailability(week: number) {
  return (
    controlAvailability.find(
      (rule) => week >= rule.fromWeek && week <= rule.toWeek,
    ) ?? controlAvailability.at(-1)!
  );
}

export function isControlLocked(key: ControlKey, week: number) {
  return getControlAvailability(week)[key] === "locked";
}

export function unlockReason(key: ControlKey) {
  if (key === "maxDrawdown") return "Unlocks in Week 2";
  if (key === "payoutSplit") return "Unlocks in Week 4";
  return "";
}

export function getControlDisplayValue(
  controls: PlayerControls,
  key: ControlKey,
): ControlLevel {
  const value = controls[key];
  return value === "locked" ? 3 : value;
}

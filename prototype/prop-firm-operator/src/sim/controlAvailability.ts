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
  // Per playable-run-spec: each lever unlocks when its consequence chain is
  // about to become legible to the player.
  if (key === "maxDrawdown")
    return "Unlocks Week 2 — once cohort quality starts to drift, you'll need a real failure dial.";
  if (key === "payoutSplit")
    return "Unlocks Week 4 — winners are about to enter; brand becomes a price tag.";
  return "";
}

export function getControlDisplayValue(
  controls: PlayerControls,
  key: ControlKey,
): ControlLevel {
  const value = controls[key];
  return value === "locked" ? 3 : value;
}

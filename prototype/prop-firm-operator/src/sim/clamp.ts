import type { AudienceMix, ControlLevel } from "./types";

export function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function clamp100(value: number) {
  return clamp(value, 0, 100);
}

export function clampPassRate(value: number) {
  return clamp(value, 3, 32);
}

export function levelBias(level: ControlLevel | "locked") {
  return level === "locked" ? 0 : level - 3;
}

export function normalizeAudience(audience: AudienceMix): AudienceMix {
  const raw = {
    novice: Math.max(0.01, audience.novice),
    gambler: Math.max(0.01, audience.gambler),
    skilled: Math.max(0.01, audience.skilled),
  };
  const total = raw.novice + raw.gambler + raw.skilled;

  return {
    novice: raw.novice / total,
    gambler: raw.gambler / total,
    skilled: raw.skilled / total,
  };
}

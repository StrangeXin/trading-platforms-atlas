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

// Soft-saturates deltas that push a [0, 100] resource near a boundary.
// Within the first `softness` points from either edge, the delta is
// linearly shrunk. Keeps motion in the middle range intact while
// preventing runaway accumulation at 0 or 100.
export function softenDelta(current: number, delta: number, softness = 40) {
  if (delta > 0) {
    const headroom = Math.max(0, 100 - current);
    return delta * Math.min(1, headroom / softness);
  }
  if (delta < 0) {
    const footroom = Math.max(0, current);
    return delta * Math.min(1, footroom / softness);
  }
  return 0;
}

// Event-tier softening: intentionally lighter than `softenDelta` because
// event deltas need to feel sharp when the player chose them. Kicks in only
// within `edge` points of a boundary (default 15), so mid-range events hit
// at full force. Use for trust/flow/regHeat/payoutLiability event effects.
export function softenEventDelta(current: number, delta: number, edge = 15) {
  if (delta > 0) {
    const headroom = Math.max(0, 100 - current);
    if (headroom >= edge) return delta;
    return delta * (headroom / edge);
  }
  if (delta < 0) {
    const footroom = Math.max(0, current);
    if (footroom >= edge) return delta;
    return delta * (footroom / edge);
  }
  return 0;
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

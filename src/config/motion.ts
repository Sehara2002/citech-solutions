/**
 * Shared easing and durations. Every animation on the site reads from
 * here, which is what stops the motion drifting as pages get added.
 */
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.4,
  base: 0.6,
  slow: 0.85,
  draw: 1.4,
} as const;

/** Start animating slightly before the element reaches the fold. */
export const VIEWPORT = { once: true, margin: "-80px" } as const;
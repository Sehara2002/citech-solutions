/**
 * Per-instance throttle. Resets on deploy and doesn't span regions —
 * fine at launch volume. Swap for Vercel KV or Upstash when it matters.
 */
const seen = new Map<string, number>();

const WINDOW_MS = 60_000;

export function isRateLimited(key: string) {
  const last = seen.get(key) ?? 0;
  return Date.now() - last < WINDOW_MS;
}

export function markSeen(key: string) {
  seen.set(key, Date.now());
}
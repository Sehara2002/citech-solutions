"use client";

import type { CSSProperties } from "react";
import type { Lane } from "./lanes";

/**
 * The travelling signal. CSS offset-path, so the reduced-motion rule in
 * base.css can stop it dead — SMIL couldn't.
 */
export function Pulse({ lane }: { lane: Lane }) {
  return (
    <circle
      r={3.5}
      fill="var(--color-pulse)"
      className="schematic-pulse"
      style={
        {
          offsetPath: `path("${lane.d}")`,
          animationDuration: lane.duration,
          animationDelay: lane.delay,
        } as CSSProperties
      }
    />
  );
}
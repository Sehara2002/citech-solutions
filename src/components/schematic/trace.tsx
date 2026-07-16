"use client";

import { motion } from "motion/react";
import { DURATION, EASE_OUT_EXPO } from "@/config/motion";

/** A single line that draws itself. */
export function Trace({
  d,
  stroke,
  delay,
  reduce,
}: {
  d: string;
  stroke: string;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.path
      d={d}
      stroke={stroke}
      strokeWidth={1.5}
      initial={{ pathLength: reduce ? 1 : 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: DURATION.draw, delay, ease: EASE_OUT_EXPO }}
    />
  );
}
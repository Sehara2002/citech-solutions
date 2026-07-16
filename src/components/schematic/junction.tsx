"use client";

import { motion } from "motion/react";
import { DURATION } from "@/config/motion";

export function Junction({
  cx,
  cy,
  delay,
  reduce,
}: {
  cx: number;
  cy: number;
  delay: number;
  reduce: boolean | null;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={4}
      fill="var(--color-paper)"
      stroke="var(--color-ink)"
      strokeWidth={1.5}
      initial={{ scale: reduce ? 1 : 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: DURATION.fast, delay }}
      style={{ transformOrigin: `${cx}px ${cy}px` }}
    />
  );
}
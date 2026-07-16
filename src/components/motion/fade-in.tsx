"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO, VIEWPORT } from "@/config/motion";

type Props = {
  children: ReactNode;
  /** Seconds. Long delays read as sluggish, not elegant. */
  delay?: number;
  /** Pixels travelled. Keep under 24; more looks like the page is broken. */
  y?: number;
  className?: string;
};

/** The workhorse. Transform + opacity only, so it never triggers layout. */
export function FadeIn({ children, delay = 0, y = 16, className }: Props) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.7, delay, ease: EASE_OUT_EXPO }}
    >
      {children}
    </motion.div>
  );
}
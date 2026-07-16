"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { EASE_OUT_EXPO, VIEWPORT } from "@/config/motion";

/**
 * A hairline draws itself across, then the content appears — the drawing
 * order of a technical sketch: rule first, then label.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <div className={className}>
      <motion.div
        className="h-px w-full origin-left bg-line"
        initial={{ scaleX: reduce ? 1 : 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, delay, ease: EASE_OUT_EXPO }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
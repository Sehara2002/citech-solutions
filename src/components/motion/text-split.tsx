"use client";

import { motion, useReducedMotion } from "motion/react";
import { DURATION, EASE_OUT_EXPO } from "@/config/motion";

/**
 * Word-by-word rise for a single headline. Use once per page, at most.
 * Splits on words, not characters: character splits shred screen-reader
 * output and rarely look better.
 */
export function TextSplit({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) return <span className={className}>{text}</span>;

  return (
    <span className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: DURATION.slow,
              delay: delay + i * 0.055,
              ease: EASE_OUT_EXPO,
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
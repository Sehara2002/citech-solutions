"use client";

import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/config/motion";

export function ContactSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
      className="border border-signal p-8"
      role="status"
    >
      <p className="annotation text-signal">Message sent</p>
      <p className="display-md mt-3">We&apos;ll reply within one working day.</p>
      <p className="mt-3 text-sm text-graphite">
        If it&apos;s urgent, call the number on the left.
      </p>
    </motion.div>
  );
}
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import { VIEWPORT } from "@/config/motion";

/** Wrap a list; children arrive in sequence. Pair with <StaggerItem>. */
export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="shown"
      viewport={VIEWPORT}
      variants={{ hidden: {}, shown: { transition: { staggerChildren: gap } } }}
    >
      {children}
    </motion.div>
  );
}
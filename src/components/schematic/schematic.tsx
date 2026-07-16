"use client";

import { motion, useReducedMotion } from "motion/react";
import { EASE_OUT_EXPO } from "@/config/motion";
import { Junction } from "./junction";
import { Pulse } from "./pulse";
import { Trace } from "./trace";
import {
  JUNCTIONS,
  LANES,
  SCHEMATIC_LABEL,
  TRUNK_IN,
  TRUNK_OUT,
} from "./lanes";

/**
 * THE SIGNATURE ELEMENT.
 *
 * A schematic of how the work actually flows: a brief fans out into three
 * parallel lanes, they converge, the thing ships. The linework draws itself
 * once on load, then a cyan pulse travels each lane continuously.
 *
 * This is the only place --color-pulse appears and the only looping
 * animation on the site. Everything else stays still. That contrast is the
 * point — spend the boldness here and nowhere else.
 */
export function Schematic() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 780 280"
      className="w-full h-auto"
      fill="none"
      role="img"
      aria-label={SCHEMATIC_LABEL}
    >
      <Trace d={TRUNK_IN} stroke="var(--color-ink)" delay={0.2} reduce={reduce} />

      {LANES.map((lane, i) => (
        <Trace
          key={lane.id}
          d={lane.d}
          stroke="var(--color-line)"
          delay={0.5 + i * 0.12}
          reduce={reduce}
        />
      ))}

      <Trace d={TRUNK_OUT} stroke="var(--color-ink)" delay={1.1} reduce={reduce} />

      {!reduce && LANES.map((lane) => <Pulse key={`pulse-${lane.id}`} lane={lane} />)}

      {JUNCTIONS.map(([cx, cy], i) => (
        <Junction
          key={`junction-${cx}`}
          cx={cx}
          cy={cy}
          delay={0.3 + i * 0.35}
          reduce={reduce}
        />
      ))}

      {/* The only filled node. This is the shipped thing. */}
      <motion.rect
        x={684}
        y={134}
        width={12}
        height={12}
        fill="var(--color-signal)"
        initial={{ scale: reduce ? 1 : 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 1.6, ease: EASE_OUT_EXPO }}
        style={{ transformOrigin: "690px 140px" }}
      />

      <motion.g
        initial={{ opacity: reduce ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        fontFamily="var(--font-mono)"
        fontSize={10}
        letterSpacing="1.6"
        fill="var(--color-graphite)"
      >
        <text x={90} y={172} textAnchor="middle">
          BRIEF
        </text>
        <text x={690} y={172} textAnchor="middle" fill="var(--color-signal)">
          SHIPPED
        </text>
        {LANES.map((lane) => (
          <text key={`label-${lane.id}`} x={lane.labelX} y={lane.labelY}>
            {lane.label.toUpperCase()}
          </text>
        ))}
      </motion.g>
    </svg>
  );
}
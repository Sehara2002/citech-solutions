"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/config/motion";
import type { NavItem } from "@/config/nav";

export function NavLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link
      href={item.href}
      className="annotation transition-colors hover:text-signal"
      style={active ? { color: "var(--color-ink)" } : undefined}
      aria-current={active ? "page" : undefined}
    >
      {item.label}
      {active && (
        <motion.span
          layoutId="nav-marker"
          className="block h-px bg-signal mt-1.5"
          transition={{ duration: 0.4, ease: EASE_OUT_EXPO }}
        />
      )}
    </Link>
  );
}
"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { EASE_OUT_EXPO } from "@/config/motion";
import { NAV } from "@/config/nav";

export function MobileMenu({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="md:hidden fixed inset-x-0 top-16 bottom-0 bg-paper border-t border-line"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: EASE_OUT_EXPO }}
        >
          <ul className="shell py-8 flex flex-col">
            {NAV.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.05, duration: 0.4 }}
                className="border-b border-line"
              >
                <Link href={item.href} className="display-md block py-5">
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
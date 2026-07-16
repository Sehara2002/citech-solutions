"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/config/nav";
import { MobileMenu } from "./mobile-menu";
import { NavLink } from "./nav-link";
import { useScrolled } from "./use-scrolled";
import { Wordmark } from "./wordmark";

export function Nav() {
  const pathname = usePathname();
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  // Close on navigation; lock the body while open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex items-center justify-between h-16 md:h-20">
        <Wordmark />

        <ul className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <li key={item.href}>
              <NavLink item={item} active={pathname.startsWith(item.href)} />
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden annotation"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      <MobileMenu open={open} />
    </header>
  );
}
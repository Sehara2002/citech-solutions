import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";

/** Eyebrow + heading. The eyebrow labels; it never doubles as the heading. */
export function SectionHeading({
  eyebrow,
  title,
  children,
  className,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <FadeIn className={className}>
      <p className="annotation">{eyebrow}</p>
      <h2 className="display-lg mt-4 max-w-2xl">{title}</h2>
      {children}
    </FadeIn>
  );
}
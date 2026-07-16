import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";

/** An empty screen is an invitation to act, not an apology. */
export function EmptyState({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <FadeIn delay={0.1} className="mt-16 border border-line p-10">
      <p className="display-md">{title}</p>
      <p className="lede mt-3 max-w-md">{children}</p>
    </FadeIn>
  );
}
import type { ReactNode } from "react";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "./section";

export function PageHeader({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
  children?: ReactNode;
}) {
  return (
    <Section flush>
      <FadeIn>
        <p className="annotation">{eyebrow}</p>
        <h1 className="display-xl mt-6 max-w-4xl">{title}</h1>
        {lede && <p className="lede mt-8 max-w-xl">{lede}</p>}
      </FadeIn>
      {children}
    </Section>
  );
}
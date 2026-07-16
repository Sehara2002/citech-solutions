import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { PhaseCard } from "@/components/cards/phase-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROCESS } from "@/data/process";
import type { ReactNode } from "react";

export function ProcessGrid({
  eyebrow,
  title,
  tone = "paper",
  children,
}: {
  eyebrow: string;
  title: string;
  tone?: "paper" | "ink";
  children?: ReactNode;
}) {
  return (
    <Section tone={tone}>
      <SectionHeading eyebrow={eyebrow} title={title} />

      <Stagger className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS.map((phase) => (
          <StaggerItem key={phase.step}>
            <PhaseCard phase={phase} tone={tone} />
          </StaggerItem>
        ))}
      </Stagger>

      {children}
    </Section>
  );
}
import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { BeliefCard } from "@/components/cards/belief-card";
import { PageHeader } from "@/components/ui/page-header";
import { Section } from "@/components/ui/section";
import { BELIEFS } from "@/data/beliefs";
import { TEAM } from "@/data/team";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "About",
  description: `${SITE.name} is a software and AI studio in ${SITE.location}. How we work and what we believe about building software.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About" title="A small studio that finishes things.">
        <FadeIn delay={0.15} className="mt-10 grid gap-10 md:grid-cols-2">
          <p className="lede">
            {SITE.name} started in {SITE.founded} in {SITE.location}. We build
            software and AI systems for teams who have been burned by agencies
            that disappeared at handover.
          </p>
          <p className="lede">
            We stay small on purpose. Every project has someone senior on it
            every day, which is the only reason small studios beat big ones.
          </p>
        </FadeIn>
      </PageHeader>

      <Section tone="wash">
        <FadeIn>
          <p className="annotation">What we hold to</p>
        </FadeIn>

        <Stagger className="mt-10 grid gap-px border border-line bg-line sm:grid-cols-2">
          {BELIEFS.map((belief) => (
            <StaggerItem key={belief.claim}>
              <BeliefCard belief={belief} />
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section>
        <FadeIn>
          <p className="annotation">Who&apos;s here</p>
        </FadeIn>

        <Stagger className="mt-10 border-t border-line">
          {TEAM.map((person) => (
            <StaggerItem key={person.name}>
              <div className="grid gap-2 border-b border-line py-8 md:grid-cols-[1fr_1fr_1.5fr] md:gap-10">
                <h2 className="display-md">{person.name}</h2>
                <p className="annotation">{person.role}</p>
                <p className="text-sm text-graphite">{person.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <FadeIn className="mt-12">
          <p className="lede max-w-xl">
            We hire rarely and carefully. If you write good software and
            you&apos;d rather explain your reasoning than defend it,{" "}
            <Link href="/contact" className="link">
              say hello
            </Link>
            .
          </p>
        </FadeIn>
      </Section>
    </>
  );
}
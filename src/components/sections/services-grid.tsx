import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { ServiceCard } from "@/components/cards/service-card";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES } from "@/data/services";

export function ServicesGrid() {
  return (
    <Section>
      <SectionHeading eyebrow="What we do" title="Two tracks. Often one project." />

      <Stagger className="mt-14 grid gap-px bg-line md:grid-cols-3 border border-line">
        {SERVICES.map((service) => (
          <StaggerItem key={service.id}>
            <ServiceCard service={service} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
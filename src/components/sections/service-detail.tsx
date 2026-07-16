import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { Section } from "@/components/ui/section";
import type { Service } from "@/data/services";

export function ServiceDetail({
  service,
  tone,
}: {
  service: Service;
  tone: "paper" | "wash";
}) {
  return (
    <Section id={service.id} tone={tone}>
      <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
        <FadeIn>
          <p className="annotation text-signal">{service.track}</p>
          <h2 className="display-lg mt-4">{service.title}</h2>
        </FadeIn>

        <div>
          <FadeIn delay={0.1}>
            <p className="lede">{service.summary}</p>
          </FadeIn>

          <Stagger className="mt-8 border-t border-line">
            {service.work.map((item) => (
              <StaggerItem key={item}>
                <p className="border-b border-line py-4 text-sm">{item}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </Section>
  );
}
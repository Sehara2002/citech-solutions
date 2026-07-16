import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { CaseStudyLine } from "@/components/cards/case-study-line";
import { Section } from "@/components/ui/section";
import { getFeaturedCaseStudies } from "@/lib/content/case-studies";

export async function FeaturedWork() {
  const studies = await getFeaturedCaseStudies(3);
  if (studies.length === 0) return null;

  return (
    <Section tone="wash">
      <FadeIn>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="annotation">Selected work</p>
            <h2 className="display-lg mt-4">Things that shipped.</h2>
          </div>
          <Link href="/portfolio" className="link annotation shrink-0">
            All work
          </Link>
        </div>
      </FadeIn>

      <Stagger className="mt-14 border-t border-line">
        {studies.map((study) => (
          <StaggerItem key={study.slug}>
            <CaseStudyLine study={study} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
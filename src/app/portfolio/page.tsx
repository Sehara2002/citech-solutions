import type { Metadata } from "next";
import { Stagger } from "@/components/motion/stagger";
import { StaggerItem } from "@/components/motion/stagger-item";
import { CaseStudyRow } from "@/components/cards/case-study-row";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { getCaseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies from software and AI projects — what the problem was, what we built, and what it did.",
};

export default async function PortfolioPage() {
  const studies = await getCaseStudies();

  return (
    <PageHeader eyebrow="Work" title="Fewer projects, finished properly.">
      {studies.length === 0 ? (
        <EmptyState title="No case studies published yet.">
          Add an .mdx file to <code>src/content/portfolio</code> and it appears
          here.
        </EmptyState>
      ) : (
        <Stagger className="mt-16 border-t border-line">
          {studies.map((study) => (
            <StaggerItem key={study.slug}>
              <CaseStudyRow study={study} />
            </StaggerItem>
          ))}
        </Stagger>
      )}
    </PageHeader>
  );
}
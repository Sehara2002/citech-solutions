import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { ServiceDetail } from "@/components/sections/service-detail";
import { ProcessGrid } from "@/components/sections/process-grid";
import { PageHeader } from "@/components/ui/page-header";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product engineering, applied AI systems, and technical advisory. What we build and how the engagement works.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="What we build, stated plainly."
        lede="Two tracks. Most projects touch both, and we'll tell you early if yours only needs one."
      />

      {SERVICES.map((service, i) => (
        <ServiceDetail
          key={service.id}
          service={service}
          tone={i % 2 === 1 ? "wash" : "paper"}
        />
      ))}

      <ProcessGrid
        eyebrow="Engagement"
        title="How a project actually runs."
        tone="ink"
      >
        <FadeIn className="mt-14">
          <Link href="/contact" className="btn btn-ghost">
            Book a scoping week
          </Link>
        </FadeIn>
      </ProcessGrid>
    </>
  );
}
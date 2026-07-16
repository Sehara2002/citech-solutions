import Link from "next/link";
import type { CaseStudy } from "@/lib/content/types";

/** The compact form used on the home page. */
export function CaseStudyLine({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group block border-b border-line py-8 md:py-10"
    >
      <div className="grid gap-4 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10">
        <p className="annotation md:w-24">{study.year}</p>
        <div>
          <h3 className="display-md transition-colors group-hover:text-signal">
            {study.title}
          </h3>
          <p className="mt-2 max-w-xl text-sm text-graphite">{study.summary}</p>
        </div>
        <p className="annotation md:text-right">{study.discipline}</p>
      </div>
    </Link>
  );
}
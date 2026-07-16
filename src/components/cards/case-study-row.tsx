import Link from "next/link";
import { TagList } from "@/components/ui/tag-list";
import type { CaseStudy } from "@/lib/content/types";

export function CaseStudyRow({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/portfolio/${study.slug}`}
      className="group block border-b border-line py-10"
    >
      <div className="grid gap-5 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <p className="annotation">
            {study.year} &nbsp;/&nbsp; {study.discipline}
          </p>
          <h2 className="display-lg mt-3 transition-colors group-hover:text-signal">
            {study.title}
          </h2>
          <p className="annotation mt-3">{study.client}</p>
        </div>

        <div>
          <p className="lede">{study.summary}</p>
          <p className="mt-5 text-sm font-medium">{study.outcome}</p>
          <div className="mt-5">
            <TagList items={study.stack} />
          </div>
        </div>
      </div>
    </Link>
  );
}
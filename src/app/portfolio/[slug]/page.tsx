import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { FadeIn } from "@/components/motion/fade-in";
import { TagList } from "@/components/ui/tag-list";
import { Section } from "@/components/ui/section";
import { getCaseStudies, getCaseStudy } from "@/lib/content/case-studies";
import { formatDate } from "@/lib/format";

type Params = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const studies = await getCaseStudies();
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params; // params is async in Next 16
  const study = await getCaseStudy(slug);
  if (!study) return {};

  return {
    title: study.title,
    description: study.summary,
    openGraph: {
      title: study.title,
      description: study.summary,
      images: [
        `/api/og?title=${encodeURIComponent(study.title)}&kind=Case+study`,
      ],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  if (!study) notFound();

  const facts: Array<[string, string]> = [
    ["Client", study.client],
    ["Year", study.year],
    ["Discipline", study.discipline],
    ["Published", formatDate(study.publishedAt)],
  ];

  return (
    <>
      <Section flush>
        <FadeIn>
          <Link href="/portfolio" className="link annotation">
            &larr; All work
          </Link>
          <h1 className="display-xl mt-8 max-w-4xl">{study.title}</h1>
          <p className="lede mt-6 max-w-2xl">{study.summary}</p>
        </FadeIn>
      </Section>

      <Section tone="wash">
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="annotation">{label}</dt>
              <dd className="mt-2 text-sm font-medium">{value}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 border-t border-line pt-8">
          <p className="annotation">Stack</p>
          <div className="mt-3">
            <TagList items={study.stack} />
          </div>
        </div>

        <p className="display-md mt-10 max-w-2xl text-signal">
          {study.outcome}
        </p>
      </Section>

      <Section>
        <article className="prose">
          <MDXRemote source={study.body} />
        </article>
      </Section>
    </>
  );
}
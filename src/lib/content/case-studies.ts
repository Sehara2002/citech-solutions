import { byNewest, readCollection } from "./read-collection";
import type { CaseStudy } from "./types";

export async function getCaseStudies(): Promise<CaseStudy[]> {
  const items = await readCollection<CaseStudy>("portfolio");
  return items.sort(byNewest);
}

export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  const items = await getCaseStudies();
  return items.find((item) => item.slug === slug) ?? null;
}

export async function getFeaturedCaseStudies(limit = 3): Promise<CaseStudy[]> {
  const items = await getCaseStudies();
  const featured = items.filter((item) => item.featured);
  return (featured.length ? featured : items).slice(0, limit);
}
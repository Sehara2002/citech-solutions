/**
 * Content types. Deliberately shaped like database rows: flat scalars,
 * `slug` as primary key, `publishedAt` as an ISO string.
 *
 * When you move to Postgres, the loaders below become queries and every
 * page consuming them stays untouched. That's the whole migration.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  summary: string;
  discipline: "Software" | "AI" | "Software + AI";
  year: string;
  stack: string[];
  outcome: string;
  publishedAt: string;
  featured?: boolean;
  body: string;
};

export type Post = {
  slug: string;
  title: string;
  summary: string;
  author: string;
  readingMinutes: number;
  publishedAt: string;
  body: string;
};
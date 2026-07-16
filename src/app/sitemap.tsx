import type { MetadataRoute } from "next";
import { getCaseStudies } from "@/lib/content/case-studies";
import { getPosts } from "@/lib/content/posts";
import { SITE } from "@/config/site";

const STATIC_ROUTES = [
  { path: "", priority: 1 },
  { path: "/services", priority: 0.9 },
  { path: "/portfolio", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/about", priority: 0.7 },
  { path: "/blog", priority: 0.7 },
  { path: "/privacy", priority: 0.2 },
  { path: "/terms", priority: 0.2 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [studies, posts] = await Promise.all([getCaseStudies(), getPosts()]);

  return [
    ...STATIC_ROUTES.map((route) => ({
      url: `${SITE.url}${route.path}`,
      lastModified: new Date(),
      priority: route.priority,
    })),
    ...studies.map((study) => ({
      url: `${SITE.url}/portfolio/${study.slug}`,
      lastModified: new Date(study.publishedAt),
      priority: 0.6,
    })),
    ...posts.map((post) => ({
      url: `${SITE.url}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      priority: 0.5,
    })),
  ];
}
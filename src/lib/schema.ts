import { SITE, SOCIALS } from "@/config/site";

/** JSON-LD. Google reads this; it's how you show up as an entity. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phone,
    foundingDate: SITE.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Negombo",
      addressCountry: "LK",
    },
    sameAs: Object.values(SOCIALS),
  };
}

export function articleSchema(post: {
  title: string;
  summary: string;
  publishedAt: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.publishedAt,
    author: { "@type": "Person", name: post.author },
    publisher: { "@type": "Organization", name: SITE.legalName },
  };
}
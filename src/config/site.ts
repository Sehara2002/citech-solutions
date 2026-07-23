/**
 * Company identity. Single source of truth — change it here and it
 * propagates to nav, footer, metadata, OG cards, JSON-LD, and sitemap.
 */
export const SITE = {
  name: "CITECH Software Solutions",
  legalName: "CITECH Software Solutions (Pvt) Ltd",
  tagline: "Software and AI systems, drawn before they're built.",
  description:
    "We design and ship production software and AI systems for teams who need the thing to actually work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://citech.live",
  email: "contact@citech.live",
  phone: "+94 71 088 8504",
  location: "Gampaha, Sri Lanka",
  founded: "2026",
  hours: "Mon–Fri, 09:00–18:00 (UTC+5:30)",
} as const;

export const SOCIALS = {
  linkedin: "https://linkedin.com/company/citech",
  github: "https://github.com/CitechSoftwareSolutions",
  instagram: "https://instagram.com/citech",
} as const;
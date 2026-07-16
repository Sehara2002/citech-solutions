import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import { SkipLink } from "@/components/layout/skip-link";
import { JsonLd } from "@/components/layout/json-ld";
import { SmoothScroll } from "@/components/motion/smooth-scroll";
import { SITE } from "@/config/site";
import { organizationSchema } from "@/lib/schema";
import { fontVariables } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: { type: "website", siteName: SITE.name, locale: "en_US" },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={fontVariables}>
      <body>
        <SmoothScroll />
        <SkipLink />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd data={organizationSchema()} />
      </body>
    </html>
  );
}
import Link from "next/link";
import { LEGAL_NAV, NAV } from "@/config/nav";
import { SITE, SOCIALS } from "@/config/site";

export function Footer() {
  return (
    <footer className="band band-ink">
      <div className="shell">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="display-md">{SITE.tagline}</p>
            <Link href="/contact" className="btn btn-ghost mt-8">
              Start a project
            </Link>
          </div>

          <div>
            <p className="annotation mb-4">Pages</p>
            <ul className="space-y-2.5">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="annotation mb-4">Reach us</p>
            <ul className="space-y-2.5 text-sm text-paper/70">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-paper">{SITE.email}</a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="hover:text-paper">{SITE.phone}</a>
              </li>
              <li>{SITE.location}</li>
            </ul>
            <ul className="mt-5 flex gap-4">
              {Object.entries(SOCIALS).map(([key, href]) => (
                <li key={key}>
                  <a href={href} target="_blank" rel="noreferrer" className="annotation hover:text-paper">{key}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-paper/15 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="annotation">
            &copy; {new Date().getFullYear()} {SITE.legalName}
          </p>
          <ul className="flex gap-6">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="annotation hover:text-paper">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
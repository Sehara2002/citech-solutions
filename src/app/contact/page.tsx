import type { Metadata } from "next";
import { ContactForm } from "@/components/forms/contact-form";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";
import { SITE } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Tell us what you're building. ${SITE.name} replies within one working day.`,
};

const DIRECT: Array<{ label: string; value: string; href?: string }> = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  {
    label: "Phone",
    value: SITE.phone,
    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
  },
  { label: "Where", value: SITE.location },
  { label: "Hours", value: SITE.hours },
];

export default function ContactPage() {
  return (
    <Section flush>
      <FadeIn>
        <p className="annotation">Contact</p>
        <h1 className="display-xl mt-6 max-w-3xl">
          Tell us what you&apos;re building.
        </h1>
      </FadeIn>

      <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1.4fr] md:gap-20">
        <FadeIn delay={0.1}>
          <p className="lede">
            Send the shape of the problem. We&apos;ll come back within one
            working day with either a question or a plan.
          </p>

          <dl className="mt-10 border-t border-line">
            {DIRECT.map((item) => (
              <div
                key={item.label}
                className="flex justify-between gap-4 border-b border-line py-4"
              >
                <dt className="annotation">{item.label}</dt>
                <dd className="text-sm">
                  {item.href ? (
                    <a href={item.href} className="link">{item.value}</a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </FadeIn>

        <FadeIn delay={0.2}>
          <ContactForm />
        </FadeIn>
      </div>
    </Section>
  );
}
import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { Section } from "@/components/ui/section";

export function Cta() {
  return (
    <Section>
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="display-lg">
          Tell us what&apos;s broken, or what doesn&apos;t exist yet.
        </h2>
        <p className="lede mt-5">
          First reply within one working day. The scoping week is fixed fee, and
          you keep the plan either way.
        </p>
        <Link href="/contact" className="btn btn-primary mt-8">
          Start a project
        </Link>
      </FadeIn>
    </Section>
  );
}
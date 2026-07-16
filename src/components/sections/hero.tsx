import Link from "next/link";
import { FadeIn } from "@/components/motion/fade-in";
import { TextSplit } from "@/components/motion/text-split";
import { Schematic } from "@/components/schematic/schematic";
import { SITE } from "@/config/site";

/**
 * The thesis: we draw the system before we build it. So the hero IS the
 * drawing, and the headline sits under it the way a caption would.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 blueprint opacity-60" aria-hidden />

      <div className="shell relative pt-16 pb-20 md:pt-24 md:pb-28">
        {/* <p className="annotation mb-10 md:mb-14">
          {SITE.location} &nbsp;/&nbsp; Est. {SITE.founded}
        </p> */}

        <div className="mx-auto max-w-3xl">
          <Schematic />
        </div>

        <div className="mt-12 md:mt-16 grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <h1 className="display-xl">
            <TextSplit text="Drawn before" delay={0.9} />
            <br />
            <TextSplit text="it's built." delay={1.05} />
          </h1>

          <FadeIn delay={1.4}>
            <p className="lede">
              We&apos;re a software and AI studio. Most projects fail in the
              decisions made before anyone writes code, so that&apos;s where we
              start.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Start a project
              </Link>
              <Link href="/portfolio" className="btn btn-ghost">
                See the work
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
import { Hero } from "@/components/sections/hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedWork } from "@/components/sections/featured-work";
import { ProcessGrid } from "@/components/sections/process-grid";
import { Cta } from "@/components/sections/cta";

/** Pages compose sections. No layout logic lives here. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <FeaturedWork />
      <ProcessGrid eyebrow="How it goes" title="Four steps, in order, every time." />
      <Cta />
    </>
  );
}
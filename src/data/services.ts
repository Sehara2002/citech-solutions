export type Service = {
  id: string;
  track: "Software" | "AI" | "Both";
  title: string;
  summary: string;
  work: string[];
};

/**
 * Two tracks, stated plainly. Clients self-select here, so the split has
 * to be legible in one read — no invented sub-brands.
 */
export const SERVICES: Service[] = [
  {
    id: "software",
    track: "Software",
    title: "Product engineering",
    summary:
      "Web and mobile products built to be handed over, not babysat. Typed end to end, tested where it counts, deployed on infrastructure you can afford at your current size.",
    work: [
      "Web applications (Next.js, TypeScript, Postgres)",
      "APIs and backend services",
      "Legacy rescue and re-platforming",
      "Cloud infrastructure and CI/CD",
    ],
  },
  {
    id: "ai",
    track: "AI",
    title: "Applied AI systems",
    summary:
      "Language models wired into real workflows, with the evaluation harness built first so you can tell whether it's getting better or just getting different.",
    work: [
      "Retrieval systems over your own documents",
      "Agents and workflow automation",
      "Model evaluation and regression suites",
      "Fine-tuning where it beats prompting, and only then",
    ],
  },
  {
    id: "advisory",
    track: "Both",
    title: "Technical advisory",
    summary:
      "A second opinion before you commit. Architecture reviews, build-versus-buy calls, and honest answers about whether AI is the right tool for the problem you described.",
    work: [
      "Architecture and code review",
      "AI feasibility assessment",
      "Team and hiring guidance",
      "Vendor and stack selection",
    ],
  },
];
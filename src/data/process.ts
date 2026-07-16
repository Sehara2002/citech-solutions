export type Phase = { step: string; title: string; detail: string };

/**
 * A real sequence, so it gets numbers. Nothing else on the site does —
 * numbering something that isn't ordered is decoration.
 */
export const PROCESS: Phase[] = [
  {
    step: "01",
    title: "Scope",
    detail:
      "A week, fixed fee. We map the problem, the constraints, and what success actually looks like. You leave with a written plan whether or not you hire us.",
  },
  {
    step: "02",
    title: "Draw",
    detail:
      "Architecture, data model, interfaces. Decisions get made on paper where they're cheap to change, and written down where you can argue with them.",
  },
  {
    step: "03",
    title: "Build",
    detail:
      "Two-week cycles, deployed at the end of each one. You see working software throughout, not a demo at the finish line.",
  },
  {
    step: "04",
    title: "Hand over",
    detail:
      "Documentation, runbooks, and a session with your team. The goal is that you don't need us. If you want us anyway, that's a different contract.",
  },
];
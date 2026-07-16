export type Belief = { claim: string; detail: string };

export const BELIEFS: Belief[] = [
  {
    claim: "The plan is the product, early on.",
    detail:
      "Code is cheap to write and expensive to unwrite. We spend the first week making decisions on paper, where changing your mind costs nothing.",
  },
  {
    claim: "AI is a tool, not a strategy.",
    detail:
      "Sometimes the honest answer is that a database query and a form will beat a model. We'll say so, even though the model would bill more.",
  },
  {
    claim: "If you can't measure it, you're guessing.",
    detail:
      "Every AI system we build gets an evaluation harness before it gets a demo. Otherwise 'better' is just a feeling.",
  },
  {
    claim: "You should be able to fire us.",
    detail:
      "Documentation, runbooks, and a handover session ship with the work. Lock-in is a business model, not a service.",
  },
];
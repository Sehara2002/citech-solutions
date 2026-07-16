/**
 * Lane geometry, defined once. Both the drawn <path> and the pulse's CSS
 * offset-path read from this, so the dot can never drift off the line.
 */
export type Lane = {
  id: string;
  d: string;
  label: string;
  labelX: number;
  labelY: number;
  duration: string;
  delay: string;
};

export const LANES: Lane[] = [
  {
    id: "model",
    d: "M 200 140 V 82 q 0 -12 12 -12 H 588 q 12 0 12 12 V 140",
    label: "Model layer",
    labelX: 214,
    labelY: 56,
    duration: "4.2s",
    delay: "0s",
  },
  {
    id: "app",
    d: "M 200 140 H 600",
    label: "Application",
    labelX: 214,
    labelY: 128,
    duration: "3.4s",
    delay: "0.5s",
  },
  {
    id: "data",
    d: "M 200 140 V 198 q 0 12 12 12 H 588 q 12 0 12 -12 V 140",
    label: "Data & evals",
    labelX: 214,
    labelY: 234,
    duration: "4.6s",
    delay: "1s",
  },
];

export const TRUNK_IN = "M 90 140 H 200";
export const TRUNK_OUT = "M 600 140 H 690";

export const JUNCTIONS: Array<[number, number]> = [
  [90, 140],
  [200, 140],
  [600, 140],
];

export const SCHEMATIC_LABEL =
  "A schematic: a brief fans out into a model layer, an application, and data and evaluations, which converge and ship.";
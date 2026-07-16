import type { Phase } from "@/data/process";

export function PhaseCard({
  phase,
  tone = "paper",
}: {
  phase: Phase;
  tone?: "paper" | "ink";
}) {
  const onInk = tone === "ink";

  return (
    <div>
      <div className={`h-px w-full ${onInk ? "bg-pulse" : "bg-signal"}`} />
      <p
        className="annotation mt-4"
        style={{ color: onInk ? "var(--color-pulse)" : "var(--color-signal)" }}
      >
        {phase.step}
      </p>
      <h3 className="display-md mt-3">{phase.title}</h3>
      <p
        className={`mt-3 text-sm leading-relaxed ${
          onInk ? "text-paper/70" : "text-graphite"
        }`}
      >
        {phase.detail}
      </p>
    </div>
  );
}
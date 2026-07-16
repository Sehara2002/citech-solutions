import type { Belief } from "@/data/beliefs";

export function BeliefCard({ belief }: { belief: Belief }) {
  return (
    <div className="bg-paper p-8 md:p-10 h-full">
      <h2 className="display-md">{belief.claim}</h2>
      <p className="mt-4 text-sm leading-relaxed text-graphite">
        {belief.detail}
      </p>
    </div>
  );
}
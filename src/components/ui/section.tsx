import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** paper (default) | wash (faint blue band) | ink (inverted) */
  tone?: "paper" | "wash" | "ink";
  /** Drop the top hairline. Use on the first section of a page. */
  flush?: boolean;
  id?: string;
  className?: string;
};

const TONE = {
  paper: "",
  wash: "band-wash",
  ink: "band-ink",
} as const;

/** Every section on the site is one of these. Keeps the rhythm honest. */
export function Section({ children, tone = "paper", flush, id, className }: Props) {
  return (
    <section
      id={id}
      className={[
        "band",
        TONE[tone],
        flush ? "border-t-0" : "",
        id ? "scroll-mt-24" : "",
        className ?? "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="shell">{children}</div>
    </section>
  );
}
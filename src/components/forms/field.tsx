import type { ReactNode } from "react";
import { FieldError } from "./field-error";

export function Field({
  name,
  label,
  optional,
  errors,
  children,
}: {
  name: string;
  label: string;
  optional?: boolean;
  errors?: string[];
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={name} className="annotation">
        {label}
        {optional && (
          <span className="normal-case tracking-normal"> (optional)</span>
        )}
      </label>
      {children}
      <FieldError errors={errors} />
    </div>
  );
}
"use client";

import { useFormStatus } from "react-dom";

/** An action keeps its name through the flow: "Send message" → "Sending…". */
export function SubmitButton({ label = "Send message" }: { label?: string }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" className="btn btn-primary" disabled={pending}>
      {pending ? "Sending…" : label}
    </button>
  );
}
"use client";

import { useActionState } from "react";
import { submitContact } from "@/lib/contact/action";
import type { ContactState } from "@/lib/contact/schema";
import { BUDGETS } from "@/data/budgets";
import { ContactSuccess } from "./contact-success";
import { Field } from "./field";
import { Honeypot } from "./honeypot";
import { SubmitButton } from "./submit-button";

export function ContactForm() {
  const [state, action] = useActionState<ContactState, FormData>(submitContact, {
    status: "idle",
  });

  if (state.status === "sent") return <ContactSuccess />;

  return (
    <form action={action} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Name" errors={state.errors?.name}>
          <input id="name" name="name" required className="field mt-2" />
        </Field>

        <Field name="email" label="Email" errors={state.errors?.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field mt-2"
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="company" label="Company" optional>
          <input id="company" name="company" className="field mt-2" />
        </Field>

        <Field name="budget" label="Budget">
          <select id="budget" name="budget" className="field mt-2" defaultValue="">
            <option value="">Select a range</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field
        name="message"
        label="What are you trying to build?"
        errors={state.errors?.message}
      >
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className="field mt-2 resize-y"
          placeholder="The problem, who it's for, and any deadline you're working to."
        />
      </Field>

      <Honeypot />

      {state.status === "error" && state.message && (
        <p className="border-l-2 border-signal pl-3 text-sm text-signal">
          {state.message}
        </p>
      )}

      <SubmitButton />
    </form>
  );
}
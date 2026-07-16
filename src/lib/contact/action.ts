"use server";

import { contactSchema, type ContactState } from "./schema";
import { isRateLimited, markSeen } from "./rate-limit";
import { sendContactEmail } from "./send-email";

/**
 * No database today. To add one: parse, INSERT, then send. One line,
 * in one place — nothing else in the form changes.
 */
export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = contactSchema.safeParse(Object.fromEntries(formData));

  if (!parsed.success) {
    return {
      status: "error",
      message: "Check the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  // Honeypot tripped — accept silently so the bot learns nothing.
  if (data.website) return { status: "sent" };

  if (isRateLimited(data.email)) {
    return {
      status: "error",
      message: "That message just went through. Give it a minute.",
    };
  }

  try {
    await sendContactEmail(data);
    markSeen(data.email);
    return { status: "sent" };
  } catch (error) {
    console.error("[contact] send failed", error);
    // Errors say what happened and how to get unstuck. They don't apologise.
    return {
      status: "error",
      message: "The message didn't send. Email us directly and we'll pick it up.",
    };
  }
}
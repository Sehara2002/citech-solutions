import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Enter your name.").max(80),
  email: z.string().email("Enter an email we can reply to."),
  company: z.string().max(80).optional(),
  budget: z.string().max(40).optional(),
  message: z
    .string()
    .min(20, "Tell us a bit more — 20 characters minimum.")
    .max(4000),
  /** Honeypot. Real people never fill this; bots almost always do. */
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactState = {
  status: "idle" | "sent" | "error";
  message?: string;
  errors?: Record<string, string[] | undefined>;
};
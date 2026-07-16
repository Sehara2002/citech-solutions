import { Resend } from "resend";
import type { ContactInput } from "./schema";

/** The only place Resend is touched. */
export async function sendContactEmail(data: ContactInput) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to: process.env.CONTACT_TO_EMAIL!,
    replyTo: data.email,
    subject: `New enquiry — ${data.name}${data.company ? ` (${data.company})` : ""}`,
    text: [
      `Name:    ${data.name}`,
      `Email:   ${data.email}`,
      `Company: ${data.company || "—"}`,
      `Budget:  ${data.budget || "—"}`,
      "",
      data.message,
    ].join("\n"),
  });
}
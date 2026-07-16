import nodemailer from "nodemailer";
import type { ContactInput } from "./schema";

/**
 * The only place SMTP is touched. Module scope on purpose — the transporter
 * gets reused across warm invocations instead of reconnecting every time.
 */
const port = Number(process.env.SMTP_PORT ?? 465);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port,
  secure: port === 465, // 465 = implicit TLS. 587 = STARTTLS, so false.
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendContactEmail(data: ContactInput) {
  await transporter.sendMail({
    /* MUST be the authenticated mailbox. Hostinger rejects any other From
       address outright — you can't send as noreply@ from a contact@ box. */
    from: `"CITECH website" <${process.env.SMTP_USER}>`,
    to: process.env.CONTACT_TO_EMAIL,
    /* So hitting Reply in your inbox goes to the visitor, not to yourself. */
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
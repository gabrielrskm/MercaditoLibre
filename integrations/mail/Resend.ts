import { Resend } from 'resend';
const RESEND_TOKEN = Deno.env.get('RESEND_TOKEN');
const RESEND_FROM_EMAIL = Deno.env.get('RESEND_FROM_EMAIL');

const resend = new Resend(RESEND_TOKEN);

export default async function sendEmail(email: string, subject: string, htmlContent: string) {
  await resend.emails.send({
    from: RESEND_FROM_EMAIL!,
    to: [email],
    subject: subject,
    html: htmlContent,
  });
}
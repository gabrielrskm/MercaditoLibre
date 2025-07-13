import { Resend } from 'resend';
const RESEND_TOKEN = Deno.env.get('RESEND_TOKEN');
const resend = new Resend(RESEND_TOKEN);

export default async function sendEmail(email: string, subject: string, htmlContent: string) {
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [email],
    subject: subject,
    html: htmlContent,
  });
}
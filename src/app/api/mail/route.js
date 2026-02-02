import  EmailTemplate  from "../../email/email-template.jsx";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { firstName, lastName, email, phoneNumber, country, message } =
    await request.json();

  const { data, error } = await resend.emails.send({
    from: "onboarding@resend.dev",
    to: ["info@antwi-boasiako.com"],
    subject: "New Contact Form Submission",
    react: EmailTemplate({firstName,
        lastName,
        email,
        phoneNumber,
        country,
        message, }),
  });

  if (error) {
    return Response.json(error);
  }

  return Response.json({ message: "Email sent successfully" });
}

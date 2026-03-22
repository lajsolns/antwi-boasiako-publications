import  EmailTemplate  from "../../email/email-template.jsx";
import { Resend } from "resend";
import { NextResponse } from "next/server";

// Only initialize Resend if API key is available
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request) {
  // Return a mock response if Resend is not configured (for build time)
  if (!resend || !process.env.RESEND_API_KEY) {
    return NextResponse.json({ 
      success: false, 
      error: 'Email service not configured',
      details: 'RESEND_API_KEY environment variable is missing'
    }, { status: 503 });
  }

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

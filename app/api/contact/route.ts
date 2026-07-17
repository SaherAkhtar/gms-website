import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  console.log("✅ API ROUTE HIT");

  try {
    const { name, email, phone, message } = await req.json();

    console.log("Received:", { name, email, phone, message });

    const result = await resend.emails.send({
      from: "GMS Website <onboarding@resend.dev>",
      to: "getmigrationstudy@gmail.com",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("RESEND RESPONSE:", result);

    return NextResponse.json(result);
  } catch (err) {
    console.error("FULL ERROR:", err);

    return NextResponse.json(
      {
        success: false,
        error: String(err),
      },
      { status: 500 }
    );
  }
}
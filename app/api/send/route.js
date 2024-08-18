import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: subject,
      html: `
        <div>
          <h1>${subject}</h1><br />
          <p>Thank you for contacting me!</p><br/>
          <p>Message submitted:</p>
          <p>${message}</p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully", info });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

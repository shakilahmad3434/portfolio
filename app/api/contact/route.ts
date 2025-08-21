import nodemailer from "nodemailer";
import { NextRequest, NextResponse as res } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message, mobile } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 10000,
  });

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
    to: process.env.SMTP_EMAIL,
    replyTo: email,
    subject: `📩 New Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; border-radius: 10px; overflow: hidden;">
        
        <div style="background: #0d6efd; color: white; padding: 15px; text-align: center;">
          <h2 style="margin: 0;">📬 New Contact Request</h2>
        </div>
        
        <div style="padding: 20px; background: #fafafa;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile || "Not Provided"}</p>
          <p style="margin-top: 20px;"><strong>Message:</strong></p>
          <p style="background: #fff; padding: 15px; border-radius: 5px; border: 1px solid #ddd;">
            ${message}
          </p>
        </div>
        
        <div style="background: #f1f1f1; padding: 10px; text-align: center; font-size: 12px; color: #555;">
          This message was sent via your <strong>Portfolio Contact Form</strong>.
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    return res.json({ success: false, error }, { status: 500 });
  }
}

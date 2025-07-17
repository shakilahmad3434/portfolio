import nodemailer from 'nodemailer' 
import { NextRequest, NextResponse as res } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
    connectionTimeout: 10000
  })

  const mailOptions = {
    from: `"Portfolio Contact" <${process.env.SMTP_EMAIL}>`,
    to: process.env.SMTP_EMAIL,
    replyTo: email,
    subject: `Message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.json({ message: "message send successfully!" })
  } catch (error) {
    console.error(error)
    return res.json({ success: false, error }, { status: 500 })
  }
}

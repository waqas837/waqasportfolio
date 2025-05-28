"use server";

import nodemailer from "nodemailer";

export async function sendContactEmail(formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  // Validate form data
  if (!name || !email || !subject || !message) {
    return { error: "All fields are required" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: {
        name: `${name} (Website Contact)`,
        address: process.env.GMAIL_USER,
      },
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New Message: ${subject}`,
      text: message,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">New Client Email From My Muhammad waqas</h2>
          <div style="background: #F9FAFB; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="margin-top: 20px; color: #6B7280; font-size: 14px;">
            This message was sent from your website contact form.
          </p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error("Email send error:", error);
    return { error: "Failed to send message. Please try again later." };
  }
}

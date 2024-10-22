"use server";

import { transporter, options } from "@/lib/nodemailer";

export async function sendMail(formData: FormData) {
  try {
    // form data
    const data = {
      name: formData.get("name")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      subject: formData.get("subject")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
    };

    // send email
    await transporter.sendMail({
      ...options,

      to: process.env.EMAIL,
      subject: data.subject,
      html: `
      <p>Reply to: ${data.email}</p>
      <br>
      <h2>Mensagem enviada por ${data.name}</h2>
      <p>${data.message}</p>
      `,
    });

    // send confirmation email
    await transporter.sendMail({
      ...options,

      to: data.email,
      subject: "Confirmation: " + data.subject,
      html: `
      <p>Hi ${data.name},</p>
      <p>Thank you for reaching out. I have received your message and will get back to you shortly.</p>
      <br>
      <h2>Your Message:</h2>
      <p>${data.message}</p>
      `,
    });
  } catch (error) {
    console.error("Error sending email", error);
  }
}

"use server";

import { transporter, options } from "@/lib/nodemailer";

export async function sendMail(formData: FormData) {
  try {
    await transporter.sendMail({
      ...options,
      subject: formData.get("subject") as string,
      html: `<p>Reply to: ${formData.get("email")}</p> <br> <h2>Mensagem enviada por ${formData.get("name")}</h2> <p>${formData.get("message")}</p>`,
    });
  } catch (error) {
    console.error("Error sending email", error);
  }
}

import nodemailer from "nodemailer";

export function getMailSender() {
  return process.env.EMAIL;
}

export function getMailTransporter() {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  if (!email || !password) {
    throw new Error("Mail service credentials are not configured.");
  }

  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });
}

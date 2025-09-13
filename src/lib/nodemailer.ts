import nodemailer from "nodemailer";

const EMAIL = process.env.EMAIL;
if (!EMAIL) throw new Error("EMAIL not defined");

const PASSWORD = process.env.PASSWORD;
if (!PASSWORD) throw new Error("PASSWORD not defined");

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: EMAIL,
    pass: PASSWORD,
  },
});

export const options = {
  from: EMAIL,
};

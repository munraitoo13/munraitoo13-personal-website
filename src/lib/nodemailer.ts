import nodemailer from "nodemailer";

const email = process.env.EMAIL;
const password = process.env.PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const options = {
  from: email,
  to: email,
};

"use client";

import { sendMail } from "@/actions/sendMail";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";
import { useTheme } from "@/hooks/useTheme";
import { useCaptcha } from "@/hooks/useCaptcha";

export function ContactForm() {
  const theme = useTheme();
  const [pending, setPending] = useState(false);
  const { captchaToken, setCaptchaToken, resetCaptcha, captchaRef } =
    useCaptcha();
  const formRef = useRef<HTMLFormElement>(null);

  // translations
  const t = useTranslations("Contact");
  const tt = useTranslations("Toastify");

  // handle form submit
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // prevent default form behavior
    event.preventDefault();

    // create formData
    const formData = new FormData(event.currentTarget);
    formData.append("captchaToken", captchaToken || "");

    // validate empty fields
    if (Array.from(formData.values()).some((value) => !value)) {
      toast.error(tt("emptyFields"));
      return;
    }

    // validate email
    const email = formData.get("email") as string;
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email)) {
      toast.error(tt("invalidEmail"));
      return;
    }

    // send email
    try {
      setPending(true);
      await sendMail(formData);
      toast.success(tt("messageSent"));
    } catch (error) {
      console.error("Error sending email", error);
      toast.error(tt("messageError"));
    }

    // reset form and captcha
    formRef.current?.reset();
    resetCaptcha();
    setPending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* name */}
      <input
        type="text"
        id="name"
        name="name"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("name")}
        maxLength={64}
      />

      {/* email */}
      <input
        type="email"
        id="email"
        name="email"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("email")}
        maxLength={255}
      />

      {/* subject */}
      <input
        type="text"
        id="subject"
        name="subject"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("subject")}
        maxLength={64}
      />

      {/* message */}
      <textarea
        id="message"
        name="message"
        className="h-48 resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("message")}
      />

      {/* send and captcha */}
      <div className="flex flex-col items-center gap-3 self-center md:flex-row md:self-start">
        {/* send */}
        <button
          type="submit"
          disabled={pending}
          className={`${pending ? "button-disabled" : "button"} order-2 md:order-1`}
        >
          {pending ? t("sending") : t("send")}
        </button>

        {/* captcha */}
        <ReCAPTCHA
          theme={theme as unknown as "light" | "dark"}
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
          onChange={(token) => setCaptchaToken(token)}
          ref={captchaRef}
          className="order-1 md:order-2"
        />
      </div>
    </form>
  );
}

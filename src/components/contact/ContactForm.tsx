"use client";

import { sendMail } from "@/actions/sendMail";
import { useCaptcha } from "@/hooks/useCaptcha";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const { captchaToken, setCaptchaToken, resetCaptcha, captchaRef } =
    useCaptcha();
  const formRef = useRef<HTMLFormElement>(null);

  const PUBLIC_SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;
  if (!PUBLIC_SITE_KEY) throw new Error("Missing reCAPTCHA site key");

  const t = useTranslations("Contact");
  const tt = useTranslations("Toastify");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const toastId = toast.loading(tt("sending"));

    const formData = new FormData(event.currentTarget);
    formData.append("captchaToken", captchaToken || "");

    if (Array.from(formData.values()).some((value) => !value)) {
      toast.update(toastId, {
        render: tt("emptyFields"),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });

      return;
    }

    const email = formData.get("email") as string;
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email)) {
      toast.update(toastId, {
        render: tt("invalidEmail"),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });

      return;
    }

    try {
      const { success } = await sendMail(formData);
      setPending(true);

      toast.update(toastId, {
        render: success ? tt("messageSent") : tt("messageError"),
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      success && formRef.current?.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast.update(toastId, {
        render: tt("messageError"),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    } finally {
      setPending(false);
      resetCaptcha();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="form layout">
      {/* name */}
      <input
        type="text"
        id="name"
        name="name"
        className="form--input"
        placeholder={t("name")}
        maxLength={64}
      />

      {/* email */}
      <input
        type="email"
        id="email"
        name="email"
        className="form--input"
        placeholder={t("email")}
        maxLength={255}
      />

      {/* subject */}
      <input
        type="text"
        id="subject"
        name="subject"
        className="form--input"
        placeholder={t("subject")}
        maxLength={64}
      />

      {/* message */}
      <textarea
        id="message"
        name="message"
        className="form--input h-48 resize-none"
        placeholder={t("message")}
      />

      {/* send and captcha */}
      <div className="flex flex-col gap-2">
        {/* captcha */}
        <ReCAPTCHA
          sitekey={PUBLIC_SITE_KEY}
          onChange={(token) => setCaptchaToken(token)}
          ref={captchaRef}
        />

        {/* send */}
        <button
          type="submit"
          disabled={pending}
          className={`${pending ? "button--disabled" : "button--solid"} button`}
        >
          {pending ? t("sending") : t("send")}
        </button>
      </div>
    </form>
  );
}

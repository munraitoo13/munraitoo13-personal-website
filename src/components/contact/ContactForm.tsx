"use client";

import { sendMail } from "@/actions/sendMail";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

export function ContactForm() {
  const [pending, setPending] = useState(false);
  const [theme, setTheme] = useState("light");
  const [captchaToken, setCaptchaToken] = useState<string | null>("");
  const captchaRef = useRef<ReCAPTCHA>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const theme = localStorage.getItem("theme") || "light";
    setTheme(theme);
  }, []);

  const t = useTranslations("Contact");
  const tt = useTranslations("Toastify");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    if (!/[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim.test(email)) {
      toast.error(tt("invalidEmail"));
      return;
    }

    if (!captchaToken) {
      toast.error(tt("failedCaptcha"));
      return;
    }
    formData.append("captchaToken", captchaToken);

    try {
      setPending(true);
      await sendMail(formData);
      toast.success(tt("messageSent"));
    } catch (error) {
      console.error("Error sending email", error);
      toast.error(tt("messageError"));
    }

    formRef.current?.reset();
    captchaRef.current?.reset();
    setPending(false);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        required
        type="text"
        id="name"
        name="name"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("name")}
        maxLength={64}
      />

      <input
        required
        type="email"
        id="email"
        name="email"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("email")}
        maxLength={255}
      />

      <input
        required
        type="text"
        id="subject"
        name="subject"
        className="rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("subject")}
        maxLength={64}
      />

      <textarea
        required
        id="message"
        name="message"
        className="h-48 resize-none rounded-xl bg-neutral-50 p-5 dark:bg-neutral-900/25"
        placeholder={t("message")}
      />

      <div className="flex items-center gap-5">
        <button
          disabled={pending}
          className={`${pending ? "cursor-not-allowed" : "cursor-pointer"} rounded-full bg-red-600 px-5 py-3 text-white`}
        >
          {pending ? t("sending") : t("send")}
        </button>

        <ReCAPTCHA
          theme={theme as "light" | "dark"}
          sitekey={process.env.NEXT_PUBLIC_SITE_KEY || ""}
          onChange={(token) => setCaptchaToken(token)}
          ref={captchaRef}
        />
      </div>
    </form>
  );
}

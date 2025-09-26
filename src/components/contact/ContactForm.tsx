"use client";

import { sendMail } from "@/actions/sendMail";
import { useCaptcha } from "@/hooks/useCaptcha";
import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import { Button } from "@/components/common/Button";
import { Input } from "../common/Input";
import { Textarea } from "../common/Textarea";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  captchaToken: string | null;
};

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<ContactData>();

  const { captchaToken, setCaptchaToken, resetCaptcha, captchaRef } =
    useCaptcha();
  const formRef = useRef<HTMLFormElement>(null);

  const PUBLIC_SITE_KEY = process.env.NEXT_PUBLIC_SITE_KEY;
  if (!PUBLIC_SITE_KEY) throw new Error("Missing reCAPTCHA site key");

  const t = useTranslations("Contact");
  const tt = useTranslations("Toastify");

  const onSubmit = async (data: ContactData) => {
    const toastId = toast.loading(tt("sending"));

    try {
      const { success, message } = await sendMail({ ...data, captchaToken });

      toast.update(toastId, {
        render: success
          ? tt("messageSent")
          : `${tt("messageError")} ${message}`,
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
      resetCaptcha();
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 max-w-lg space-y-2"
    >
      <Input
        {...register("name", { required: true, maxLength: 64 })}
        placeholder={t("name")}
      />

      <Input
        {...register("email", {
          required: true,
          maxLength: 255,
          pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        })}
        placeholder={t("email")}
      />

      <Input
        {...register("subject", { required: true, maxLength: 64 })}
        placeholder={t("subject")}
      />

      <Textarea
        {...register("message", { required: true, maxLength: 1024 })}
        placeholder={t("message")}
      />

      <ReCAPTCHA
        sitekey={PUBLIC_SITE_KEY}
        onChange={(token) => setCaptchaToken(token)}
        ref={captchaRef}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("sending") : t("send")}
      </Button>
    </form>
  );
}

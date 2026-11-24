"use client";

import { sendMail } from "@/actions/sendMail";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Textarea } from "@/components/common/Textarea";
import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type ContactData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactData>();

  const t = useTranslations("Contact");
  const tt = useTranslations("Toastify");
  const fieldClassName = "bg-background";

  const onSubmit = async (data: ContactData) => {
    const toastId = toast.loading(tt("sending"));

    try {
      const { success, message } = await sendMail(data);

      toast.update(toastId, {
        render: success
          ? tt("messageSent")
          : `${tt("messageError")} ${message}`,
        type: success ? "success" : "error",
        isLoading: false,
        autoClose: 5000,
      });

      if (success) {
        reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.update(toastId, {
        render: tt("messageError"),
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-3">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className={compact ? "grid gap-3 sm:grid-cols-2" : "space-y-3"}>
        <Input
          {...register("name", {
            required: tt("emptyFields"),
            maxLength: { value: 64, message: "Max 64 characters" },
          })}
          placeholder={t("name")}
          className={fieldClassName}
          error={errors.name?.message}
        />

        <Input
          {...register("email", {
            required: tt("emptyFields"),
            maxLength: { value: 255, message: "Max 255 characters" },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: tt("invalidEmail"),
            },
          })}
          type="email"
          placeholder={t("email")}
          className={fieldClassName}
          error={errors.email?.message}
        />
      </div>

      <Input
        {...register("subject", {
          required: tt("emptyFields"),
          maxLength: { value: 64, message: "Max 64 characters" },
        })}
        placeholder={t("subject")}
        className={fieldClassName}
        error={errors.subject?.message}
      />

      <Textarea
        {...register("message", {
          required: tt("emptyFields"),
          maxLength: { value: 1024, message: "Max 1024 characters" },
        })}
        placeholder={t("message")}
        classNameTextarea={`${fieldClassName} ${compact ? "min-h-28" : "min-h-40"}`}
        error={errors.message?.message}
      />

      <Button fullWidth type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("sending") : t("send")}
      </Button>
    </form>
  );
}

"use client";

import { sendMail } from "@/actions/actions";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("Contact");
  const [isSending, setIsSending] = useState(false);
  const [isCooldown, setIsCooldown] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    try {
      setIsSending(true);

      await sendMail(formData);

      setIsCooldown(true);
      setTimeout(() => setIsCooldown(false), 60000);
      setTimeout("window.alert('Message sent successfully.');", 1);
    } catch (error) {
      window.alert(`Error sending message: ${error}`);
    }
    setIsSending(false);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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

      <button
        type="submit"
        className={`w-fit rounded-full ${isSending ? "bg-neutral-100 text-neutral-300 dark:bg-neutral-900/25 dark:text-neutral-700" : isCooldown ? "bg-neutral-100 text-neutral-300 dark:bg-neutral-900/25 dark:text-neutral-700" : "bg-red-600"} px-5 py-3 text-white`}
        disabled={isSending || isCooldown}
      >
        {isSending ? t("sending") : isCooldown ? t("cooldown") : t("send")}
      </button>
    </form>
  );
}

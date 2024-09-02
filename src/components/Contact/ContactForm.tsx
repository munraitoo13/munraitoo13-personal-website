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
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder={t("name")}
        maxLength={64}
      />

      <input
        required
        type="email"
        id="email"
        name="email"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder={t("email")}
        maxLength={255}
      />

      <input
        required
        type="text"
        id="subject"
        name="subject"
        className="rounded-xl bg-neutral-900/25 p-5"
        placeholder={t("subject")}
        maxLength={64}
      />

      <textarea
        required
        id="message"
        name="message"
        className="h-48 resize-none rounded-xl bg-neutral-900/25 p-5"
        placeholder={t("message")}
      />

      <button
        type="submit"
        className={`w-fit rounded-full ${isSending ? "bg-neutral-900/25" : isCooldown ? "bg-neutral-900/25" : "bg-red-600"} px-5 py-3 font-bold text-white`}
        disabled={isSending || isCooldown}
      >
        {isSending ? t("sending") : isCooldown ? t("cooldown") : t("send")}
      </button>
    </form>
  );
}

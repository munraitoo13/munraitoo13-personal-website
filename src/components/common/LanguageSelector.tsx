"use client";

import { LANGUAGES } from "@/constants/constants";
import { Locale } from "@/i18n/config";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { setUserLocale } from "@/utils/userLocale";

export function LanguageSelector() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: Locale) => {
    startTransition(async () => {
      await setUserLocale(locale);
      router.refresh();
    });
  };

  return (
    <div className="flex gap-4">
      {LANGUAGES.map(({ Flag, title, locale }) => (
        <button
          key={locale}
          type="button"
          title={title}
          aria-label={title}
          disabled={isPending}
          onClick={() => handleLocaleChange(locale)}
          className="cursor-pointer rounded-xs hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Flag className="w-8 rounded-xs" />
        </button>
      ))}
    </div>
  );
}

"use client";

import { LANGUAGES } from "@/constants/constants";
import type { Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { setUserLocale } from "@/utils/userLocale";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

type LanguageSelectorProps = {
  tone?: "default" | "hero";
  className?: string;
};

export function LanguageSelector({
  tone = "default",
  className,
}: LanguageSelectorProps) {
  const router = useRouter();
  const currentLocale = useLocale();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (locale: Locale) => {
    if (locale === currentLocale) return;

    startTransition(async () => {
      await setUserLocale(locale);
      router.refresh();
    });
  };

  const orderedLanguages = [...LANGUAGES].sort((a) =>
    a.locale === "en-US" ? -1 : 1,
  );

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "inline-flex items-center border font-mono text-[11px] uppercase tracking-[0.16em]",
        tone === "hero"
          ? "border-white/30 bg-transparent"
          : "border-[var(--color-border)] bg-background-contrast",
        className,
      )}
    >
      {orderedLanguages.map(({ title, locale }) => {
        const shortLabel = locale === "en-US" ? "EN" : "PT";
        const isActive = currentLocale === locale;

        return (
          <button
            key={locale}
            type="button"
            title={title}
            aria-label={title}
            aria-pressed={isActive}
            disabled={isPending}
            onClick={() => handleLocaleChange(locale)}
            className={cn(
              "cursor-pointer px-2.5 py-1.5 transition-colors duration-200 disabled:cursor-wait",
              isActive
                ? tone === "hero"
                  ? "bg-white text-[#0b0d0f] font-medium"
                  : "bg-accent text-accent-contrast font-medium"
                : tone === "hero"
                  ? "text-white/70 hover:text-white"
                  : "text-tertiary hover:text-primary",
            )}
          >
            {shortLabel}
          </button>
        );
      })}
    </div>
  );
}

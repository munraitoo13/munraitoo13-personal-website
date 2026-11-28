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

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={cn(
        "inline-flex items-center border font-mono text-xs uppercase tracking-[0.08em]",
        tone === "hero"
          ? "border-white/40 bg-transparent"
          : "border-[var(--color-border)] bg-background-contrast",
        className,
      )}
    >
      {LANGUAGES.map(({ title, shortLabel, locale }) => {
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
              "motion-press inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center px-3 disabled:cursor-wait",
              isActive
                ? tone === "hero"
                  ? "bg-white font-semibold text-background"
                  : "bg-accent text-accent-contrast font-semibold"
                : tone === "hero"
                  ? "text-white/95 hover:bg-white/10 hover:text-white"
                  : "text-secondary hover:text-primary",
            )}
          >
            {shortLabel}
          </button>
        );
      })}
    </div>
  );
}

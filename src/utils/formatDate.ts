import { Locale, defaultLocale } from "@/i18n/config";

export function formatDate(date: Date, locale: Locale = defaultLocale) {
  return new Intl.DateTimeFormat(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

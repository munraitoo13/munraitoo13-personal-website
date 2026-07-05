export const locales = ["en-US", "pt-BR", "de-DE", "fr-FR"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en-US";
export const localeCookieName = "locale";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function resolveLocale(value?: string | null): Locale {
  return value && isLocale(value) ? value : defaultLocale;
}

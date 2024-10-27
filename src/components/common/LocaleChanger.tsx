"use client";

import { useLocale } from "@/hooks/useLocale";

// Language options
const languages = [
  { name: "Português", value: "pt-BR" },
  { name: "English", value: "en-US" },
  { name: "Deutsch", value: "de-DE" },
  { name: "François", value: "fr-FR" },
];

export function LocaleChanger() {
  const { locale, updateLocale, isPending } = useLocale();

  return (
    <select
      className="cursor-pointer appearance-none rounded-full bg-neutral-50 px-5 py-2 text-center dark:bg-neutral-900/25"
      name="language"
      title="language"
      id="language"
      onChange={(e) => updateLocale(e.target.value)}
      value={locale}
      disabled={isPending}
    >
      {languages.map(({ name, value }) => (
        <option
          className="border-red-600 bg-neutral-50 font-sans dark:bg-neutral-950"
          key={value}
          value={value}
        >
          {name}
        </option>
      ))}
    </select>
  );
}

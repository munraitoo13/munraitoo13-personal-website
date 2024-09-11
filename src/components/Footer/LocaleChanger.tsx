"use client";

import { getUserLocale, setUserLocale } from "@/lib/locale";
import { useEffect, useState, useTransition } from "react";

// languages
const languages = [
  { name: "Português", value: "pt-BR" },
  { name: "English", value: "en-US" },
  { name: "Deutsch", value: "de-DE" },
  { name: "François", value: "fr-FR" },
];

export default function LocaleChange() {
  const [locale, setLocale] = useState<string>();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    getLocale();
  }, []);

  const getLocale = async () => {
    const userLocale = await getUserLocale();
    setLocale(userLocale);
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocale = e.target.value;
    startTransition(() => {
      setUserLocale(selectedLocale);
      setLocale(selectedLocale);
    });
  };

  return (
    <select
      className="cursor-pointer appearance-none rounded-full bg-neutral-50 px-5 py-2 text-center dark:bg-neutral-900/25"
      name="language"
      title="language"
      id="language"
      onChange={handleChange}
      value={locale}
    >
      {languages.map((lang) => (
        <option
          className="border-red-600 bg-neutral-50 font-sans dark:bg-neutral-950"
          key={lang.value}
          value={lang.value}
        >
          {lang.name}
        </option>
      ))}
    </select>
  );
}

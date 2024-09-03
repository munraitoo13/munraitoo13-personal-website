"use client";

import { getUserLocale, setUserLocale } from "@/services/locale";
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
    <div className="self-center lg:self-auto">
      <select
        className="cursor-pointer rounded-full bg-neutral-900/25 px-5 py-2"
        name="language"
        id="language"
        onChange={handleChange}
        value={locale}
      >
        {languages.map((lang) => (
          <option
            className="bg-neutral-950 text-white"
            key={lang.value}
            value={lang.value}
          >
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}

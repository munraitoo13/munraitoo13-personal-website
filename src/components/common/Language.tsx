"use client";
import { setUserLocale } from "@/utils/userLocale";
import { LANGUAGES } from "@/constants/constants";

export function Language() {
  return (
    <>
      {LANGUAGES.map(({ Flag, title, locale }) => (
        <Flag
          key={locale}
          onClick={() => setUserLocale(locale)}
          title={title}
          className="w-8 cursor-pointer hover:opacity-75"
        />
      ))}
    </>
  );
}

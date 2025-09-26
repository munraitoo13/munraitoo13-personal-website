import { LANGUAGES } from "@/constants/constants";
import { setUserLocale } from "@/utils/userLocale";

export function LanguageSelector() {
  return (
    <div className="flex gap-4">
      {LANGUAGES.map(({ Flag, title, locale }) => (
        <Flag
          key={locale}
          title={title}
          onClick={() => setUserLocale(locale)}
          className="w-8 cursor-pointer rounded-xs hover:opacity-75"
        />
      ))}
    </div>
  );
}

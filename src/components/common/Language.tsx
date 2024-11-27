import { setUserLocale } from "@/utils/userLocale";
import { LANGUAGES } from "@/constants/constants";

export function Language() {
  return (
    <div className="mt-5 flex gap-3">
      {LANGUAGES.map(({ Component, title, locale }) => (
        <Component
          key={locale}
          onClick={() => setUserLocale(locale)}
          title={title}
          className="w-7 cursor-pointer hover:opacity-75"
        />
      ))}
    </div>
  );
}

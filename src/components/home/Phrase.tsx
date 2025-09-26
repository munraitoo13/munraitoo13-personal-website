import { getTranslations } from "next-intl/server";

export async function Phrase() {
  const t = await getTranslations("HomePage");

  return (
    <blockquote className="mx-auto flex flex-col gap-1 pt-48 text-center text-3xl md:text-6xl">
      <span className="italic">{t("simple")} </span>

      <span>
        {t("yet")} <b>{t("stunning")}</b>
      </span>

      <b className="bg-background-contrast rounded-xl px-2 py-1">
        {t("insideAndOut")}
      </b>
    </blockquote>
  );
}

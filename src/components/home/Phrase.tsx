import { MotionBlockquote } from "@/components/common/Motion";
import { useTranslations } from "next-intl";

export function Phrase() {
  const t = useTranslations("HomePage");

  return (
    <MotionBlockquote
      className="flex w-full flex-col gap-1 text-center text-2xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.4 },
      }}
    >
      <div className="flex justify-center">
        <span>
          {t("phraseThere")}{" "}
          <span className="italic">{t("phraseNumber")} </span>
          {t("phraseTo")}
        </span>
      </div>

      <div className="italic">
        <span>{t("phraseYesNo")} </span>
        <span className="font-extrabold text-neutral-900 dark:text-white">
          {t("phraseWow")}{" "}
        </span>
        <span>{t("phraseDash")} </span>
      </div>

      <div>
        <span>{t("phraseWowIs")} </span>
        <span className="rounded-xl bg-neutral-50 p-1 font-extrabold text-neutral-900 dark:bg-neutral-900/25 dark:text-white">
          {t("phraseThe")}
        </span>
      </div>
    </MotionBlockquote>
  );
}

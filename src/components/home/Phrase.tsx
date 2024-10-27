import { MotionBlockquote } from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { phraseVariants } from "@/animations/motionVariants";

export function Phrase() {
  const t = useTranslations("HomePage");

  return (
    <MotionBlockquote
      className="my-24 flex w-full flex-col gap-1 text-center text-2xl"
      variants={phraseVariants}
      initial="hidden"
      animate="visible"
    >
      {/* there are... */}
      <div>
        {t("phraseThere")} <span className="italic">{t("phraseNumber")} </span>
        {t("phraseTo")}
      </div>

      {/* yes, no... */}
      <div className="italic">
        <span>{t("phraseYesNo")} </span>
        <span className="font-extrabold text-neutral-900 dark:text-white">
          {t("phraseWow")}{" "}
        </span>
        <span>{t("phraseDash")} </span>
      </div>

      {/* wow is... */}
      <div>
        <span>{t("phraseWowIs")} </span>
        <span className="rounded-xl bg-neutral-50 px-2 py-1 font-extrabold text-neutral-900 dark:bg-neutral-900/25 dark:text-white">
          {t("phraseThe")}
        </span>
      </div>
    </MotionBlockquote>
  );
}

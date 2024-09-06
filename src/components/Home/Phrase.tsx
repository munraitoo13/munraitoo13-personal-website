import { MotionBlockquote } from "@/components/Motion";
import { useTranslations } from "next-intl";

export default function Phrase() {
  const t = useTranslations("HomePage");

  return (
    <MotionBlockquote
      className="flex w-full flex-col gap-1 text-center text-2xl"
      initial={{ opacity: 0, x: -50 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: { delay: 0.5 },
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
        <span className="font-extrabold text-neutral-900">
          {t("phraseWow")}{" "}
        </span>
        <span>{t("phraseDash")} </span>
      </div>

      <div>
        <span>{t("phraseWowIs")} </span>
        <span className="rounded-xl bg-neutral-50 p-1 font-extrabold text-neutral-900">
          {t("phraseThe")}
        </span>
      </div>
    </MotionBlockquote>
  );
}

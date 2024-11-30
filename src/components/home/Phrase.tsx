import { MotionBlockquote } from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { phraseVariants } from "@/animations/motionVariants";

export function Phrase() {
  const t = useTranslations("HomePage");

  return (
    <MotionBlockquote
      className="mx-auto mt-36 flex w-fit flex-col gap-1 text-3xl font-light md:text-5xl"
      variants={phraseVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex w-fit flex-col gap-1">
        {/* simple */}
        <span className="italic">{t("simple")} </span>

        {/* yet */}
        <div className="flex gap-5">
          —
          <span>
            {t("yet")} <span className="bold">{t("stunning")}</span>
          </span>
          —
        </div>

        {/* inside */}
        <span className="bold w-fit self-end rounded-xl bg-neutral-200/50 px-2 py-1 dark:bg-neutral-900/25">
          {t("insideAndOut")}
        </span>
      </div>
    </MotionBlockquote>
  );
}

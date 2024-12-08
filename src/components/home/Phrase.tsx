import { MotionBlockquote } from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { phraseVariants } from "@/animations/motionVariants";
import { IconQuoteFilled } from "@tabler/icons-react";

export function Phrase() {
  const t = useTranslations("HomePage");

  return (
    <MotionBlockquote
      className="mx-auto mt-36 flex w-fit text-2xl font-light md:text-3xl lg:text-5xl"
      variants={phraseVariants}
      initial="hidden"
      animate="visible"
    >
      <IconQuoteFilled
        className="-mr-24 hidden -scale-100 text-neutral-100/50 lg:block dark:text-neutral-900/25"
        size={256}
      />

      {/* flex */}
      <div className="z-10 flex w-fit flex-col gap-1">
        {/* simple */}
        <span className="italic">{t("simple")} </span>

        {/* yet */}
        <div className="flex items-center gap-5">
          —
          <span>
            {t("yet")} <span className="bold">{t("stunning")}</span>
          </span>
          —
        </div>

        {/* inside */}
        <span className="bold w-fit self-end rounded-xl bg-neutral-100/50 px-2 py-1 dark:bg-neutral-900/25">
          {t("insideAndOut")}
        </span>
      </div>
    </MotionBlockquote>
  );
}

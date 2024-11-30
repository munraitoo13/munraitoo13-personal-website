import {
  phraseDescVariants,
  revealVariants,
} from "@/animations/motionVariants";
import { MotionDiv, MotionSection } from "@/components/common/Motion";
import { useTranslations } from "next-intl";

export function PhraseDescription() {
  const t = useTranslations("HomePage");

  return (
    <MotionSection
      variants={phraseDescVariants}
      initial="hidden"
      animate="visible"
      className="mt-36 flex flex-col gap-24"
    >
      {/* simple */}
      <MotionDiv variants={revealVariants} className="flex">
        <div className="card-divider"></div>

        <div className="flex flex-col gap-3">
          <p className="text-lg text-red-500">{t("whySimple")}</p>

          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("whySimpleTitle")}
          </h3>

          <p>{t("whySimpleDesc")}</p>
        </div>
      </MotionDiv>

      {/* what about yet stunning? */}
      <MotionDiv variants={revealVariants} className="flex">
        <div className="card-divider"></div>

        <div className="flex flex-col gap-3">
          <p className="text-lg text-red-500">{t("yetStunning")}</p>

          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("yetStunningTitle")}
          </h3>

          <p>{t("yetStunningDesc")}</p>
        </div>
      </MotionDiv>

      {/* and inside and out? */}
      <MotionDiv variants={revealVariants} className="flex">
        <div className="card-divider"></div>

        <div className="flex flex-col gap-3">
          <p className="text-lg text-red-500">{t("insideAndOutExpl")}</p>

          <h3 className="text-3xl font-bold text-neutral-900 dark:text-white">
            {t("insideAndOutExplTitle")}
          </h3>

          <p>{t("insideAndOutExplDesc")}</p>
        </div>
      </MotionDiv>
    </MotionSection>
  );
}

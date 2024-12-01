import {
  IconBrandHipchat,
  IconBriefcase2,
  IconStars,
} from "@tabler/icons-react";
import { MotionDiv, MotionSection } from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { qualitiesVariants, revealVariants } from "@/animations/motionVariants";

export function Qualities() {
  const t = useTranslations("HomePage");

  return (
    <MotionSection
      variants={qualitiesVariants}
      initial="hidden"
      animate="visible"
      className="mx-auto mt-36 flex flex-col gap-5 lg:flex-row"
    >
      {/* comunicative */}
      <MotionDiv
        variants={revealVariants}
        className="flex-1 rounded-xl border border-neutral-100/50 p-3 dark:border-neutral-900/25"
      >
        <div className="flex items-center">
          <IconBrandHipchat
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-500 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-100/50 py-2 pl-10 text-neutral-900 dark:bg-neutral-900/25 dark:text-white">
            {t("quality1")}
          </h3>
        </div>

        <p className="p-3">{t("quality1desc")}</p>
      </MotionDiv>

      {/* competent */}
      <MotionDiv
        variants={revealVariants}
        className="flex-1 rounded-xl border border-neutral-100/50 p-3 dark:border-neutral-900/25"
      >
        <div className="flex items-center">
          <IconBriefcase2
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-500 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-100/50 py-2 pl-10 text-neutral-900 dark:bg-neutral-900/25 dark:text-white">
            {t("quality2")}
          </h3>
        </div>

        <p className="p-3">{t("quality2desc")}</p>
      </MotionDiv>

      {/* detail-oriented */}
      <MotionDiv
        variants={revealVariants}
        className="flex-1 rounded-xl border border-neutral-100/50 p-3 dark:border-neutral-900/25"
      >
        <div className="flex items-center">
          <IconStars
            size={24}
            stroke={1.25}
            className="z-10 box-content min-w-fit rounded-full bg-red-500 p-3 text-white"
          />

          <h3 className="relative right-5 w-full rounded-r-full bg-neutral-100/50 py-2 pl-10 text-neutral-900 dark:bg-neutral-900/25 dark:text-white">
            {t("quality3")}
          </h3>
        </div>

        <p className="p-3">{t("quality3desc")}</p>
      </MotionDiv>
    </MotionSection>
  );
}

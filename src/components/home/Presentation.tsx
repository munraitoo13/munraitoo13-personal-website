import {
  MotionDiv,
  MotionH1,
  MotionHeader,
  MotionP,
} from "@/components/common/Motion";
import {
  presentationVariants,
  revealVariants,
} from "@/animations/motionVariants";
import { useTranslations } from "next-intl";
import {
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandVscode,
  IconBrandFigma,
} from "@tabler/icons-react";

export function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <MotionHeader
      variants={presentationVariants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex flex-col items-center justify-center"
    >
      {/* presentation */}
      <MotionH1 variants={revealVariants} className="title text-center">
        {t("greetings")}
        <br />
        {t("presentation")}
        <span className="text-red-500">{t("name")}</span>.
      </MotionH1>

      {/* aka munraitoo13 */}
      <MotionP variants={revealVariants} className="subtitle text-center">
        <span>{t("description")} </span>
        <span className="font-extrabold text-neutral-900 dark:text-white">
          {t("profession")}
        </span>
        <span> {t("descriptionLocation")}</span>
      </MotionP>

      <MotionDiv
        variants={revealVariants}
        className="mt-5 flex items-center gap-2"
      >
        <IconBrandTypescript
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandReact
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNextjs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandTailwind
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandNodejs
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandMongodb
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandVscode
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
        <IconBrandFigma
          size={24}
          stroke={1.25}
          className="hover:cursor-pointer hover:opacity-75"
        />
      </MotionDiv>
    </MotionHeader>
  );
}

import {
  MotionDiv,
  MotionH1,
  MotionHeader,
  MotionP,
  MotionSection,
} from "@/components/common/Motion";
import {
  contactAndResumeVariants,
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
  IconFile,
} from "@tabler/icons-react";
import Link from "next/link";

export function Presentation() {
  const t = useTranslations("HomePage");

  return (
    <MotionHeader
      variants={presentationVariants}
      initial="hidden"
      animate="visible"
      className="mt-48 flex max-w-xl flex-col"
    >
      {/* greet */}
      <MotionP variants={revealVariants} className="text-xl">
        {t("greetings")}
      </MotionP>

      {/* title */}
      <MotionH1 variants={revealVariants} className="title mb-5">
        {t("presentation")}
      </MotionH1>

      {/* subtitle */}
      <MotionP variants={revealVariants} className="mb-5 text-xl">
        <span>{t("aka")} </span>

        <span className="bold">{t("nickname")},</span>

        <span> {t("profession")}</span>
      </MotionP>

      {/* stack */}
      <MotionDiv variants={revealVariants} className="flex items-center gap-2">
        <IconBrandTypescript stroke={1.25} className="hover:text-red-500" />
        <IconBrandReact stroke={1.25} className="hover:text-red-500" />
        <IconBrandNextjs stroke={1.25} className="hover:text-red-500" />
        <IconBrandTailwind stroke={1.25} className="hover:text-red-500" />
        <IconBrandNodejs stroke={1.25} className="hover:text-red-500" />
        <IconBrandMongodb stroke={1.25} className="hover:text-red-500" />
        <IconBrandVscode stroke={1.25} className="hover:text-red-500" />
        <IconBrandFigma stroke={1.25} className="hover:text-red-500" />
      </MotionDiv>

      <MotionSection className="mt-10 flex gap-5" variants={revealVariants}>
        <Link className="button" href="/personal/contact">
          {t("contact")}
        </Link>

        <Link className="flex items-center gap-1" href="#">
          <IconFile stroke={1.25} />
          {t("resume")}
        </Link>
      </MotionSection>
    </MotionHeader>
  );
}

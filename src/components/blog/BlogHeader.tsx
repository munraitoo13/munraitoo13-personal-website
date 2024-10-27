import { IconLanguage, IconCalendarEvent } from "@tabler/icons-react";
import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionLink,
  MotionHeader,
} from "@/components/common/Motion";
import { useTranslations } from "next-intl";
import { headerVariants, revealVariants } from "@/animations/motionVariants";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  const t = useTranslations("BlogHeader");

  return (
    <MotionHeader
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex flex-col"
    >
      {/* return */}
      <MotionLink
        variants={revealVariants}
        whileHover={{ x: 5 }}
        href="/personal/blog"
        className="text-lg font-bold text-red-600"
      >
        {t("return")}
      </MotionLink>

      {/* title */}
      <MotionH1
        variants={revealVariants}
        className="text-5xl font-extrabold text-neutral-900 dark:text-white"
      >
        {title}
      </MotionH1>

      {/* description */}
      <MotionP variants={revealVariants} className="text-lg">
        {description}
      </MotionP>

      {/* date and language */}
      <MotionDiv
        variants={revealVariants}
        className="mt-10 flex items-center gap-5"
      >
        {/* date */}
        <div className="flex items-center gap-1">
          <IconCalendarEvent size={20} />
          <small>{date}</small>
        </div>

        {/* lang */}
        <div className="flex items-center gap-1">
          <IconLanguage size={20} />
          <small>{language}</small>
        </div>
      </MotionDiv>
    </MotionHeader>
  );
}

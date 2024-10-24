import {
  IconLanguage,
  IconCalendarEvent,
  IconArrowBack,
} from "@tabler/icons-react";
import { MotionDiv, MotionH1, MotionP } from "@/components/common/Motion";
import Link from "next/link";
import { useTranslations } from "next-intl";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  const t = useTranslations("BlogHeader");

  return (
    <header className="mt-36 flex w-full flex-col justify-center gap-5">
      {/* return */}
      <Link
        href="/personal/blog"
        className="flex items-center gap-3 text-red-600"
      >
        <IconArrowBack />
        <p className="font-semibold">{t("return")}</p>
      </Link>

      {/* title */}
      <MotionH1
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="text-6xl font-extrabold text-neutral-900 dark:text-white"
      >
        {title}
      </MotionH1>

      {/* description */}
      <MotionP
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.1 } }}
        className="text-lg"
      >
        {description}
      </MotionP>

      {/* date and language */}
      <MotionDiv
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
        className="flex items-center gap-5"
      >
        {/* date */}
        <div className="flex items-center gap-3">
          <IconCalendarEvent size={20} />
          <small>{date}</small>
        </div>
        |{/* lang */}
        <div className="flex items-center gap-3">
          <IconLanguage size={20} />
          <small>{language}</small>
        </div>
      </MotionDiv>
    </header>
  );
}

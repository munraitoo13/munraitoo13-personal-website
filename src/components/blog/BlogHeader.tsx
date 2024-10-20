import { IconLanguage, IconCalendarEvent } from "@tabler/icons-react";
import { MotionDiv, MotionH1, MotionP } from "@/components/common/Motion";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 pt-48">
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

import { IconLanguage, IconCalendarEvent } from "@tabler/icons-react";
import { MotionDiv, MotionH1, MotionP } from "@/components/Motion";

interface BlogHeaderProps {
  title: string;
  description: string;
  language: string;
  date: string;
}

export default function BlogHeader({
  title,
  description,
  language,
  date,
}: BlogHeaderProps) {
  return (
    <header className="flex w-full flex-col justify-center gap-5 pt-48">
      <div>
        {/* title */}
        <MotionH1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="text-6xl font-bold text-white"
        >
          {title}
        </MotionH1>
      </div>

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

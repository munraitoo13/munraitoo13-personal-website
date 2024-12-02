import {
  MotionDiv,
  MotionH1,
  MotionP,
  MotionHeader,
} from "@/components/common/Motion";
import { headerVariants, revealVariants } from "@/animations/motionVariants";

export function BlogHeader({ title, description, language, date }: BlogHeader) {
  return (
    <MotionHeader
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex flex-col"
    >
      {/* date and language */}
      <MotionDiv
        variants={revealVariants}
        className="mt-5 flex items-center gap-5 text-red-500"
      >
        {/* date */}
        <small className="flex items-center gap-1">
          {date}, {language}.
        </small>

        {/* lang */}
        <div className="flex items-center gap-1"></div>
      </MotionDiv>

      {/* title */}
      <MotionH1 variants={revealVariants} className="h1 mt-5">
        {title}
      </MotionH1>

      {/* description */}
      <MotionP variants={revealVariants} className="mt-5 text-lg">
        {description}
      </MotionP>
    </MotionHeader>
  );
}

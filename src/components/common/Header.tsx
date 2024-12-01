import { headerVariants, revealVariants } from "@/animations/motionVariants";
import { MotionH1, MotionHeader, MotionP } from "@/components/common/Motion";

export function Header({ pageTitle, pageDescription, category }: Header) {
  return (
    <MotionHeader
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex w-full flex-col justify-center gap-3"
    >
      {/* pre-title */}
      <MotionP variants={revealVariants} className="text-lg text-red-500">
        {category}
      </MotionP>

      {/* title */}
      <MotionH1 variants={revealVariants} className="h1">
        {pageTitle}
      </MotionH1>

      {/* description */}
      <MotionP variants={revealVariants} className="text-lg">
        {pageDescription}
      </MotionP>
    </MotionHeader>
  );
}

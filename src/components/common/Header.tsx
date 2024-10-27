import { headerVariants, revealVariants } from "@/animations/motionVariants";
import { MotionH1, MotionHeader, MotionP } from "@/components/common/Motion";

export function Header({ pageTitle, pageDescription, category }: Header) {
  return (
    <MotionHeader
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="mb-24 mt-48 flex w-full flex-col justify-center"
    >
      {/* red above title */}
      <MotionP
        variants={revealVariants}
        className="text-lg font-bold text-red-600"
      >
        {category}
      </MotionP>

      {/* title */}
      <MotionH1
        variants={revealVariants}
        className="text-6xl font-extrabold text-neutral-900 dark:text-white"
      >
        {pageTitle}
      </MotionH1>

      {/* description */}
      <MotionP variants={revealVariants} className="mt-5 text-lg">
        {pageDescription}
      </MotionP>
    </MotionHeader>
  );
}

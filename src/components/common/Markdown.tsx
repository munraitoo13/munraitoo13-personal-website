import { markdownVariants } from "@/animations/motionVariants";
import { MotionDiv } from "@/components/common/Motion";

export function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      className="mdx-content prose prose-sm prose-neutral mb-10 max-w-none dark:prose-invert"
      variants={markdownVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </MotionDiv>
  );
}

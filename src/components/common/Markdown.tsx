import { markdownVariants } from "@/animations/motionVariants";
import { MotionDiv } from "@/components/common/Motion";

export function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      className="markdown mdx-content mb-10"
      variants={markdownVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </MotionDiv>
  );
}

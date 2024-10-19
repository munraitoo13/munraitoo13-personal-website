import { MotionDiv } from "@/components/common/Motion";

export function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      className="mdx-content prose prose-sm prose-neutral max-w-none dark:prose-invert"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      {children}
    </MotionDiv>
  );
}

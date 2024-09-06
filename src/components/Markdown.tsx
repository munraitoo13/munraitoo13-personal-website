import { MotionDiv } from "@/components/Motion";

export default function Markdown({ children }: { children: React.ReactNode }) {
  return (
    <MotionDiv
      className="mdx-content prose prose-sm prose-neutral max-w-none"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
    >
      {children}
    </MotionDiv>
  );
}

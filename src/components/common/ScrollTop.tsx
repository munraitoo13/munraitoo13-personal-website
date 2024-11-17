"use client";

import { IconChevronUp } from "@tabler/icons-react";
import { MotionDiv } from "@/components/common/Motion";
import { useScrollTop } from "@/hooks/useScrollTop";
import { scrollTop } from "@/utils/scrollTop";

export function ScrollTop() {
  const { isVisible } = useScrollTop();

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
      className="fixed inset-x-0 bottom-5 z-50 mx-auto flex items-center justify-center"
    >
      <IconChevronUp
        onClick={scrollTop}
        className="box-content cursor-pointer rounded-full bg-red-500 p-2 text-white"
      />
    </MotionDiv>
  );
}

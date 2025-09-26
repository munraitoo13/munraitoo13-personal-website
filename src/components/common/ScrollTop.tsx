"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { IconChevronUp } from "@tabler/icons-react";

export function ScrollTop() {
  const { isVisible, scrollTop } = useScrollTop();

  return (
    isVisible && (
      <div className="fixed inset-x-0 bottom-2 z-50">
        <IconChevronUp
          onClick={scrollTop}
          size={32}
          className="bg-accent text-accent-contrast mx-auto cursor-pointer rounded-full p-2"
        />
      </div>
    )
  );
}

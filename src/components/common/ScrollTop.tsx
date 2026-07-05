"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { IconChevronUp } from "@tabler/icons-react";

export function ScrollTop() {
  const { isVisible, scrollTop } = useScrollTop();

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-4 z-50 transition-all duration-300 ease-[var(--ease-smooth)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollTop}
        className="bg-accent text-accent-contrast pointer-events-auto mx-auto flex cursor-pointer rounded-full p-1.5 shadow-md transition-all duration-300 ease-[var(--ease-smooth)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg"
      >
        <IconChevronUp size={24} stroke={1.75} />
      </button>
    </div>
  );
}

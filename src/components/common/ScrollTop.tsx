"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  const { isVisible, scrollTop } = useScrollTop();

  return (
    <div
      className={`pointer-events-none fixed right-6 bottom-6 z-50 transition-all duration-300 ease-[var(--ease-smooth)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollTop}
        className="bg-background-contrast text-primary hover:border-accent hover:text-accent pointer-events-auto flex cursor-pointer items-center justify-center rounded-none border border-[var(--color-border-strong)] p-2.5 shadow-lg transition-colors duration-200"
      >
        <ArrowUp className="size-4" strokeWidth={1.75} />
      </button>
    </div>
  );
}

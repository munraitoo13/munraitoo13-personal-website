"use client";

import { useScrollTop } from "@/hooks/useScrollTop";
import { ArrowUp } from "lucide-react";

export function ScrollTop() {
  const { isVisible, scrollTop } = useScrollTop();

  return (
    <div
      className={`pointer-events-none fixed right-6 bottom-6 z-50 transition-[transform,opacity] duration-[180ms] ease-[var(--ease-out)] motion-reduce:translate-y-0 motion-reduce:scale-100 ${
        isVisible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-2 scale-[0.96] opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollTop}
        className="motion-press bg-background-contrast text-primary hover:border-accent-text hover:text-accent-text pointer-events-auto flex size-11 cursor-pointer items-center justify-center rounded-none border border-[var(--color-border-strong)]"
      >
        <ArrowUp className="size-4" strokeWidth={1.75} />
      </button>
    </div>
  );
}

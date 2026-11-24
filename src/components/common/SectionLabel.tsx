import { cn } from "@/lib/utils";
import type { ElementType } from "react";

type SectionLabelProps = {
  label: string;
  index?: string;
  Icon?: ElementType;
  tone?: "default" | "hero";
  className?: string;
};

export function SectionLabel({
  label,
  index,
  Icon,
  tone = "default",
  className,
}: SectionLabelProps) {
  const toneStyles =
    tone === "hero"
      ? "border-white/25 bg-black/25 text-white/90"
      : "border-[var(--color-border)] bg-background-contrast text-secondary";

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em]",
        toneStyles,
        className,
      )}
    >
      {Icon ? (
        <Icon
          className={cn(
            "size-3.5",
            tone === "hero" ? "text-white" : "text-accent",
          )}
          strokeWidth={1.75}
        />
      ) : (
        <span
          className={cn(
            "size-1.5 shrink-0",
            tone === "hero" ? "bg-white" : "bg-accent",
          )}
          aria-hidden="true"
        />
      )}
      {index && (
        <span className={tone === "hero" ? "text-white/60" : "text-tertiary"}>
          {index} /
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}

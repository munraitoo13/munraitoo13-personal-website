"use client";

import { cn } from "@/lib/utils";
import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyEmailButtonProps = {
  email: string;
  label: string;
  copiedLabel: string;
  className?: string;
};

export function CopyEmailButton({
  email,
  label,
  copiedLabel,
  className,
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "bg-background text-secondary hover:border-accent hover:text-primary inline-flex cursor-pointer items-center gap-1.5 border border-[var(--color-border)] px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-colors",
        className,
      )}
    >
      {copied ? (
        <>
          <Check className="text-accent size-3.5" strokeWidth={1.75} />
          <span>{copiedLabel}</span>
        </>
      ) : (
        <>
          <Copy className="size-3.5" strokeWidth={1.75} />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}

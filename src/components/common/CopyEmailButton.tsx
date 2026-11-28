"use client";

import { cn } from "@/lib/utils";
import { AlertCircle, Check, Copy } from "lucide-react";
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
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
      setTimeout(() => setStatus("idle"), 2000);
    } catch (error) {
      console.error("Failed to copy email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={cn(
        "motion-press bg-background text-secondary hover:border-accent-text hover:text-primary inline-flex min-h-11 cursor-pointer items-center gap-2 border border-[var(--color-border)] px-3.5 py-2 font-mono text-xs",
        className,
      )}
    >
      {status === "copied" ? (
        <>
          <Check className="text-accent-text size-3.5" strokeWidth={1.75} />
          <span>{copiedLabel}</span>
        </>
      ) : status === "error" ? (
        <>
          <AlertCircle className="text-accent-text size-3.5" strokeWidth={1.75} />
          <span>{email}</span>
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

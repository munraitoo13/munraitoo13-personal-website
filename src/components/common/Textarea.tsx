import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  classNameTextarea?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, classNameTextarea, ...props }, ref) => {
    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={props.id}
            className="text-secondary mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          {...props}
          aria-invalid={!!error}
          className={cn(
            "bg-background-contrast text-primary placeholder:text-tertiary flex min-h-32 w-full rounded-none border border-[var(--color-border)] px-4 py-3 text-sm transition-colors duration-200 outline-none focus-visible:border-accent focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-accent",
            classNameTextarea,
          )}
        />

        {error && (
          <p className="text-accent mt-1.5 font-mono text-xs">{error}</p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

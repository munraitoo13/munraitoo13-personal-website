import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  classNameTextarea?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, classNameTextarea, id, ...props }, ref) => {
    const errorId = id && error ? `${id}-error` : undefined;

    return (
      <div className={cn("w-full", className)}>
        {label && (
          <label
            htmlFor={id}
            className="text-secondary mb-1.5 block text-xs font-medium"
          >
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          {...props}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(
            "bg-background-contrast text-primary placeholder:text-tertiary flex min-h-32 w-full rounded-none border border-[var(--color-border)] px-4 py-3 text-sm transition-colors duration-200 focus-visible:border-accent-text disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-accent-text",
            classNameTextarea,
          )}
        />

        {error && (
          <p id={errorId} role="alert" className="text-accent-text mt-1.5 text-xs">
            {error}
          </p>
        )}
      </div>
    );
  },
);

Textarea.displayName = "Textarea";

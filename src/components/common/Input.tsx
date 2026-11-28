import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className, id, ...props }, ref) => {
    const errorId = id && error ? `${id}-error` : undefined;

    return (
      <div className={fullWidth ? "w-full" : undefined}>
        {label && (
          <label
            htmlFor={id}
            className="text-secondary mb-1.5 block text-xs font-medium"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          {...props}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={cn(
            "bg-background-contrast text-primary placeholder:text-tertiary min-h-11 w-full rounded-none border border-[var(--color-border)] px-4 py-2.5 text-sm transition-colors duration-200 focus-visible:border-accent-text disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-accent-text",
            className,
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

Input.displayName = "Input";

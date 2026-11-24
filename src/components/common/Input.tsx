import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className, ...props }, ref) => {
    return (
      <div className={fullWidth ? "w-full" : undefined}>
        {label && (
          <label
            htmlFor={props.id}
            className="text-secondary mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em]"
          >
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...props}
          aria-invalid={!!error}
          className={cn(
            "bg-background-contrast text-primary placeholder:text-tertiary h-auto w-full rounded-none border border-[var(--color-border)] px-4 py-3 text-sm transition-colors duration-200 outline-none focus-visible:border-accent focus-visible:ring-0 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-accent",
            className,
          )}
        />

        {error && (
          <p className="text-accent mt-1.5 font-mono text-xs">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = "Input";

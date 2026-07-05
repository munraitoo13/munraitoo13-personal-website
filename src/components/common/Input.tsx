import { Input as ShadcnInput } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, fullWidth = true, className, ...props }, ref) => {
    const fullWidthStyles = fullWidth ? "w-full" : "";

    return (
      <div>
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <ShadcnInput
          ref={ref}
          {...props}
          aria-invalid={!!error}
          className={cn(
            "h-auto rounded-xl border-0 bg-background-contrast px-5 py-4 text-base shadow-none placeholder:text-tertiary focus-visible:border-transparent focus-visible:ring-0 dark:bg-background-contrast md:text-base",
            fullWidthStyles,
            className,
          )}
        />

        {error && <p className="text-accent mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

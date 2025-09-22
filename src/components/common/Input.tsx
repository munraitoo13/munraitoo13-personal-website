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
          <label htmlFor="props.id" className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <input
          ref={ref}
          {...props}
          className={cn(
            "rounded-xl bg-background-contrast px-5 py-4",
            fullWidthStyles,
            className,
          )}
        />

        {error && <p className="mt-1 text-xs text-accent">{error}</p>}
      </div>
    );
  },
);

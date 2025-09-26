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
            "bg-background-contrast rounded-xl px-5 py-4",
            fullWidthStyles,
            className,
          )}
        />

        {error && <p className="text-accent mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

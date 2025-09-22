import { cn } from "@/lib/cn";
import { forwardRef } from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  error?: string;
  classNameTextarea?: string;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, classNameTextarea, ...props }, ref) => {
    return (
      <div className={className}>
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <textarea
          ref={ref}
          {...props}
          className={cn(
            "h-full w-full rounded-xl bg-background-contrast px-5 py-4",
            className,
          )}
        />

        {error && <p className="mt-1 text-xs text-accent">{error}</p>}
      </div>
    );
  },
);

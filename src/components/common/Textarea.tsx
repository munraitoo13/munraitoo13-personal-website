import { Textarea as ShadcnTextarea } from "@/components/ui/textarea";
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
      <div className={className}>
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <ShadcnTextarea
          ref={ref}
          {...props}
          aria-invalid={!!error}
          className={cn(
            "h-full min-h-0 rounded-xl border-0 bg-background-contrast px-5 py-4 text-base shadow-none placeholder:text-tertiary focus-visible:border-transparent focus-visible:ring-0 dark:bg-background-contrast md:text-base",
            classNameTextarea,
            className,
          )}
        />

        {error && <p className="text-accent mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

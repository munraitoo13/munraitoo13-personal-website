import { forwardRef } from "react";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor="props.id" className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <input ref={ref} {...props} className="" />

        {error && <p className="mt-1 text-xs text-accent">{error}</p>}
      </div>
    );
  },
);

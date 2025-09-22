import { forwardRef } from "react";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[];
  label?: string;
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor="props.id" className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <select
          ref={ref}
          {...props}
          className="appearance-none rounded-xl bg-background-contrast px-5 py-4"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {error && <p className="mt-1 text-xs text-accent">{error}</p>}
      </div>
    );
  },
);

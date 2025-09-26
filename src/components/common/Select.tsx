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
          className="bg-background-contrast appearance-none rounded-xl px-5 py-4"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>

        {error && <p className="text-accent mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

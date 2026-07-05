import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import { forwardRef } from "react";

type SelectProps = Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size"> & {
  options: string[];
  label?: string;
  error?: string;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, options, className, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={props.id} className="mb-1 block text-sm">
            {label}
          </label>
        )}

        <NativeSelect
          ref={ref}
          {...props}
          aria-invalid={!!error}
          className={className}
        >
          {options.map((option) => (
            <NativeSelectOption key={option} value={option}>
              {option}
            </NativeSelectOption>
          ))}
        </NativeSelect>

        {error && <p className="text-accent mt-1 text-xs">{error}</p>}
      </div>
    );
  },
);

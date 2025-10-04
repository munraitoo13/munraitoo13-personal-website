import { cn } from "@/lib/cn";
import React, { ElementType } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  rounded?: boolean;
  Icon?: ElementType;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  rounded = false,
  size = "md",
  fullWidth = false,
  Icon,
  ...props
}) => {
  const baseStyles = "w-fit ease-in-out flex items-center justify-center gap-1";

  const variantStyles = {
    primary:
      "bg-accent text-accent-contrast hover:bg-accent-hover active:bg-accent",
    secondary:
      "border text-primary hover:bg-primary hover:text-background active:bg-secondary",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const fullWidthStyles = fullWidth ? "w-full" : "";

  const roundedStyles = rounded ? "rounded-full" : "rounded-xl";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidthStyles,
        roundedStyles,
        className,
      )}
      {...props}
    >
      {Icon && <Icon stroke="1.25" />}
      {children}
    </button>
  );
};

import { cn } from "@/lib/cn";
import React, { ElementType } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary";
  fullWidth?: boolean;
  Icon?: ElementType;
};

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  Icon,
  ...props
}) => {
  const baseStyles =
    "w-fit rounded-xl ease-in-out flex items-center justify-center gap-1";

  const variantStyles = {
    primary: "bg-accent text-accent-contrast hover:bg-accent-hover",
    secondary: "bg-primary text-background hover:bg-accent-hover",
  };

  const sizeStyles = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const fullWidthStyles = fullWidth ? "w-full" : "";

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidthStyles,
        className,
      )}
      {...props}
    >
      {Icon && <Icon stroke="1.25" />}
      {children}
    </button>
  );
};

export default Button;

import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

export type ButtonVariant = "primary" | "secondary" | "dark" | "heroOutline";
export type ButtonSize = "sm" | "md" | "lg";

type ButtonClassOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
};

const baseStyles =
  "motion-press inline-flex h-auto w-fit shrink-0 cursor-pointer items-center justify-center gap-2 rounded-none font-sans font-medium whitespace-nowrap disabled:cursor-not-allowed disabled:opacity-50";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-contrast hover:bg-accent-hover active:bg-accent",
  dark: "bg-background text-primary hover:bg-surface active:bg-background",
  secondary:
    "border border-[var(--color-border-strong)] bg-transparent text-primary hover:border-accent-text hover:text-accent-text",
  heroOutline:
    "border border-white/60 bg-transparent text-white hover:border-white hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 py-2 text-xs tracking-[0.04em]",
  md: "min-h-11 px-5 py-2.5 text-sm",
  lg: "min-h-12 px-7 py-3 text-sm",
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
}: ButtonClassOptions = {}) {
  return cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    fullWidth && "w-full",
    className,
  );
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  Icon?: ElementType;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  Icon,
  ...props
}) => {
  return (
    <button
      className={buttonClasses({ variant, size, fullWidth, className })}
      {...props}
    >
      {Icon && <Icon className="size-4" strokeWidth={1.5} />}
      {children}
    </button>
  );
};

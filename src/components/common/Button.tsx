import { cn } from "@/lib/utils";
import React, { ElementType } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "dark" | "heroOutline";
  fullWidth?: boolean;
  chamfer?: boolean;
  Icon?: ElementType;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
  chamfer = true,
  Icon,
  ...props
}) => {
  const baseStyles =
    "inline-flex h-auto w-fit shrink-0 cursor-pointer items-center justify-center gap-2 rounded-none font-mono text-xs uppercase tracking-[0.16em] whitespace-nowrap transition-colors duration-200 ease-[var(--ease-smooth)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-not-allowed disabled:opacity-50";

  const variantStyles = {
    primary:
      "bg-accent text-accent-contrast hover:bg-accent-hover active:bg-accent",
    dark: "bg-[#0b0d0f] text-[#ecebe6] hover:bg-[#161a1f] active:bg-[#0b0d0f]",
    secondary:
      "border border-[var(--color-border-strong)] bg-transparent text-primary hover:border-accent hover:text-accent",
    heroOutline:
      "border border-white/35 bg-transparent text-white hover:border-white hover:bg-white/10",
  };

  const sizeStyles = {
    sm: "px-3.5 py-2 text-[11px]",
    md: "px-5 py-3 text-xs",
    lg: "px-7 py-3.5 text-xs",
  };

  const useChamfer =
    chamfer && (variant === "primary" || variant === "dark");

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        useChamfer && "tui-chamfer",
        fullWidth && "w-full",
        className,
      )}
      {...props}
    >
      {Icon && <Icon className="size-4" strokeWidth={1.5} />}
      {children}
    </button>
  );
};

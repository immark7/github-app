import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../../libs/utils";

const variantStyles = {
  default: "bg-primary text-primary-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
};

const sizeStyles = {
  sm: "h-8 px-3 text-xs",
  default: "h-9 px-4 py-2",
  lg: "h-10 px-8",
  icon: "h-9 w-9",
};

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  isLoading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant = "default",
      size = "default",
      isLoading = false,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-md text-sm disabled:pointer-events-none",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {children}
      </button>
    );
  }
);

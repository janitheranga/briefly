import * as React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "md", ...props }, ref) => {
    const baseStyles =
      "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer";

    const variants = {
      default:
        "bg-powder-petal-500 text-white hover:bg-powder-petal-600 focus:ring-powder-petal-500",
      outline:
        "border-2 border-current text-foreground hover:bg-powder-petal-50 dark:hover:bg-powder-petal-950",
      ghost:
        "hover:bg-powder-petal-100 dark:hover:bg-powder-petal-900 text-foreground",
      secondary:
        "bg-muted-teal-500 text-white hover:bg-muted-teal-600 focus:ring-muted-teal-500",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };

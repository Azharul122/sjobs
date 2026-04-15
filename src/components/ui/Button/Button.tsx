import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "accent"
    | "ghost"
    | "link"
    | "outline"
    | "text";
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary", // Default variant
  size = "medium", // Default size
  children,
  onClick,
  type = "button", // Default type
  disabled = false, // Default disabled state
  className = "", // Default className
  ...props // This will collect any other props like 'data-*', 'aria-*', etc.
}) => {
  // Define base classes for the button
  const baseClass =
    "inline-flex items-center justify-center font-medium rounded-lg disabled:opacity-70 focus:outline-none active:opacity-80 focus:ring-0 focus:ring-offset-0 transition duration-200";

  // Define variant classes based on the 'variant' prop
  const variantClasses = {
    primary:
      "bg-secondary text-black hover:bg-orange-400 focus:ring-secondary disabled:bg-secondary",
    secondary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary disabled:bg-primary/70",
    accent:
      "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500 disabled:bg-green-300",
    ghost:
      "bg-transparent text-blue-500 hover:bg-blue-100 focus:ring-blue-500 disabled:text-gray-500",
    link: "bg-transparent text-blue-500 hover:text-blue-600 focus:ring-blue-500 disabled:text-gray-500",
    outline:
      "border-2 border-blue-500 text-blue-500 hover:bg-blue-100 focus:ring-blue-500 disabled:border-gray-300 disabled:text-gray-500",
    text: "bg-transparent text-blue-500 hover:bg-blue-100 focus:ring-blue-500 disabled:text-gray-500",
  };

  // Define size classes based on the 'size' prop
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Combine the base class, variant, size, and any custom className
  const buttonClasses = `${baseClass} ${variantClasses[variant]} ${
    sizeClasses[size]
  } ${className} ${disabled ? "cursor-not-allowed" : ""}`;

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props} // Spread any additional props (e.g., aria attributes)
    >
      {children}
    </button>
  );
};

export default Button;

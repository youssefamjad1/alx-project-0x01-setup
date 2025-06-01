import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={
        `px-6 py-2 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition ` +
        className
      }
    >
      {children}
    </button>
  );
};

export default Button;

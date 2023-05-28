import React from "react";

const Button: React.FC<{
  children: React.ReactElement | string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-[10px] py-[10px] bg-blue-400 mt-[20px] flex items-center justify-center space-x-[10px] duration-300 hover:bg-blue-300 ${
        disabled ? "opacity-50" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

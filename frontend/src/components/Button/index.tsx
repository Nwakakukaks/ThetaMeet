import React from "react";

const Button: React.FC<{
  children: React.ReactElement | string;
  onClick: () => void;
  disabled?: boolean;
}> = ({ children, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-[10px] text-white py-[10px] bg-blue-800 mt-[20px] flex items-center justify-center space-x-[10px] duration-300 hover:bg-blue-500 ${
        disabled ? "opacity-70" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;

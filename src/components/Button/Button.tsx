import React from "react";
import type { ButtonProps } from "./Button.types";

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

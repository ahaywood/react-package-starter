import React from 'react';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  label?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ label, onClick }): JSX.Element => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      type="button"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { Button };

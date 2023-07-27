import React from 'react';
import { Icon } from '../Icon';
import { MouseEventHandler } from 'react';

export interface ButtonProps {
  iconLeft?: string;
  iconRight?: string;
  label?: string;
  type?: 'solid' | 'outline' | 'minimal' | 'text';
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  disabled?: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
  disabled = false,
  handleClick,
  iconLeft = '',
  iconRight = '',
  label = '',
  type = 'solid',
  size = 'medium',
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={`flex items-center gap-2 rounded-[4px] focus:outline-primary-300 focus:outline-[3px] active:outline-primary-600 active:outline-[3px] font-medium
        ${
          type === 'solid' &&
          'bg-primary text-white hover:bg-primary-600 disabled:text-whiteAlpha-400 disabled:bg-primary-100'
        }
        ${
          type === 'outline' &&
          'text-primary border-primary border-[1px] hover:bg-primary-50  disabled:text-primary-100 disabled:border-primary-100'
        }
        ${
          type === 'minimal' &&
          'text-primary hover:bg-primary-50 disabled:text-primary-100'
        }
        ${
          type === 'text' &&
          'text-primary hover:text-primary-600 focus:outline-none disabled:text-primary-100 !px-0'
        }
        ${size === 'small' && 'text-label14 py-2 px-4'}
        ${size === 'medium' && 'text-label14 py-[10px] px-[18px]'}
        ${size === 'large' && 'text-label16 py-3 px-4'}
        ${size === 'xlarge' && 'text-label18 py-4 px-6'}
      `}
      type="button"
      onClick={handleClick}
      disabled={disabled}
    >
      {iconLeft && <Icon name={iconLeft} />}
      {label}
      {iconRight && <Icon name={iconRight} />}
    </button>
  );
};

export { Button };

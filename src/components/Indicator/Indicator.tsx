import React from 'react';

export interface IndicatorProps {
  size?: 'small' | 'large';
  status?: 'active' | 'standby' | 'cancelled' | 'disabled' | 'indeterminate';
}

const Indicator = ({
  size = 'small',
  status = 'active',
}: IndicatorProps): JSX.Element => {
  return (
    <div
      data-testid="indicator"
      className={`rounded-full
        ${status === 'active' ? 'bg-success-500' : ''}
        ${status === 'standby' ? 'bg-warning-500' : ''}
        ${status === 'cancelled' ? 'bg-error-500' : ''}
        ${status === 'disabled' ? 'bg-gray-300' : ''}
        ${status === 'indeterminate' ? 'bg-primary-500' : ''}
        ${size === 'small' ? 'w-2 h-2' : ''}
        ${size === 'large' ? 'w-3 h-3' : ''}
      `}
    />
  );
};

export { Indicator };

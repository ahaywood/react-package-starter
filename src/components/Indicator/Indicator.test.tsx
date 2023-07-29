import React from 'react';
import { render, screen } from '@testing-library/react';
import { Indicator } from './Indicator';

describe('Indicator', () => {
  it('should render', () => {
    expect(() => {
      render(<Indicator />);
    }).not.toThrow();
  });

  it('renders with an active status', () => {
    render(<Indicator status="active" />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-success-500');
  });

  it('renders with an standby status', () => {
    render(<Indicator status="standby" />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-warning-500');
  });

  it('renders with an cancelled status', () => {
    render(<Indicator status="cancelled" />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-error-500');
  });

  it('renders with an disabled status', () => {
    render(<Indicator status="disabled" />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-gray-300');
  });

  it('renders with an indeterminate status', () => {
    render(<Indicator status="indeterminate" />);
    expect(screen.getByTestId('indicator')).toHaveClass('bg-primary-500');
  });

  it('renders with an small size', () => {
    render(<Indicator size="small" />);
    expect(screen.getByTestId('indicator')).toHaveClass('w-2 h-2');
  });

  it('renders with an large size', () => {
    render(<Indicator size="large" />);
    expect(screen.getByTestId('indicator')).toHaveClass('w-3 h-3');
  });
});

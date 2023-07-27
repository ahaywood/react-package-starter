import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('Button renders correctly', () => {
    expect(() =>
      render(<Button label="Button" handleClick={() => {}} />)
    ).not.toThrow();
  });

  test('Button renders with the correct label', () => {
    render(<Button label="My Button" handleClick={() => {}} />);
    expect(screen.getByText('My Button')).toBeInTheDocument();
  });

  test('Button is not disabled', () => {
    render(<Button label="My Button" handleClick={() => {}} />);
    expect(screen.getByText('My Button')).not.toBeDisabled();
  });

  test('Button is disabled', () => {
    render(<Button label="My Button" handleClick={() => {}} disabled />);
    expect(screen.getByText('My Button')).toBeDisabled();
  });

  test('Button handles click', () => {
    const handleClick = jest.fn();
    render(<Button label="My Button" handleClick={handleClick} />);
    screen.getByText('My Button').click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

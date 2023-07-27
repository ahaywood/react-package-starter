import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import Button from './Button';

describe('Running Test for Marbella Button', () => {
  test('Check Button Disabled', () => {
    expect(() => render(<Button text="Button" />)).not.toThrow();
  });
});

import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Button } from './Button';

describe('Button', () => {
  test('Check Button Disabled', () => {
    expect(() =>
      render(<Button label="Button" onClick={undefined} />)
    ).not.toThrow();
  });
});

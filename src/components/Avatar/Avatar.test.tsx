import React from 'react';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('should render', () => {
    expect(() => {
      render(<Avatar />);
    }).not.toThrow();
  });

  it('renders with an image', () => {
    render(<Avatar image="https://placekitten.com/200/300" />);
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://placekitten.com/200/300'
    );
  });

  it('renders with initials', () => {
    render(<Avatar initials="A" />);
    expect(screen.getByText('A')).toBeInTheDocument();
  });

  it('renders with small initials', () => {
    render(<Avatar initials="A" initialsSize="small" />);
    expect(screen.getByText('A')).toHaveClass('text-sm');
  });

  it('renders with medium initials', () => {
    render(<Avatar initials="A" initialsSize="medium" />);
    expect(screen.getByText('A')).toHaveClass('text-base');
  });

  it.skip('renders with an icon', () => {});

  it('renders as a circle', () => {
    render(<Avatar image="https://placekitten.com/200/300" shape="circle" />);
    expect(screen.getByRole('img')).toHaveClass('rounded-full');
  });

  it('renders as a square', () => {
    render(<Avatar image="https://placekitten.com/200/300" shape="square" />);
    expect(screen.getByRole('img')).toHaveClass('rounded-[4px]');
  });

  it('renders showing a border', () => {
    render(
      <Avatar
        image="https://placekitten.com/200/300"
        shape="square"
        showBorder={true}
      />
    );
    expect(screen.getByRole('img').closest('div')).toHaveClass(
      'border-white border-[2px]'
    );
  });

  it('renders with no border', () => {
    render(
      <Avatar
        image="https://placekitten.com/200/300"
        shape="square"
        showBorder={false}
      />
    );
    expect(screen.getByRole('img').closest('div')).not.toHaveClass(
      'border-white border-[2px]'
    );
  });

  it('renders the correct size', () => {
    render(
      <Avatar
        image="https://placekitten.com/200/300"
        shape="square"
        size={64}
      />
    );
    expect(screen.getByRole('img').closest('div')).toHaveStyle('width: 64px');
    expect(screen.getByRole('img').closest('div')).toHaveStyle('height: 64px');
  });

  it('renders with an indicator', () => {
    render(
      <Avatar
        image="https://placekitten.com/200/300"
        shape="square"
        showIndicator={true}
      />
    );
    expect(screen.getByTestId('indicator')).toBeInTheDocument();
  });

  it('renders without an indicator', () => {
    render(<Avatar image="https://placekitten.com/200/300" shape="square" />);
    expect(screen.queryByTestId('indicator')).not.toBeInTheDocument();
  });

  it('renders with the appropriate alt text', () => {
    render(
      <Avatar
        image="https://placekitten.com/200/300"
        shape="square"
        alt="Smitten Kitten"
      />
    );
    expect(screen.getByAltText('Smitten Kitten')).toBeInTheDocument();
  });
});

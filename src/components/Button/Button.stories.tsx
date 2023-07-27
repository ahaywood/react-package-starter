import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Solid: Story = {
  args: {
    type: 'solid',
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    type: 'outline',
    label: 'Button',
  },
};

export const Minimal: Story = {
  args: {
    type: 'minimal',
    label: 'Button',
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'large',
  },
};

export const XLarge: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'xlarge',
  },
};

export const IconOnLeft: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'xlarge',
    iconLeft: 'Bar01Down',
  },
};

export const IconOnRight: Story = {
  args: {
    type: 'solid',
    label: 'Button',
    size: 'xlarge',
    iconRight: 'Bar01Down',
  },
};

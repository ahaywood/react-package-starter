import type { Meta, StoryObj } from '@storybook/react';

import { Indicator } from './Indicator';

const meta: Meta<typeof Indicator> = {
  component: Indicator,
};

export default meta;
type Story = StoryObj<typeof Indicator>;

export const Active: Story = {
  args: {
    status: 'active',
  },
};

export const Standby: Story = {
  args: {
    status: 'standby',
  },
};

export const Cancelled: Story = {
  args: {
    status: 'cancelled',
  },
};

export const Disabled: Story = {
  args: {
    status: 'disabled',
  },
};

export const Indeterminate: Story = {
  args: {
    status: 'indeterminate',
  },
};

export const Small: Story = {
  args: {
    status: 'active',
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    status: 'active',
    size: 'large',
  },
};

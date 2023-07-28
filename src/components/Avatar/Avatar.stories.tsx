import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const PrimaryImage: Story = {
  args: {
    image: 'https://placekitten.com/140/140',
    shape: 'square',
  },
};

export const CircleImage: Story = {
  args: {
    image: 'https://placekitten.com/140/200',
    shape: 'circle',
  },
};

export const CircleWithBorder: Story = {
  args: {
    image: 'https://placekitten.com/140/200',
    shape: 'circle',
    showBorder: true,
  },
};

export const RectangleImage: Story = {
  args: {
    image: 'https://placekitten.com/140/200',
    shape: 'square',
  },
};

export const RectangleWithBorder: Story = {
  args: {
    image: 'https://placekitten.com/140/200',
    shape: 'square',
    showBorder: true,
  },
};

export const RectangleWithIconWithBorder: Story = {
  args: {
    // icon: Bar01Down,
    shape: 'square',
    showBorder: true,
  },
};

export const RectangleWithIcon: Story = {
  args: {
    // icon: Bar01Down,
    shape: 'square',
  },
};

export const CircleWithIconWithBorder: Story = {
  args: {
    // icon: Bar01Down,
    shape: 'circle',
    showBorder: true,
  },
};

export const CircleWithIcon: Story = {
  args: {
    // icon: Bar01Down,
    shape: 'circle',
  },
};

export const CircleWithSmallInitials: Story = {
  args: {
    initials: 'A',
    shape: 'circle',
    initialsSize: 'small',
  },
};

export const CircleWithInitials: Story = {
  args: {
    initials: 'A',
    shape: 'circle',
  },
};

export const SquareWithSmallInitials: Story = {
  args: {
    initials: 'A',
    shape: 'square',
    initialsSize: 'small',
  },
};

export const SquareWithInitials: Story = {
  args: {
    initials: 'A',
    shape: 'square',
  },
};

export const ShowIndicator: Story = {
  args: {
    initials: 'A',
    shape: 'square',
    showIndicator: true,
  },
};

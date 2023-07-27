import React from 'react'
import { Meta, Story } from "@storybook/react";
import type { IconProps } from './Icon';
import { Icon } from './Icon';

export default {
title: 'Icon',
component: Icon,
} as Meta;

const Template = (args: IconProps) =>
<Icon {...args} />;

export const Primary: Story = Template.bind({});
Primary.args = {
/* component args */
// primary: true,
// label: 'Button',
};
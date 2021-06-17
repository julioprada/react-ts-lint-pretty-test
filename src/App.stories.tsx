/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Sub } from './App';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Commons/Sub',
  component: Sub,
  argTypes: {},
} as Meta;

const Template: Story = (args: JSX.IntrinsicAttributes & { children?: React.ReactNode }) => <Sub {...args} />;

export const Default = Template.bind({});
Default.args = {};

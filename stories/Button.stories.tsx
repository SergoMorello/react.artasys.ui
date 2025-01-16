import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from '../src/Button';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Button',
  className: 'btn normal-btn'
};

export const Secondary = Template.bind({});
Secondary.args = {
};

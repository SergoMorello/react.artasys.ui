import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { ICheckbox } from '../src/Checkbox/Checkbox';

export default {
  title: 'UI/Checkbox',
  component: Checkbox,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ICheckbox> = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "placeholder"
};

export const Secondary = Template.bind({});
Secondary.args = {
};

import { Meta, StoryFn } from '@storybook/react';
import Input, { IInput } from '../src/Input/Input';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    onClick: { action: 'clicked' },
    placeholder: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<IInput> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Текст'
};

export const Secondary = Template.bind({});
Secondary.args = {
};

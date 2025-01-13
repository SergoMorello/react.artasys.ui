import { Meta, StoryFn } from '@storybook/react';
import Spinner, { type SpinnerProps } from '../src/Spinner';

export default {
  title: 'UI/Spinner',
  component: Spinner,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<SpinnerProps> = (args) => <Spinner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

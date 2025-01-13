import { Meta, StoryFn } from '@storybook/react';
import Progress, { IProgress } from '../src/Progress/Progress';

export default {
  title: 'UI/Progress',
  component: Progress,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IProgress> = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

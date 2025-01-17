import { Meta, StoryFn } from '@storybook/react';
import Loading, { type LoadingProps } from '../src/Loading';

export default {
  title: 'UI/Loading',
  component: Loading,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<LoadingProps> = (args) => <Loading {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

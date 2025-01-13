import { Meta, StoryFn } from '@storybook/react';
import Form, { IForm } from '../../src/Form/Form';

export default {
  title: 'UI/Form',
  component: Form,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IForm> = (args) => <Form {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

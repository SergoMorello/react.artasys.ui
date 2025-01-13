import { Meta, StoryFn } from '@storybook/react';
import Items, { IItems } from '../../src/Dropdown/Items';

export default {
  title: 'UI/Dropdown/Items',
  component: Items,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IItems> = (args) => <Items {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

import { Meta, StoryFn } from '@storybook/react';
import Item, { IItem } from '../../src/Dropdown/Item';

export default {
  title: 'UI/Dropdown/Item',
  component: Item,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IItem> = (args) => <Item {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

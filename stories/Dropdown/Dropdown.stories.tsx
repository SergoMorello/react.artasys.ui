import { Meta, StoryFn } from '@storybook/react';
import Dropdown, { IDropdown } from '../../src/Dropdown/Dropdown';
import DropdownItem from '../../src/Dropdown/Item'; // Предположим, что у вас есть компонент DropdownItem

export default {
  title: 'UI/Dropdown',
  component: Dropdown,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IDropdown> = (args) => <Dropdown {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Click me',
  items: [
    <DropdownItem key="1">Option 1</DropdownItem>,
    <DropdownItem key="2">Option 2</DropdownItem>,
    <DropdownItem key="3">Option 3</DropdownItem>,
  ],
  direction: 'down',
  position: 'right',
  arrow: true,
  split: false,
  hover: false,
  disabled: false,
  enableRerenderItems: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Hover me',
  items: [
    <DropdownItem key="4">Option 4</DropdownItem>,
    <DropdownItem key="5">Option 5</DropdownItem>,
  ],
  direction: 'down',
  position: 'left',
  arrow: false,
  split: true,
  hover: true,
  disabled: false,
  enableRerenderItems: true,
};
import { Meta, StoryFn } from '@storybook/react';
import Option from '../../src/Select/Option'; // Предположим, что Option находится в этом же каталоге
import Optgroup from '../../src/Select/Optgroup'; // Аналогично для Optgroup
import Select, { ISelect } from '../../src/Select/Select';

export default {
  title: 'UI/Select/Select',
  component: Select,
  argTypes: {
    onChangeSelect: { action: 'change-select' },
  },
} as Meta;

const Template: StoryFn<ISelect> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: [
    <Option key="opt1" value="option1">Option 1</Option>,
    <Option key="opt2" value="option2">Option 2</Option>,
  ]
};

export const WithOptgroup = Template.bind({});
WithOptgroup.args = {
  children: [
    <Optgroup key="grp1" label="Group 1">
      <Option key="opt1" value="option1">Option 1</Option>
      <Option key="opt2" value="option2">Option 2</Option>
    </Optgroup>,
    <Optgroup key="grp2" label="Group 2">
      <Option key="opt3" value="option3">Option 3</Option>
      <Option key="opt4" value="option4">Option 4</Option>
    </Optgroup>
  ]
};
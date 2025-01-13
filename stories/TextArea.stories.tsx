import { Meta, StoryFn } from '@storybook/react';
import TextArea, { ITextArea } from '../src/TextArea/TextArea';

export default {
  title: 'UI/TextArea',
  component: TextArea,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<ITextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

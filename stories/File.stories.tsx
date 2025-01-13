import { Meta, StoryFn } from '@storybook/react';
import File, { TFile } from '../src/File/File';

export default {
  title: 'UI/File',
  component: File,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<TFile> = (args) => <File {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Загрузить файл'
};

export const Secondary = Template.bind({});
Secondary.args = {
};

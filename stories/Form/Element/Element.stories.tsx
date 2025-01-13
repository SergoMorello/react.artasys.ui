import { Meta, StoryFn } from '@storybook/react';
import Element, { IElement } from '../../../src/Form/Element/Element';

export default {
  title: 'UI/Form/Element',
  component: Element,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: StoryFn<IElement> = (args) => <Element {...args} />;

export const Primary = Template.bind({});
Primary.args = {
};

export const Secondary = Template.bind({});
Secondary.args = {
};

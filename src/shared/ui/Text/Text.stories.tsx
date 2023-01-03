import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title Lorem Title',
  text: 'Text Description Lorem',
};

export const Error = Template.bind({});
Error.args = {
  title: 'Title Lorem Title',
  text: 'Text Description Lorem',
  theme: TextTheme.ERROR,
};

export const onlyTitle = Template.bind({});
onlyTitle.args = {
  title: 'Title Lorem Title',
};

export const onlyText = Template.bind({});
onlyText.args = {
  text: 'Text Description Lorem',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title Lorem Title',
  text: 'Text Description Lorem',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTitleDark = Template.bind({});
onlyTitleDark.args = {
  title: 'Title Lorem Title',
};
onlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const onlyTextDark = Template.bind({});
onlyTextDark.args = {
  text: 'Text Description Lorem',
};
onlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
  title: 'Title Lorem Title',
  text: 'Text Description Lorem',
  size: TextSize.L,
};

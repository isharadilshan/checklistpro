import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import FormInputController from './';

export default {
  title: 'components/atoms/FormInputController',
  component: FormInputController,
} as ComponentMeta<typeof FormInputController>;

export const Basic: ComponentStory<typeof FormInputController> = (args) => (
  <NativeBaseProvider>
    <FormInputController {...args} />
  </NativeBaseProvider>
);

Basic.args = {
  name: 'Form Input' || undefined,
  defaultValue: 'Default Value',
  error: 'ERROR',
  type: 'text',
  control: {},
};

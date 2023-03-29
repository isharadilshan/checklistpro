import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {useForm} from 'react-hook-form';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import FormInputController from './';

export default {
  title: 'components/atoms/FormInputController',
  component: FormInputController,
} as ComponentMeta<typeof FormInputController>;

export const Basic: ComponentStory<typeof FormInputController> = () => {
  const {control} = useForm();

  const args = {
    name: 'Form Input' || undefined,
    defaultValue: 'Default Value',
    placeholder: 'Enter Text',
    type: 'text',
    control: control,
  };
  return (
    <NativeBaseProvider>
      <FormInputController {...args} />
    </NativeBaseProvider>
  );
};

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {useForm} from 'react-hook-form';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import FormSelectController from './';

export default {
  title: 'components/atoms/FormSelectController',
  component: FormSelectController,
} as ComponentMeta<typeof FormSelectController>;

export const Basic: ComponentStory<typeof FormSelectController> = () => {
  const {control} = useForm();

  const args = {
    name: 'Form Input' || undefined,
    defaultValue: 'Default Value',
    error: 'ERROR',
    type: 'text',
    control: control,
    items: [
      {key: '1', label: 'Food', value: 'FOOD'},
      {key: '2', label: 'Medical', value: 'MEDICAL'},
      {key: '3', label: 'Transport', value: 'TRANSPORT'},
    ],
  };
  return (
    <NativeBaseProvider>
      <FormSelectController {...args} />
    </NativeBaseProvider>
  );
};

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AlertToast from './';

export default {
  title: 'components/molecules/AlertToast',
  component: AlertToast,
} as ComponentMeta<typeof AlertToast>;

export const Basic: ComponentStory<typeof AlertToast> = () => {
  const args = {
    id: '12344',
    status: 'IN-PROGRESS',
    variant: 'solid',
    title: 'Title',
    description: 'Toast description',
  };
  return (
    <NativeBaseProvider>
      <AlertToast {...args} />
    </NativeBaseProvider>
  );
};

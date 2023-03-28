import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Logo from './';

export default {
  title: 'components/atoms/Logo',
  component: Logo,
} as ComponentMeta<typeof Logo>;

export const Basic: ComponentStory<typeof Logo> = () => (
  <NativeBaseProvider>
    <Logo />
  </NativeBaseProvider>
);

import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import redux from '../../../redux/store';

import ListEmptySkeleton from './';

export default {
  title: 'components/organisms/ListEmptySkeleton',
  component: ListEmptySkeleton,
} as ComponentMeta<typeof ListEmptySkeleton>;

export const Basic: ComponentStory<typeof ListEmptySkeleton> = () => {
  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <ListEmptySkeleton />
      </NativeBaseProvider>
    </Provider>
  );
};

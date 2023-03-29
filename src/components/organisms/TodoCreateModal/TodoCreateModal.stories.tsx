import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import redux from '../../../redux/store';

import TodoCreateModal from './';

export default {
  title: 'components/organisms/TodoCreateModal',
  component: TodoCreateModal,
} as ComponentMeta<typeof TodoCreateModal>;

export const Basic: ComponentStory<typeof TodoCreateModal> = () => {
  const args = {
    modalVisible: true,
    closeModal: () => {},
  };
  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <TodoCreateModal {...args} />
      </NativeBaseProvider>
    </Provider>
  );
};

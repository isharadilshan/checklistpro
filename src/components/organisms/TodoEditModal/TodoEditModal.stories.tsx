import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import redux from '../../../redux/store';

import TodoEditModal from './';

export default {
  title: 'components/organisms/TodoEditModal',
  component: TodoEditModal,
} as ComponentMeta<typeof TodoEditModal>;

export const Basic: ComponentStory<typeof TodoEditModal> = () => {
  const args = {
    modalVisible: true,
    selectedTodo: {
      title: 'Todo Edit Title',
      description: 'Todo Edit Description',
      status: 'INPROGRESS',
      category: 'FOOD',
      createdDate: Date.now(),
      updatedDate: Date.now(),
    },
    closeModal: () => {},
  };
  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <TodoEditModal {...args} />
      </NativeBaseProvider>
    </Provider>
  );
};

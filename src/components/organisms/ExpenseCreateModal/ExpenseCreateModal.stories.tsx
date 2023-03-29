import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import redux from '../../../redux/store';

import ExpenseCreateModal from './';

export default {
  title: 'components/organisms/ExpenseCreateModal',
  component: ExpenseCreateModal,
} as ComponentMeta<typeof ExpenseCreateModal>;

export const Basic: ComponentStory<typeof ExpenseCreateModal> = () => {
  const args = {
    modalVisible: true,
    closeModal: () => {},
  };
  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <ExpenseCreateModal {...args} />
      </NativeBaseProvider>
    </Provider>
  );
};

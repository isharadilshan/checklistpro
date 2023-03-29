import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import redux from '../../../redux/store';

import ExpenseEditModal from './';

export default {
  title: 'components/organisms/ExpenseEditModal',
  component: ExpenseEditModal,
} as ComponentMeta<typeof ExpenseEditModal>;

export const Basic: ComponentStory<typeof ExpenseEditModal> = () => {
  const args = {
    modalVisible: true,
    selectedExpense: {
      title: 'Expense Edit Title',
      description: 'Expense Edit Description',
      amount: 300,
      category: 'FOOD',
      createdDate: Date.now(),
      updatedDate: Date.now(),
      latitude: 23.3566,
      longitude: 12.2356,
    },
    closeModal: () => {},
  };
  return (
    <Provider store={redux.store}>
      <NativeBaseProvider>
        <ExpenseEditModal {...args} />
      </NativeBaseProvider>
    </Provider>
  );
};

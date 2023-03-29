import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import ExpenseListItem from './';

export default {
  title: 'components/molecules/ExpenseListItem',
  component: ExpenseListItem,
} as ComponentMeta<typeof ExpenseListItem>;

export const Basic: ComponentStory<typeof ExpenseListItem> = () => {
  const args = {
    id: 'EXPENSE_ID',
    title: 'Expense Title',
    description: 'Expense Description',
    amount: 402,
    category: 'MEDICAL',
    createdDate: 1680101338199,
    updatedDate: 1680101338199,
    latitude: 12.3455,
    longitude: 12.3455,
    hideButtons: false,
    onPressEdit: () => {},
    onPressDelete: () => {},
  };
  return (
    <NativeBaseProvider>
      <ExpenseListItem {...args} />
    </NativeBaseProvider>
  );
};

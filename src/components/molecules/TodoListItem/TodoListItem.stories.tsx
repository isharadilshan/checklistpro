import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import TodoListItem from './';

export default {
  title: 'components/molecules/TodoListItem',
  component: TodoListItem,
} as ComponentMeta<typeof TodoListItem>;

export const Basic: ComponentStory<typeof TodoListItem> = () => {
  const args = {
    id: 'TODO_ID',
    title: 'Toto Title',
    description: 'Todo Description',
    status: 'INPROGRESS',
    category: 'MEDICAL',
    createdDate: 1680101338199,
    updatedDate: 1680101338199,
    hideButtons: false,
    onPressEdit: () => {},
    onPressDelete: () => {},
  };
  return (
    <NativeBaseProvider>
      <TodoListItem {...args} />
    </NativeBaseProvider>
  );
};

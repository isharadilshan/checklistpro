import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import TodoAgendaItem from './';

export default {
  title: 'components/molecules/TodoAgendaItem',
  component: TodoAgendaItem,
} as ComponentMeta<typeof TodoAgendaItem>;

export const Basic: ComponentStory<typeof TodoAgendaItem> = () => {
  const args = {
    height: 150,
    data: 'Agenda Title@Agenda Description@PERSONAL@DONE',
  };
  return (
    <NativeBaseProvider>
      <TodoAgendaItem {...args} />
    </NativeBaseProvider>
  );
};

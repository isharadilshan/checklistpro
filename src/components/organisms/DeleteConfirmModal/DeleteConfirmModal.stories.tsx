import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import DeleteConfirmationModal from './';

export default {
  title: 'components/organisms/DeleteConfirmationModal',
  component: DeleteConfirmationModal,
} as ComponentMeta<typeof DeleteConfirmationModal>;

export const Basic: ComponentStory<typeof DeleteConfirmationModal> = () => {
  const args = {
    modalVisible: true,
    closeModal: () => {},
    onDeleteConfirm: () => {},
  };
  return (
    <NativeBaseProvider>
      <DeleteConfirmationModal {...args} />
    </NativeBaseProvider>
  );
};

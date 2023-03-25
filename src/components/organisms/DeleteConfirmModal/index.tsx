import React, {useRef} from 'react';
import {Button, Modal, Text, useToast} from 'native-base';
import {useDispatch} from 'react-redux';

type DeleteConfirmModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
  onDeleteConfirm: () => void;
};

const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({
  modalVisible,
  closeModal,
  onDeleteConfirm,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <Modal
      size={'xl'}
      avoidKeyboard
      isOpen={modalVisible}
      onClose={closeModal}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <Modal.Content style={{backgroundColor: '#141E30'}}>
        <Modal.CloseButton />
        <Modal.Header
          style={{
            borderBottomWidth: 0,
            backgroundColor: '#141E30',
          }}
          _text={{color: 'white'}}
        >
          Delete Expense
        </Modal.Header>
        <Modal.Body>
          <Text color={'white'}>Are you sure to delete modal</Text>
        </Modal.Body>
        <Modal.Footer
          style={{
            borderTopWidth: 0,
            backgroundColor: '#141E30',
          }}
        >
          <Button.Group>
            <Button variant="ghost" colorScheme="blueGray" onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={onDeleteConfirm}>Confirm</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteConfirmModal;

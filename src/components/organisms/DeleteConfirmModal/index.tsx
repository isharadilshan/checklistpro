import React, {useRef} from 'react';
import {Button, Modal, Text} from 'native-base';
import createStyle from './styles';

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
  const styles = createStyle();

  return (
    <Modal
      size={'xl'}
      avoidKeyboard
      isOpen={modalVisible}
      onClose={closeModal}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
    >
      <Modal.Content style={styles.modalContent}>
        <Modal.CloseButton />
        <Modal.Header
          style={styles.modalHeader}
          _text={{color: 'blueGray.200'}}
        >
          Delete Expense
        </Modal.Header>
        <Modal.Body>
          <Text color={'blueGray.200'}>Are you sure to delete modal</Text>
        </Modal.Body>
        <Modal.Footer style={styles.modalFooter}>
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

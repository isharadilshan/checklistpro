import React, {useRef, useState} from 'react';
import {Button, Modal, Text, useToast} from 'native-base';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import DatePicker from 'react-native-date-picker';
import FormInputController from '../../atoms/FormInputController';
import FormSelectController from '../../atoms/FormSelectController';
import AlertToast from '../../molecules/AlertToast';
import {fetchTodoList} from '../../../redux/actions/todo';
import {createTodo} from '../../../services/todos';
import createStyle from './styles';

enum FormFields {
  title = 'title',
  description = 'description',
  category = 'category',
  status = 'status',
  createdDate = 'createdDate',
  updatedDate = 'updatedDate',
}

type FormData = {
  title: string;
  description: string;
  category: string;
  status: string;
  createdDate: number;
  updatedDate: number;
};

type TodoCreateModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
};

const TodoCreateModal: React.FC<TodoCreateModalProps> = ({
  modalVisible,
  closeModal,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const styles = createStyle();
  const [date, setDate] = useState(new Date());

  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>();

  const onSave = handleSubmit(
    async ({title, description, category, status}) => {
      const data = {
        title: title,
        description: description,
        category: category,
        status: status,
        createdDate: Date.now(),
        updatedDate: date.getTime(),
      };
      try {
        await createTodo(data);
        //@ts-ignore
        dispatch(fetchTodoList());
        closeModal();
        reset();
        setDate(new Date());
        toast.show({
          render: () => {
            return (
              <AlertToast
                title="Successfully created todo"
                description={''}
                variant="top-accent"
                status="success"
              />
            );
          },
        });
      } catch (err: any) {
        toast.show({
          render: () => {
            return (
              <AlertToast
                title="Something went wrong"
                description={`${err}`}
                variant="top-accent"
                status="error"
              />
            );
          },
        });
      }
    },
  );

  return (
    <Modal
      size={'xl'}
      avoidKeyboard
      isOpen={modalVisible}
      onClose={closeModal}
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      useRNModal={true}
    >
      <Modal.Content style={styles.modalContent}>
        <Modal.CloseButton />
        <Modal.Header style={styles.modalHeader} _text={{color: 'white'}}>
          Create New
        </Modal.Header>
        <Modal.Body>
          <FormInputController
            control={control}
            error={errors.title}
            label={'Title'}
            placeholder={'Add title'}
            name={FormFields.title}
            rules={{
              required: 'Title required',
            }}
          />
          <FormInputController
            control={control}
            error={errors.description}
            label={'Description'}
            placeholder={'Add description'}
            name={FormFields.description}
            rules={{
              required: 'Description required',
            }}
          />
          <FormSelectController
            control={control}
            error={errors.category}
            label={'Category'}
            placeholder={'Select category'}
            name={FormFields.category}
            rules={{
              required: 'Category required',
            }}
            items={[
              {key: '1', label: 'Personal', value: 'PERSONAL'},
              {key: '2', label: 'Work', value: 'WORK'},
            ]}
          />
          <FormSelectController
            control={control}
            error={errors.status}
            label={'Status'}
            placeholder={'Select status'}
            name={FormFields.status}
            rules={{
              required: 'Status required',
            }}
            items={[
              {key: '1', label: 'Todo', value: 'TODO'},
              {key: '2', label: 'In-Progress', value: 'INPROGRESS'},
              {key: '3', label: 'Hold', value: 'HOLD'},
              {key: '4', label: 'Done', value: 'DONE'},
            ]}
          />
          <Text color="gray.400">Due Date</Text>
          <DatePicker
            date={date}
            onDateChange={setDate}
            textColor={'#60a5fa'}
          />
        </Modal.Body>
        <Modal.Footer style={styles.modalFooter}>
          <Button.Group>
            <Button variant="ghost" colorScheme="blueGray" onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={onSave}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default TodoCreateModal;

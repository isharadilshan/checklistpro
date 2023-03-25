import React, {useRef} from 'react';
import {Button, Modal, useToast, View} from 'native-base';
import {useForm} from 'react-hook-form';
import FormInputController from '../../atoms/FormInputController';
import FormSelectController from '../../atoms/FormSelectController';
import AlertToast from '../../molecules/AlertBanner';
import {createExpense} from '../../../services/expenses';
import {useDispatch} from 'react-redux';
import {fetchTodoList} from '../../../redux/actions/todo';
import {createTodo} from '../../../services/todos';

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
        updatedDate: Date.now(),
      };
      try {
        const response = await createTodo(data);
        //@ts-ignore
        await dispatch(fetchTodoList());
        closeModal();
        reset();
      } catch (err: any) {
        console.log('error', err.response.data);
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
      <Modal.Content style={{backgroundColor: '#141E30'}}>
        <Modal.CloseButton />
        <Modal.Header
          style={{
            borderBottomWidth: 0,
            backgroundColor: '#141E30',
          }}
          _text={{color: 'white'}}
        >
          Create New
        </Modal.Header>
        <Modal.Body>
          <FormInputController
            control={control}
            error={errors.title}
            label={'Title'}
            name={FormFields.title}
            rules={{
              required: 'Title required',
            }}
          />
          <FormInputController
            control={control}
            error={errors.description}
            label={'Description'}
            name={FormFields.description}
            rules={{
              required: 'Description required',
            }}
          />
          <FormSelectController
            control={control}
            error={errors.category}
            label={'Category'}
            name={FormFields.category}
            rules={{
              required: 'Category required',
            }}
            items={[
              {key: 1, label: 'Personal', value: 'PERSONAL'},
              {key: 2, label: 'Work', value: 'WORK'},
            ]}
          />
          <FormSelectController
            control={control}
            error={errors.status}
            label={'Status'}
            name={FormFields.status}
            rules={{
              required: 'Status required',
            }}
            items={[
              {key: 1, label: 'Todo', value: 'TODO'},
              {key: 2, label: 'In-Progress', value: 'INPROGRESS'},
              {key: 3, label: 'Hold', value: 'HOLD'},
              {key: 4, label: 'Done', value: 'DONE'},
            ]}
          />
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
            <Button onPress={onSave}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default TodoCreateModal;

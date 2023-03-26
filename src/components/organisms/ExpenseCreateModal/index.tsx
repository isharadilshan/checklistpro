import React, {useRef} from 'react';
import {Button, Modal, useToast, View} from 'native-base';
import {useForm} from 'react-hook-form';
import FormInputController from '../../atoms/FormInputController';
import FormSelectController from '../../atoms/FormSelectController';
import AlertToast from '../../molecules/AlertBanner';
import {createExpense} from '../../../services/expenses';
import {fetchExpenseList} from '../../../redux/actions/expense';
import {useDispatch} from 'react-redux';

enum FormFields {
  title = 'title',
  description = 'description',
  amount = 'amount',
  category = 'category',
  createdDate = 'createdDate',
  updatedDate = 'updatedDate',
  latitude = 'latitude',
  longitude = 'longitude',
}

type FormData = {
  title: string;
  description: string;
  amount: number;
  category: string;
  createdDate: number;
  updatedDate: number;
  latitude: number;
  longitude: number;
};

type ExpenseCreateModalProps = {
  modalVisible: boolean;
  closeModal: () => void;
};

const ExprenseCreateModal: React.FC<ExpenseCreateModalProps> = ({
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
    async ({title, description, amount, category}) => {
      const data = {
        title: title,
        description: description,
        amount: parseFloat(amount),
        category: category,
        createdDate: Date.now(),
        updatedDate: Date.now(),
        latitude: 12.34,
        longitude: 12.34,
      };
      try {
        await createExpense(data);
        //@ts-ignore
        await dispatch(fetchExpenseList());
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
          <FormInputController
            control={control}
            error={errors.amount}
            label={'Amount'}
            name={FormFields.amount}
            type={'text'}
            rules={{
              required: 'Amount required',
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
              {key: '1', label: 'Food', value: 'FOOD'},
              {key: '2', label: 'Medical', value: 'MEDICAL'},
              {key: '3', label: 'Transport', value: 'TRANSPORT'},
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

export default ExprenseCreateModal;

import React, {useEffect, useRef} from 'react';
import {Button, Modal, useToast} from 'native-base';
import {useDispatch} from 'react-redux';
import {useForm} from 'react-hook-form';
import FormInputController from '../../atoms/FormInputController';
import FormSelectController from '../../atoms/FormSelectController';
import AlertToast from '../../molecules/AlertToast';
import {updateExpense} from '../../../services/expenses';
import {fetchExpenseList} from '../../../redux/actions/expense';
import {isNumber} from '../../../utils/helper/Validator';
import createStyle from './styles';

enum FormFields {
  title = 'title',
  description = 'description',
  amount = 'amount',
  category = 'category',
}

type FormData = {
  title: string;
  description: string;
  amount: string;
  category: string;
};

type ExpenseCreateModalProps = {
  modalVisible: boolean;
  selectedExpense: any;
  closeModal: () => void;
};

const ExprenseEditModal: React.FC<ExpenseCreateModalProps> = ({
  modalVisible,
  selectedExpense,
  closeModal,
}) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const styles = createStyle();
  const {
    control,
    handleSubmit,
    setValue,
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
        createdDate: selectedExpense.createdDate,
        updatedDate: Date.now(),
        latitude: selectedExpense.latitude,
        longitude: selectedExpense.longitude,
      };
      try {
        await updateExpense(selectedExpense?.id, data);
        closeModal();
        reset();
        //@ts-ignore
        dispatch(fetchExpenseList());
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

  useEffect(() => {
    setValue('title', selectedExpense?.title);
    setValue('description', selectedExpense?.description);
    setValue('amount', `${selectedExpense?.amount}`);
    setValue('category', selectedExpense?.category);
  }, [selectedExpense]);

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
        <Modal.Header
          style={styles.modalHeader}
          _text={{color: 'blueGray.200'}}
        >
          Edit Expense
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
              validate: (value) =>
                isNumber(value) || 'Only numerics are allowed',
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
        <Modal.Footer style={styles.modalFooter}>
          <Button.Group>
            <Button variant="ghost" onPress={closeModal}>
              Cancel
            </Button>
            <Button onPress={onSave}>Save</Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default ExprenseEditModal;

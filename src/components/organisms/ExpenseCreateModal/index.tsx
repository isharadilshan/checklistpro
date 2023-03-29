import React, {useEffect, useRef, useState} from 'react';
import {Button, Modal, useToast} from 'native-base';
import {useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import Geolocation, {GeoPosition} from 'react-native-geolocation-service';
import FormInputController from '../../atoms/FormInputController';
import FormSelectController from '../../atoms/FormSelectController';
import AlertToast from '../../molecules/AlertToast';
import {createExpense} from '../../../services/expenses';
import {fetchExpenseList} from '../../../redux/actions/expense';
import {isNumber} from '../../../utils/helper/Validator';
import createStyle from './styles';

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
  amount: string;
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
  const [location, setLocation] = useState<GeoPosition | null>(null);
  const toast = useToast();
  const dispatch = useDispatch();
  const styles = createStyle();
  const {
    control,
    handleSubmit,
    formState: {errors},
    reset,
  } = useForm<FormData>();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation(position);
      },
      (error) => {
        console.log(error);
      },
      {
        accuracy: {
          android: 'high',
          ios: 'best',
        },
        timeout: 15000,
        maximumAge: 10000,
        distanceFilter: 0,
      },
    );
  }, []);

  const onSave = handleSubmit(
    async ({title, description, amount, category}) => {
      const data = {
        title: title,
        description: description,
        amount: parseFloat(amount),
        category: category,
        createdDate: Date.now(),
        updatedDate: Date.now(),
        latitude: location?.coords?.latitude || 12.0234,
        longitude: location?.coords?.longitude || 102.3563,
      };
      try {
        await createExpense(data);
        closeModal();
        //@ts-ignore
        dispatch(fetchExpenseList());
        reset();
        toast.show({
          render: () => {
            return (
              <AlertToast
                title="Successfully created expense"
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
        <Modal.Header
          style={styles.modalHeader}
          _text={{color: 'blueGray.200'}}
        >
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
          <FormInputController
            control={control}
            error={errors.amount}
            label={'Amount'}
            placeholder={'Add amount'}
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
            placeholder={'Select Category'}
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

export default ExprenseCreateModal;

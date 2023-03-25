import React from 'react';
import {FormControl} from 'native-base';
import {
  Control,
  Controller,
  FieldError,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/FontAwesome';

type SelectItem = {
  key: string;
  label: string;
  value: string;
};

interface FormSelectControllerProps<FieldsType> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<any>;
  items?: Array<SelectItem>;
}

interface Props<FieldsType> extends FormSelectControllerProps<FieldsType> {
  label?: string;
  placeholder?: string;
}

const FormSelectController = <FieldsType,>({
  error,
  rules,
  label,
  control,
  name,
  placeholder,
  items = [],
}: Props<FieldsType>) => {
  const isInvalid = error != null;
  const isRequired = rules != null && 'required' in rules;

  return (
    <FormControl
      isInvalid={isInvalid}
      isRequired={isRequired}
      style={{marginBottom: 10}}
    >
      {label != null && <FormControl.Label>{label}</FormControl.Label>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, value}}) => (
          <ModalSelector
            data={items}
            initValue={value}
            accessible={true}
            scrollViewAccessibilityLabel={'Scrollable options'}
            cancelButtonAccessibilityLabel={'Cancel Button'}
            onChange={(option) => onChange(option.label)}
          />
        )}
      />
      {error != null && (
        <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormSelectController;

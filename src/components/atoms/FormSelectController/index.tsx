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
import createStyle from './styles';

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

  const styles = createStyle();

  return (
    <FormControl
      isInvalid={isInvalid}
      isRequired={isRequired}
      style={styles.controlWrapper}
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
            onChange={(option) => onChange(option.value)}
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

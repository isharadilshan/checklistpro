import {FormControl, Input} from 'native-base';
import React from 'react';
import {
  Control,
  Controller,
  FieldError,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import createStyle from './styles';
interface FormInputControllerProps<FieldsType> {
  name: Path<FieldsType>;
  defaultValue?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  control: Control<any>;
  type?: 'text' | 'password';
}

interface Props<FieldsType> extends FormInputControllerProps<FieldsType> {
  label?: string;
  placeholder?: string;
}

const FormInputController = <FieldsType,>({
  error,
  rules,
  label,
  control,
  name,
  placeholder,
  type = 'text',
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
        render={({field: {onChange, onBlur, value}}) => (
          <Input
            size={'lg'}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={(val) => onChange(val)}
            style={{color: 'white'}}
            type={type}
          />
        )}
      />
      {error != null && (
        <FormControl.ErrorMessage>{error.message}</FormControl.ErrorMessage>
      )}
    </FormControl>
  );
};

export default FormInputController;

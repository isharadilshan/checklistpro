import React from 'react';
import {Platform} from 'react-native';
import {
  Button,
  Center,
  KeyboardAvoidingView,
  Text,
  useToast,
} from 'native-base';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import FormInputController from '../../components/atoms/FormInputController';
import Logo from '../../components/atoms/Logo';
import {SIGNUP} from '../../routes/route-paths';
import createStyle from './styles';
import {validateEmail, validatePassword} from '../../utils/helper/Validator';
import {loginWithEmailPassword} from '../../services/auth';
import AlertToast from '../../components/molecules/AlertToast';
import store from '../../redux/store';
import {setUserAuthenticated} from '../../redux/actions/auth';

enum FormFields {
  email = 'email',
  password = 'password',
}

type FormData = {
  email: string;
  password: string;
};

const LoginScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const navigation = useNavigation();
  const styles = createStyle();
  const toast = useToast();

  const onSubmit = handleSubmit(async ({email, password}) => {
    try {
      const response = await loginWithEmailPassword(email, password);
      if (response?.user) {
        store.store.dispatch(setUserAuthenticated(true));
      }
    } catch (err) {
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
  });

  const onPressSignUp = () => {
    navigation.navigate(SIGNUP as never);
  };

  return (
    <KeyboardAvoidingView
      h={{
        base: '400px',
        lg: 'auto',
      }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.screenWrapper}
    >
      <Logo />
      <FormInputController
        control={control}
        error={errors.email}
        label={'Email'}
        name={FormFields.email}
        rules={{
          required: 'Email required',
          validate: (value) => validateEmail(value) || 'Use a valid email',
        }}
      />
      <FormInputController
        control={control}
        error={errors.password}
        label={'Password'}
        name={FormFields.password}
        type={'password'}
        rules={{
          required: 'Password required',
          validate: (value) =>
            validatePassword(value) || 'Use a valid password',
        }}
      />
      <Button mt="4" onPress={onSubmit}>
        {'Sign in'}
      </Button>
      <Center style={styles.textWrapper}>
        <Text style={styles.normalText}>
          Don't you have an account?{`    `}
        </Text>
        <Text style={styles.highlightText} onPress={onPressSignUp}>
          Signup
        </Text>
      </Center>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

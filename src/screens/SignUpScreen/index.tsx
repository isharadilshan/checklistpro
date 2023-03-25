import React from 'react';
import {Button, Center, Text, useToast} from 'native-base';
import {useForm} from 'react-hook-form';
import {useNavigation} from '@react-navigation/native';
import FormInputController from '../../components/atoms/FormInputController';
import ScreenWrapper from '../../components/wrappers/ScreenWrapper';
import Logo from '../../components/atoms/Logo';
import {LOGIN} from '../../routes/route-paths';
import AlertToast from '../../components/molecules/AlertBanner';
import store from '../../redux/store';
import {setUserAuthenticated} from '../../redux/actions/auth';
import {signUpWithEmailPassword} from '../../services/auth';
import {validateEmail, validatePassword} from '../../utils/helper/Validator';
import createStyle from './styles';

enum FormFields {
  email = 'email',
  password = 'password',
  confirmPassword = 'confirmPassword',
}

type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
};

const SignUpScreen: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormData>();
  const navigation = useNavigation();
  const toast = useToast();
  const styles = createStyle();

  const onSubmit = handleSubmit(async ({email, password, confirmPassword}) => {
    if (password == confirmPassword) {
      try {
        const response = await signUpWithEmailPassword(email, password);
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
    } else {
      toast.show({
        render: () => {
          return (
            <AlertToast
              title="Passwords do not match"
              description="Passwords not matching, please try again"
              variant="top-accent"
              status="error"
            />
          );
        },
      });
    }
  });

  const onPressSignUp = () => {
    navigation.navigate(LOGIN as never);
  };

  return (
    <ScreenWrapper noPaddings={false}>
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
      <FormInputController
        control={control}
        error={errors.password}
        label={'Confirm password'}
        name={FormFields.confirmPassword}
        type={'password'}
        rules={{
          required: 'Password required',
          validate: (value) =>
            validatePassword(value) || 'Use a valid password',
        }}
      />
      <Button mt="4" onPress={onSubmit}>
        {'Sign Up'}
      </Button>
      <Center style={styles.textWrapper}>
        <Text style={styles.normalText}>Already have an account?{`    `}</Text>
        <Text style={styles.highlightText} onPress={onPressSignUp}>
          Login
        </Text>
      </Center>
    </ScreenWrapper>
  );
};

export default SignUpScreen;

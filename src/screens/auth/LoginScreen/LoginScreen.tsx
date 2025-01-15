import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Box } from '../../../components/Box/Box';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { Control, Controller, useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { FormPasswordInput } from '../../../components/FormInput/FormPasswordInput';
import { EMAIL_REGEX } from '../../../components/FormInput/regex';

type StackProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export type LoginScreenFormType = {
  email: string;
  password: string;
};
export function LoginScreen({ navigation }: StackProps) {
  const { control, handleSubmit, formState } = useForm<LoginScreenFormType>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: LoginScreenFormType) {}

  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Box alignItems="center" mb="s86">
        <Icon name="logo" />
        <Text>Acesse sua conta.</Text>
      </Box>

      <FormTextInput
        control={control}
        name="email"
        rules={{
          pattern: {
            value: EMAIL_REGEX,
            message: 'E-mail inválido',
          },
        }}
        label="E-mail"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        rules={{
          minLength: {
            value: 8,
            message: 'Senha deve conter no mínimo 8 caracteres',
          },
        }}
        label="Senha"
        boxProps={{ mb: 's8' }}
      />

      <Text mb="s36" semiBold onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Acessar"
        mb="s24"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />

      <Text textAlign="center" onPress={navigateToSignUpScreen}>
        Criar minha conta
      </Text>
    </Screen>
  );
}

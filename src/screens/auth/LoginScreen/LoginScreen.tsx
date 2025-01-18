import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Box,
  Button,
  FormPasswordInput,
  FormTextInput,
  Icon,
  Screen,
  Text,
} from '@components';
import { AuthStackScreenProps } from '@routes';

import { loginSchema, LoginSchema } from './loginSchema';

export function LoginScreen({
  navigation,
}: AuthStackScreenProps<'LoginScreen'>) {
  const { control, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: LoginSchema) {
    console.log(data);
  }

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
        label="E-mail"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
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

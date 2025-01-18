import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Button,
  FormPasswordInput,
  FormTextInput,
  Icon,
  Screen,
  Text,
} from '@components';
import { AuthStackScreenProps } from '@routes';

import { signUpSchema, SignUpSchema } from './signUpSchema';

export function SignUpScreen({
  navigation,
}: AuthStackScreenProps<'SignUpScreen'>) {
  const { control, handleSubmit, formState } = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: SignUpSchema) {
    navigation.navigate('SignAddressScreen');
  }

  return (
    <Screen canGoBack headerComponent={<Icon name="logo" />} scrollable>
      <Text textAlign="center" mb="s40">
        Criar sua conta.
      </Text>

      <FormTextInput
        control={control}
        name="fullName"
        autoCapitalize="words"
        label="Nome Completo"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Escolha uma senha"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="confirmPassword"
        label="Confirme a senha"
        boxProps={{ mb: 's40' }}
      />

      <Button
        title="Próximo passo"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />
    </Screen>
  );
}

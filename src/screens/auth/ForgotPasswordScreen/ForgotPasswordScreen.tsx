import React from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Screen, Text, Icon, Button, FormTextInput } from '@components';
import { useResetNavigationSuccess } from '@hooks';
import { AuthStackScreenProps } from '@routes';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';

export function ForgotPasswordScreen({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  navigation,
}: AuthStackScreenProps<'ForgotPasswordScreen'>) {
  const { reset } = useResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
    mode: 'onChange',
  });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onSubmit(data: ForgotPasswordSchema) {
    reset({
      icon: {
        name: 'messageRound',
      },
      title: 'Enviamos as instruções para seu e-mail',
      description:
        'Clique no link enviado no seu e-mail para recuperar sua senha',
    });
  }

  return (
    <Screen canGoBack headerComponent={<Icon name="logo" />}>
      <Text textAlign="center" mb="s40">
        Recupere sua conta.
      </Text>

      <FormTextInput
        control={control}
        name="email"
        label="Digite seu e-mail"
        boxProps={{ mb: 's36' }}
      />

      <Button
        title="Recuperar conta"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}

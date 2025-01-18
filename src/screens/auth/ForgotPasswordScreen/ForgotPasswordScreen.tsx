import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';

import { Button } from '../../../components/Button/Button';

import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';

import {
  forgotPasswordSchema,
  ForgotPasswordSchema,
} from './forgotPasswordSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthStackScreenProps } from '../../../routes/navigationType';

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

import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { EMAIL_REGEX } from '../../../components/FormInput/regex';

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

type ForgotPasswordScreenFormType = {
  email: string;
};

export function ForgotPasswordScreen({ navigation }: StackProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, handleSubmit, formState } =
    useForm<ForgotPasswordScreenFormType>({
      defaultValues: {
        email: '',
      },
      mode: 'onChange',
    });
  function onSubmit(data: ForgotPasswordScreenFormType) {
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
        rules={{
          pattern: {
            value: EMAIL_REGEX,
            message: 'E-mail inválido',
          },
        }}
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

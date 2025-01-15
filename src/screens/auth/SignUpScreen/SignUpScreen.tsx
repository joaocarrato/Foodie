import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { EMAIL_REGEX } from '../../../components/FormInput/regex';
import { FormPasswordInput } from '../../../components/FormInput/FormPasswordInput';

type StackProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

type SignUpScreenFormType = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export function SignUpScreen({ navigation }: StackProps) {
  const { control, handleSubmit, formState } = useForm<SignUpScreenFormType>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: SignUpScreenFormType) {
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
        rules={{
          required: 'Nome completo é obrigatório',
        }}
        label="Nome Completo"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="email"
        rules={{
          pattern: {
            value: EMAIL_REGEX,
            message: 'E-mail obrigatório',
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
        label="Escolha uma senha"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="confirmPassword"
        rules={{
          minLength: {
            value: 8,
            message: 'Senha deve ser igual',
          },
        }}
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

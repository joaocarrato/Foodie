import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { FormPasswordInput } from '../../../components/FormInput/FormPasswordInput';
import { signUpSchema, SignUpSchema } from './signUpSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type StackProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: StackProps) {
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

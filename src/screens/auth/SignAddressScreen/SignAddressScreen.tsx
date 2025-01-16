import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { Icon } from '../../../components/Icon/Icon';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';
import { signAddressSchema, SignAddressSchema } from './signAddressSchema';
import { zodResolver } from '@hookform/resolvers/zod';

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'SignAddressScreen'
>;

export function SignAddressScreen({ navigation }: StackProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, handleSubmit, formState } = useForm<SignAddressSchema>({
    resolver: zodResolver(signAddressSchema),
    defaultValues: {
      address: '',
      neighbor: '',
      uf: '',
      cep: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: SignAddressSchema) {
    console.log(data);
    reset({
      icon: {
        name: 'checkRound',
      },
      title: 'Sua conta foi criada com sucesso!',
      description: 'Agora é só fazer login na nossa plataforma',
    });
  }

  return (
    <Screen canGoBack headerComponent={<Icon name="logo" />} scrollable>
      <Text textAlign="center" mb="s40">
        Informe seu endereço.
      </Text>

      <FormTextInput
        control={control}
        name="address"
        label="Endereço"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="neighbor"
        label="Bairro"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="uf"
        label="UF"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="cep"
        label="CEP"
        keyboardType="numeric"
        boxProps={{ mb: 's40' }}
      />

      <Button
        title="Criar minha conta"
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </Screen>
  );
}

import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { useResetNavigationSuccess } from '../../../hooks/useResetNavigationSuccess';

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'SignAddressScreen'
>;

type SignAddressScreenFormType = {
  address: string;
  neighbor: string;
  uf: string;
  cep: string;
};

export function SignAddressScreen({ navigation }: StackProps) {
  const { reset } = useResetNavigationSuccess();
  const { control, handleSubmit, formState } =
    useForm<SignAddressScreenFormType>({
      defaultValues: {
        address: '',
        neighbor: '',
        uf: '',
        cep: '',
      },
      mode: 'onChange',
    });

  function onSubmit(data: SignAddressScreenFormType) {
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
        rules={{ required: 'Campo obrigatório' }}
        label="Endereço"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="neighbor"
        rules={{ required: 'Campo obrigatório' }}
        label="Bairro"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="uf"
        rules={{ required: 'Campo obrigatório' }}
        label="UF"
        boxProps={{ mb: 's23' }}
      />

      <FormTextInput
        control={control}
        name="cep"
        rules={{ required: 'Campo obrigatório' }}
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

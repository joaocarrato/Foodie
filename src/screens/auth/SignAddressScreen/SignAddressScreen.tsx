import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'SignAddressScreen'
>;

export function SignAddressScreen({ navigation }: StackProps) {
  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
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

      <TextInput label="Endereço" boxProps={{ mb: 's23' }} />

      <TextInput label="Bairro" boxProps={{ mb: 's23' }} />
      <TextInput label="UF" boxProps={{ mb: 's23' }} />
      <TextInput label="CEP" boxProps={{ mb: 's40' }} keyboardType="numeric" />

      <Button title="Criar minha conta" onPress={navigateToSuccessScreen} />
    </Screen>
  );
}

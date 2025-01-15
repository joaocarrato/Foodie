import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type StackProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({ navigation }: StackProps) {
  function navigateToSignAddressScreen() {
    navigation.navigate('SignAddressScreen');
  }
  return (
    <Screen canGoBack headerComponent={<Icon name="logo" />} scrollable>
      <Text textAlign="center" mb="s40">
        Criar sua conta.
      </Text>

      <TextInput label="Nome Completo" boxProps={{ mb: 's23' }} />

      <TextInput label="E-mail" boxProps={{ mb: 's23' }} />

      <PasswordInput label="Escolha uma senha" boxProps={{ mb: 's23' }} />

      <PasswordInput label="Confirme a senha" boxProps={{ mb: 's40' }} />

      <Button title="Próximo passo" onPress={navigateToSignAddressScreen} />
    </Screen>
  );
}

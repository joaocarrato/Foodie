import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Text } from '../../../components/Text/Text';
import { Icon } from '../../../components/Icon/Icon';
import { TextInput } from '../../../components/TextInput/TextInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type StackProps = NativeStackScreenProps<
  RootStackParamList,
  'ForgotPasswordScreen'
>;

export function ForgotPasswordScreen({ navigation }: StackProps) {
  function navigateToSuccessScreen() {
    navigation.navigate('SuccessScreen', {
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

      <TextInput label="Digite seu e-mail" boxProps={{ mb: 's36' }} />

      <Button title="Recuperar conta" onPress={navigateToSuccessScreen} />
    </Screen>
  );
}

import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Box } from '../../../components/Box/Box';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { TextInput } from '../../../components/TextInput/TextInput';
import { PasswordInput } from '../../../components/PasswordInput/PasswordInput';
import { Button } from '../../../components/Button/Button';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../routes/Routes';

type StackProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

export function LoginScreen({ navigation }: StackProps) {
  function navigateToSignUpScreen() {
    navigation.navigate('SignUpScreen');
  }

  function navigateToForgotPasswordScreen() {
    navigation.navigate('ForgotPasswordScreen');
  }

  return (
    <Screen scrollable>
      <Box alignItems="center" mb="s86">
        <Icon name="logo" />
        <Text>Acesse sua conta.</Text>
      </Box>

      <TextInput label="E-mail" boxProps={{ mb: 's23' }} />

      <PasswordInput label="Senha" boxProps={{ mb: 's8' }} />
      <Text mb="s36" semiBold onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button title="Acessar" mb="s24" />

      <Text textAlign="center" onPress={navigateToSignUpScreen}>
        Criar minha conta
      </Text>
    </Screen>
  );
}

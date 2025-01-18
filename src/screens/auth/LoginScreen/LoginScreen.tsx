import React from 'react';
import { Screen } from '../../../components/Screen/Screen';
import { Box } from '../../../components/Box/Box';
import { Icon } from '../../../components/Icon/Icon';
import { Text } from '../../../components/Text/Text';
import { Button } from '../../../components/Button/Button';
import { useForm } from 'react-hook-form';
import { FormTextInput } from '../../../components/FormInput/FormTextInput';
import { FormPasswordInput } from '../../../components/FormInput/FormPasswordInput';
import { loginSchema, LoginSchema } from './loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthStackScreenProps } from '../../../routes/navigationType';

export function LoginScreen({
  navigation,
}: AuthStackScreenProps<'LoginScreen'>) {
  const { control, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  function onSubmit(data: LoginSchema) {
    console.log(data);
  }

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

      <FormTextInput
        control={control}
        name="email"
        label="E-mail"
        boxProps={{ mb: 's23' }}
      />

      <FormPasswordInput
        control={control}
        name="password"
        label="Senha"
        boxProps={{ mb: 's8' }}
      />

      <Text mb="s36" semiBold onPress={navigateToForgotPasswordScreen}>
        Esqueci minha senha
      </Text>

      <Button
        title="Acessar"
        mb="s24"
        disabled={!formState.isValid}
        onPress={handleSubmit(onSubmit)}
      />

      <Text textAlign="center" onPress={navigateToSignUpScreen}>
        Criar minha conta
      </Text>
    </Screen>
  );
}

import React from 'react';
import { IconProps } from '../components/Icon/Icon';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignAddressScreen } from '../screens/auth/SignAddressScreen/SignAddressScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';

export type AuthStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SignAddressScreen: undefined;
  ForgotPasswordScreen: undefined;
  SuccessScreen: {
    icon: Pick<IconProps, 'name'>;
    title: string;
    description: string;
  };
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{ headerShown: false, fullScreenGestureEnabled: true }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SignAddressScreen" component={SignAddressScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
    </Stack.Navigator>
  );
}

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { IconProps } from '@components';
import {
  ForgotPasswordScreen,
  LoginScreen,
  SignAddressScreen,
  SignUpScreen,
  SuccessScreen,
} from '@screens';

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

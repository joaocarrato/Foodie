import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from '../screens/auth/LoginScreen/LoginScreen';
import { SignUpScreen } from '../screens/auth/SignUpScreen/SignUpScreen';
import { SignAddressScreen } from '../screens/auth/SignAddressScreen/SignAddressScreen';
import { ForgotPasswordScreen } from '../screens/auth/ForgotPasswordScreen/ForgotPasswordScreen';
import { SuccessScreen } from '../screens/auth/SuccessScreen/SuccessScreen';
import { IconProps } from '../components/Icon/Icon';

export type RootStackParamList = {
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

const Stack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';
import { Box } from '../Box/Box';
import { Icon } from '../Icon/Icon';


import {
  ScrollViewContainer,
  ViewContainer,
} from './components/ScreenContainer';


interface ScreenProps {
  children: React.ReactNode;
  headerComponent?: React.ReactElement;
  canGoBack?: boolean;
  scrollable?: boolean;
}

export function Screen({
  children,
  headerComponent,
  scrollable,
  canGoBack,
}: ScreenProps) {
  const { top } = useAppSafeArea();
  const navigation = useNavigation();

  const Container = scrollable ? ScrollViewContainer : ViewContainer;
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Container>
        <Box px="s24" style={{ paddingTop: top }}>
          {canGoBack && (
            <Box flexDirection="row" alignItems="center">
              <Icon name="back" onPress={navigation.goBack} />
              <Box ml="s48">{headerComponent}</Box>
            </Box>
          )}
          {children}
        </Box>
      </Container>
    </KeyboardAvoidingView>
  );
}

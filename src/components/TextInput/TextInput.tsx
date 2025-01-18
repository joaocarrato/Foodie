import React, { useRef } from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';

import { useAppTheme } from '../../hooks/useAppTheme';
import { Box, BoxProps } from '../Box/Box';
import { $fontFamily, $fontSizes, Text } from '../Text/Text';

export interface TextInputProps extends RNTextInputProps {
  label: string;
  errorMessage?: string;
  boxProps?: BoxProps;
  rightComponent?: React.ReactElement;
}

export function TextInput({
  label,
  boxProps,
  errorMessage,
  rightComponent,
  ...textInputProps
}: TextInputProps) {
  const inputRef = useRef<RNTextInput>(null);
  const { colors } = useAppTheme();
  const $textInputContainer: BoxProps = {
    height: 50,
    borderWidth: errorMessage ? 2 : 1,
    p: 's8',
    borderRadius: 's4',
    backgroundColor: 'input',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: errorMessage ? 'red' : 'inputContrast',
  };

  function inputFocus() {
    inputRef.current?.focus();
  }

  return (
    <Box {...boxProps}>
      <Pressable onPress={inputFocus}>
        <Text mb="s4">{label}</Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            autoCapitalize="none"
            placeholderTextColor={colors.gray1}
            {...textInputProps}
            style={$textInputStyle}
          />
          {rightComponent && <Box mr="s10">{rightComponent}</Box>}
        </Box>
        {errorMessage && (
          <Text
            textColor="red"
            preset="paragraphMedium"
            style={{ fontWeight: 500 }}
            mt="s4">
            {errorMessage}
          </Text>
        )}
      </Pressable>
    </Box>
  );
}

const $textInputStyle: TextStyle = {
  flexShrink: 1,
  flexGrow: 1,
  padding: 0,
  fontFamily: $fontFamily.regular,
  ...$fontSizes.paragraphMedium,
};

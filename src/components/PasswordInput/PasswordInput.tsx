import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

export type PasswordInputProps = Omit<
  TextInputProps,
  'secureTextEntry' | 'rightComponent'
>;

export function PasswordInput({ ...rest }: PasswordInputProps) {
  const [isSecureText, setIsSecureText] = useState(true);

  function toggleSecureText() {
    setIsSecureText(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureText}
      textContentType="none"
      rightComponent={
        <Icon
          name={isSecureText ? 'eyeOn' : 'eyeOff'}
          onPress={toggleSecureText}
          color="gray1"
        />
      }
      {...rest}
    />
  );
}

import React, { useState } from 'react';
import { TextInput, TextInputProps } from '../TextInput/TextInput';
import { Icon } from '../Icon/Icon';

type PasswordInputProps = Omit<
  TextInputProps,
  'secureTextEntry' | 'rightComponent'
>;

export function PasswordInput({ ...rest }: PasswordInputProps) {
  const [isSecureText, setIsSecureText] = useState(false);

  function toggleSecureText() {
    setIsSecureText(prev => !prev);
  }
  return (
    <TextInput
      secureTextEntry={isSecureText}
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

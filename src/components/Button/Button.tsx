import React from 'react';

import { ThemeColors } from '../../theme/theme';
import { ActivityIndicator } from '../ActivityIndicator/ActivityIndicator';
import { TouchableOpacityBox, TouchableOpacityBoxProps } from '../Box/Box';
import { Text } from '../Text/Text';

type ButtonPresets = 'primary' | 'secondary';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: ThemeColors;
}

const buttonPreset: Record<ButtonPresets, ButtonUI> = {
  primary: {
    container: {
      backgroundColor: 'primary',
    },
    content: 'primaryContrast',
  },
  secondary: {
    container: {
      backgroundColor: 'gray2',
    },
    content: 'gray1',
  },
};

interface ButtonProps extends TouchableOpacityBoxProps {
  title: string;
  loading?: boolean;
  preset?: ButtonPresets;
  disabled?: boolean;
}

export function Button({
  title,
  preset = 'primary',
  loading,
  disabled = false,
  ...buttonProps
}: ButtonProps) {
  const buttonPresets =
    buttonPreset[(preset = disabled ? 'secondary' : 'primary')];

  return (
    <TouchableOpacityBox
      disabled={disabled || loading}
      {...$buttonStyle}
      {...buttonProps}
      {...buttonPresets.container}>
      {loading ? (
        <ActivityIndicator color={buttonPresets.content} />
      ) : (
        <Text textColor={buttonPresets.content}>{title}</Text>
      )}
    </TouchableOpacityBox>
  );
}

const $buttonStyle: TouchableOpacityBoxProps = {
  py: 's14',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 's4',
};

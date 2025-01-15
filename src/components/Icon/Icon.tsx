import React from 'react';
import { LogoIcon } from '../../assets/icons/LogoIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { ThemeColors } from '../../theme/theme';
import { Pressable } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';
import { BackIcon } from '../../assets/icons/BackIcon';
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
import { MessageRoundIcon } from '../../assets/icons/MessageRoundIcon';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({ name, color = 'black', size, onPress }: IconProps) {
  const SVGIcon = iconRegistry[name];
  const { colors } = useAppTheme();

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={10}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }
  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  logo: LogoIcon,
  eyeOn: EyeOnIcon,
  eyeOff: EyeOffIcon,
  back: BackIcon,
  checkRound: CheckRoundIcon,
  messageRound: MessageRoundIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;

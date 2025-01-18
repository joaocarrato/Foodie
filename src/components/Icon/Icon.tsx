import React from 'react';
import { Pressable } from 'react-native';

import { BackIcon } from '../../assets/icons/BackIcon';
import { CheckRoundIcon } from '../../assets/icons/CheckRoundIcon';
import { EyeOffIcon } from '../../assets/icons/EyeOffIcon';
import { EyeOnIcon } from '../../assets/icons/EyeOnIcon';
import { FavoriteIcon } from '../../assets/icons/FavoriteIcon';
import { HomeIcon } from '../../assets/icons/HomeIcon';
import { LogoIcon } from '../../assets/icons/LogoIcon';
import { MessageRoundIcon } from '../../assets/icons/MessageRoundIcon';
import { OrderIcon } from '../../assets/icons/OrderIcon';
import { ProfileIcon } from '../../assets/icons/ProfileIcon';
import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeColors } from '../../theme/theme';

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
  favorite: FavoriteIcon,
  profile: ProfileIcon,
  order: OrderIcon,
  home: HomeIcon,
};

type IconType = typeof iconRegistry;
type IconName = keyof IconType;

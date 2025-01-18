import React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

import { useAppTheme } from '../../hooks/useAppTheme';
import { ThemeColors } from '../../theme/theme';

interface Props {
  color?: ThemeColors;
}

export function ActivityIndicator({ color = 'white' }: Props) {
  const { colors } = useAppTheme();
  return <RNActivityIndicator color={colors[color]} />;
}

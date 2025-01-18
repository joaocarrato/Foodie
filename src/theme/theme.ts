import { ViewStyle } from 'react-native';

import { createTheme } from '@shopify/restyle';

export const palette = {
  red: '#ED5359',
  gray1: '#5d6275',
  gray2: '#a6abbc',
  gray3: '#e5ecfc',
  offWhite: '#f4f7fe',
  white: '#ffffff',
  green: '#37c682',
  black: '#000000',
};

export const theme = createTheme({
  colors: {
    ...palette,

    primary: palette.red,
    primaryContrast: palette.white,

    background: palette.gray2,
    backgroundContrast: palette.gray1,

    input: palette.offWhite,
    inputContrast: palette.gray3,
  },
  spacing: {
    s4: 4,
    s6: 6,
    s8: 8,
    s10: 10,
    s12: 12,
    s14: 14,
    s16: 16,
    s20: 20,
    s23: 23,
    s24: 24,
    s28: 28,
    s34: 34,
    s36: 36,
    s40: 40,
    s48: 48,
    s86: 86,
  },
  borderRadii: {
    s4: 4,
  },
  textVariants: {
    defaults: {},
  },
});

export const $shadowProps: ViewStyle = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,

  elevation: 8,
};

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];

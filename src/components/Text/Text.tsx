import { createText } from '@shopify/restyle';
import React from 'react';
import { Theme, ThemeColors } from '../../theme/theme';
import { TextStyle } from 'react-native';
import { useAppTheme } from '../../hooks/useAppTheme';

const SRText = createText<Theme>();
type SRTextProps = React.ComponentProps<typeof SRText>;

interface TextProps extends Omit<SRTextProps, 'color'> {
  preset?: TextVariants;
  bold?: boolean;
  semiBold?: boolean;
  textColor?: ThemeColors;
}

export function Text({
  children,
  style,
  preset = 'paragraphLarge',
  textColor = 'gray1',
  bold,
  semiBold,
  ...srTextProps
}: TextProps) {
  const fontFamily = getFontFamily(bold, semiBold);
  const { colors } = useAppTheme();
  const color = colors[textColor];
  return (
    <SRText
      style={[$fontSizes[preset], { fontFamily }, { color }, style]}
      {...srTextProps}>
      {children}
    </SRText>
  );
}

function getFontFamily(bold?: boolean, semiBold?: boolean) {
  switch (true) {
    case bold:
      return $fontFamily.bold;
    case semiBold:
      return $fontFamily.semiBold;
    default:
      return $fontFamily.regular;
  }
}

type TextVariants = 'paragraphLarge' | 'paragraphMedium';

export const $fontSizes: Record<TextVariants, TextStyle> = {
  paragraphLarge: { fontSize: 16, lineHeight: 18.75 },
  paragraphMedium: { fontSize: 14, lineHeight: 16.41 },
};

export const $fontFamily = {
  bold: 'Roboto Bold',
  boldItalic: 'Roboto BoldItalic',
  italic: 'Roboto Italic',
  light: 'Roboto Light',
  lightItalic: 'Roboto LightItalic',
  medium: 'Roboto Medium',
  mediumItalic: 'Roboto MediumItalic',
  regular: 'Roboto Regular',
  semiBold: 'Roboto SemiBold',
  semiBoldItalic: 'Roboto SemiBoldItalic',
};

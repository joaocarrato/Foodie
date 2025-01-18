import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useAppTheme } from './useAppTheme';

export function useAppSafeArea() {
  const { top, bottom } = useSafeAreaInsets();
  const { spacing } = useAppTheme();

  return {
    top: Math.max(top, spacing.s28),
    bottom: Math.max(bottom, spacing.s28),
  };
}

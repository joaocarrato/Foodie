import React from 'react';

import { Screen, Text } from '@components';
import { AppStackScreenProps } from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SearchScreen(props: AppStackScreenProps<'SearchScreen'>) {
  return (
    <Screen canGoBack>
      <Text>SearchScreen</Text>
    </Screen>
  );
}

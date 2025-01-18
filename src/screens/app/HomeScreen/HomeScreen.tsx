import React from 'react';

import { Button, Icon, Screen, Text } from '@components';
import { AppTabScreenProps } from '@routes';

export function HomeScreen(props: AppTabScreenProps<'HomeScreen'>) {
  return (
    <Screen>
      <Text>Home screen</Text>
      <Icon name="order" color="black" />
      <Button
        title="Navegar"
        onPress={() => props.navigation.navigate('SearchScreen')}
      />
    </Screen>
  );
}

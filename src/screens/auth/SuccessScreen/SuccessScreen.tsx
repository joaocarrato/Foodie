import React from 'react';

import { Box, Button, Icon, Screen, Text } from '@components';
import { AuthStackScreenProps } from '@routes';

export function SuccessScreen({
  route,
  navigation,
}: AuthStackScreenProps<'SuccessScreen'>) {
  return (
    <Screen>
      <Box my="s24">
        <Icon name={route.params.icon.name} color="red" size={60} />
      </Box>

      <Text bold style={{ fontSize: 32, lineHeight: 38.4, color: 'black' }}>
        {route.params.title}
      </Text>

      <Text mt="s16">{route.params.description}</Text>

      <Button title="Voltar ao início" mt="s40" onPress={navigation.goBack} />
    </Screen>
  );
}

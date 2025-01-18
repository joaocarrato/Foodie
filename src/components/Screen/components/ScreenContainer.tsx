import React from 'react';
import { ScrollView, View } from 'react-native';

interface Props {
  children: React.ReactElement;
}

export function ScrollViewContainer({ children }: Props) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{ flex: 1, backgroundColor: 'white' }}
      showsVerticalScrollIndicator={false}>
      {children}
    </ScrollView>
  );
}

export function ViewContainer({ children }: Props) {
  return <View style={{ flex: 1, backgroundColor: 'white' }}>{children}</View>;
}

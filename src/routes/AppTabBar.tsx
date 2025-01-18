import React from 'react';

import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import { useAppSafeArea } from '@hooks';
import { $shadowProps } from '@theme';

import { AppTabBottomTabParamList } from './AppTabNavigator';
import { mapItem } from './mapItem';

export function AppTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const { bottom } = useAppSafeArea();
  return (
    <Box {...$boxWrapper} style={[{ paddingBottom: bottom }, $shadowProps]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const renderItem =
          mapItem[route.name as keyof AppTabBottomTabParamList];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            {...$itemWrapper}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            flex={1}>
            <Icon
              name={renderItem.default.icon}
              size={32}
              color={isFocused ? 'gray1' : 'gray2'}
            />
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}

const $boxWrapper: BoxProps = {
  bg: 'white',
  pt: 's14',
  flexDirection: 'row',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  accessibilityRole: 'button',
  alignItems: 'center',
};

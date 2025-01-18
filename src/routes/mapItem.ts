import { IconProps } from '@components';

import { AppTabBottomTabParamList } from './AppTabNavigator';

export const mapItem: Record<
  keyof AppTabBottomTabParamList,
  {
    default: {
      icon: IconProps['name'];
    };
  }
> = {
  HomeScreen: {
    default: {
      icon: 'home',
    },
  },
  FavoriteScreen: {
    default: {
      icon: 'favorite',
    },
  },
  OrderScreen: {
    default: {
      icon: 'order',
    },
  },
  MyProfileScreen: {
    default: {
      icon: 'profile',
    },
  },
};

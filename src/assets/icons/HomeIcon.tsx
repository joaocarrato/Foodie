import React from 'react';

import Svg, { Path } from 'react-native-svg';

import { IconBase } from '@components';

export function HomeIcon({ size = 32, color = 'black' }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <Path
        d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
        fill={color}
      />
    </Svg>
  );
}

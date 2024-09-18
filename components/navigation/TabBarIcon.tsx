import React from 'react';
import { Image, ImageStyle } from 'react-native';
import { images } from '@/constants';

interface TabBarIconProps {
  name: keyof typeof images;
  focused: boolean;
  style?: ImageStyle;
}

export function TabBarIcon({ name, focused, style }: TabBarIconProps) {
  return (
      <Image
          source={images[name]}
          style={[
            {
              width: 28,
              height: 28,
              opacity: focused ? 1 : 0.5,
              marginBottom: -3,
            },
            style,
          ]}
          resizeMode="contain"
      />
  );
}
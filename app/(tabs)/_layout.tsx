import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#176FF2',
        headerShown: false,
        tabBarShowLabel: false,
          tabBarStyle: {
            height: 72,
          backgroundColor: '#fff',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
      },

      }}>
      <Tabs.Screen
        name="index"
        options={{
        title: 'Explore',

          tabBarIcon: ({ focused }) => (
              <TabBarIcon name="Home" focused={focused} />
          ),
        }}
      />
        <Tabs.Screen
            name="tickets"
            options={{
                title: 'Tickets',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="Ticket" focused={focused} />
                ),
            }}
        />
        <Tabs.Screen
            name="favorites"
            options={{
                title: 'Favorites',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="Heart" focused={focused} />
                ),
            }}
        />
        <Tabs.Screen
            name="profile"
            options={{
                title: 'Profile',
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon name="Profile" focused={focused} />
                ),
            }}
        />
    </Tabs>
  );
}

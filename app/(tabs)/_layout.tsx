import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: true,
        tabBarButton: HapticTab,
        animation: 'fade',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Fontisto style={{justifyContent: 'center'}} name="home" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
      name="serach"
      options={{
        title: 'Serach',
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="text-search" size={24} color="black" />,
      }}
    />
      <Tabs.Screen
        name="setup"
        options={{
          title: 'Setup',
          tabBarIcon: ({ color }) => <AntDesign name="bars" size={28} color="black" />,
        }}
      />
    </Tabs>
  );
}

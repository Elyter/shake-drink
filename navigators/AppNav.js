import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import HomeNav from './HomeNav';
import AccountNav from './AccountNav';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: '#000000',
          tabBarInactiveBackgroundColor: '#000000',
          tabBarActiveTintColor: '#FF9800',
          tabBarInactiveTintColor: '#757575',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#000000',
          },
        }}
      >
        <Tab.Screen
          name="HomeNav"
          component={HomeNav}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <Entypo name="home" size={24} color="white" />
            ),
          }}
        />
        <Tab.Screen
          name="AccountNav"
          component={AccountNav}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
  );
}

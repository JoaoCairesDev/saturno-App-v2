import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HouseFill from 'react-native-bootstrap-icons/icons/house-fill';
import GearFill from 'react-native-bootstrap-icons/icons/gear-fill';
import PlusCircleFill from 'react-native-bootstrap-icons/icons/plus-circle-fill';

import HomeScreen from './src/screens/home';
import SettingsScreen from './src/screens/settings';
import NewComp from './src/screens/New';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            width: '80%',
            position: 'absolute',
            bottom: 25,
            left: 40,
            right: 30,
            elevation: 0,
            borderRadius: 15,
            height: 60,
            backgroundColor: '#0f232e',
            borderTopColor: 'transparent',
          },
          tabBarActiveTintColor: '#f56725',
          tabBarInactiveTintColor: '#fff',
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <HouseFill size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Nova"
          component={NewComp}
          options={{
            tabBarIcon: ({size, color}) => (
              <PlusCircleFill size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({size, color}) => (
              <GearFill size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

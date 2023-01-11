import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Telas Principais
import Initial from './src/screens/pages/Initial';
import ViewTask from './src/screens/pages/ViewTask';
import Chat from './src/screens/pages/Chat';
import Configs from './src/screens/pages/Configs';
//Login and Register imports
import Login from './src/screens/pages/Login';
import Register from './src/screens/pages/Register';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

//cabeçalho removido com screenOptions

function Home() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        title: '',
        headerTransparent: true,
      }}>
      <Tab.Screen name="Initial" component={Initial} />
      <Tab.Screen name="ViewTask" component={ViewTask} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Configs" component={Configs} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          title: '',
          headerTransparent: true,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

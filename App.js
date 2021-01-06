import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, View } from 'react-native';
// Router
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import MenuScreen from './screens/MenuScreen';
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (

      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home">
            {props => <HomeScreen {...props} />}
          </Tab.Screen>
          <Tab.Screen name="SignIn">
            {props => <SignInScreen {...props} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, View } from 'react-native';
// Router
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Components
import HeaderComponent from './components/header/Header.component';
import HomeComponent from './components/home/Home.component';
import SignInComponent from './components/sign-in/SignIn.component';

const Stack = createStackNavigator();

export default function App() {
  let user = null;

  return (
    <View style={styles.container}>
      <HeaderComponent />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeComponent} options={{ user: user }} />
          <Stack.Screen name="SignIn" component={SignInComponent} options={{ user: user }} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
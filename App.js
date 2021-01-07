import * as React from 'react';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Router
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';

const Tab = createBottomTabNavigator();

const DATA = [
  {
    id: 0,
    title: 'Item 0',
    price: 100,
    desc: 'Description...'
  }
];

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Sign In':
                iconName = focused ? 'log-in' : 'log-in-outline';
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} data={DATA} />}
        </Tab.Screen>
        <Tab.Screen name="Sign In">
          {props => <SignInScreen {...props} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
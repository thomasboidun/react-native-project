import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Router
import 'react-native-gesture-handler';
import { NavigationContainer, Stack } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import DetailScreen from './screens/DetailScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DATA = [
  {
    id: 0,
    imgUri: 'https://www.pokepedia.fr/images/thumb/e/e2/Pok%C3%A9_Ball-RS.png/300px-Pok%C3%A9_Ball-RS.png',
    title: 'Monster Ball',
    desc: 'The most classic of Balls. She has a Ball bonus of 1.',
    price: 200,
  },
  {
    id: 1,
    imgUri: 'https://www.pokepedia.fr/images/thumb/f/f8/Super_Ball-RS.png/150px-Super_Ball-RS.png',
    title: 'Super Ball',
    desc: 'Slightly more effective than the Monster Ball. She has a Ball bonus of 1.5.',
    price: 600,
  },
  {
    id: 2,
    imgUri: 'https://www.pokepedia.fr/images/thumb/b/bd/Hyper_Ball-RS.png/300px-Hyper_Ball-RS.png',
    title: 'Hyper Ball',
    desc: 'A little more efficient than the Super Ball, its Ball bonus is 2.',
    price: 1200,
  },
  {
    id: 3,
    imgUri: 'https://www.pokepedia.fr/images/a/ac/Master_Ball-RS.png',
    title: 'Master Ball',
    desc: 'The ultimate ball, she cannot fail.',
    price: 200000,
  },
  {
    id: 4,
    imgUri: 'https://www.pokepedia.fr/images/thumb/f/fd/Safari_Ball-RS.png/300px-Safari_Ball-RS.png',
    title: 'Safari Ball',
    desc: 'Ball used for capture in Safari Game. Same efficiency as the Super Ball, i.e. 1.5.',
    price: 600,
  },
];

const Root = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
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
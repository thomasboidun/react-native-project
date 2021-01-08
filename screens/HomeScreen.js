import React from 'react';
// Router
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import ItemListScreen from './ItemListScreen';
import ItemDetailScreen from './ItemDetailScreen';

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  console.log(props);

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Item List"}>
          {props => <ItemListScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name={"Item Detail"}>
          {props => <ItemDetailScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen;
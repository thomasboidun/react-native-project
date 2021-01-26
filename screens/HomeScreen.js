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

  const users = props.users;
  const items = props.items;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Item List"}>
          {props => <ItemListScreen {...props} items={items} users={users} />}
        </Stack.Screen>
        <Stack.Screen name={"Item Detail"}>
          {props => <ItemDetailScreen {...props} items={items} users={users} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen;
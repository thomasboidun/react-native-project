import React from 'react';
// Router
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import ItemListScreen from './ItemListScreen';
import ItemDetailScreen from './ItemDetailScreen';
import SellerInfoScreen from './SellerInfoScreen';

const Stack = createStackNavigator();

const HomeScreen = (props) => {
  console.log(props);
  
  const current_user = props.current_user;
  const setCurrentUser = props.setCurrentUser;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Item List"}>
          {props => <ItemListScreen {...props} current_user={current_user} setCurrentUser={setCurrentUser} />}
        </Stack.Screen>
        <Stack.Screen name={"Item Detail"}>
          {props => <ItemDetailScreen {...props} current_user={current_user} setCurrentUser={setCurrentUser} />}
        </Stack.Screen>
        <Stack.Screen name={"Seller Info"}>
          {props => <SellerInfoScreen {...props} current_user={current_user} setCurrentUser={setCurrentUser} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default HomeScreen;
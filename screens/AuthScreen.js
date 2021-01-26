import React from 'react';
// Router
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// Screens
import SignInScreen from './SignInScreen';
import CreateAccountScreen from './CreateAccountScreen';
import ForgottenPasswordScreen from './ForgottenPasswordScreen';

const Stack = createStackNavigator();

const AuthScreen = (props) => {
  console.log(props);

  const users = props.users;
  const addUser = props.addUser;
  const setCurrentUser = props.setCurrentUser;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Sign In"}>
          {props => <SignInScreen {...props} users={users} setCurrentUser={setCurrentUser}/>}
        </Stack.Screen>
        <Stack.Screen name={"Create Account"}>
          {props => <CreateAccountScreen {...props} users={users} addUser={addUser} />}
        </Stack.Screen>
        <Stack.Screen name={"Forgotten Password"}>
          {props => <ForgottenPasswordScreen {...props} users={users}/>}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthScreen;
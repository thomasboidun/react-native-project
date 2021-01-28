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

  const addUser = props.addUser;
  const setCurrentUser = props.setCurrentUser;

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name={"Sign In"}>
          {props => <SignInScreen {...props} setCurrentUser={setCurrentUser} />}
        </Stack.Screen>
        <Stack.Screen name={"Create Account"}>
          {props => <CreateAccountScreen {...props} addUser={addUser} />}
        </Stack.Screen>
        <Stack.Screen name={"Forgotten Password"}>
          {props => <ForgottenPasswordScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AuthScreen;
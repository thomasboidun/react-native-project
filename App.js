import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Router
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from './screens/HomeScreen';
import SignInScreen from './screens/SignInScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const App = (props) => {
  const [user, setUser] = React.useState(null);
  // const [user, setUser] = React.useState({username: 'thomas', password: 'password'});

  let tabName = '';
  user? tabName = 'Account': tabName = 'Sign In';

  const handleTab = (props) => {
    if (user) {
      return(
        <SettingsScreen {...props} user={user} setUser={setUser}/>
      )
    } else {
      return(
        <SignInScreen {...props} user={user} setUser={setUser}/>
      )
    }
  }

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
              case 'Account':
                iconName = focused ? 'person' : 'person-outline';
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
          {props => <HomeScreen {...props} />}
        </Tab.Screen>
        <Tab.Screen name={tabName}>
          {props => handleTab(props)}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
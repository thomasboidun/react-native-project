import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
// Router
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Screens
import HomeScreen from './screens/HomeScreen';
import AuthScreen from './screens/AuthScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

let data = {
  items: [
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
  ],
  users: [
    {
      id: 0,
      username: 'test',
      password: 'test',
      email: 'test.test@test.test',
      phone: '01 23 45 67 89',
    },
    {
      id: 1,
      username: 'tomato',
      password: 'tomato',
      email: 'thomas.boidun@live.fr',
      phone: '06 51 83 04 35',
    }
  ]
};


const App = (props) => {
  const [current_user, setCurrentUser] = React.useState(null);
  const [users, setUsers] = React.useState(data.users);
  const [items, setItems] = React.useState(data.items);

  const addUser = (new_user) => {
    let users_copy = users;
    new_user.id = 0;

    users.forEach(user => {
      if(user.id > new_user.id) {
        new_user.id = user.id + 1;
      }
    })

    users_copy.push(new_user);
    setUsers(users_copy);

    return new_user;
  }

  let tabName = '';
  current_user ? tabName = 'Account' : tabName = 'Sign In';

  const handleTab = (props) => {
    if (current_user) {
      return (
        <SettingsScreen {...props} current_user={current_user} setCurrentUser={setCurrentUser} />
      )
    } else {
      return (
        <AuthScreen {...props} users={users} addUser={addUser} setCurrentUser={setCurrentUser} />
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
          {props => <HomeScreen {...props} items={items} users={users} />}
        </Tab.Screen>
        <Tab.Screen name={tabName}>
          {props => handleTab(props)}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
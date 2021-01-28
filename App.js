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

import { createStore } from 'redux';
import { Provider } from 'react-redux'

const Tab = createBottomTabNavigator();

let data = {
  tags: [
    {
      id: 0,
      name: 'Ball'
    },
    {
      id: 1,
      name: 'Stone'
    }
  ],
  items: [
    {
      id: 0,
      imgUri: 'https://www.pokepedia.fr/images/f/fa/Pok%C3%A9_Ball-PGL.png',
      title: 'Monster Ball',
      tagId: 0,
      desc: 'The most classic of Balls. She has a Ball bonus of 1.',
      price: 200,
      userId: 0,
    },
    {
      id: 1,
      imgUri: 'https://www.pokepedia.fr/images/b/bf/Super_Ball-PGL.png',
      title: 'Super Ball',
      tagId: 0,
      desc: 'Slightly more effective than the Monster Ball. She has a Ball bonus of 1.5.',
      price: 600,
      userId: 0,
    },
    {
      id: 2,
      imgUri: 'https://www.pokepedia.fr/images/3/36/Hyper_Ball-PGL.png',
      title: 'Hyper Ball',
      tagId: 0,
      desc: 'A little more efficient than the Super Ball, its Ball bonus is 2.',
      price: 1200,
      userId: 0,
    },
    {
      id: 3,
      imgUri: 'https://www.pokepedia.fr/images/a/ab/Master_Ball-PGL.png',
      title: 'Master Ball',
      tagId: 0,
      desc: 'The ultimate ball, she cannot fail.',
      price: 200000,
      userId: 0,
    },
    {
      id: 4,
      imgUri: 'https://www.pokepedia.fr/images/6/61/Safari_Ball-PGL.png',
      title: 'Safari Ball',
      tagId: 0,
      desc: 'Ball used for capture in Safari Game. Same efficiency as the Super Ball, i.e. 1.5.',
      price: 600,
      userId: 0,
    },
    {
      id: 5,
      imgUri: 'https://www.pokepedia.fr/images/8/83/Pierre_Feu-PGL.png',
      title: 'Fire Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. It is yellow and orange.',
      price: 3000,
      userId: 1,
    },
    {
      id: 6,
      imgUri: 'https://www.pokepedia.fr/images/9/9a/Pierre_Eau-PGL.png',
      title: 'Water Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. It is of blue color.',
      price: 3000,
      userId: 2,
    },
    {
      id: 8,
      imgUri: 'https://www.pokepedia.fr/images/2/28/Pierre_Plante-PGL.png',
      title: 'Leaf Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. A leaf is drawn on it.',
      price: 3000,
      userId: 5,
    },
    {
      id: 9,
      imgUri: 'https://www.pokepedia.fr/images/5/55/Pierre_Foudre-PGL.png',
      title: 'Thunder Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. A lightning bolt is drawn on it.',
      price: 3000,
      userId: 3,
    },
    {
      id: 10,
      imgUri: 'https://www.pokepedia.fr/images/3/30/Pierre_Lune-PGL.png',
      title: 'Moon Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. It is dark as night.',
      price: 3000,
      userId: 4,
    },
  ],
  users: [
    {
      id: 0,
      username: 'Kurt',
      password: '',
      email: 'kurt@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/6/67/Fargas_anim%C3%A9.png'
    },
    {
      id: 1,
      username: 'Pyro',
      password: '',
      email: 'pyro@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/3/31/Freddy.png'
    },
    {
      id: 2,
      username: 'Rainer',
      password: '',
      email: 'rainer@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/a/ac/Pat.png'
    },
    {
      id: 3,
      username: 'Sparky',
      password: '',
      email: 'sparky@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/8/89/Fr%C3%A8re_de_Michel.png'
    },
    {
      id: 4,
      username: 'Clefable',
      password: '',
      email: 'clefable@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/d/db/EP090_-_M%C3%A9lodelfe_d%27un_dresseur.png'
    },
    {
      id: 5,
      username: 'Ephraim',
      password: '',
      email: 'ephraim@email.com',
      phone: '00 00 00 00 00',
      imgUri: 'https://www.pokepedia.fr/images/thumb/1/1a/Ephram.png/375px-Ephram.png'
    },
  ]
};

const App = (props) => {
  const [current_user, setCurrentUser] = React.useState(null);
  const [users, setUsers] = React.useState(data.users);
  const [items, setItems] = React.useState(data.items);
  const [tags, setTags] = React.useState(data.tags);

  const addUser = (new_user) => {
    let users_copy = users;
    new_user.id = 0;

    users.forEach(user => {
      if (user.id > new_user.id) {
        new_user.id = user.id + 1;
      }
    })

    users_copy.push(new_user);
    setUsers(users_copy);

    return new_user;
  }

  const itemsReducer = (state = { items: data.items }, action) => {
    switch (action.type) {
      default:
        return state;
    }
  }

  let store = createStore(itemsReducer);

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
    <Provider store={store}>
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
            {props => <HomeScreen {...props} tags={tags} items={items} users={users} current_user={current_user} setCurrentUser={setCurrentUser} />}
          </Tab.Screen>
          <Tab.Screen name={tabName}>
            {props => handleTab(props)}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
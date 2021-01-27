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

// import { createStore } from 'redux';

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
      imgUri: 'https://www.pokepedia.fr/images/thumb/e/e2/Pok%C3%A9_Ball-RS.png/300px-Pok%C3%A9_Ball-RS.png',
      title: 'Monster Ball',
      tagId: 0,
      desc: 'The most classic of Balls. She has a Ball bonus of 1.',
      price: 200,
      userId: 0,
    },
    {
      id: 1,
      imgUri: 'https://www.pokepedia.fr/images/thumb/f/f8/Super_Ball-RS.png/150px-Super_Ball-RS.png',
      title: 'Super Ball',
      tagId: 0,
      desc: 'Slightly more effective than the Monster Ball. She has a Ball bonus of 1.5.',
      price: 600,
      userId: 0,
    },
    {
      id: 2,
      imgUri: 'https://www.pokepedia.fr/images/thumb/b/bd/Hyper_Ball-RS.png/300px-Hyper_Ball-RS.png',
      title: 'Hyper Ball',
      tagId: 0,
      desc: 'A little more efficient than the Super Ball, its Ball bonus is 2.',
      price: 1200,
      userId: 0,
    },
    {
      id: 3,
      imgUri: 'https://www.pokepedia.fr/images/a/ac/Master_Ball-RS.png',
      title: 'Master Ball',
      tagId: 0,
      desc: 'The ultimate ball, she cannot fail.',
      price: 200000,
      userId: 0,
    },
    {
      id: 4,
      imgUri: 'https://www.pokepedia.fr/images/thumb/f/fd/Safari_Ball-RS.png/300px-Safari_Ball-RS.png',
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
      userId: 0,
    },
    {
      id: 6,
      imgUri: 'https://www.pokepedia.fr/images/9/9a/Pierre_Eau-PGL.png',
      title: 'Water Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. It is of blue color.',
      price: 3000,
      userId: 0,
    },
    {
      id: 8,
      imgUri: 'https://www.pokepedia.fr/images/2/28/Pierre_Plante-PGL.png',
      title: 'Leaf Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. A leaf is drawn on it.',
      price: 3000,
      userId: 0,
    },
    {
      id: 9,
      imgUri: 'https://www.pokepedia.fr/images/5/55/Pierre_Foudre-PGL.png',
      title: 'Thunder Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. A lightning bolt is drawn on it.',
      price: 3000,
      userId: 0,
    },
    {
      id: 10,
      imgUri: 'https://www.pokepedia.fr/images/3/30/Pierre_Lune-PGL.png',
      title: 'Moon Stone',
      tagId: 1,
      desc: 'A strange stone that makes certain species of Pokémon evolve. It is dark as night.',
      price: 3000,
      userId: 0,
    },
  ],
  users: [
    {
      id: 0,
      username: 'admin',
      password: '',
      email: 'admin@app.com',
      phone: '01 23 45 67 89',
    }
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

  const findUser = (username, password) => {

  };

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
          {props => <HomeScreen {...props} tags={tags} items={items} users={users} current_user={current_user} setCurrentUser={setCurrentUser} />}
        </Tab.Screen>
        <Tab.Screen name={tabName}>
          {props => handleTab(props)}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
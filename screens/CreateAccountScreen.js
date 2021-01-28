import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import { useSelector } from "react-redux";


const CreateAccountScreen = (props) => {
  console.log(props);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const [alert, setAlert] = React.useState({ style: { display: 'none' }, message: '' });

  const USERS = useSelector(state => state.users);
  const addUser = props.addUser;
  // console.log(addUser);

  const createUser = () => {
    console.log('create user start')
    const instance = {
      username: username,
      password: password,
      email: email,
      phone: phone
    }
    console.log('create user instance ok.', instance);

    const errors = USERS.filter(user => user.username.toLowerCase() === instance.username.toLowerCase());

    console.log('errors', errors)

    if (errors.length > 0) {
      console.log('create user error...');
      setAlert({
        style: {
          display: 'flex',
          flex: 1,
          padding: 8,
          color: 'white',
          borderRadius: 2,
          backgroundColor: 'indianred',
          marginBottom: 10,
        },
        message: `Oops! The account with username ${instance.username} already exist. Please, try again with other username.`
      })
    } else {
      console.log('create user ok. next add user...')
      const new_user = addUser(instance);
      props.navigation.navigate('Sign In', { new_user: new_user });
    }
  }

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <Text>Username:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={value => setUsername(value)}
        value={username}
        label='Username'
      />
      <Text>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={value => setPassword(value)}
        value={password}
        label='Password'
      />
      <Text>Email:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={value => setEmail(value)}
        value={email}
        label='Email'
      />
      <Text>Phone:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={value => setPhone(value)}
        value={phone}
        label='Phone'
      />
      <Text style={alert.style}>
        {alert.message}
      </Text>
      <Button
        title="Sign up"
        onPress={() => { createUser() }}
      />
    </View>
  )
}

export default CreateAccountScreen;
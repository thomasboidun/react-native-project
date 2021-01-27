import React from 'react';
import { Text, View, Button, TextInput } from 'react-native';

const CreateAccountScreen = (props) => {
  console.log(props);

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const createUser = () => {
    const instance = {
      username: username,
      password: password,
      email: email,
      phone: phone
    }

    const new_user = props.addUser(instance);
    props.navigation.navigate('Sign In', { new_user: new_user });
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
      <Button
        title="Sign up"
        onPress={() => { createUser() }}
      />
    </View>
  )
}

export default CreateAccountScreen;
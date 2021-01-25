import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';

const SignInScreen = (props) => {
  // console.log(props);

  const DATA = [
    {
      id: 0,
      username: 'thomas',
      password: 'test',
      email: 'thomas.boidun@live.fr',
      phone: '06 51 83 04 35',
    }
  ]

  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [alert, setAlert] = React.useState({style: {display: 'none'}, message: ''});

  return (
    <View style={{ padding: 20, marginVertical: 'auto' }}>
      <Text style={{ fontSize: 32 }}>Hi!</Text>
      <Text style={{ marginBottom: 20 }}>Log in to discover all our features.</Text>

      <Text>Username:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        onChangeText={value => setUsername(value)}
        value={username}
        label='Username'
      />
      <Text>Password:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 5 }}
        onChangeText={value => setPassword(value)}
        value={password}
        label='Password'
        secureTextEntry={true}
      />
      <TouchableHighlight onPress={() => { props.navigation.navigate('Sign up') }}>
        <Text style={{ color: 'cornflowerblue', textDecorationLine: 'underline', marginBottom: 10 }}>Forgotten Password</Text>
      </TouchableHighlight>
      <Text style={ alert.style }>
        { alert.message }
      </Text>
      <Button
        title="Login"
        onPress={() => {
          const user = DATA.filter(user => user.username === username && user.password === password)[0];
          if (user) {
            props.setUser(user);
            props.navigation.navigate('Home');
          } else {
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
              message: 'Oops! Bad login informations. Please, try again.'
            })
          }
        }}
      />
      <View style={{ display: 'block', marginTop: 40 }}>
        <Text style={{ display: 'inline-block', fontWeight: 'bold' }}>Want to join us?&nbsp;</Text>
        <TouchableHighlight style={{ display: 'inline-block' }} onPress={() => { props.navigation.navigate('Create Account') }}>
          <Text style={{ color: 'cornflowerblue', textDecorationLine: 'underline', fontWeight: 'bold' }}>Create an account.</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

// const style = StyleSheet.create({});

export default SignInScreen;
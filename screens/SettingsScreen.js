import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SettingsScreen = (props) => {
  console.log(props);

  const current_user = props.current_user;

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Text style={{ flex: 1, fontSize: 32, marginBottom: 20 }}>{current_user.username}</Text>
        <Ionicons name='settings' size={20} color="gray" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ flex: 25, fontWeight: 'bold' }}>Email:</Text>
        <Text style={{ flex: 75 }}>{current_user.email}</Text>
        <Ionicons name='settings' size={20} color="gray" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ flex: 25, fontWeight: 'bold' }}>Phone:</Text>
        <Text style={{ flex: 75 }}>{current_user.phone}</Text>
        <Ionicons name='settings' size={20} color="gray" />
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Favorite list:</Text>
        <Text>...</Text>
        <Text>See more</Text>
      </View>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold' }}>Latest messages:</Text>
        <Text>...</Text>
        <Text>See more</Text>
      </View>
      <Button
        title="Logout"
        onPress={() => {
          props.setCurrentUser(null);
          props.navigation.navigate('Sign In'); // return console error
        }}
      />
    </View>
  )
}

export default SettingsScreen;
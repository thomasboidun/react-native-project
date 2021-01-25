import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


const SettingsScreen = (props) => {
  console.log(props);
  const USER = props.user;

  return (
    <View style={{ flex: 1, padding: 50 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
        <Text style={{ flex: 1, fontSize: 32, marginBottom: 20 }}>{USER.username}</Text>
        <Ionicons name='settings' size={20} color="gray" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ flex: 25, fontWeight: 'bold' }}>Email:</Text>
        <Text style={{ flex: 75 }}>{USER.email}</Text>
        <Ionicons name='settings' size={20} color="gray" />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <Text style={{ flex: 25, fontWeight: 'bold' }}>Phone:</Text>
        <Text style={{ flex: 75 }}>{USER.phone}</Text>
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
          props.setUser(null);
          props.navigation.navigate('Sign In');
        }}
      />
    </View>
  )
}

export default SettingsScreen;
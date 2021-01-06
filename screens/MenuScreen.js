import React, { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';

function MenuScreen ({ navigation }) {
  console.log(navigation);
  return (
    <View style={style.container}>
      <Button
        onPress={() => { navigation.navigate('Home') }}
        title="The Good Place"
        accessibilityLabel="Go to homepage."
        color="#FF6E14"
      />
      <Button
        onPress={() => { navigation.navigate('SignIn') }}
        title="Sign in"
        accessibilityLabel="Go to sign in form."
        color="#FF6E14"
      />
    </View>
  )
}

const style = StyleSheet.create({
  // add CSS here...
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFF'
  }
})

export default MenuScreen;
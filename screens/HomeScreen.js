import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const HomeScreen = ({ navigation }) => {
  console.log(navigation)
  return (
    <View style={style.container}>
      <Text>HomeComponent works!</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {

  }
})

export default HomeScreen;
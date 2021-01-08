import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const SignInScreen = ({navigation}) => {


  return (
    <View style={style.container}>
    <Text>SignInComponent works!</Text>
    <Button
          onPress={() => { navigation.navigate('Home')}}
          title="retour home"
        />
  </View>
  )
}

const style = StyleSheet.create({
  container: {

  }
});

export default SignInScreen;
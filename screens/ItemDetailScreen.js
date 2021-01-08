import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';

const ItemDetailScreen = (props) => {
  console.log(props);
  const ITEM = props.route.params.item;

  return (
    <View style={style.container}>
      <Text>ItemDetailScreen works!</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default ItemDetailScreen;
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

const Item = ({ title }) => {
  <View style={style.item}>
    <Text>{title}</Text>
  </View>
}

const HomeScreen = (props) => {
  console.log(props.data);

  const renderItem = ({ item }) => {
    <Item title={item.title} />
  }

  return (
    <SafeAreaView style={style.container}>
      <Text>HomeComponent works!</Text>
      <FlatList
        data={props.data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
  item: {

  },
});

export default HomeScreen;
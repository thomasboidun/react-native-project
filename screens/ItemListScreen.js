import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';

const Item = ({ item, navigation, tags }) => {
  // console.log(tags);

  let tag = tags.filter(tag => tag.id === item.tagId)[0];

  // console.log(tag);

  return (
    // container
    <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginBottom: 10, borderRadius: 2, border: '1px solid tomato', backgroundColor: 'white' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 10, }}>
        <Image style={{ width: 90, height: 90, resizeMode: 'contain' }} source={{ uri: item.imgUri }} />
      </View>

      <View style={{ flex: 3 }}>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ position: 'absolute', right: 0, textTransform: 'uppercase', backgroundColor: 'gray', color: 'white', padding: 5, borderRadius: 2 }}>{tag.name}</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
          <Text>${item.price}/unit</Text>
        </View>

        <Button
          onPress={() => { navigation.navigate('Item Detail', { itemId: item.id }) }}
          title="Learn More"
          color="tomato"
          accessibilityLabel={`Learn more about ${item.title}`}
        />

      </View>

    </View>
    // /container
  )
}

const ItemListScreen = (props) => {
  console.log(props);

  const renderItem = ({ item }) => (
    <Item item={item} navigation={props.navigation} tags={props.tags} />
  )

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
        <FlatList
          data={props.items}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </SafeAreaView>
    </ScrollView>
  )
}

// const style = StyleSheet.create({});

export default ItemListScreen;
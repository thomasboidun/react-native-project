import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';

const Item = ({ item, navigation }) => {
  return (
    // container
    <View style={{ flex: 1, padding: 10, marginBottom: 10, borderRadius: 2, border: '1px solid tomato', backgroundColor: 'white' }}>
      {/* header */}
      <View style={{ flexDirection: 'row', marginBottom: 10 }}>
        <Image style={{ width: 55, height: 55, display: 'block', marginRight: 10, }} source={{ uri: item.imgUri }} />
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{item.title}</Text>
          <Text>${item.price}/unit</Text>
        </View>
      </View>
      {/* /header */}
      {/* footer */}
      <View>
        <Button
          onPress={() => { navigation.navigate('Item Detail', { item: item }) }}
          title="Learn More"
          color="tomato"
          accessibilityLabel={`Learn more about ${item.title}`}
        />
      </View>
      {/* /footer */}
    </View>
    // /container
  )
}

const ItemListScreen = (props) => {
  console.log(props);

  const renderItem = ({ item }) => (
    <Item item={item} navigation={props.navigation} />
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
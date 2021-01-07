import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';

const Item = ({ item }) => {
  const accessibilityLabel = `Learn more about ${item.title}`;

  return (
    <View style={style.item}>
      <View style={style.item_header}>
        <Image style={style.item_img} source={{ uri: item.imgUri }} />
      </View>
      <View style={style.item_body}>
        <Text style={style.item_title}>{item.title}</Text>
        <Text style={style.item_desc}>{item.desc}</Text>
        <Text>Price: ${item.price}/unit</Text>
      </View>
      <View style={style.item_footer}>
        <Button
          onPress={() => { console.log(`Learn more about item id: ${item.id}`) }}
          title="Learn More"
          color="tomato"
          accessibilityLabel={accessibilityLabel}
        />
      </View>
    </View>
  )
}

const HomeScreen = (props) => {
  console.log(props.data);

  const renderItem = ({ item }) => (
    <Item item={item} />
  )

  return (
    <View style={style.container}>
      <Text style={style.container_title}>Item list</Text>
      <ScrollView>
      <SafeAreaView style={style.list}>
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </SafeAreaView>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white'
  },
  container_title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  list: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    flex: 1,
    padding: 10,
    borderRadius: 2,
    border: '1px solid tomato',
    boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.25)',
    backgroundColor: 'white',
    marginBottom: 10,
    overflow: 'visible'
  },
  item_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  item_img: {
    width: 55,
    height: 55,
    display: 'block',
    margin: '0 auto',
  },
  item_body: {
    flex: 1,
    marginBottom: 10
  },
  item_title: {
    fontSize: 24,
    fontWeight: 'bold',
  }
});

export default HomeScreen;
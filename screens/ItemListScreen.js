import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView } from 'react-native';

const DATA = [
  {
    id: 0,
    imgUri: 'https://www.pokepedia.fr/images/thumb/e/e2/Pok%C3%A9_Ball-RS.png/300px-Pok%C3%A9_Ball-RS.png',
    title: 'Monster Ball',
    desc: 'The most classic of Balls. She has a Ball bonus of 1.',
    price: 200,
  },
  {
    id: 1,
    imgUri: 'https://www.pokepedia.fr/images/thumb/f/f8/Super_Ball-RS.png/150px-Super_Ball-RS.png',
    title: 'Super Ball',
    desc: 'Slightly more effective than the Monster Ball. She has a Ball bonus of 1.5.',
    price: 600,
  },
  {
    id: 2,
    imgUri: 'https://www.pokepedia.fr/images/thumb/b/bd/Hyper_Ball-RS.png/300px-Hyper_Ball-RS.png',
    title: 'Hyper Ball',
    desc: 'A little more efficient than the Super Ball, its Ball bonus is 2.',
    price: 1200,
  },
  {
    id: 3,
    imgUri: 'https://www.pokepedia.fr/images/a/ac/Master_Ball-RS.png',
    title: 'Master Ball',
    desc: 'The ultimate ball, she cannot fail.',
    price: 200000,
  },
  {
    id: 4,
    imgUri: 'https://www.pokepedia.fr/images/thumb/f/fd/Safari_Ball-RS.png/300px-Safari_Ball-RS.png',
    title: 'Safari Ball',
    desc: 'Ball used for capture in Safari Game. Same efficiency as the Super Ball, i.e. 1.5.',
    price: 600,
  },
];

const Item = ({ item, navigation }) => {
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
          onPress={() => { navigation.navigate('Item Detail', { item: item }) }}
          title="Learn More"
          color="tomato"
          accessibilityLabel={accessibilityLabel}
        />
      </View>
    </View>
  )
}

const ItemListScreen = (props) => {
  console.log(props);

  const renderItem = ({ item }) => (
    <Item item={item} navigation={props.navigation} />
  )

  return (
    <ScrollView style={style.container}>
      <SafeAreaView style={style.list}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        />
      </SafeAreaView>
    </ScrollView>
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
    // boxShadow: '0 0 5px 5px rgba(0, 0, 0, 0.25)',
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

export default ItemListScreen;
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemDetailScreen = (props) => {
  console.log('user:', props.user);
  const ITEM = props.route.params.item;
  const onPress = () => { console.log('onPress') };

  return (
    <View style={style.container}>
      <View style={style.item_header}>
        <Image style={style.item_img} source={{ uri: ITEM.imgUri }} />
      </View>
      <View style={style.item_body}>
        <Text style={style.item_title}>{ITEM.title}</Text>
        <Text style={style.item_desc}>{ITEM.desc}</Text>
        <Text>Price: ${ITEM.price}/unit</Text>
      </View>
      <View style={style.item_footer}>
        <TouchableHighlight onPress={onPress}>
          <View style={style.bgc_orange}>
            <Text style={style.text_white}>
              <Ionicons name='cash-outline' size={14} color='white' />
              &nbsp;Secured payment
              </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <View style={style.bgc_blue}>
            <Text style={style.text_white}>
              <Ionicons name='mail-outline' size={14} color='white' />
              &nbsp;Send a message
              </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <View style={style.bgc_invert_blue}>
            <Text style={style.text_blue}>
              <Ionicons name='call-outline' size={14} color='cornflowerblue' />
              &nbsp;See the phone number
              </Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item_header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 10,
  },
  item_img: {
    width: 110,
    height: 110,
    display: 'block',
    margin: '0 auto',
  },
  item_body: {
    flex: 1,
    // marginBottom: 10
  },
  item_title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  bgc_orange: {
    padding: 8,
    marginBottom: 10,
    borderRadius: 2,
    backgroundColor: 'tomato',
    border: '0px solid black'
  },
  bgc_blue: {
    padding: 8,
    marginBottom: 10,
    borderRadius: 2,
    backgroundColor: 'cornflowerblue',
    border: '0px solid black'
  },
  bgc_invert_blue: {
    padding: 8,
    marginBottom: 10,
    borderRadius: 2,
    backgroundColor: 'white',
    border: '1px solid cornflowerblue'
  },
  text_white: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  text_blue: {
    color: 'cornflowerblue',
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase',
  }
});

export default ItemDetailScreen;
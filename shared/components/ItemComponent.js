import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector } from "react-redux";

const ItemComponent = ({ item, navigation }) => {

    const TAG = useSelector(state => state.tags).filter(tag => tag.id === item.tagId)[0];

  return (
    // container
    <View style={styles.container}>

      <View style={styles.img_wrapper}>
        <Image style={styles.img} source={{ uri: item.imgUri }} />
      </View>

      <View style={{ flex: 3 }}>

        <View>

          <Text
            onPress={() => { navigation.navigate('Item Detail', { itemId: item.id }) }}
            style={{ fontSize: 24, fontWeight: 'bold', color: 'cornflowerblue' }}>
            {item.title}
          </Text>

          <Text style={{ marginBottom: 5 }}>${item.price}/unit</Text>

          <Text style={styles.tag}>
            <Ionicons name='pricetag' size={14} color='white' />
            &nbsp;{TAG.name}
          </Text>
        </View>
      </View>

    </View>
    // /container
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    marginBottom: 10,
    borderRadius: 2,
    border: '0px solid gray',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img_wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    overflow: 'hidden',
  },
  img: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
  },
  tag: {
    display: 'block',
    width: 'max-content',
    padding: 5,
    color: 'white',
    textTransform: 'uppercase',
    borderRadius: 2,
    backgroundColor: 'gray',
  },
});


export default ItemComponent;
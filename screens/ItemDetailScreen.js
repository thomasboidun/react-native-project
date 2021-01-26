import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, StatusBar, ScrollView, TouchableHighlight } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ItemDetailScreen = (props) => {
  // console.log(props);

  const ITEM = props.route.params.item;
  const onPress = () => { console.log('onPress') };

  return (
    // container
    <View style={{ margin: 10, border: '1px solid tomato', borderRadius: 2, backgroundColor: 'white' }}>
      {/* header */}
      <View style={{ justifyContent: 'center', alignItems: 'center', padding: 10, paddingBottom: 0 }}>
        <Image style={{ display: 'block', width: 110, height: 110 }} source={{ uri: ITEM.imgUri }} />
      </View>
      {/* /header */}
      {/* body */}
      <View style={{ padding: 10 }}>
        {/* title */}
        <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 5 }}>{ITEM.title}</Text>
        {/* /title */}
        {/* row */}
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
          <Text style={{ fontWeight: 'bold', flex: 1 }}>Price:</Text>
          <Text style={{ flex: 3 }}>${ITEM.price}/unit</Text>
        </View>
        {/* /row */}
        {/* row */}
        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 0 }}>
          <Text style={{ fontWeight: 'bold', flex: 1 }}>Desc.:</Text>
          <Text style={{ flex: 3 }}>{ITEM.desc}</Text>
        </View>
        {/* /row */}
      </View>
      {/* /body */}
      {/* footer */}
      <View style={{ padding: 10 }}>
        <TouchableHighlight onPress={onPress}>
          <View style={{ padding: 8, marginBottom: 10, borderRadius: 2, backgroundColor: 'tomato', border: '0px solid black' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              <Ionicons name='cash-outline' size={14} color='white' />
              &nbsp;Secured payment
              </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <View style={{ padding: 8, marginBottom: 10, borderRadius: 2, backgroundColor: 'cornflowerblue', border: '0px solid black' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              <Ionicons name='mail-outline' size={14} color='white' />
              &nbsp;Send a message
              </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={onPress}>
          <View style={{ padding: 8, marginBottom: 0, borderRadius: 2, backgroundColor: 'white', border: '1px solid cornflowerblue' }}>
            <Text style={{ color: 'cornflowerblue', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
              <Ionicons name='call-outline' size={14} color='cornflowerblue' />
              &nbsp;See the phone number
              </Text>
          </View>
        </TouchableHighlight>
      </View>
      {/* /footer */}
    </View>
    // /container
  )
}

// const style = StyleSheet.create({});

export default ItemDetailScreen;
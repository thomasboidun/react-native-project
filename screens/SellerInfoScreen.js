import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from 'react-native';
import { useSelector } from "react-redux";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';

const Item = ({ item, navigation, tags }) => {
  let tag = tags.filter(tag => tag.id === item.tagId)[0];

  return (
    // container
    <View style={{ flex: 1, flexDirection: 'row', padding: 10, marginBottom: 10, borderRadius: 2, border: '1px solid tomato', backgroundColor: 'white' }}>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', overflow: 'hidden', marginRight: 10, }}>
        <Image style={{ width: 90, height: 90, resizeMode: 'contain' }} source={{ uri: item.imgUri }} />
      </View>

      <View style={{ flex: 3 }}>

        <View style={{ marginBottom: 10 }}>
          <Text style={{ position: 'absolute', right: 0, textTransform: 'uppercase', backgroundColor: 'gray', color: 'white', padding: 5, borderRadius: 2 }}>
            <Ionicons name='pricetag' size={14} color='white' />
            &nbsp;{tag.name}
          </Text>
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


const SellerInfoScreen = (props) => {
  console.log(props);

  const seller = props.users.filter(user => user.id === props.route.params.sellerId)[0];

  const items = useSelector(state => state.items);

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
        <View style={{ padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: seller.imgUri }}
              style={{ width: 300, height: 200, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>{seller.username}</Text>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Items sold by {seller.username}:</Text>
          </View>
          {
            items.filter(item => {
              return item.userId === seller.id
            }).map(item => {
              return (<Item key={item.id} item={item} navigation={props.navigation} tags={props.tags} />)
            })
          }
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SellerInfoScreen;
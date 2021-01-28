import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Button } from 'react-native';
import { useSelector } from "react-redux";
import { StatusBar } from 'expo-status-bar';

import ItemComponent from '../shared/components/ItemComponent';

const SellerInfoScreen = (props) => {
  console.log(props);

  const SELLER = useSelector(state => state.users).filter(user => user.id === props.route.params.sellerId)[0];

  const ITEMS = useSelector(state => state.items);

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
        <View style={{ padding: 10 }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={{ uri: SELLER.imgUri }}
              style={{ width: 300, height: 200, resizeMode: 'contain' }}
            />
            <Text style={{ fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 5 }}>{SELLER.username}</Text>
          </View>

          <View>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>Items sold by {SELLER.username}:</Text>
          </View>
          {
            ITEMS.filter(item => {
              return item.userId === SELLER.id
            }).map(item => {
              return (<ItemComponent key={item.id} item={item} navigation={props.navigation} tags={props.tags} />)
            })
          }
        </View>

        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}

export default SellerInfoScreen;
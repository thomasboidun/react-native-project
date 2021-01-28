import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, ScrollView } from 'react-native';
import BlockButtonComponent from '../shared/components/BlockButtonComponent';

const ItemDetailScreen = (props) => {
  console.log(props);

  const ITEM = props.items.filter(item => item.id === props.route.params.itemId)[0];
  const SELLER = props.users.filter(user => ITEM.userId === user.id)[0];

  // const current_user = props.current_user;
  // const setCurrentUser = props.setCurrentUser;

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>
        <View>
          <View style={{ margin: 10, border: '1px solid tomato', borderRadius: 2, backgroundColor: 'white' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10, paddingBottom: 0, }}>
              <Image style={{ width: 150, height: 100, resizeMode: 'contain' }} source={{ uri: ITEM.imgUri }} />
            </View>
            <View style={{ padding: 10 }}>
              <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 5 }}>{ITEM.title}</Text>
              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', flex: 1 }}>Price:</Text>
                <Text style={{ flex: 3 }}>${ITEM.price}/unit</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 5 }}>
                <Text style={{ fontWeight: 'bold', flex: 1 }}>Desc.:</Text>
                <Text style={{ flex: 3 }}>{ITEM.desc}</Text>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 0 }}>
                <Text style={{ fontWeight: 'bold', flex: 1 }}>Seller:</Text>
                <Text onPress={() => { props.navigation.navigate('Seller Info', { sellerId: SELLER.id }) }} style={{ flex: 3, fontWeight: 'bold', color: 'cornflowerblue' }}>{SELLER.username}</Text>
              </View>
            </View>
            <BlockButtonComponent {...props} ></BlockButtonComponent>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({});

export default ItemDetailScreen;
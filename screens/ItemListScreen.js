import React, { useState } from 'react';
import { Text, View, SafeAreaView, Image, Button, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { StatusBar } from 'expo-status-bar';
import { useSelector } from "react-redux";
import { Searchbar } from 'react-native-paper';

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

const ItemListScreen = (props) => {
  console.log(props);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const items = useSelector(state => state.items);

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight || 0 }}>

        <View style={{ marginBottom: 10 }}>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        {
          items.filter(item => {
            const title = item.title.toLowerCase();
            const query = searchQuery.toLowerCase();

            return !query || query && title.includes(query)
          }).map(item => {
            return (<Item item={item} navigation={props.navigation} tags={props.tags} />)
          })
        }
        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}

// const style = StyleSheet.create({});

export default ItemListScreen;
import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';

import { StatusBar } from 'expo-status-bar';
import { useSelector } from "react-redux";
import { Searchbar } from 'react-native-paper';

import ItemComponent from '../shared/components/ItemComponent';

const ItemListScreen = (props) => {
  console.log(props);

  // Search
  const [searchQuery, setSearchQuery] = useState('');
  const onChangeSearch = query => setSearchQuery(query);
  // Store
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
            return (<ItemComponent key={item.id} item={item} navigation={props.navigation} />)
          })
        }

        <StatusBar style="auto" />
      </SafeAreaView>
    </ScrollView>
  )
}

// const style = StyleSheet.create({});

export default ItemListScreen;
import React, { useState } from 'react';
import { Text, View, TouchableHighlight, Linking, Platform, Modal, Alert } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { useSelector } from "react-redux";

const BlockButtonComponent = (props) => {
  console.log(props);

  // Store
  const ITEMS = useSelector(state => state.items);
  const ID = props.route.params.itemId;
  const ITEM = ITEMS.filter(item => item.id === ID)[0];

  // const item = props.items.filter(item => item.id === props.route.params.itemId)[0];
  const SELLER = useSelector(state => state.users).filter(user => user.id === ITEM.userId)[0];

  let [modalVisible, setModalVisible] = useState(false);

  const sendMessage = () => {
    // console.log(Platform);
    Platform.OS === 'web' ?
      Linking.openURL(`mailto:${SELLER.email}`) :
      Linking.openURL(`sms:${SELLER.phone}`);
  };

  return (
    <View style={{ padding: 10 }}>
      <Modal
        animationType="slide"
        presentationStyle="fullScreen"
        // transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={{
          margin: 20,
          backgroundColor: "white",
          borderRadius: 20,
          padding: 35,
          alignItems: "center",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}>
          <Text>{SELLER.phone}</Text>
          <TouchableHighlight
            style={{ backgroundColor: "#2196F3" }}
            onPress={() => { setModalVisible(false) }}
          >
            <Text style={{}}>Hide Modal</Text>
          </TouchableHighlight>
        </View>


      </Modal>

      <TouchableHighlight onPress={() => { console.log('payment') }}>
        <View style={{ padding: 8, marginBottom: 10, borderRadius: 2, backgroundColor: 'tomato', border: '0px solid black' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
            <Ionicons name='cash-outline' size={14} color='white' />
            &nbsp;Secured payment
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => { sendMessage() }}>
        <View style={{ padding: 8, marginBottom: 10, borderRadius: 2, backgroundColor: 'cornflowerblue', border: '0px solid black' }}>
          <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
            <Ionicons name='mail-outline' size={14} color='white' />
            &nbsp;Send a message
          </Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight onPress={() => { setModalVisible(true) }}>
        <View style={{ padding: 8, marginBottom: 0, borderRadius: 2, backgroundColor: 'white', border: '1px solid cornflowerblue' }}>
          <Text style={{ color: 'cornflowerblue', fontWeight: 'bold', textAlign: 'center', textTransform: 'uppercase' }}>
            <Ionicons name='call-outline' size={14} color='cornflowerblue' />
              &nbsp;See the phone number
            </Text>
        </View>
      </TouchableHighlight>
    </View>
  )
}

export default BlockButtonComponent;
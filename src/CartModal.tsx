import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput
} from 'react-native'

function QuantityInput() {
  return(
    <View style={{flex: 1}}>
      <Text style={[styles.text, {flex: 1}]}>Quantity:</Text>
      <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 0.75}}>
          <Pressable onPress={() => console.log("decrease quantity")}>
            <Text style={[styles.inputBox, {borderRightWidth: 0, textAlign: 'center', lineHeight: 40, borderTopLeftRadius: 16, borderBottomLeftRadius: 16}]}>
              -
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            value={'1'}
            style={[styles.inputBox, {height: 42}]}
            textAlign='center'
          />
        </View>
        <View style={{flex: 0.75}}>
          <Pressable onPress={() => console.log("increase quantity")}>
            <Text style={[styles.inputBox, {borderLeftWidth: 0, textAlign: 'center', lineHeight: 40, borderTopRightRadius: 16, borderBottomRightRadius: 16}]}>
              +
            </Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}

export function CartModal({modalVisible, setModalVisible, item, restaurantId}) {
    let itemId = item.id;
    let name = item.name;
    let cost = item.cost;
    let desc = item.description;

  // we'll use id and restaurant id to make the API call

  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
        setModalVisible(!modalVisible)
      }}>
      <View style={[styles.centeredView, {flexDirection: 'column'}]}>
        <View style={{flex: 1}}></View>
        <View style={[styles.modalView, {flex: 1, flexDirection: 'column'}]}>
          <View style={{flex: 1.5, width: '100%', flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderBottomWidth: 1}}>
            <View style={{flex: 1, padding: 10}}>
              <Text style={[styles.modalText, {textAlign: 'left'}]}>{name}</Text>
            </View>
            <View style={{flex: 1, padding: 10}}>
              <Pressable onPress={() => {setModalVisible(!modalVisible)}}>
                <Text style={[styles.text, {textAlign: 'right', fontSize: 20}]}>X</Text>
              </Pressable>
            </View>
          </View>
          <View style={{flex: 3, width: '100%', padding: 10}}>
            <View style={{flex: 1}}>
              <Text style={[styles.text, {fontSize: 14}]}>Hello World</Text>
            </View>
            <View style={{flex: 2}}>
              <QuantityInput />
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderTopWidth: 1, padding: 10}}>
            <View style={{flex: 1}}></View>
            <View style={{flex: 1}}>
              <Pressable
                style={styles.addToCartButton}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  console.log('Implement AddToCart!')
                }}
              >
                <Text style={styles.modalButtonText}>Add to Cart</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <View style={{flex: 1}}></View>
      </View>
      </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.4)'
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
     width: 0,
     height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    flex: 1
  },
  modalText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
    },
  addToCartButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: 'bold',
  }
});

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
} from 'react-native'

export function CartModal({modalVisible, setModalVisible}) {
  return (
    <Modal
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed');
        setModalVisible(!modalVisible)
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}> Hello World! </Text>
          <Pressable
            style={styles.modalButtonClose}
            onPress={() => {setModalVisible(!modalVisible)}}
          >
            <Text style={styles.modalButtonText}>Close</Text>
          </Pressable>
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
       margin: 20,
       backgroundColor: 'white',
       borderRadius: 16,
       padding: 35,
       alignItems: 'center',
       shadowColor: '#000',
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.25,
       shadowRadius: 4,
       elevation: 5,
       width: '75%',
       height: '45%'
     },
     modalText: {
       marginBottom: 15,
       textAlign: 'center',
     },
     modalButtonClose: {
       backgroundColor: 'grey',
       borderRadius: 20,
       padding: 10,
       elevation: 2,
       bottom: -200,
       left: -75
     },
     addToCartButton: {
      backgroundColor: 'blue',
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      bottom: -158,
      left: 70
     },
     modalButtonText: {
       color: 'white',
       fontWeight: 'bold',
       textAlign: 'center',
     },
});

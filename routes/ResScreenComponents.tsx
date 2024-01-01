import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  Alert,
} from 'react-native'

export function RestaurantHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View>
      <View style={[styles.topSection, {flexDirection: 'row', justifyContent: 'space-around', padding: 5, paddingLeft: 10}]}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
        <Text style={[styles.text, {width: 300, verticalAlign: 'middle'}]}>{title}</Text>
      </View>
    </View>
  );
}

export function RestaurantFooter({params}) {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
//   const [cart, setCart] = useState([]);
  // either use context provided from App or create Navigator for Restaurant Screen to handle cart

  return (
    <View>
      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed');
          setModalVisible(!modalVisible)
        }}>
        <View style={modalStyles.centeredView}>
          <View style={modalStyles.modalView}>
            <Text style={modalStyles.modalText}> Hello World! </Text>
            <Pressable
              style={modalStyles.modalButtonClose}
              onPress={() => {setModalVisible(!modalVisible)}}
            >
              <Text style={modalStyles.modalButtonText}>Close</Text>
            </Pressable>
            <Pressable
              style={modalStyles.addToCartButton}
              onPress={() => {
                setModalVisible(!modalVisible)
                console.log('Implement AddToCart!')
              }}
            >
              <Text style={modalStyles.modalButtonText}>Add to Cart</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <View style={styles.bottom}>
          {/*}<Pressable style={styles.button} onPress={() => setModalVisible(true)}>*/}
          <Pressable style={styles.button} onPress={() => navigation.navigate('CartScreen')}>
            <View style={styles.buttonText}>
              <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>View Cart</Text>
              <Text style={[styles.text, {right: -135, width: 100, textAlign: 'center'}]}>$0.00</Text>
            </View>
          </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 16
  },
  button: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
   buttonText: {
     fontSize: 16,
     width: '90%',
     color: 'black',
     backgroundColor: '#FBF501',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     flexDirection: 'row'
   },
   bottom: {
     flex: 1,
     justifyContent: 'flex-end',
   },
});

const modalStyles = StyleSheet.create({
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



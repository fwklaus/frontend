import React, { useState, useContext } from 'react';
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

export function RestaurantFooter({params, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.bottom}>
          <Pressable style={styles.button} onPress={()=> navigation.navigate('Cart')}>
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

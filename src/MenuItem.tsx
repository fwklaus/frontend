import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
} from 'react-native'
import { CartModal } from './CartModal';

export function MenuItem({item, restaurantId}) {
  let name = item.name;
  let cost = item.cost;
  let desc = item.description;
//   let url = item.picture;

  // how are we going to get the picture for the item since we can't call require dynamically?
  // for demonstration purposes
  let url = './res/images/order_weasel_small.jpg';

  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} restaurantId={restaurantId}/>
      <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
        <View style={[styles.itemContainer, {flexDirection: 'row', padding: 8}]}>
         <View style={{justifyContent: 'center', flex: 1, marginLeft: 32}}>
           <Text style={styles.text}>{name}</Text>
           <Text style={[styles.text, {fontSize: 12}]}>{desc}</Text>
           <Text style={styles.text}>{cost}</Text>
         </View>
         <Image style={{marginRight: 32, width: 75, height: 75}} source={require(url)} />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    itemContainer: {
      borderColor: 'black',
      borderWidth: 1,
      margin: 10,
    },
    text: {
      color: 'black',
      fontSize: 16
    },
});

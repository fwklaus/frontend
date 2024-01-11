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
import { textStyles } from '../res/styles/text';
import { containerStyles } from '../res/styles/container';

export function MenuItem({item, restaurantId}) {
  let name = item.name;
  let cost = item.cost;
  let desc = item.description;
//   let url = item.picture;

  // how are we going to get the picture for the item since we can't call require dynamically?
  // for demonstration purposes
  let url = '../res/images/order_weasel_small.jpg';

  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} restaurantId={restaurantId}/>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={[containerStyles.itemContainer, {flexDirection: 'row', padding: 8}]}>
         <View style={{justifyContent: 'center', flex: 1, marginLeft: 32}}>
           <Text style={textStyles.text}>{name}</Text>
           <Text style={[textStyles.text, {fontSize: 12}]}>{desc}</Text>
           <Text style={textStyles.text}>{cost}</Text>
         </View>
         <Image style={{marginRight: 32, width: 75, height: 75}} source={require(url)} />
        </View>
      </Pressable>
    </View>
  );
}

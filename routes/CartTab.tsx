import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'

import CartData from '../data/cartData'
// data required from the context hook in RestaurantScreen
// example using seedData
const DATA = CartData;

function CartHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View>
      <View style={[styles.topSection, {flexDirection: 'row', justifyContent: 'space-around', padding: 5, paddingLeft: 10}]}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
        <Text style={{width: 300, verticalAlign: 'middle', color: 'black'}}>{title}</Text>
      </View>
    </View>
  );
}

function CartFooter({params, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  let id = params.id;
  let address = params.address;
  let logo = params.picture;
  logo = '../images/order_weasel_small.jpg';

  // need access to the cart here - comes from the context
  // Do we need to send any of the params to checkout?
      // picture (change picture to logo)
      // id
      // address

      // Send Total values calculated from the Context

  return (
    <View style={{flex: 1, borderTopWidth: 1, borderColor: 'black'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Text style={styles.text}>Subtotal:</Text>
                <Text style={styles.text}>Estimated Tax:</Text>
                <Text style={styles.text}>Total:</Text>
              </View>
           </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <View>
                 <Text style={styles.text}>$0.00</Text>
                 <Text style={styles.text}>$0.00</Text>
                 <Text style={styles.text}>$0.00</Text>
               </View>
            </View>
        </View>
      </View>
      <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
        <Pressable style={styles.closeCart}onPress={()=> navigation.navigate('Menu')}>
          <Text style={styles.cartButtonText}>Close Cart</Text>
        </Pressable>
        <Pressable style={styles.checkout} onPress={()=> navigation.navigate('CheckoutScreen')}>
          <Text style={styles.cartButtonText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

export function CartTab({route, navigation}) {
  let params = route.params

  return(
    <SafeAreaView style={styles.container}>
      <CartHeader params={params}/>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          let cost = item.cost;
          let name = item.name;
          let quantity = item.quantity;
          let trash = '../images/trash_small.png'

          return(
            <View style={{flexDirection: 'row', marginBottom: 8, marginTop: 16, height: 40}}>
              <Text style={[styles.text, {flex: 2, paddingLeft: 24}]}>{quantity} X {name}</Text>
              <Text style={[styles.text, {flex: 1}]}>${(cost * quantity).toFixed(2)}</Text>
              <View style={{flex: .5}}>
                <Pressable onPress={() => {console.log('implement cart item deletion')}}>
                  <Image style={{height: 25, width: 25}} source={require(trash)}/>
                </Pressable>
              </View>
            </View>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
              <Text style={[styles.text, {textAlign: 'center', marginTop: 4, marginBottom: 4}]}>Your items</Text>
            </View>
          );
        }}
        keyExtractor={ item => item.id}
      />
      <CartFooter navigation={navigation} params={params}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
   closeCart: {
     fontSize: 16,
     color: 'white',
     backgroundColor: 'grey',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     width: '25%',
   },
   checkout: {
     fontSize: 16,
     color: 'black',
     backgroundColor: 'blue',
     padding: 8,
     borderRadius: 8,
     borderColor: 'black',
     borderWidth: 1,
     width: "65%"
   },
   bottom: {
     paddingTop: 10,
     paddingBottom: 10,
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
});

import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet
} from 'react-native';
import { textStyles } from '../res/styles/text';
import { containerStyles } from '../res/styles/container';

import useCart from '../hooks/useCart';
// data required from the context hook in RestaurantScreen

// import CartData from '../data/cartData'
// example using seedData
// const DATA = CartData;

function CartHeader({resInfo}) {
  let logo = '../res/images/order_weasel_small.jpg'
  let id = resInfo.id;
  let title = resInfo.title;

  return (
    <View style={[ containerStyles.headerContainer, { flex: 0.16} ]}>
      <View style={containerStyles.headerLogoContainer}>
        <Image style={containerStyles.logoSize} source={require(logo)}/>
      </View>
     <Text style={[textStyles.text, textStyles.smallHeadings, {flex: 3}]}>{title}</Text>
    </View>
  );
}

function CartFooter({navigation, resInfo, cart}) {
  const [modalVisible, setModalVisible] = useState(false);

  const SEATTLE_SALES_TAX_RATE = 10.25 / 100;

  let getSubTotal = (cart) => {
    let total = 0;

    cart.forEach(item => {
      let quantity = Number(item.quantity);
      let cost = Number(item.cost);

      total += quantity * cost;
    });

    return total;
  }

  let subtotal = getSubTotal(cart);
  let tax = subtotal * SEATTLE_SALES_TAX_RATE;
  let total = subtotal + tax;

  const totals = {subtotal, tax, total};

  return (
    <View style={{flex: 0.5, borderTopWidth: 1, borderColor: 'black'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
           <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Text style={textStyles.text}>Subtotal:</Text>
                <Text style={textStyles.text}>Estimated Tax:</Text>
                <Text style={textStyles.text}>Total:</Text>
              </View>
           </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
               <View>
                 <Text style={textStyles.text}>${subtotal.toFixed(2)}</Text>
                 <Text style={textStyles.text}>${tax.toFixed(2)}</Text>
                 <Text style={textStyles.text}>${total.toFixed(2)}</Text>
               </View>
            </View>
        </View>
      </View>
      <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
        <Pressable style={styles.closeCart}onPress={()=> navigation.navigate('Menu')}>
          <Text style={textStyles.cartButtonText}>Close Cart</Text>
        </Pressable>
        <Pressable style={styles.checkout} onPress={()=> navigation.navigate('CheckoutScreen', {resInfo, totals})}>
          <Text style={textStyles.cartButtonText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

function Item({id, name, cost, quantity, deleteItem}) {
let trash = '../res/images/trash_small.png'

  return(
    <View style={styles.cartItem}>
      <Text style={[textStyles.text, {flex: 2, paddingLeft: 24}]}>{quantity} X {name}</Text>
      <Text style={[textStyles.text, {flex: 1}]}>${(cost * quantity).toFixed(2)}</Text>
      <View style={{flex: .5}}>
        <Pressable onPress={() => {
          deleteItem(id);
        }}>
          <Image style={{height: 25, width: 25}} source={require(trash)}/>
        </Pressable>
      </View>
    </View>
  );
}

function CartTab({route, navigation}) {
  let params = route.params
  const { cart, deleteItem, editItem } = useCart();

  return(
    <SafeAreaView style={containerStyles.main}>
      <CartHeader resInfo={params}/>
      <FlatList
        style={{flex: 1}}
        data={cart}
        renderItem={({item}) => <Item name={item.name} id={item.id} cost={item.cost} quantity={item.quantity} deleteItem={deleteItem}/>}
        ListHeaderComponent={() => {
          return (
            <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
              <Text style={[textStyles.text, {textAlign: 'center', marginTop: 4, marginBottom: 4}]}>Your items</Text>
            </View>
          );
        }}
        keyExtractor={ item => item.id}
      />
      <CartFooter navigation={navigation} resInfo={params} cart={cart}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  closeCart: {
   fontSize: 16,
   color: 'white',
   backgroundColor: 'grey',
   padding: 8,
   borderRadius: 8,
   borderColor: 'black',
   borderWidth: 1,
   width: '30%',
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
  cartItem: {
    flexDirection: 'row',
    marginBottom: 8,
    marginTop: 16,
    height: 40,
    flex: 1
  }
});


export { CartHeader, CartFooter, Item, CartTab}
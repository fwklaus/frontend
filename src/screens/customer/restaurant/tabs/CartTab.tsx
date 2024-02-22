import React, {useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
} from 'react-native';
// data required from the context hook in RestaurantScreen
import useCart from '../../../../hooks/useCart';
import {calculateTaxAndTotals} from '../../../../utils/checkoutUtils';

import {CartModal} from '../../../../components/ui/CartModal';

import {textStyles} from '../../../../res/styles/text';
import {containerStyles} from '../../../../res/styles/container';
// import {modalStyles} from '../../../../res/styles/modal';

function Item({item}) {
  const {deleteItem, cart} = useCart();

  let id = item.id;
  let name = item.name;
  let cost = item.cost;
  let quantity = item.quantity;

  let trash = '../../../../res/images/trash_small.png';

  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <CartModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        item={item}
        cart={cart}
      />
      <Pressable
        style={({pressed}) => [
          styles.cartItem,
          {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
        ]}
        onPress={() => setModalVisible(true)}>
        <Text style={[textStyles.text, {flex: 2, paddingLeft: 24}]}>
          {quantity} X {name}
        </Text>
        <Text style={[textStyles.text, {flex: 1}]}>
          ${(cost * quantity).toFixed(2)}
        </Text>
        <View style={{flex: 0.5}}>
          <Pressable
            onPress={() => {
              deleteItem(id);
            }}>
            <Image style={{height: 25, width: 25}} source={require(trash)} />
          </Pressable>
        </View>
      </Pressable>
    </View>
  );
}

function CartHeader({resInfo}) {
  let logo = '../../../../res/images/order_weasel_small.jpg';
  let title = resInfo.title;

  return (
    <View style={[containerStyles.headerContainer, {flex: 0.16}]}>
      <View style={containerStyles.headerLogoContainer}>
        <Image style={containerStyles.logoSize} source={require(logo)} />
      </View>
      <Text style={[textStyles.text, textStyles.smallHeadings, {flex: 3}]}>
        {title}
      </Text>
    </View>
  );
}

function CartFooter({navigation, resInfo, cart}) {
  const [subtotal, tax, total] = calculateTaxAndTotals(cart);
  const totals = {subtotal, tax, total};

  return (
    <View style={{flex: 0.5, borderTopWidth: 1, borderColor: 'black'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={textStyles.text}>Subtotal:</Text>
              <Text style={textStyles.text}>Estimated Tax:</Text>
              <Text style={textStyles.text}>Total:</Text>
            </View>
          </View>
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={textStyles.text}>${subtotal.toFixed(2)}</Text>
              <Text style={textStyles.text}>${tax.toFixed(2)}</Text>
              <Text style={textStyles.text}>${total.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottom, {borderTopWidth: 1, borderColor: 'black'}]}>
        <Pressable
          style={styles.closeCart}
          onPress={() => navigation.navigate('Menu')}>
          <Text style={textStyles.cartButtonText}>Close Cart</Text>
        </Pressable>
        <Pressable
          style={styles.checkout}
          onPress={() =>
            navigation.navigate('CheckoutScreen', {resInfo, totals, cart})
          }>
          <Text style={textStyles.cartButtonText}>Checkout</Text>
        </Pressable>
      </View>
    </View>
  );
}

function CartTab({route, navigation}) {
  let params = route.params;
  const {cart} = useCart();

  return (
    <SafeAreaView style={containerStyles.main}>
      <CartHeader resInfo={params} />
      <FlatList
        style={{flex: 1}}
        data={cart}
        renderItem={({item}) => <Item item={item} />}
        ListHeaderComponent={() => {
          return (
            <View style={{borderBottomWidth: 1, borderColor: 'black'}}>
              <Text
                style={[
                  textStyles.text,
                  {textAlign: 'center', marginTop: 4, marginBottom: 4},
                ]}>
                Your items
              </Text>
            </View>
          );
        }}
        keyExtractor={item => item.id}
      />
      <CartFooter navigation={navigation} resInfo={params} cart={cart} />
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
    width: '65%',
  },
  bottom: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 8,
    paddingTop: 8,
    height: 40,
    flex: 1,
  },
});

export {CartHeader, CartFooter, Item, CartTab};

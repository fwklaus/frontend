import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Pressable,
  Image
} from 'react-native';
import { CartHeader } from '../components/screen/CartHeader';
import { CartFooter } from '../components/screen/CartFooter';
import { textStyles } from '../res/styles/text'
import { containerStyles } from '../res/styles/container'

import CartData from '../data/cartData'
// data required from the context hook in RestaurantScreen
// example using seedData
const DATA = CartData;

export function CartTab({route, navigation}) {
  let params = route.params

  return(
    <SafeAreaView style={containerStyles.main}>
      <CartHeader params={params}/>
      <FlatList
        data={DATA}
        renderItem={({item}) => {
          let cost = item.cost;
          let name = item.name;
          let quantity = item.quantity;
          let trash = '../res/images/trash_small.png'

          return(
            <View style={{flexDirection: 'row', marginBottom: 8, marginTop: 16, height: 40}}>
              <Text style={[textStyles.text, {flex: 2, paddingLeft: 24}]}>{quantity} X {name}</Text>
              <Text style={[textStyles.text, {flex: 1}]}>${(cost * quantity).toFixed(2)}</Text>
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
              <Text style={[textStyles.text, {textAlign: 'center', marginTop: 4, marginBottom: 4}]}>Your items</Text>
            </View>
          );
        }}
        keyExtractor={ item => item.id}
      />
      <CartFooter navigation={navigation} params={params}/>
    </SafeAreaView>
  );
}

import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native'
import { textStyles } from '../res/styles/text';
import { containerStyles } from '../res/styles/container';
import { Address } from '../components/api/Address';
import { ContactInfo } from '../components/ui/ContactInfo';
import { Notifications } from '../components/ui/Notifications';

export function CheckoutScreen({route, navigation}) {
  let params = route.params;

  let id = params.id;
  let address = params.address;
  let title = params.title;
  let logo = '../res/images/order_weasel_small.jpg';

  return(
      <SafeAreaView style={containerStyles.main}>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', borderColor: 'black', borderBottomWidth: 1, paddingLeft: 10}}>
          <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <Image style={{width: 50, height: 50,}} source={require(logo)}/>
          </View>
         <Text style={[textStyles.text, {flex: 3, fontSize: 20}]}>{title}</Text>
        </View>
        <View style={{backgroundColor: 'white', flex: 1.5,  borderBottomWidth: 1, paddingLet: 10}}>
          <View style={{flex: 1, marginLeft: 10, justifyContent: 'center'}}>
            <Text style={[textStyles.text, {fontSize: 20}]}>Checkout</Text>
          </View>
          <View style={{flex: 2, marginLeft: 10, justifyContent: 'center'}}>
            <Text style={textStyles.text}>Carryout Order</Text>
            <Text style={textStyles.text}>Pickup at: <Address address={address}/></Text>
          </View>
        </View>
        <View style={{flex: 6, borderColor: 'black', borderBottomWidth: 1}}>
          <ContactInfo />
          <Notifications />
        </View>
        <View style={{flex: 2, flexDirection: 'row'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={[textStyles.text, {fontSize: 20}]}>Subtotal</Text>
              <Text style={[textStyles.text, {fontSize: 20}]}>Estimated Tax:</Text>
              <Text style={[textStyles.text, {fontSize: 20}]}>Total:</Text>
            </View>
          </View>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View>
              <Text style={[textStyles.text, {fontSize: 20}]}>$0.00</Text>
              <Text style={[textStyles.text, {fontSize: 20}]}>$0.00</Text>
              <Text style={[textStyles.text, {fontSize: 20}]}>$0.00</Text>
            </View>
          </View>
        </View>
        <View style={[styles.bottom,  {borderTopWidth: 1, borderColor: 'black'}]}>
          <Pressable style={styles.submitButton} onPress={()=> console.log('Implement checkout success/failure')}>
            <Text style={textStyles.cartButtonText}>Submit Order and Pay Later</Text>
          </Pressable>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    paddingLeft: 8,
    margin: 8,
    borderWidth: 1,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'grey'
  },
   bottom: {
     paddingTop: 10,
     paddingBottom: 10,
     flexDirection: 'row',
     justifyContent: 'space-around',
   },
    submitButton: {
      fontSize: 16,
      color: 'black',
      backgroundColor: 'blue',
      padding: 8,
      borderRadius: 8,
      borderColor: 'black',
      borderWidth: 1,
      width: "90%"
    },
});
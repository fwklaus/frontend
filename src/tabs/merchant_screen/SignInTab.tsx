import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native';
import { merchContCSS } from '../../res/styles/merchantContainer';
import { merchTextCSS } from '../../res/styles/merchantText';

import loginData from '../../data/loginData';

function MerchantAuthentication() {


}

function SignInButton() {
  return (
    <Pressable
      style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
      onPress={() => {
        console.log("Login")
      }}
    >
      <Text style={merchTextCSS.buttonText}>Login</Text>
    </Pressable>
  );
}

export function SignInTab() {
  return(
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 10, flexDirection: 'row'}]}>
      <View style={[merchContCSS.mainSpacer]}>{/*spacer*/}</View>
       <View style={merchContCSS.mainContent}>
        <View style={[merchContCSS.header, {flex: 2}]}>
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Information</Text>
        </View>
        <View style={[merchContCSS.tabMain, {flexDirection: 'column'}]}>
          <View style={{flexDirection: 'row'}}>
            <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
              <Text style={[merchTextCSS.text, {margin: 20}]}>Email</Text>
              <Text style={[merchTextCSS.text, {margin: 20}]}>Password</Text>
            </View>
            <View style={merchContCSS.mainContent}>
              <TextInput style={merchContCSS.input}/>
              <TextInput style={merchContCSS.input}/>
            </View>
          </View>
          <View style={[merchContCSS.mainSpacer, {justifyContent: 'center'}]}>
            <SignInButton />
          </View>
        </View>
       </View>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </SafeAreaView>
  );
}

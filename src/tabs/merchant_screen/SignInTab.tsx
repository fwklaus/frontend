import React, {useState, useEffect, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native';
import useSignIn from '../../hooks/useSignIn';

import { merchContCSS } from '../../res/styles/merchantContainer';
import { merchTextCSS } from '../../res/styles/merchantText';

function SignInButton({navigation}) {
  const { validCredentials, resetFields, currentMerchant, signIn } = useSignIn();

  return (
    <Pressable
      style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
      onPress={() => {
        if (validCredentials()) {
          signIn();
          alert("Successfully signed in, user: " + currentMerchant.email);
          navigation.navigate("Orders");
          resetFields();
        } else {
          alert("try again ass clown");
          resetFields();
        }
      }}
    >
      <Text style={merchTextCSS.buttonText}>Login</Text>
    </Pressable>
  );
}

function SignInTab({navigation}) {
  const {credentials, updateCredentials} = useSignIn();
  const email = "email";
  const password = "password";

  return(
      <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 10, flexDirection: 'row'}]}>
        <View style={[merchContCSS.mainSpacer]}>{/*spacer*/}</View>
         <View style={merchContCSS.mainContent}>
          <View style={[merchContCSS.header, {flex: 2}]}>
            <Text style={[merchTextCSS.text, merchTextCSS.header]}>Sign In</Text>
          </View>
          <View style={[merchContCSS.tabMain, {flexDirection: 'column'}]}>
            <View style={{flexDirection: 'row'}}>
              <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
                <Text style={[merchTextCSS.text, {margin: 20}]}>Email</Text>
                <Text style={[merchTextCSS.text, {margin: 20}]}>Password</Text>
              </View>
              <View style={merchContCSS.mainContent}>
                <TextInput
                  style={merchContCSS.input}
                  value={credentials[email]}
                  onChangeText={(text) => {
                    updateCredentials(email, text)
                  }}
                />
                <TextInput
                  style={merchContCSS.input}
                  value={credentials[password]}
                  onChangeText={(text) => {
                    updateCredentials(password, text)
                  }}
                />
              </View>
            </View>
            <View style={[merchContCSS.mainSpacer, {justifyContent: 'center'}]}>
              <SignInButton navigation={navigation}/>
            </View>
          </View>
         </View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      </SafeAreaView>
  );
}

export { SignInTab, SignInButton };
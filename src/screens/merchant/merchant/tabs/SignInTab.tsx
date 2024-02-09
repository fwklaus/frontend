import React, {useState, useEffect, useContext} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable
} from 'react-native';
import useSignIn from '../../../../hooks/useSignIn';
import useMerchant from '../../../../hooks/useMerchant';

import { merchContCSS } from '../../../../res/styles/merchantContainer';
import { merchTextCSS } from '../../../../res/styles/merchantText';

function SignInButton({navigation}) {
  const { validCredentials, resetFields, currentMerchant, signIn } = useSignIn();
  const { merchants } = useMerchant();

  console.log(merchants, " from SignInTab");

  return (
    <Pressable
      style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
      onPress={() => {
        if (validCredentials(merchants)) {
          signIn(merchants);
          alert("Welcome back " + currentMerchant.email);
          navigation.navigate("Orders");
          resetFields();
        } else {
          alert("Invalid credentials. Please try again");
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
  const {getMerchants, merchants} = useMerchant();
//   useEffect(() => {getMerchants()}, []);

  useFocusEffect(
      React.useCallback(() => {
        getMerchants();
      }, [merchants])
  );

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
import React from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SafeAreaView, View, Text, TextInput, Pressable} from 'react-native';
import useLogin from '../../../../hooks/useLogin';
import useMerchant from '../../../../hooks/useMerchant';

import {merchContCSS} from '../../../../res/styles/merchantContainer';
import {merchTextCSS} from '../../../../res/styles/merchantText';

function SignInButton({navigation}) {
  const {resetFields, login} = useLogin();

  return (
    <Pressable
      style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
      onPress={async () => {
        try {
          await login();
          navigation.navigate('Orders');
        } catch (e) {
          alert(e.message);
        }
        resetFields();
      }}>
      <Text style={merchTextCSS.buttonText}>Login</Text>
    </Pressable>
  );
}

function SignInTab({navigation}) {
  const {credentials, updateCredentials} = useLogin();
  const {getMerchants, merchants} = useMerchant();

  // need to be able to call this prior to authentication
  useFocusEffect(
    React.useCallback(() => {
      (async function () {
        try {
          await getMerchants();
        } catch (e) {
          alert(e.message);
        }
      })();
    }, [merchants]),
  );

  const email = 'email';
  const password = 'password';

  return (
    <SafeAreaView
      style={[
        merchContCSS.main,
        {alignItems: 'left', padding: 10, flexDirection: 'row'},
      ]}>
      <View style={[merchContCSS.mainSpacer]}>{/*spacer*/}</View>
      <View style={merchContCSS.mainContent}>
        <View style={[merchContCSS.header, {flex: 2}]}>
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>
            Log in to OrderWeasel
          </Text>
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
                onChangeText={text => {
                  updateCredentials(email, text);
                }}
              />
              <TextInput
                style={merchContCSS.input}
                value={credentials[password]}
                onChangeText={text => {
                  updateCredentials(password, text);
                }}
              />
            </View>
          </View>
          <View style={[merchContCSS.mainSpacer, {justifyContent: 'center'}]}>
            <SignInButton navigation={navigation} />
          </View>
        </View>
      </View>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </SafeAreaView>
  );
}

export {SignInTab, SignInButton};

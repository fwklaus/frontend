import React from 'react';
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

export function ProfileTab() {
  const { currentUser } = useSignIn();

  // example
  currentUser.phone = '(555)555-5555';
  currentUser.address = '5555 Main St';
  currentUser.city = 'Seattle';
  currentUser.state = 'WA';
  currentUser.zip = '80808';

  return (
    <SafeAreaView style={[merchContCSS.main, {flexDirection: 'row', alignItems: 'left'}]}>
{/*       <View style={merchContCSS.mainSpacer}>{ *//*spacer*//* }</View>
      <View style={merchContCSS.mainContent}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>Restaurant Name</Text>
        <Text style={merchTextCSS.text}>Account: {currentUser.email}</Text>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Information</Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'pink'}}>
            <Text style={[merchTextCSS.text, {margin: 13}]}>Restaurant Phone</Text>
            <Text style={[merchTextCSS.text, {margin: 13}]}>Address</Text>
            <Text style={[merchTextCSS.text, {margin: 13}]}>City</Text>
            <Text style={[merchTextCSS.text, {margin: 13}]}>State</Text>
            <Text style={[merchTextCSS.text, {margin: 13}]}>Zip Code</Text>
          </View>
          <View style={{flex: 3, backgroundColor: 'green'}}>
             <TextInput style={[merchContCSS.input, { height: 30, padding: 6 }]} placeholder={currentUser.phone}/>
             <TextInput style={[merchContCSS.input, { height: 30, padding: 6 }]} placeholder={currentUser.address}/>
             <TextInput style={[merchContCSS.input, { height: 30, padding: 6 }]} placeholder={currentUser.city}/>
             <TextInput style={[merchContCSS.input, { height: 30, padding: 6 }]} placeholder={currentUser.state}/>
             <TextInput style={[merchContCSS.input, { height: 30, padding: 6 }]} placeholder={currentUser.zip}/>
          </View>
        </View>
      </View>
      <View style={merchContCSS.mainSpacer}>{ *//*spacer*//* }</View> */}
    </SafeAreaView>
  );
}
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { merchContCSS } from '../res/styles/merchantContainer'
import { merchTextCSS } from '../res/styles/merchantText'

export function SignInTab() {
  return(
    <SafeAreaView style={merchContCSS.main}>
      <Text style={merchTextCSS.text}>SignIn</Text>
    </SafeAreaView>
  );
}

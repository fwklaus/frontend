import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { merchContCSS } from '../res/styles/merchantContainer'
import { merchTextCSS } from '../res/styles/merchantText'

export function SignUpTab() {
  return(
    <SafeAreaView style={merchContCSS.main}>
      <Text style={merchTextCSS.text}>SignUp</Text>
    </SafeAreaView>
  );
}

import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';
import { containerStyles } from '../res/styles/container';
import { textStyles } from '../res/styles/text';

function MerchantScreen() {
  return (
    <SafeAreaView style={containerStyles.main}>
      <Text style={textStyles.text}>Hello World</Text>
    </SafeAreaView>
  )
}

export { MerchantScreen };

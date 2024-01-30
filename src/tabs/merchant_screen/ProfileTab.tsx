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

export function ProfileTab() {
  return (
    <SafeAreaView style={merchContCSS.main}>
      <Text style={merchTextCSS.text}>Profile</Text>
    </SafeAreaView>
  );
}
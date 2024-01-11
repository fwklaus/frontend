import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { containerStyles } from '../../res/styles/container'
import { textStyles } from '../../res/styles/text'

export function ResListResults(list) {
  let nResults = list.length;
  return (
    <View style={[containerStyles.restaurantItem, {padding: 10}]}>
      <Text  style={[textStyles.headingText, {color: '#A1000E', fontSize: 16}]}>{nResults} Results</Text>
    </View>
  );
}
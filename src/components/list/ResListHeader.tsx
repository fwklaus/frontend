import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { containerStyles } from '../../res/styles/container'
import { textStyles } from '../../res/styles/text'

export function ResListHeader({currentAddress}) {
  return (
    <View>
      <View style={[containerStyles.restaurantItem, {padding: 10}]}>
        <Text style={textStyles.headingText}>{currentAddress}</Text>
      </View>
      <View style={[containerStyles.restaurantItem, {padding: 10}]}>
        <Text style={[textStyles.headingText, {color: 'blue'}]}>Restaurants Near You (Carryout Only)</Text>
      </View>
    </View>
  );
}

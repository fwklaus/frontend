import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import { GetDirections } from '../api/GetDirections';
import { textStyles } from '../../res/styles/text';
import { buttonStyles } from '../../res/styles/button';
import { containerStyles } from '../../res/styles/container';

export function MenuListHeader({id, title, category, distance, rating, phone, hours, address}) {
    // example
    hours = '8:00-8:00';
    phone = '(456)567-7895'

  return (
    <View style={{flex: 1}}>
      <View style={[styles.topSection, {flex: 1}]}>
        <View style={{flex: 1, padding: 10, paddingLeft: 40, paddingRight: 40}}>
          <Text style={textStyles.headingText}>{rating} | {category} | {distance}mi</Text>
          <Text style={textStyles.headingText}>{hours}</Text>
          <Text style={textStyles.headingText}>{phone}</Text>
        </View>
      </View>
      <View style={[styles.topSection, {padding: 10}]}>
        <Text style={textStyles.text}>This is a pickup order</Text>
        <Text style={textStyles.text}>
          You'll need to go to {title} to pick up this order at: <GetDirections address={address}/>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topSection: {
     backgroundColor: 'white',
     borderColor: 'black',
     borderBottomWidth: 1,
   }
});
import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native'
import { textStyles } from '../../res/styles/text';
import { buttonStyles } from '../../res/styles/button';
import { containerStyles } from '../../res/styles/container';

export function MenuScreenFooter({params, navigation}) {
  return (
    <Pressable style={buttonStyles.bottomNav} onPress={()=> navigation.navigate('Cart', params)}>
      <View style={{flex: 0.5}}></View>
      <View style={[textStyles.buttonText, containerStyles.justifyText]}>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText, {textAlign: 'center'}]}>View Cart</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText,  {textAlign: 'center'}]}>$0.00</Text>
        </View>
      </View>
      <View style={{flex: 0.5}}></View>
    </Pressable>
  );
}

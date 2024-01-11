import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { textStyles } from '../../res/styles/text'
import { containerStyles } from '../../res/styles/container'

export function CartHeader({params}) {
  let url = '../../res/images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View style={[styles.topSection, {flexDirection: 'row', padding: 5, paddingLeft: 10}]}>
      <View style={{flex: 1, marginLeft: 10}}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
      </View>
      <Text style={[textStyles.text, {flex: 3, verticalAlign: 'middle', color: 'black'}]}>{title}</Text>
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

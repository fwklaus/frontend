import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import { textStyles } from '../../res/styles/text'

export function MenuScreenHeader({params}) {
  let url = '../../res/images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
  <View style={[styles.topSection, {padding: 10, flexDirection: 'row', paddingLeft: 20,  alignItems: 'center'}]}>
    <View style={{flex: 1}}>
      <Image source={require(url)} style={{width: 50, height: 50}}></Image>
    </View>
    <Text style={[textStyles.headingText, {flex: 3}]}>{title}</Text>
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


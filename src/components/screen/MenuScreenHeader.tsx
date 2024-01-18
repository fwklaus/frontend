import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'
import { textStyles } from '../../res/styles/text';
import { containerStyles } from '../../res/styles/container'

export function MenuScreenHeader({params}) {
  let logo = '../../res/images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View style={[ containerStyles.headerContainer, {flex: 0.12} ]}>
      <View style={containerStyles.headerLogoContainer}>
        <Image style={containerStyles.logoSize} source={require(logo)}/>
      </View>
     <Text style={[textStyles.text, textStyles.smallHeadings, {flex: 3}]}>{title}</Text>
    </View>
  );
}

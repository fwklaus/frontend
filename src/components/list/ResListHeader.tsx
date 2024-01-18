import React from 'react';
import {
  View,
  Text,
  Image
} from 'react-native';
import { containerStyles } from '../../res/styles/container';
import { textStyles } from '../../res/styles/text';
import { GetDirections } from '../api/GetDirections';

export function ResListHeader({currentAddress}) {
  let locationMarker = '../../res/images/marker.png';

  return (
    <View style={{flex: 0.17}}>
      <View style={[containerStyles.headerItem, {flex: 1, flexDirection: 'row'}]}>
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
          <Image style={{width: 20, height: 20}} source={require(locationMarker)}/>
        </View>
        <GetDirections address={currentAddress}/>
      </View>
      <View style={containerStyles.headerItem}>
        <Text style={[textStyles.headingText, {color: 'blue'}]}>Restaurants Near You (Carryout Only)</Text>
      </View>
    </View>
  );
}

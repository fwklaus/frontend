import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image
} from 'react-native'
import { GetStars } from '../api/GetStars';
import { GetDirections } from '../api/GetDirections';
import { textStyles } from '../../res/styles/text';
import { buttonStyles } from '../../res/styles/button';
import { containerStyles } from '../../res/styles/container';

export function MenuListHeader({id, title, category, distance, rating, phone, hours, address}) {
  // example
  hours = '8:00-8:00';
  phone = '(456)567-7895'

  let clock = '../../res/images/clock.png';
  let phonePic = '../../res/images/phone.png';

  return (
    <View style={{flex: 1}}>
      <View style={[styles.topSection, {flex: 1}]}>
        <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Text style={[textStyles.headingText, {fontSize: 18, textAlign: 'center'}]}>{rating}</Text>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            {/*Need stars Image based on rating*/}
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'flex-start'}}>
              <GetStars rating={rating}/>
              <Text style={[textStyles.headingText, {fontSize: 18}]}>{category} | {distance}(mi)</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Image style={{width: 20, height: 20}} source={require(clock)}/>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, {flex: 5, fontSize: 18}]}>{hours}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Image style={{width: 20, height: 20}} source={require(phonePic)}/>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, {flex: 5, fontSize: 18}]}>{phone}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.topSection, {padding: 10, flex: 1}]}>
        <Text style={textStyles.text}>This is a pickup order. You'll need to go to {title} to pick up this order at:</Text>
        <GetDirections address={address} />
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
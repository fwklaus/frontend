import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable
} from 'react-native'

function GetDirections({address}) {
  // clicking on the address should request Google API for directions to restaurant

  return (
    <Pressable onPress={() => (console.log('Connect to Google API'))}>
      <Text style={{color: 'blue', textDecorationLine: 'underline'}}>{address}   </Text>
    </Pressable>
  );
}

export function ListHeader({id, title, category, distance, rating, phone, hours, address}) {
    // example
    hours = '8:00-8:00';
    phone = '(456)567-7895'

  return (
    <View>
      <View style={[styles.topSection, {height: 80, padding: 2, paddingLeft: 10}]}>
        <Text style={[styles.text, {width: '100%'}]}>{rating} | {category} | {distance}mi</Text>
        <Text style={styles.text}>{hours}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
      <View style={[styles.topSection, {height: 100, padding: 2, paddingLeft: 10}]}>
        <Text style={styles.text}>This is a pickup order</Text>
        <Text style={styles.text}>
          You'll need to go to {title} to pick up this order at:
          <GetDirections address={address}/>
        </Text>
      </View>
    </View>
  );
}

export function ListFooter() {
  return (
    <View style={{height: 70}}></View>
  );
}

const styles = StyleSheet.create({
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
    fontSize: 16
  },
});

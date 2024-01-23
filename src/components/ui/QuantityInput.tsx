import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput
} from 'react-native';
import { textStyles } from '../../res/styles/text';

export function QuantityInput({id, quantity, setQuantity}) {
  return(
    <View style={{flex: 1}}>
      <Text style={[textStyles.text, {flex: 1}]}>Quantity:</Text>
      <View style={{flex: 2, flexDirection: 'row', alignItems: 'center'}}>
        <View style={{flex: 1}}></View>
        <View style={{flex: 0.75}}>
          <Pressable onPress={() => {
            if (quantity === '0') {
              return;
            } else {
              setQuantity(String(Number(quantity) - 1));
            }
          }}>
            <Text style={[textStyles.text, styles.quantityAugment, {color: "white"}]}>-</Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}>
          <TextInput
            value={quantity}
            style={[styles.inputBox, textStyles.text]}
            textAlign='center'
          />
        </View>
        <View style={{flex: 0.75}}>
          <Pressable onPress={() => {
            setQuantity(String(Number(quantity) + 1));
          }}>
            <Text style={[textStyles.text, styles.quantityAugment, {color: "white"}]}>+</Text>
          </Pressable>
        </View>
        <View style={{flex: 1}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    borderColor: 'black',
    borderWidth: 1,
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 10
  },
  quantityAugment: {
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 32,
    textAlign: 'center',
    margin: 4,
    backgroundColor: 'blue',
  }
});
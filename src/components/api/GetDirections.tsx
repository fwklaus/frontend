import React, { useState, useContext } from 'react';
import {
  Text,
  Pressable
} from 'react-native'

export function GetDirections({address}) {
  // clicking on the address should request Google API for directions to restaurant

  return (
    <Text
      style={{color: 'blue', textDecorationLine: 'underline', fontSize: 16, flex: 12}}
      onPress={() => {
        console.log('Connect to Google API');
      }}
    >{address}</Text>
  );
}
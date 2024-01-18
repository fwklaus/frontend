import React, { useState, useContext } from 'react';
import {
  Text,
  Pressable
} from 'react-native'

export function GetDirections({address}) {
  // clicking on the address should request Google API for directions to restaurant

  return (
    <Text
      style={{color: 'blue', textDecorationLine: 'underline', fontSize: 18, flex: 4}}
      onPress={() => {
        console.log('Connect to Google API');
      }}
    >{address}</Text>
  );
}
import React, { useState, useContext } from 'react';
import {
  Text,
  Pressable
} from 'react-native';
import useLocation from '../../hooks/useLocation';

// export function GetDirections({address}) {
export function GetDirections({address}) {
  //   clicking on the address should request Google API for directions to restaurant
//   const { currentAddress} = useLocation();

  return (
    <Pressable>
      <Text
        style={{color: 'blue', textDecorationLine: 'underline', fontSize: 16, flex: 12}}
        onPress={() => {
          console.log("Get Directions")
        }}
      >{address}</Text>
    </Pressable>
  );
}
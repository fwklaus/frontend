import React from 'react';
import {
  Text,
  Pressable,
} from 'react-native'

export function Address({address}) {
  return(
    <Pressable onPress={() => console.log('Google API to get directions')}>
      <Text style={{color: 'blue', textDecorationLine: 'underline', fontWeight: 'bold', fontSize: 16}}>{address}</Text>
    </Pressable>
  );
}
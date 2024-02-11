import React from 'react';
import {
  Image,
  Text
} from 'react-native';

import { textStyles } from '../../res/styles/text'

export function GetStars({rating}) {
  let stars;
  switch(rating) {
    case(1):
      stars = '*';
      break;
    case(2):
      stars = '**';
      break;
    case(3):
      stars = '***';
      break;
    case(4):
      stars = '****';
      break;
    case(5):
      stars = '*****';
      break;
    default:
//       console.log('Implement half star cases')
      stars =  '.5';
    break;
  }

  return (
    <Text style={[textStyles.text]}>{stars} | </Text>
  );
}

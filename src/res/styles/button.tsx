import React from 'react';
import { StyleSheet } from 'react-native';

const buttonStyles = StyleSheet.create({
  bottomNav: {
    width: '100%',
    height: 70,
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addToCartButton: {
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 8,
    elevation: 2,
  }
});

export { buttonStyles };
import React from 'react';
import { StyleSheet } from 'react-native';

const merchantContainerStyles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  mainContent: {
    flex: 3
  },
  container: {
    flex: 1
  },
  mainSpacer: {
    flex: 1
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 16
  },
});


export { merchantContainerStyles as merchContCSS };

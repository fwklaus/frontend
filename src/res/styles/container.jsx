import React from 'react';
import { StyleSheet } from 'react-native';

let containerStyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  mainTabs: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
  logoContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
});

export {containerStyles};

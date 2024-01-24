import React from 'react';
import { StyleSheet } from 'react-native';

const textStyles = StyleSheet.create({
  cartButtonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center'
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  headingText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold'
  },
  serviceTermsText: {
     fontWeight: 'bold',
     color: 'black',
     fontSize: 16,
     marginBottom: 10
  },
  buttonText: {
    fontSize: 16,
    width: '90%',
    color: 'black',
    backgroundColor: '#FBF501',
    padding: 8,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1
  },
  headerText: {
   color: 'black',
   fontSize: 18,
   padding: 20,
   paddingLeft: 16
  },
  loadingText: {
   width: 275,
   color: 'black',
   marginTop: 20,
   textAlign: "center"
  },
  modalButtonText: {
   color: 'white',
   fontWeight: 'bold',
   textAlign: 'center',
  },
  modalText: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },
  smallHeadings: {
    fontSize: 18
  }
});


export { textStyles };
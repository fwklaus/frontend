import React from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet
} from 'react-native'
import { textStyles } from '../../res/styles/text';
import { containerStyles } from '../../res/styles/container';

export function ContactInfo() {
  return(
    <View style={{flex: 3}}>
     <View style={{marginLeft: 8, flex: 1, justifyContent: 'center'}}>
       <Text style={[textStyles.text, {fontSize: 20}]}>Contact Info</Text>
       <Text style={{color: 'red', fontSize: 12}}>All fields required</Text>
     </View>
     <View style={{flex: 4}}>
       <TextInput style={styles.input}
         placeholder="First Name"
       />
       <TextInput style={styles.input}
         placeholder="Last Name"
       />
       <TextInput style={styles.input}
         placeholder="Email"
       />
       <TextInput style={styles.input}
         placeholder="Phone"
       />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    paddingLeft: 8,
    margin: 8,
    borderWidth: 1,
    padding: 2,
    borderRadius: 8,
    backgroundColor: 'grey'
  }
});
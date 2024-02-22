import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {textStyles} from '../../res/styles/text';

export function ContactInfo() {
  return (
    <>
      <View
        style={{
          flex: 1.75,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text
          style={[
            textStyles.text,
            textStyles.smallHeadings,
            {flex: 1, marginLeft: 10},
          ]}>
          Contact Info
        </Text>
        <Text style={{color: 'red', fontSize: 12, flex: 1}}>
          *All fields required
        </Text>
      </View>
      <View style={{flex: 10}}>
        <TextInput style={styles.input} placeholder="First Name" />
        <TextInput style={styles.input} placeholder="Last Name" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Phone" />
      </View>
    </>
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
    backgroundColor: 'grey',
  },
});

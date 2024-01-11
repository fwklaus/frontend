import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native'
import { textStyles } from '../../res/styles/text';
import CheckBox from '@react-native-community/checkbox';

export function Notifications() {
  const [toggleCheckBox1, setToggleCheckBox1] = useState(false);
  const [toggleCheckBox2, setToggleCheckBox2] = useState(false);
  const [toggleCheckBox3, setToggleCheckBox3] = useState(false);
  const [toggleCheckBox4, setToggleCheckBox4] = useState(false);

  return(
    <View style={{flex: 2, paddingLeft: 10}}>
      <View style={{flex: 1}}>
        <Text style={[textStyles.text, {fontSize: 20}]}>Text & Email Notifications</Text>
      </View>
      <View style={{flex: 3}}>
        <View style={{flexDirection: 'column', flex: 1}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CheckBox
             disabled={false}
             value={toggleCheckBox1}
             onValueChange={(newValue) => setToggleCheckBox1(newValue)}
             style={styles.checkbox}
             tintColors={styles.checkboxOutline}
            />
            <Text style={[textStyles.text, {flex: 12}]}>Yes, I'd like to receive text and email</Text>
          </View>
          <View style={{flex: 1,flexDirection: 'row'}}>
             <CheckBox
              disabled={false}
              value={toggleCheckBox2}
              onValueChange={(newValue) => setToggleCheckBox2(newValue)}
              style={styles.checkbox}
              tintColors={styles.checkboxOutline}
            />
            <Text style={textStyles.text}>Yes, I'd like to receive text</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <CheckBox
              disabled={false}
              value={toggleCheckBox3}
              onValueChange={(newValue) => setToggleCheckBox3(newValue)}
              style={styles.checkbox}
              tintColors={styles.checkboxOutline}
            />
            <Text style={textStyles.text}>Yes, I'd like to receive email</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
              <CheckBox
                disabled={false}
                value={toggleCheckBox4}
                onValueChange={(newValue) => setToggleCheckBox4(newValue)}
                style={styles.checkbox}
                tintColors={styles.checkboxOutline}
              />
            <Text style={textStyles.text}>No. Just notify me in the app</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }],
    top: -4,
  },
  checkboxOutline: {
    true: '#F15927',
    false: 'black'
  },
});
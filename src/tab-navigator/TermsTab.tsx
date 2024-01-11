import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
} from 'react-native';
import { containerStyles } from '../res/styles/container'
import { textStyles } from '../res/styles/text'

// fetching nearby restaurant data example
import restaurantData from '../data/restaurantData.js';

export function TermsTab() {
  return(
    <SafeAreaView style={[containerStyles.mainTabs, {backgroundColor: 'white', justifyContent: 'flex-start'}]}>
      <View>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Terms of Service</Text>
      </View>
      <View >
        <Text style={textStyles.serviceTermsText}>
          This is a student project...
        </Text>
       <Text style={textStyles.serviceTermsText}>
          We are not liable...
       </Text>
      </View>
    </SafeAreaView>
  );
}

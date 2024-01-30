import React from 'react';
import {
  SafeAreaView,
  Text,
  View
} from 'react-native';
import { containerStyles } from '../../res/styles/container'
import { textStyles } from '../../res/styles/text'

// fetching nearby restaurant data example
import restaurantData from '../../data/restaurantData.js';

export function ServicesTab() {
  let text = [
    'Select from any one of our participating merchants',
    'Add items to your cart and place your order',
    "Use the time estimate to determine when you need to arrive for pickup. We'll still send you a notification to let you know when the order's ready anyway.",
    'When you arrive at the restaurant, your order should be waiting for you. Just pay at the counter and be on your way!'
  ];

  return(
    <SafeAreaView style={[containerStyles.mainTabs, {backgroundColor: 'white', justifyContent: 'flex-start'}]}>
      <View style={{margin: 10}}>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Our Services</Text>
        <Text style={textStyles.serviceTermsText}>-{text[0]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[1]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[2]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[3]}</Text>
      </View>
    </SafeAreaView>
  );
}

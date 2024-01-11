import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'
import { HomeTab, ServicesTab, TermsTab } from '../tab-navigator/HomeTabs';
import { containerStyles } from '../res/styles/container'
const Tab = createBottomTabNavigator();

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={containerStyles.main}>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'yellow',
        },
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 10,
        }
      }}>

        <Tab.Screen name="Home" component={ HomeTab }/>
        <Tab.Screen name="Our Services" component={ ServicesTab }/>
        <Tab.Screen name="Terms" component={ TermsTab }/>
      </Tab.Navigator>
    </ SafeAreaView>
  );
}

import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

import FastImage from 'react-native-fast-image';

import { HomeTab } from '../tab-navigator/HomeTab';
import { ServicesTab } from '../tab-navigator/ServicesTab';
import { TermsTab } from '../tab-navigator/TermsTab';
import { containerStyles } from '../res/styles/container';

let homeIcon = '../res/images/restaurant.png';
let servicesIcon = '../res/images/room_service.png';
let termsIcon = '../res/images/memo.png';

const Tab = createBottomTabNavigator();

export function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={containerStyles.main}>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'yellow',
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "anything",
          fontWeight: 'bold'
        },
        tabBarInactiveTintColor: 'grey',
      }}>

        <Tab.Screen
          name="Home"
          component={ HomeTab }
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FastImage
                  source={require(homeIcon)}
                  style={{height: 20, width: 20}}
                  tintColor = { tabInfo.focused ? 'blue' : 'grey'}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="Our Services"
          component={ ServicesTab }
          options={{
            tabBarIcon: (tabInfo) => {
              return (
                <FastImage
                  source={require(servicesIcon)}
                  style={{height: 20, width: 20}}
                  tintColor = { tabInfo.focused ? 'blue' : 'grey'}
                />
              );
            }
          }}
        />
        <Tab.Screen
          name="Terms"
          component={ TermsTab }
          options={{
           tabBarIcon: (tabInfo) => {
              return (
               <FastImage
                 source={require(termsIcon)}
                 style={{height: 20, width: 20}}
                 tintColor = { tabInfo.focused ? 'blue' : 'grey'}
               />
              );
           }
          }}
        />
      </Tab.Navigator>
    </ SafeAreaView>
  );
}

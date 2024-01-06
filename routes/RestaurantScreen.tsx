import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'
import { MenuTab } from './MenuTab';
import { CartTab } from './CartTab';
const Tab = createBottomTabNavigator();

// // fetching menu data for a restaurant example
// function getMenuData(id) {
//   return menuData[id];
// }

export function RestaurantScreen({route, navigation}) {
  // need to pass route and navigation to MenuTab
    // can we pass this as a prop to Tab.Screen component?
    // Do we use Context or State hooks?
  let params = route.params



  return (
    <SafeAreaView style={styles.container}>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          display: 'none',
        },
        tabBarIconStyle: {
          display: 'none',
        },
        tabBarLabelStyle: {
          fontSize: 16,
          marginBottom: 10,
        }
      }}>
        <Tab.Screen
          name="Menu"
          component={ MenuTab }
          initialParams={{params: params}}
        />
        <Tab.Screen
          name="Cart"
          component={ CartTab }
          backBehavior="RestaurantScreen"
        />
      </ Tab.Navigator>
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: 'white',
  }
});

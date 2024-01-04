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
// import { RestaurantHeader, RestaurantFooter } from './ResScreenComponents';
// import { ListHeader, ListFooter } from './ResListComponents';
// import { CartScreen } from './CartScreen';
// import { MenuItem } from './MenuItem';
// import menuData from '../data/menuData.js'

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
          initialParams={{params: params}}
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
  },
//   sectionItems: {
//     padding: 20,
//     marginVertical: 8,
//     color: 'black'
//   },
//   topSection: {
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderBottomWidth: 1,
//   },
//   headerText: {
//     color: 'black',
//     fontSize: 16,
//     backgroundColor: '#fff',
//     padding: 20,
//     paddingLeft: 16
//   },
//   itemContainer: {
//     borderColor: 'black',
//     borderWidth: 1,
//     margin: 10,
//   },
//   text: {
//     color: 'black',
//     fontSize: 16
//   },
});

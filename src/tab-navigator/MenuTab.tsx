import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'
import { CartScreen } from '../screens/CartScreen';
import { MenuItem } from '../components/list/MenuItem';
import { MenuScreenHeader } from '../components/screen/MenuScreenHeader';
import { MenuScreenFooter } from '../components/screen/MenuScreenFooter';
import { MenuListHeader } from '../components/list/MenuListHeader';

import { textStyles } from '../res/styles/text'
import { containerStyles } from '../res/styles/container'
import menuData from '../data/menuData.js'

// fetching menu data for a restaurant example
function getMenuData(id) {
  return menuData[id];
}

export function MenuTab({route, navigation}) {
    let params = route.params.params;
    const [expandedSections, setExpandedSections] = useState(new Set());

    let restaurantId = params.id;

    const handleToggle = (title) => {
       setExpandedSections((expandedSections) => {
          const next = new Set(expandedSections);
          if (next.has(title)) {
            next.delete(title);
          } else {
             next.add(title);
          }
             return next;
       });
    }

  //   // request menu data using params.id
  //   //  let Data = getMenuData for the given params.id
  //   // this will be an asynchronous call to the backend API
    const DATA = getMenuData(restaurantId);

  return (
    <SafeAreaView style={containerStyles.main}>
      <MenuScreenHeader params={params}/>
      <SectionList
         sections={DATA}
         extraData={expandedSections}
         keyExtractor={(item, index) => item + index}
         ListHeaderComponent={MenuListHeader(params)}
         renderSectionHeader={({section: {title}}) => (
           <Pressable onPress={() => {
             handleToggle(title);
           }}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={[textStyles.headerText, { width: '90%' }]}>{title}</Text>
               <Image style={{width: 20, height: 20, alignSelf: 'center', marginRight: 20}} source={require('../res/images/angle-small-down.png')} />
             </View>
           </Pressable>
         )}
         renderItem={({section: {title}, item}) => {
           const isExpanded = expandedSections.has(title);

           if (!isExpanded) return null;

           return (
             <MenuItem item={item} restaurantId={restaurantId}/>
           );
         }}
         ListFooterComponent={() => {
          return (
            <Text style={{height: 70}}></Text>
          );
         }}
      />
      <MenuScreenFooter params={params} navigation={navigation}/>
    </ SafeAreaView>
  );
}

import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  RefreshControl,
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
    const [expandedSections, setExpandedSections] = useState(new Set());
    const [refreshing, setRefreshing] = useState(false);
    const [menuData, setMenuData] = useState([]);

    let params = route.params.params;
    let restaurantId = params.id;
    //   // request menu data using params.id
    //   //  let Data = getMenuData for the given params.id
    //   // this will be an asynchronous call to the backend API
    const DATA = getMenuData(restaurantId);

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

    useEffect(() => {
      loadMenu();
    }, [])


  const loadMenu = () => {
      setMenuData(DATA);

      console.log(menuData, "...logging from MenuTab.tsx");

//       fetch('load/menu/for/id')
//         .then((response) => response.json())
//         .then((responseJson) => {
//           setRefreshing(false);
//           var menuData = menuData.concat(responseJson.results);
//           setMenuData(menuData);
//         })
//         .catch((error) => {
//           console.error(error);
//         });

         setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
    };

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
           <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1}}>
             <Text style={[textStyles.headerText, { width: '80%' }]}>{title}</Text>
             <Image
               style={{width: 20, height: 20, alignSelf: 'center', marginRight: 20}}
               source={require('../res/images/angle-small-down.png')}
             />
           </View>
          </Pressable>
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadMenu}/>
        }
        renderItem={({section: {title}, item}) => {
          const isExpanded = expandedSections.has(title);

          if (!isExpanded) return null;

          return (
           <MenuItem item={item} restaurantId={restaurantId}/>
          );
        }}
        //          ListFooterComponent={() => {
        //           return (
        //             <Text style={{height: 70}}></Text>
        //           );
        //          }}
        />
        <MenuScreenFooter params={params} navigation={navigation}/>
    </ SafeAreaView>
  );
}

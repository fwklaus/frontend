import React, { useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'
import { RestaurantHeader, RestaurantFooter } from './ResScreenComponents';
import { ListHeader, ListFooter } from './ResListComponents';
import { CartScreen } from './CartScreen';
import { MenuItem } from './MenuItem';
import menuData from '../data/menuData.js'

// fetching menu data for a restaurant example
function getMenuData(id) {
  return menuData[id];
}

export function RestaurantScreen({route, navigation}) {
  let params = route.params;
  const [expandedSections, setExpandedSections] = useState(new Set());

  let id = params.id;

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
  const DATA = getMenuData(id);

  return (
    <SafeAreaView style={styles.container}>
      <RestaurantHeader params={params}/>
      <SectionList
         sections={DATA}
         extraData={expandedSections}
         keyExtractor={(item, index) => item + index}
         ListHeaderComponent={ListHeader(params)}
         renderSectionHeader={({section: {title}}) => (
           <Pressable onPress={() => {
             handleToggle(title);
           }}>
             <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
               <Text style={[styles.headerText, { width: '90%' }]}>{title}</Text>
               <Image style={{width: 20, height: 20, alignSelf: 'center', marginRight: 20}} source={require('../images/angle-small-down.png')} />
             </View>
           </Pressable>
         )}
         renderItem={({section: {title}, item}) => {
           const isExpanded = expandedSections.has(title);

           if (!isExpanded) return null;

           return (
             <MenuItem item={item}/>
           );
         }}
         ListFooterComponent={ListFooter}
      />
      <RestaurantFooter params={params}/>
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
  sectionItems: {
    padding: 20,
    marginVertical: 8,
    color: 'black'
  },
  topSection: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  headerText: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 16
  },
  itemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: 'black',
    fontSize: 16
  },
});

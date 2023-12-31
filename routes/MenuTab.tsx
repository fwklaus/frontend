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

import { CartScreen } from './CartScreen';
import { MenuItem } from './MenuItem';
import menuData from '../data/menuData.js'

// fetching menu data for a restaurant example
function getMenuData(id) {
  return menuData[id];
}

function GetDirections({address}) {
  // clicking on the address should request Google API for directions to restaurant

  return (
    <Pressable onPress={() => (console.log('Connect to Google API'))}>
      <Text style={{color: 'blue', textDecorationLine: 'underline'}}>{address}   </Text>
    </Pressable>
  );
}

function RestaurantHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View>
      <View style={[styles.topSection, {flexDirection: 'row', justifyContent: 'space-around', padding: 5, paddingLeft: 10}]}>
        <Image source={require(url)} style={{width: 50, height: 50}}></Image>
        <Text style={[styles.text, {width: 300, verticalAlign: 'middle'}]}>{title}</Text>
      </View>
    </View>
  );
}

function RestaurantFooter({params, navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
      <View style={styles.bottom}>
        <Pressable style={styles.button} onPress={()=> navigation.navigate('Cart', params)}>
          <View style={styles.buttonText}>
            <Text style={[styles.text, {width: 100, textAlign: 'center'}]}>View Cart</Text>
            <Text style={[styles.text, {right: -135, width: 100, textAlign: 'center'}]}>$0.00</Text>
          </View>
        </Pressable>
    </View>
  );
}

function ListHeader({id, title, category, distance, rating, phone, hours, address}) {
    // example
    hours = '8:00-8:00';
    phone = '(456)567-7895'

  return (
    <View>
      <View style={[styles.topSection, {height: 80, padding: 2, paddingLeft: 10}]}>
        <Text style={[styles.text, {width: '100%'}]}>{rating} | {category} | {distance}mi</Text>
        <Text style={styles.text}>{hours}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
      <View style={[styles.topSection, {height: 100, padding: 2, paddingLeft: 10}]}>
        <Text style={styles.text}>This is a pickup order</Text>
        <Text style={styles.text}>
          You'll need to go to {title} to pick up this order at:
          <GetDirections address={address}/>
        </Text>
      </View>
    </View>
  );
}

function ListFooter() {
  return (
    <View style={{height: 70}}></View>
  );
}


export function MenuTab({route, navigation}) {
    let params = route.params.params;
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
      <RestaurantFooter params={params} navigation={navigation}/>
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
    headerText: {
      color: 'black',
      fontSize: 16,
      backgroundColor: '#fff',
      padding: 20,
      paddingLeft: 16
    },
    button: {
      width: '100%',
      height: 70,
      backgroundColor: 'white',
      borderColor: 'black',
      borderTopWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
     buttonText: {
       fontSize: 16,
       width: '90%',
       color: 'black',
       backgroundColor: '#FBF501',
       padding: 8,
       borderRadius: 8,
       borderColor: 'black',
       borderWidth: 1,
       flexDirection: 'row'
     },
     bottom: {
       flex: 1,
       justifyContent: 'flex-end',
     },
    topSection: {
       backgroundColor: 'white',
       borderColor: 'black',
       borderBottomWidth: 1,
     },
     text: {
       color: 'black',
       fontSize: 16
     },
});

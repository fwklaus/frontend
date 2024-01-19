import React, { useState, useContext, useEffect } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Modal,
  RefreshControl
} from 'react-native'
import { CartModal } from '../components/ui/CartModal';
import { GetStars } from '../components/api/GetStars';
import { GetDirections } from '../components/api/GetDirections';

import { textStyles } from '../res/styles/text';
import { containerStyles } from '../res/styles/container';
import { buttonStyles } from '../res/styles/button';
import menuData from '../data/menuData.js'

// fetching menu data for a restaurant example
function getMenuData(id) {
  return menuData[id];
}

export function MenuScreenHeader({params}) {
  let logo = '../../res/images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;

  return (
    <View style={[ containerStyles.headerContainer, {flex: 0.12} ]}>
      <View style={containerStyles.headerLogoContainer}>
        <Image style={containerStyles.logoSize} source={require(logo)}/>
      </View>
     <Text style={[textStyles.text, textStyles.smallHeadings, {flex: 3}]}>{title}</Text>
    </View>
  );
}

export function MenuListHeader({id, title, category, distance, rating, phone, hours, address}) {
  // example
  hours = '8:00-8:00';
  phone = '(456)567-7895'

  let clock = '../res/images/clock.png';
  let phonePic = '../res/images/phone.png';

  return (
    <View style={{flex: 1}}>
      <View style={[styles.topSection, {flex: 1}]}>
        <View style={{flex: 1, flexDirection: 'column', margin: 10}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Text style={[textStyles.headingText, {fontSize: 18, textAlign: 'center'}]}>{rating}</Text>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            {/*Need stars Image based on rating*/}
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'flex-start'}}>
              <GetStars rating={rating}/>
              <Text style={[textStyles.headingText, {fontSize: 18}]}>{category} | {distance}(mi)</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Image style={{width: 20, height: 20}} source={require(clock)}/>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, {flex: 5, fontSize: 18}]}>{hours}</Text>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
              <View style={{flex: 3}}>{/*Spacer*/}</View>
              <View style={{flex: 2}}>
                <Image style={{width: 20, height: 20}} source={require(phonePic)}/>
              </View>
              <View style={{flex: 1}}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, {flex: 5, fontSize: 18}]}>{phone}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.topSection, {padding: 10, flex: 1}]}>
        <Text style={textStyles.text}>This is a pickup order. You'll need to go to {title} to pick up this order at:</Text>
        <GetDirections address={address} />
      </View>
    </View>
  );
}

export function MenuItem({item, restaurantId}) {
  let name = item.name;
  let cost = item.cost;
  let desc = item.description;
//   let url = item.picture;

  // how are we going to get the picture for the item since we can't call require dynamically?
  // for demonstration purposes
  let url = '../res/images/order_weasel_small.jpg';

  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} item={item} restaurantId={restaurantId}/>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={[containerStyles.itemContainer, {flexDirection: 'row', padding: 8}]}>
         <View style={{flex: 2, marginLeft: 16}}>
            <Text style={[textStyles.text, {flex: 1}]}>{name}</Text>
            <Text style={[textStyles.text, {flex: 1, fontSize: 12}]}>{desc}</Text>
            <Text style={[textStyles.text, {flex: 1, fontSize: 12}]}>{cost}</Text>
         </View>
         <View style={{flex: 1}}>
           <Image style={{marginRight: 32, width: 75, height: 75}} source={require(url)} />
         </View>
        </View>
      </Pressable>
    </View>
  );
}

export function MenuScreenFooter({params, navigation}) {
  return (
    <Pressable style={[buttonStyles.bottomNav, {flex: 0.11}]} onPress={()=> navigation.navigate('Cart', params)}>
      <View style={{flex: 0.5}}></View>
      <View style={[textStyles.buttonText, containerStyles.justifyText]}>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText, {textAlign: 'center'}]}>View Cart</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={[textStyles.headingText,  {textAlign: 'center'}]}>$0.00</Text>
        </View>
      </View>
      <View style={{flex: 0.5}}></View>
    </Pressable>
  );
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


  // load menu data asynchronously on refresh
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
        style={{flex: 1}}
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
        />
        <MenuScreenFooter params={params} navigation={navigation}/>
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topSection: {
     backgroundColor: 'white',
     borderColor: 'black',
     borderBottomWidth: 1,
   }
});

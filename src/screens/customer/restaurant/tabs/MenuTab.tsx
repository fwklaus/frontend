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
import useCart from '../../../../hooks/useCart';
import useCarts from '../../../../hooks/useCarts';
import useResData from '../../../../hooks/useResData';

import { CartModal } from '../../../../components/ui/CartModal';
import { GetStars } from '../../../../components/api/GetStars';

import { textStyles } from '../../../../res/styles/text';
import { containerStyles } from '../../../../res/styles/container';
import { buttonStyles } from '../../../../res/styles/button';

function MenuScreenHeader({params}) {
  let logo = '../../../../res/images/order_weasel_small.jpg'
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

function MenuListHeader({params}) {
   let id = params.id;
   let title = params.title;
   let category = params.category;
   let distance = params.distance;
   let rating = params.rating;
   let phone = params.phone;
   let hours = params.hours;
   let address = params.address;

  // example
  hours = '8:00-8:00';
  phone = '(456)567-7895'

  let clock = '../../../../res/images/clock.png';
  let phonePic = '../../../../res/images/phone.png';

  return (
    <View style={{flex: 1}}>
      <View style={[styles.topSection, {flex: 1}]}>
        <View style={{flex: 1, flexDirection: 'column', margin: 10}}>

          <View style={[styles.headerContainer]}>
            <View style={styles.rowLeftContainer}>
              <View style={styles.largeSpacer}>{/*Spacer*/}</View>
              <View style={styles.iconContainer}>
                <Text style={[textStyles.headingText, {fontSize: 18, textAlign: 'left'}]}>{rating}</Text>
              </View>
              <View style={styles.smallSpacer}>{/*Spacer*/}</View>
            </View>
            {/*Need stars Image based on rating*/}
            <View style={{flex: 5, flexDirection: 'row', justifyContent: 'left'}}>
              <GetStars rating={rating}/>
              <Text style={[textStyles.headingText, styles.textSpacing]}>{category} | {distance}(mi)</Text>
            </View>
          </View>

          <View style={styles.headerContainer}>
            <View style={styles.rowLeftContainer}>
              <View style={styles.largeSpacer}>{/*Spacer*/}</View>
              <View style={styles.iconContainer}>
                <Image style={styles.iconSize} source={require(clock)}/>
              </View>
              <View style={styles.smallSpacer}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, styles.textSpacing]}>{hours}</Text>
          </View>

          <View style={styles.headerContainer}>
            <View style={styles.rowLeftContainer}>
              <View style={styles.largeSpacer}>{/*Spacer*/}</View>
              <View style={styles.iconContainer}>
                <Image style={styles.iconSize} source={require(phonePic)}/>
              </View>
              <View style={styles.smallSpacer}>{/*Spacer*/}</View>
            </View>
            <Text style={[textStyles.headingText, styles.textSpacing]}>{phone}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.topSection, {padding: 10, flex: 1}]}>
        <Text style={textStyles.text}>This is a pickup order. You'll need to go to {title} to pick up this order at:</Text>
        <Pressable>
          <Text
            style={{color: 'blue', textDecorationLine: 'underline', fontSize: 16, flex: 12}}
            onPress={() => {
              console.log("Get Directions")
            }}
          >{address}</Text>
        </Pressable>
      </View>
    </View>
  );
}

function MenuItem({item, cart, restaurantId, addItem, editItem, deleteItem, findIndex}) {
  let name = item.name;
  let cost = item.cost;
  let desc = item.description;
//   let url = item.picture;

  // how are we going to get the picture for the item since we can't call require dynamically?
  // for demonstration purposes
  let url = '../../../../res/images/order_weasel_small.jpg';

  // modal state
  const [modalVisible, setModalVisible] = useState(false);

  return(
    <View>
      <CartModal modalVisible={modalVisible} setModalVisible={setModalVisible} cart={cart} item={item} restaurantId={restaurantId} addItem={addItem} editItem={editItem} deleteItem={deleteItem} findIndex={findIndex}/>
      <Pressable
        unstable_pressDelay={50}
        onPress={() => setModalVisible(true)}
        style={({pressed}) => [
          containerStyles.itemContainer,
          {flexDirection: 'row', padding: 10},
          { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
      ]}>
         <View style={{flex: 2}}>
            <Text style={[textStyles.text, {flex: 1}]}>{name}</Text>
            <Text style={[textStyles.text, {flex: 1, fontSize: 12}]}>{desc}</Text>
            <Text style={[textStyles.text, {flex: 1, fontSize: 12}]}>${cost}</Text>
         </View>
         <View style={{flex: 1}}>
           <Image style={{marginRight: 32, width: 75, height: 75}} source={require(url)} />
         </View>
      </Pressable>
    </View>
  );
}

function MenuScreenFooter({params, navigation, cart, cartTotal}) {
  return (
    <Pressable style={[containerStyles.bottomNav, {flex: 0.11}]} onPress={()=>{
      navigation.navigate('Cart', params)
    }}>
      <View style={styles.footerSpacer}>{/*spacer*/}</View>
      <View style={[textStyles.buttonText, styles.justifyText]}>
        <View style={{flex: 1, marginLeft: 10}}>
          <Text style={[textStyles.headingText]}>View Cart</Text>
        </View>
        <View style={{flex: 1, marginRight: 10}}>
          <Text style={[textStyles.headingText,  {textAlign: 'right'}]}>${cartTotal()}</Text>
        </View>
      </View>
      <View style={styles.footerSpacer}>{/*spacer*/}</View>
    </Pressable>
  );
}

function SectionHeader({handleToggle, title}) {
  return (
  <Pressable
      unstable_pressDelay={50}
      onPress={() => handleToggle(title)}
      style={({pressed}) => [
        {flexDirection: 'row', justifyContent: 'space-between', flex: 1},
        { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
    ]}>
      <Text style={textStyles.headerText}>{title}</Text>
      <Image
       style={{width: 20, height: 20, alignSelf: 'center', marginRight: 20}}
       source={require('../../../../res/images/angle-small-down.png')}
      />
  </Pressable>
  );
}

function MenuTab({route, navigation}) {
  const { cart, addItem, editItem, deleteItem, findIndex, cartTotal } = useCart();
  const { refreshing, loadMenu, menu, expandedSections, setExpandedSections, handleToggle
    } = useResData();

  let params = route.params.params;
  let restaurantId = params.id;

  useEffect(() => {
    loadMenu(restaurantId);
  }, []);

  return (
    <SafeAreaView style={containerStyles.main}>
      <MenuScreenHeader params={params}/>
      <SectionList
        style={{flex: 1}}
        sections={menu}
        extraData={expandedSections}
        keyExtractor={(item, index) => item + index}
        ListHeaderComponent={
          <MenuListHeader params={params} />
        }
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader handleToggle={handleToggle} title={title} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadMenu}/>
        }
        renderItem={({section: {title}, item}) => {
          const isExpanded = expandedSections.has(title);
          if (!isExpanded) return null;
          return (
           <MenuItem item={item} cart={cart} restaurantId={restaurantId} addItem={addItem} editItem={editItem} deleteItem={deleteItem} findIndex={findIndex} />
          );
        }}
        />
        <MenuScreenFooter params={params} navigation={navigation} cart={cart} cartTotal={cartTotal} />
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topSection: {
     backgroundColor: 'white',
     borderColor: 'black',
     borderBottomWidth: 1,
  },
  headerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  rowLeftContainer: {
   flex: 0.5,
   flexDirection: 'column',
   alignItems: 'center',
  },
  largeSpacer: {
   flex: 3
  },
  smallSpacer: {
    flex: 1
  },
  iconContainer: {
    flex: 2,
  },
  iconSize: {
    width: 18,
    height: 18
  },
  textSpacing: {
    flex: 5,
    fontSize: 18
  },
  footerSpacer: {
    flex: 0.5
  },
  justifyText: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  }
});

export {MenuScreenHeader, MenuListHeader, MenuItem, MenuScreenFooter, SectionHeader, MenuTab}
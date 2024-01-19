import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  RefreshControl,
  StyleSheet,
  Pressable,
  Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetDirections } from '../components/api/GetDirections';
import { containerStyles } from '../res/styles/container'
import { textStyles } from '../res/styles/text'

export function ResListResults(list) {
  let nResults = list.length;
  return (
    <View style={[containerStyles.restaurantItem, {padding: 10}]}>
      <Text  style={[textStyles.headingText, {color: '#A1000E', fontSize: 16}]}>{nResults} Results</Text>
    </View>
  );
}

export function ResListHeader({currentAddress}) {
  let locationMarker = '../res/images/marker.png';

  return (
    <View style={{flex: 0.17}}>
      <View style={[containerStyles.headerItem, {flex: 1, flexDirection: 'row'}]}>
        <View style={{flex: 1, alignItems: "center", justifyContent: 'center'}}>
          <Image style={{width: 20, height: 20}} source={require(locationMarker)}/>
        </View>
        <GetDirections address={currentAddress}/>
      </View>
      <View style={containerStyles.headerItem}>
        <Text style={[textStyles.headingText, {color: 'blue'}]}>Restaurants Near You (Carryout Only)</Text>
      </View>
    </View>
  );
}

export function RestaurantItem ({id, title, category, distance, rating, phone, hours, address}) {
  // require does not work with dynamic values?
    // can't pass the image URL to require at runtime
  // find another way to load the image
  let url = '../res/images/order_weasel_small.jpg'
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('RestaurantScreen', {id, title, category, distance, rating, phone, hours, address})}>
      <View style={[containerStyles.restaurantItem, {flexDirection: 'row'}]}>
        <Image source={require(url)} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
        <View style={{marginLeft: 10, flex: 2}}>
          <Text style={textStyles.text}>{title}</Text>
          <Text style={textStyles.text}>Category: {category}</Text>
          <Text style={textStyles.text}>Distance(mi): {distance}</Text>
          <Text style={textStyles.text}>Rating: {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

// fetching nearby restaurant data example
import restaurantData from '../data/restaurantData.js';

export function HomeTab({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [resData, setResData] = useState([]);

  useEffect(() => {
    loadRestaurants();
  }, [])

   const loadRestaurants = () => {
    // load restaurants based on proximity
    // will fetch the data based on proximity
      setResData(restaurantData);
      console.log(restaurantData, "...logging from HomeTab.tsx");

//       fetch('load/restaurants')
//         .then((response) => response.json())
//         .then((responseJson) => {
//           setRefreshing(false);
//           var newdata = userData.concat(responseJson.results);
//           setUserData(newdata);
//         })
//         .catch((error) => {
//           console.error(error);
//         });

         setRefreshing(true);
            setTimeout(() => {
              setRefreshing(false);
            }, 2000);
    };

  // request restaurant data based on proximity to current location
  // calculate distance
  // get rating
  // all done through Google?
  let currentAddress = '5555 Oak Street';
// const DATA = reassign based on proximity to current location if the user changes their location

  return(
    <SafeAreaView style={{flex: 1}}>
      <ResListHeader currentAddress={currentAddress} />
      <FlatList
        style={{flex: 1, backgroundColor: 'red'}}
        data={restaurantData}
        renderItem={({item})=> <RestaurantItem
            id={item.id}
            title={item.title}
            category={item.category}
            distance={item.distance}
            rating={item.rating}
            phone={item.phone}
            hours={item.hours}
            address={item.address}
          />}
//           onRefresh={onRefresh}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadRestaurants}/>
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={ResListResults(restaurantData)}
      />
    </SafeAreaView>
  );
}
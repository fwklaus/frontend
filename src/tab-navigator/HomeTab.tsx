import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  RefreshControl,
  StyleSheet,
  Pressable,
  Image,
  TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GetDirections } from '../components/api/GetDirections';
import { containerStyles } from '../res/styles/container';
import { textStyles } from '../res/styles/text';
import { loadRestaurants } from '../hooks/useRes';

// fetching nearby restaurant data example
import restaurantData from '../data/restaurantData.js';

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
    <Pressable
      unstable_pressDelay={50}
      onPress={() => navigation.navigate('RestaurantScreen', {id, title, category, distance, rating, phone, hours, address})}
      style={({pressed}) => [
         containerStyles.restaurantItem,
         {flexDirection: 'row'},
         { backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
      ]}
    >
      <Image source={require(url)} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
      <View style={{marginLeft: 10, flex: 2}}>
        <Text style={textStyles.text}>{title}</Text>
        <Text style={textStyles.text}>Category: {category}</Text>
        <Text style={textStyles.text}>Distance(mi): {distance}</Text>
        <Text style={textStyles.text}>Rating: {rating}</Text>
      </View>
    </Pressable>
  );
}


export function HomeTab({navigation}) {
  const [refreshing, setRefreshing] = useState(false);
  const [resData, setResData] = useState([]);
  // must be set programmatically, or manually as a last resort
  let currentAddress = '5555 Oak Street';
  useEffect(() => {loadRestaurants(currentAddress)}, [])

const loadRestaurants = (address) => {

  // load restaurants based on proximity
  // will fetch the restaurantData based on proximity

    setResData(restaurantData);

//   console.log("...logging from useRes.tsx");

  // use the following when we can actually fetch from the server

  //       fetch('load/restaurants')
  //         .then((response) => response.json())
  //         .then((responseJson) => {
  //           setRefreshing(false);
  //           var newdata = userData.concat(responseJson.results);
  //           setResData(newdata);
  //         })
  //         .catch((error) => {
  //           console.error(error);
  //         });

  setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
}

  return(
    <SafeAreaView style={{flex: 1}}>
      <ResListHeader currentAddress={currentAddress} />
      <FlatList
        style={{flex: 1, backgroundColor: 'red'}}
        data={resData}
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
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadRestaurants}/>
        }
        keyExtractor={item => item.id}
        ListHeaderComponent={ResListResults(resData)}
      />
    </SafeAreaView>
  );
}

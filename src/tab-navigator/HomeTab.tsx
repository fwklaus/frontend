import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  RefreshControl,
} from 'react-native';
import { RestaurantItem } from '../components/list/RestaurantItem';
import { ResListHeader } from '../components/list/ResListHeader';
import { ResListResults } from '../components/list/ResListResults';
import { containerStyles } from '../res/styles/container'
import { textStyles } from '../res/styles/text'

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
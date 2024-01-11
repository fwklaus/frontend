import React from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
} from 'react-native';
import { RestaurantItem } from '../components/list/RestaurantItem';
import { ResListHeader } from '../components/list/ResListHeader';
import { ResListResults } from '../components/list/ResListResults';
import { containerStyles } from '../res/styles/container'
import { textStyles } from '../res/styles/text'

// fetching nearby restaurant data example
import restaurantData from '../data/restaurantData.js';

export function HomeTab({navigation}) {
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
          keyExtractor={item => item.id}
          ListHeaderComponent={ResListResults(restaurantData)}
        />
    </SafeAreaView>
  );
}
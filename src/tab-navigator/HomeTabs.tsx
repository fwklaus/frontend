import React from 'react';
import {} from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { RestaurantScreen } from './RestaurantScreen';
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
  View,
  Image,
  Text,
} from 'react-native';

// fetching nearby restaurant data example
import restaurantData from '../data/restaurantData.js';

function Item ({id, title, category, distance, rating, phone, hours, address}) {
  // require does not work with dynamic values?
    // can't pass the image URL to require at runtime
  // find another way to load the image
  let url = '../res/images/order_weasel_small.jpg'
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('RestaurantScreen', {id, title, category, distance, rating, phone, hours, address})}>
      <View style={[styles.item, {flexDirection: 'row'}]}>
        <Image source={require(url)} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
        <View style={{marginLeft: 10, flex: 2}}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.text}>Category: {category}</Text>
          <Text style={styles.text}>Distance(mi): {distance}</Text>
          <Text style={styles.text}>Rating: {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function MainListHeader({currentAddress}) {
  return (
    <View>
      <View style={[styles.item, {padding: 10}]}>
        <Text style={styles.headingText}>{currentAddress}</Text>
      </View>
      <View style={[styles.item, {padding: 10}]}>
        <Text style={[styles.headingText, {color: 'blue'}]}>Restaurants Near You (Carryout Only)</Text>
      </View>
    </View>
  );
}

function ListResults(list) {
  let nResults = list.length;
  return (
    <View style={[styles.item, {padding: 10}]}>
      <Text  style={[styles.headingText, {color: '#A1000E', fontSize: 16}]}>{nResults} Results</Text>
    </View>
  );
}

export function HomeTab({navigation}) {
  // request restaurant data based on proximity to current location
  // calculate distance
  // get rating
  // all done through Google?
  let currentAddress = '5555 Oak Street';
// const DATA = reassign based on proximity to current location if the user changes their location

  return(
    <SafeAreaView style={styles.listContainer}>
        <MainListHeader currentAddress={currentAddress} />
        <FlatList
          data={restaurantData}
          renderItem={({item})=> <Item
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
          ListHeaderComponent={ListResults(restaurantData)}
        />
    </SafeAreaView>
  );
}

export function ServicesTab() {
  let text = [
    'Select from any one of our participating merchants',
    'Add items to your cart and place your order',
    "Use the time estimate to determine when you need to arrive for pickup. We'll still send you a notification to let you know when the order's ready anyway.",
    'When you arrive at the restaurant, your order should be waiting for you. Just pay at the counter and be on your way!'
  ];

  return(
     <SafeAreaView style={[styles.container, {backgroundColor: 'white', justifyContent: 'flex-start'}]}>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Our Services</Text>
        <Text style={styles.serviceTermsText}>-{text[0]}</Text>
        <Text style={styles.serviceTermsText}>-{text[1]}</Text>
        <Text style={styles.serviceTermsText}>-{text[2]}</Text>
        <Text style={styles.serviceTermsText}>-{text[3]}</Text>
     </SafeAreaView>
  );
}

export function TermsTab() {
  return(
    <SafeAreaView style={[styles.container, {backgroundColor: 'white', justifyContent: 'flex-start'}]}>
      <View>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Terms of Service</Text>
      </View>
      <View >
        <Text style={styles.serviceTermsText}>
          This is a student project...
        </Text>
       <Text style={styles.serviceTermsText}>
          We are not liable...
       </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
  listContainer: {
    flex: 1,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  },
  headingText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
  },
  serviceTermsText: {
     fontWeight: 'bold',
     color: 'black',
     fontSize: 16,
     marginBottom: 10
  }
});

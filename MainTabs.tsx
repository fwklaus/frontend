import React from 'react';
import {} from 'react-native'
import { useNavigation } from '@react-navigation/native';

import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
  View,
  Image,
  Text
} from 'react-native';


const DATA = [
  { id: 1, title: 'The Red Pickle', category: 'American', distance: 5.2, rating: 5 },
  { id: 2, title: 'Yes Siam Thai', category: 'Thai', distance: 6, rating: 5 },
  { id: 3, title: 'Classic Burgers', category: 'American', distance: 6, rating: 3.5 },
  { id: 4, title: 'Arharn', category: 'Thai', distance: 2.1, rating: 5 },
  { id: 5, title: 'Pakwan', category: 'Indian', distance: 1.4, rating: 4 },
  { id: 6, title: 'Taste of Jerusalem', category: 'Middle-Eastern', distance: 1.3, rating: 4 },
];

function Item ({id, title, category, distance, rating, phone, hours}) {
  // require does not work with dynamic values?
    // can't pass the image URL to require at runtime
  // find another way to load the image
  let url = './images/order_weasel_small.jpg'
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate('RestaurantTemplate', {id, title, category, distance, rating, phone, hours})}>
      <View style={[styles.item, {flexDirection: 'row'}]}>
        <Image source={require(url)} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
        <View style={{marginLeft: 10, flex: 2}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>Category: {category}</Text>
          <Text style={styles.title}>Distance(mi): {distance}</Text>
          <Text style={styles.title}>Rating: {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function MainListHeader({currentAddress}) {
  return (
    <View>
      <View style={[styles.item, {padding: 10}]}>
        <Text style={{color: 'black'}}>{currentAddress}</Text>
      </View>
      <View style={[styles.item, {padding: 10}]}>
        <Text style={{color: 'black'}}>Restaurants Near You (Carryout Only)</Text>
      </View>
    </View>
  );
}

function ListResults(nResults) {
  return (
    <View style={[styles.item, {padding: 10}]}>
      <Text  style={{color: 'black'}}>{nResults} Results</Text>
    </View>
  );
}

export function HomeTab({navigation}) {
  // request restaurant data based on proximity to current location
  // calculate distance
  // get rating
  // all done through Google?
  let currentAddress = '5555 Oak Street';
  let nResults = 1;
// const DATA = reassign based on proximity to current location if the user changes their location

  return(
    <SafeAreaView style={styles.listContainer}>
        <MainListHeader currentAddress={currentAddress} />
        <FlatList
          data={DATA}
          renderItem={({item})=> <Item
              id={item.id}
              title={item.title}
              category={item.category}
              distance={item.distance}
              rating={item.rating}
              phone={item.phone}
              hours={item.hours}
            />}
          keyExtractor={item => item.id}
          ListHeaderComponent={ListResults(nResults)}
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
     <SafeAreaView>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Our Services</Text>
        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[0]}</Text>
        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[1]}</Text>
        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[2]}</Text>
        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[3]}</Text>
     </SafeAreaView>
  );
}

export function TermsTab() {
  return(
    <SafeAreaView>
      <View>
        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Terms of Service</Text>
      </View>
      <View >
        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>
          This is a student project...
        </Text>
       <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>
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
  title: {
    fontSize: 16,
    color: 'black',
  },
});

import React from 'react';
import {} from 'react-native'

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

function Item ({title, category, distance, rating}) {
  return (
    <Pressable onPress={() => console.log('Interesting')}>
      <View style={[styles.item, {flexDirection: 'row'}]}>
        <Image source={require('./images/order_weasel_small.jpg')} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
        <View style={{marginLeft: 10}}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>Category: {category}</Text>
          <Text style={styles.title}>Distance(mi): {distance}</Text>
          <Text style={styles.title}>Rating: {rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}

function GetRestaurants() {
    // request restaurant data based on proximity to current location
    // calculate distance
    // get rating
    // all done through Google?
   const DATA = [{ id: 1, title: 'The Red Pickle', category: 'American', distance: 5.2, rating: 5 }];

    return (
        <FlatList
          data={DATA}
          renderItem={({item})=> <Item title={item.title} category={item.category} distance={item.distance} rating={item.rating} />}
          keyExtractor={item => item.id}
        />
    );
}

export function HomeTab({navigation}) {
  return(
  <SafeAreaView style={styles.listContainer}>
{/*      <View style={styles.mainTextContainer}> */}
{/*        <Text style={{color: 'black'}}> */}
{/*          Location */}
{/*        </Text> */}
{/*      </View> */}
{/*      <View></View> */}
{/*      <View style={styles.mainTextContainer}> */}
{/*        <Text style={{color: 'black'}}> */}
{/*          Restaurants Near You (Carryout Only) */}
{/*        </Text> */}
{/*      </View> */}
{/*      <View style={styles.mainTextContainer}> */}
{/*       <Text style={{color: 'black'}}> */}
{/*          1 result */}
{/*       </Text> */}
{/*      </View> */}

{/*     <View style={styles.mainTextContainer}> */}
{/*       <Button title="Temporary: Go To Red Pickle" onPress={() => navigation.navigate("RestaurantExample")}/> */}
{/*     </View> */}
    <GetRestaurants />
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
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});

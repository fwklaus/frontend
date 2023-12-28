import React, { useState } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image
} from 'react-native'

// fetching menu data for a restaurant example
import menuData from '../data/menuData.js'

function getMenuData(id) {
  return menuData[id];
}


function RestaurantHeader({params}) {
  let url = '../images/order_weasel_small.jpg'
  let id = params.id;
  let title = params.title;
  let category = params.category;
  let distance = params.distance;
  let rating = params.rating;
  let phone = params.phone;
  let hours = params.hours;


  return (
    <View>
      <View style={[styles.item, {flexDirection: 'row'}]}>
        <Image source={require(url)}></Image>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={[styles.item]}>
        <Text style={styles.text}>{rating} | {category} | {distance}mi</Text>
        <Text style={styles.text}>{hours}</Text>
        <Text style={styles.text}>{phone}</Text>
      </View>
      <View style={[styles.item]}>
        <Text style={styles.text}>This is a pickup order</Text>
        <Text style={styles.text}>You'll need to go to {title} to pick up this order at:</Text>
        <Text style={styles.text}>--address--, {distance}(mi) away</Text>
        <Text style={styles.text}>(Estimated pickup time(20 to 35m)</Text>
      </View>
    </View>
  );
}

export function RestaurantScreen({route, navigation}) {
  let params = route.params;
  const [expandedSections, setExpandedSections] = useState(new Set());

  let id = params.id;
//   let title = params.title;
//   let category = params.category;
//   let distance = params.distance;
//   let rating = params.rating;
//   let phone = params.phone;
//   let hours = params.hours;

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

  // request menu data using params.id
  //  let Data = getMenuData for the given params.id
  // this will be an asynchronous call to the backend API
  const DATA = getMenuData(id);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
      {/*}<Text style={{color: "black"}}>Insert details and render SectionList here for: {id}</ Text>*/}
      <RestaurantHeader params={params}/>
      <SectionList
         sections={DATA}
         extraData={expandedSections}
         keyExtractor={(item, index) => item + index}
         renderItem={({section: {title}, item}) => {
           const isExpanded = expandedSections.has(title);

           if (!isExpanded) return null;

           return (
             <View style={styles.itemContainer}>
               <Text style={styles.sectionItems}>{item}</Text>
             </View>
           );
         }}
         renderSectionHeader={({section: {title}}) => (
           <Pressable onPress={() => handleToggle(title)}>
             <View style={styles.headerContainer}>
               <Text style={styles.headers}>{title}</Text>
             </View>
           </Pressable>
         )}
      />
    </ SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "center",
    backgroundColor: '#FBF501',
  },
  sectionItems: {
    padding: 20,
    marginVertical: 8,
    color: 'black'
  },
  headers: {
    color: 'black',
    fontSize: 16,
    backgroundColor: '#fff',
    padding: 20,
    paddingLeft: 16
  },
  headerContainer: {
    borderColor: 'black',
    borderBottomWidth: 1,
    flex: 1,

  },
  itemContainer: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 10,
  },
  text: {
    color: 'black'
  },
  item: {
    backgroundColor: 'white',
    padding: 20,
    borderColor: 'black',
    borderBottomWidth: 1,
  },
});

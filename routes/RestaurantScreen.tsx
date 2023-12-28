import { React } from 'react';
import {
  SafeAreaView,
  SectionList,
  View,
  Text,
  StyleSheet
} from 'react-native'

export function RestaurantScreen({route, navigation}) {
  let params = route.params;
  let id = params.id;
  let title = params.title;
  let category = params.category;
  let distance = params.distance;
  let rating = params.rating;
  let phone = params.phone;
  let hours = params.hours;
//   const [expanded]

  // request menu data using params.id
  //  let menuData = []

  // menu example for id 1
  let menuData = [
    {
      title: 'Breakfast',
      data: ['Eggs', 'Pancakes']
    },
    {
      title: 'Lunch',
      data: ['Sandwich', 'Burger']
    },
    {
      title: 'Drinks',
      data: ['Soda', 'Beer']
    },
    {
      title: 'Dessert',
      data: ['Pie', 'Ice Cream']
    },
  ];

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
        {/*}<Text style={{color: "black"}}>Insert details and render SectionList here for: {id}</ Text>*/}
        <SectionList
           sections={menuData}
           keyExtractor={(item, index) => item + index}
           renderItem={({item}) => (
             <View>
               <Text style={styles.sectionItems}>{item}</Text>
             </View>
           )}
           renderSectionHeader={({section: {title}}) => (
             <View>
              <Text style={styles.headers}>{title}</Text>
             </View>
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
    fontSize: 24,
    backgroundColor: '#fff',
  }
});

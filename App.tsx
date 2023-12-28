import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  SectionList
} from 'react-native';

// import { HomeTab, ServicesTab, TermsTab } from './routes/MainTabs'
import { LoadingScreen } from './routes/LoadingScreen'
import { HomeScreen } from './routes/HomeScreen'
import { RestaurantScreen } from './routes/RestaurantScreen'

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// function LoadingScreen({ navigation }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.innerContainer}>
//         <Image source={require('./images/order_weasel_small.jpg')} />
//         <Text  style={[styles.loadingText, {color: 'blue'}]}>SEARCHING FOR RESTAURANTS...</Text>
//       </View>
//
//       <View>
//         <Button title="Temporary: go to home page" onPress={()=> navigation.navigate('HomeScreen')}/>
//       </View>
//     </SafeAreaView>
//   );
// }

// function MyTabs() {
//   return (
//     <Tab.Navigator screenOptions={{
//       headerShown: false,
//       tabBarStyle: {
//         backgroundColor: 'yellow',
//       },
//       tabBarIconStyle: {
//         display: 'none',
//       },
//       tabBarLabelStyle: {
//         fontSize: 16,
//         marginBottom: 10,
//       }
//     }}>
//       <Tab.Screen name="Home" component={ HomeTab }/>
//       <Tab.Screen name="Our Services" component={ ServicesTab }/>
//       <Tab.Screen name="Terms" component={ TermsTab }/>
//     </Tab.Navigator>
//   );
// }

// function HomeScreen({ navigation }) {
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
//         <MyTabs />
//     </ SafeAreaView>
//   );
// }

// function RestaurantTemplate({route, navigation}) {
//   let params = route.params;
//   let id = params.id;
//   let title = params.title;
//   let category = params.category;
//   let distance = params.distance;
//   let rating = params.rating;
//   let phone = params.phone;
//   let hours = params.hours;
// //   const [expanded]
//
//   // request menu data using params.id
//   //  let menuData = []
//
//   // menu example for id 1
//   let menuData = [
//     {
//       title: 'Breakfast',
//       data: ['Eggs', 'Pancakes']
//     },
//     {
//       title: 'Lunch',
//       data: ['Sandwich', 'Burger']
//     },
//     {
//       title: 'Drinks',
//       data: ['Soda', 'Beer']
//     },
//     {
//       title: 'Dessert',
//       data: ['Pie', 'Ice Cream']
//     },
//   ];
//
//   return (
//     <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
//         {/*}<Text style={{color: "black"}}>Insert details and render SectionList here for: {id}</ Text>*/}
//         <SectionList
//            sections={menuData}
//            keyExtractor={(item, index) => item + index}
//            renderItem={({item}) => (
//              <View>
//                <Text style={styles.sectionItems}>{item}</Text>
//              </View>
//            )}
//            renderSectionHeader={({section: {title}}) => (
//              <View>
//               <Text style={styles.headers}>{title}</Text>
//              </View>
//            )}
//         />
//     </ SafeAreaView>
//   );
// }

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loading"
          component={LoadingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "OrderWeasel",
            headerTintColor: "blue",
            headerStyle: {
              backgroundColor: "#FBF501",
            },
            headerTitleAlign: "center",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options= {{
            title: "OrderWeasel",
            headerTintColor: "blue",
            headerStyle: {
              backgroundColor: "#FBF501",
            },
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </ NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "stretch",
//     justifyContent: "center",
//     backgroundColor: '#FBF501',
//   },
//   innerContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   loadingText: {
//     width: 275,
//     color: 'black',
//     marginTop: 20,
//     textAlign: "center"
//   },
//   sectionItems: {
//     padding: 20,
//     marginVertical: 8,
//     color: 'black'
//   },
//   headers: {
//     color: 'black',
//     fontSize: 24,
//     backgroundColor: '#fff',
//   }
// });

export default App;

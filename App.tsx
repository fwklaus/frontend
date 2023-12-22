import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  Pressable,
} from 'react-native';

import { HomeTab, ServicesTab, TermsTab } from './MainTabs'

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
const Tab = createBottomTabNavigator();

function LoadingScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Image source={require('./images/order_weasel_small.jpg')} />
        <Text  style={[styles.loadingText, {color: 'blue'}]}>SEARCHING FOR RESTAURANTS...</Text>
      </View>

      <View>
        <Button title="Temporary: go to home page" onPress={()=> navigation.navigate('HomeScreen')}/>
      </View>
    </SafeAreaView>
  );
}

// function Item ({title, category, distance, rating}) {
//   return (
//     <Pressable onPress={() => console.log('Interesting')}>
//       <View style={[styles.item, {flexDirection: 'row'}]}>
//         <Image source={require('./images/order_weasel_small.jpg')} style={{width: 100, height: 100, borderColor: 'black', borderWidth: 1}}/>
//         <View style={{marginLeft: 10}}>
//           <Text style={styles.title}>{title}</Text>
//           <Text style={styles.title}>Category: {category}</Text>
//           <Text style={styles.title}>Distance(mi): {distance}</Text>
//           <Text style={styles.title}>Rating: {rating}</Text>
//         </View>
//       </View>
//     </Pressable>
//   );
// }

// function GetRestaurants() {
//     // request restaurant data based on proximity to current location
//     // calculate distance
//     // get rating
//     // all done through Google?
//    const DATA = [{ id: 1, title: 'The Red Pickle', category: 'American', distance: 5.2, rating: 5 }];
//
//     return (
//         <FlatList
//           data={DATA}
//           renderItem={({item})=> <Item title={item.title} category={item.category} distance={item.distance} rating={item.rating} />}
//           keyExtractor={item => item.id}
//         />
//     );
// }


// function RestaurantExample() {
//   // request restaurant data based on proximity to current location
//
//   return (
//     <SafeAreaView style={styles.listContainer}>
//       <FlatList
//         data={[{ id: 1, title: 'The Red Pickle' }]}
//         renderItem={({item})=> <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// function HomeTab({navigation}) {
//   return(
//   <SafeAreaView style={styles.listContainer}>
// {/*      <View style={styles.mainTextContainer}> */}
// {/*        <Text style={{color: 'black'}}> */}
// {/*          Location */}
// {/*        </Text> */}
// {/*      </View> */}
// {/*      <View></View> */}
// {/*      <View style={styles.mainTextContainer}> */}
// {/*        <Text style={{color: 'black'}}> */}
// {/*          Restaurants Near You (Carryout Only) */}
// {/*        </Text> */}
// {/*      </View> */}
// {/*      <View style={styles.mainTextContainer}> */}
// {/*       <Text style={{color: 'black'}}> */}
// {/*          1 result */}
// {/*       </Text> */}
// {/*      </View> */}
//
// {/*     <View style={styles.mainTextContainer}> */}
// {/*       <Button title="Temporary: Go To Red Pickle" onPress={() => navigation.navigate("RestaurantExample")}/> */}
// {/*     </View> */}
//     <GetRestaurants />
//
//   </SafeAreaView>
//   );
// }

// function ServicesTab() {
//   let text = [
//     'Select from any one of our participating merchants',
//     'Add items to your cart and place your order',
//     "Use the time estimate to determine when you need to arrive for pickup. We'll still send you a notification to let you know when the order's ready anyway.",
//     'When you arrive at the restaurant, your order should be waiting for you. Just pay at the counter and be on your way!'
//   ];
//
//   return(
//      <SafeAreaView>
//        <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Our Services</Text>
// {/*        <Stack.Navigator> */}
// {/*          <Stack.Screen name="HowItWorks(1)" component={HowItWorksN}/> */}
// {/*          <Stack.Screen name="HowItWorks(2)" component={HowItWorksN}/> */}
// {/*          <Stack.Screen name="HowItWorks(3)" component={HowItWorksN}/> */}
// {/*          <Stack.Screen name="HowItWorks(4)" component={HowItWorksN}/> */}
// {/*        </Stack.Navigator> */}
//         <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[0]}</Text>
//         <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[1]}</Text>
//         <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[2]}</Text>
//         <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>-{text[3]}</Text>
//      </SafeAreaView>
//   );
// }

// function TermsTab() {
//   return(
//     <SafeAreaView>
//       <View>
//         <Text style={{color: 'black', textAlign: 'center', marginBottom: 16, fontSize: 32}}>Terms of Service</Text>
//       </View>
//       <View >
//         <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>
//           This is a student project...
//         </Text>
//        <Text style={{color: 'black', marginBottom: 10, fontSize: 16}}>
//           We are not liable...
//        </Text>
//       </View>
//     </SafeAreaView>
//   );
// }

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: 'yellow',
      },
      tabBarIconStyle: {
        display: 'none',
      },
      tabBarLabelStyle: {
        fontSize: 16,
        marginBottom: 10,
      }
    }}>
      <Tab.Screen name="Home" component={ HomeTab }/>
      <Tab.Screen name="Our Services" component={ServicesTab}/>
      <Tab.Screen name="Terms" component={TermsTab}/>
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={[styles.container, {backgroundColor: "white"}]}>
        <MyTabs />
    </ SafeAreaView>
  );
}

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
          }}
        />
{/*         <Stack.Screen */}
{/*           name="RestaurantExample" */}
{/*           component={RestaurantExample} */}
{/*         /> */}
      </Stack.Navigator>
    </ NavigationContainer>
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
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  main: {
    flex: 1,
    backgroundColor: "white",
  },
//   mainTextContainer: {
//     textAlign: "center",
//     height: 60,
//     backgroundColor: "white",
//     borderColor: 'black',
//     borderBottomWidth: 1,
//   },
  loadingText: {
    width: 275,
    color: 'black',
    marginTop: 20,
    textAlign: "center"
  }
});

export default App;

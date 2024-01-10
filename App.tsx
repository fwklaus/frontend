import React from 'react';
import {useState, createContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  SectionList,
  Pressable
} from 'react-native';

import { LoadingScreen } from './routes/LoadingScreen';
import { HomeScreen } from './routes/HomeScreen';
import { RestaurantScreen } from './routes/RestaurantScreen';
import { CheckoutScreen } from './routes/CheckoutScreen';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "blue",
          headerStyle: {
            backgroundColor: "#FBF501",
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 24,
            fontFamily: "sans-serif-condensed"
          },
          headerTitleAlign: "center",
          statusBarStyle: 'auto',
        }}
      >
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
            title: "ORDERWEASEL",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="RestaurantScreen"
          component={RestaurantScreen}
          options= {{
            title: "ORDER",
//             headerRight: headerRight,
          }}
        />
         <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
            options= {{
              title: "CHECKOUT",
//              headerRight: headerRight,
            }}
          />
      </Stack.Navigator>
    </ NavigationContainer>
  );
}




export default App;

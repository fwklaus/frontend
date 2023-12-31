import React, {useState, createContext} from 'react';
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
  SectionList
} from 'react-native';

import { LoadingScreen } from './routes/LoadingScreen';
import { HomeScreen } from './routes/HomeScreen';
import { RestaurantScreen } from './routes/RestaurantScreen';
import { CheckoutScreen } from './routes/CheckoutScreen';

const Stack = createNativeStackNavigator();

// import {
//   Colors,
// } from 'react-native/Libraries/NewAppScreen';

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
            title: "Order",
            headerTintColor: "blue",
            headerStyle: {
              backgroundColor: "#FBF501",
            },
            headerTitleAlign: "center",
          }}
        />
         <Stack.Screen
            name="CheckoutScreen"
            component={CheckoutScreen}
            options= {{
              title: "Checkout",
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

export default App;

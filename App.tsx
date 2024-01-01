import React, {useState, createContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
import { LoadingScreen } from './routes/LoadingScreen';
import { HomeScreen } from './routes/HomeScreen';
import { RestaurantScreen } from './routes/RestaurantScreen';
import { CartScreen } from './routes/CartScreen';

const Stack = createNativeStackNavigator();

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

// export const ShoppingCart = createContext([]);

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
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
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

export default App;

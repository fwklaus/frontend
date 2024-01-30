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
  Button,
  SectionList,
  Pressable,
  Alert
} from 'react-native';
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import { SignInProvider, SignInContext } from './src/context/SignInContext';

// splash page
import { LoadingScreen } from './src/screens/LoadingScreen';

// Select pathway
import { WelcomeScreen} from './src/screens/WelcomeScreen';

// merchant screens
import { MerchantScreen } from './src/screens/merchant/MerchantScreen';

// customer screens
import { RestaurantScreen } from './src/screens/customer/RestaurantScreen';
import { HomeScreen } from './src/screens/customer/HomeScreen';
import { CheckoutScreen } from './src/screens/customer/CheckoutScreen';

const stackType = 'native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SignInProvider>
        <HeaderButtonsProvider stackType={stackType}>
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
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{
                title: 'WELCOME',
                headerBackVisible: false
              }}
            />
            <Stack.Screen
              name="MerchantScreen"
              component={MerchantScreen}
              options={{
                title: "MERCHANT SIGN-UP",
                headerBackVisible: false,
              }}
            />
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "ORDERWEASEL",
              }}
            />
            <Stack.Screen
              name="RestaurantScreen"
              component={RestaurantScreen}
              options= {{
                title: "ORDER"
              }}
            />
             <Stack.Screen
                name="CheckoutScreen"
                component={CheckoutScreen}
                options= {{
                  title: "CHECKOUT",
                }}
              />
          </Stack.Navigator>
        </HeaderButtonsProvider>
      </SignInProvider>
    </NavigationContainer>
  );
}

export default App;

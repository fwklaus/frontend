import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// contexts
import {HeaderButtonsProvider} from 'react-navigation-header-buttons';
import {LoginProvider} from './src/context/LoginContext';
import {LocationProvider} from './src/context/LocationContext';
import {MerchantProvider} from './src/context/MerchantContext';
import {CartsProvider} from './src/context/CartsContext';
import {ResDataProvider} from './src/context/ResDataContext';
import {OrdersProvider} from './src/context/OrdersContext';
import {SessionProvider} from './src/context/SessionContext';

// API Contexts should be available across app
  // should take some data, make a request
  // return necessary data

// splash page
import {LoadingScreen} from './src/screens/LoadingScreen';

// Select pathway
import {WelcomeScreen} from './src/screens/WelcomeScreen';

// merchant screens
import {MerchantScreen} from './src/screens/merchant/merchant/MerchantScreen';

// customer screens
import {HomeScreen} from './src/screens/customer/home/HomeScreen';
import {RestaurantScreen} from './src/screens/customer/restaurant/RestaurantScreen';
import {CheckoutScreen} from './src/screens/customer/checkout/CheckoutScreen';

const stackType = 'native';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SessionProvider>
        <MerchantProvider>
          <LocationProvider>
            <OrdersProvider>
              <ResDataProvider>
                <LoginProvider>
                  <CartsProvider>
                    <HeaderButtonsProvider stackType={stackType}>
                      <Stack.Navigator
                        screenOptions={{
                          headerTintColor: 'blue',
                          headerStyle: {
                            backgroundColor: '#FBF501',
                          },
                          headerTitleStyle: {
                            fontWeight: 'bold',
                            fontSize: 24,
                            fontFamily: 'sans-serif-condensed',
                          },
                          headerTitleAlign: 'center',
                          statusBarStyle: 'auto',
                        }}>
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
                            headerBackVisible: false,
                          }}
                        />
                        <Stack.Screen
                          name="MerchantScreen"
                          component={MerchantScreen}
                          options={{
                            title: 'MERCHANT SIGN-UP',
                            headerBackVisible: false,
                          }}
                        />
                        <Stack.Screen
                          name="HomeScreen"
                          component={HomeScreen}
                          options={{
                            title: 'ORDERWEASEL',
                          }}
                        />
                        <Stack.Screen
                          name="RestaurantScreen"
                          component={RestaurantScreen}
                          options={{
                            title: 'ORDER',
                          }}
                        />
                        <Stack.Screen
                          name="CheckoutScreen"
                          component={CheckoutScreen}
                          options={{
                            title: 'CHECKOUT',
                          }}
                        />
                      </Stack.Navigator>
                    </HeaderButtonsProvider>
                  </CartsProvider>
                </LoginProvider>
              </ResDataProvider>
            </OrdersProvider>
          </LocationProvider>
        </MerchantProvider>
      </SessionProvider>
    </NavigationContainer>
  );
}

export default App;

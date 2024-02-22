import {React} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import {HomeTab} from './tabs/HomeTab';

import {containerStyles} from '../../../res/styles/container';
import {textStyles} from '../../../res/styles/text';

let homeIcon = '../../../res/images/restaurant.png';
let servicesIcon = '../../../res/images/room_service.png';
let termsIcon = '../../../res/images/memo.png';

const Tab = createBottomTabNavigator();

function TermsTab() {
  return (
    <SafeAreaView
      style={[
        containerStyles.mainTabs,
        {backgroundColor: 'white', justifyContent: 'flex-start'},
      ]}>
      <View style={{margin: 10}}>
        <View>
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              marginBottom: 16,
              fontSize: 32,
            }}>
            Terms of Service
          </Text>
        </View>
        <View>
          <Text style={textStyles.serviceTermsText}>
            This is a student project...
          </Text>
          <Text style={textStyles.serviceTermsText}>We are not liable...</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export function ServicesTab() {
  let text = [
    'Select from any one of our participating merchants',
    'Add items to your cart and place your order',
    "Use the time estimate to determine when you need to arrive for pickup. We'll still send you a notification to let you know when the order's ready anyway.",
    'When you arrive at the restaurant, your order should be waiting for you. Just pay at the counter and be on your way!',
  ];

  return (
    <SafeAreaView
      style={[
        containerStyles.mainTabs,
        {backgroundColor: 'white', justifyContent: 'flex-start'},
      ]}>
      <View style={{margin: 10}}>
        <Text
          style={{
            color: 'black',
            textAlign: 'center',
            marginBottom: 16,
            fontSize: 32,
          }}>
          Our Services
        </Text>
        <Text style={textStyles.serviceTermsText}>-{text[0]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[1]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[2]}</Text>
        <Text style={textStyles.serviceTermsText}>-{text[3]}</Text>
      </View>
    </SafeAreaView>
  );
}

function HomeScreen() {
  return (
    <SafeAreaView style={containerStyles.main}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'yellow',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: 'anything',
            fontWeight: 'bold',
          },
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeTab}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <FastImage
                  source={require(homeIcon)}
                  style={{height: 20, width: 20}}
                  tintColor={tabInfo.focused ? 'blue' : 'grey'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Our Services"
          component={ServicesTab}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <FastImage
                  source={require(servicesIcon)}
                  style={{height: 20, width: 20}}
                  tintColor={tabInfo.focused ? 'blue' : 'grey'}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Terms"
          component={TermsTab}
          options={{
            tabBarIcon: tabInfo => {
              return (
                <FastImage
                  source={require(termsIcon)}
                  style={{height: 20, width: 20}}
                  tintColor={tabInfo.focused ? 'blue' : 'grey'}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

export {HomeScreen, ServicesTab, TermsTab};

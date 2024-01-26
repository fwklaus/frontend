import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet
} from 'react-native';
import  { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ProgressBarAnimated from 'react-native-progress-bar-animated';

import { merchContCSS } from '../res/styles/merchantContainer';
import { merchTextCSS } from '../res/styles/merchantText';

const Tab = createMaterialTopTabNavigator();
const BULLET_POINT = '\u25CF';

function StoreInfo() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Information</Text>
      </View>
      <View style={merchContCSS.tabMain}>
        <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Restaurant Name</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Restaurant Phone</Text>
        </View>
        <View style={merchContCSS.mainContent}>
          <TextInput style={merchContCSS.input}/>
          <TextInput style={merchContCSS.input}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

function BusinessAddress() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
     <View style={merchContCSS.header}>
       <Text style={[merchTextCSS.text, merchTextCSS.header]}>Business Address</Text>
     </View>
     <View style={merchContCSS.tabMain}>
       <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Address</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Suite #</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>City</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>State</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Zip Code</Text>
       </View>
       <View style={merchContCSS.mainContent}>
         <TextInput style={merchContCSS.input}/>
         <TextInput style={merchContCSS.input}/>
         <TextInput style={merchContCSS.input}/>
         <TextInput style={merchContCSS.input}/>
         <TextInput style={merchContCSS.input}/>
       </View>
     </View>
    </SafeAreaView>
  );
}

function StoreHours() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
     <View style={merchContCSS.header}>
       <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Hours</Text>
     </View>
     <View style={merchContCSS.tabMain}>
       <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Hours</Text>
       </View>
       <View style={merchContCSS.mainContent}>
         <TextInput style={merchContCSS.input}/>
       </View>
     </View>
    </SafeAreaView>
  );
}

function ContactInformation() {
 return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>Contact Information</Text>
      </View>
      <View style={merchContCSS.tabMain}>
        <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Primary Contact Email</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Password</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Confirm Password</Text>
        </View>
        <View style={merchContCSS.mainContent}>
          <TextInput style={merchContCSS.input}/>
          <TextInput style={merchContCSS.input}/>
          <TextInput style={merchContCSS.input}/>
        </View>
      </View>
    </SafeAreaView>
  );
}

function OAuth() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>OAuth</Text>
      </View>
      <View style={[merchContCSS.tabMain, {flexDirection: 'column', alignItems: 'left'}]}>
        <View style={{flex: 1}}>
          <Text style={[merchTextCSS.text, {margin: 20, color: '#A1000E'}]}>
            {BULLET_POINT} Granting access to your Square Merchant account
            allows OrderWeasel to access your existing menu from Square so you don't have to manually
            input each item yourself
            </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
          <OAuthButton />
        </View>
      </View>
    </SafeAreaView>
  );
}

function ProgressBar() {
  let percent = 50;

  return (
    <View style={styles.progressBar}>
      <Text style={[merchTextCSS.text, {textAlign: 'center'}]}>{percent}%</Text>
    </View>
  );
}

function ProgressBox() {
  return (
    <View style={styles.progressBarSmall}></View>
  );
}

function SignUpProgress() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20, backgroundColor: '#d3d3d3'}]}>
      <View style={{marginBottom: 10, flex: 1, justifyContent: 'flex-end'}}>
        <Text style={[merchTextCSS.text, merchTextCSS.list]}>Sign Up Progress</Text>
        <ProgressBar />
      </View>
      <View style={[merchContCSS.container, {flexDirection: 'row', flex: 2}]}>
        <View style={[merchContCSS.container, {flex: 1,  justifyContent: 'flex-start', alignItems: 'center'}]}>
          <ProgressBox />
          <ProgressBox />
          <ProgressBox />
          <ProgressBox />
          <ProgressBox />
        </View>
        <View style={[merchContCSS.container, {flex: 4, justifyContent: 'flex-start'}]}>
          <Text style={[merchTextCSS.text, styles.progressList]}>Store Info</Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>Address</Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>Hours</Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>Contact Info</Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>Authorization</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

function OAuthButton() {
  return (
    <Pressable
      style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
      onPress={() => {
        console.log("Integrate with Square")
      }}
    >
      <Text style={merchTextCSS.buttonText}>Grant Access to OrderWeasel</Text>
    </Pressable>
  );
}

function SignUpTab() {
  return(
    <SafeAreaView style={[merchContCSS.main, {flexDirection: 'row', padding: 0}]}>
      <View style={merchContCSS.mainSpacer}>
        <SignUpProgress />
      </View>
      <View style={merchContCSS.mainContent}>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: 16,
              fontWeight: 'bold'
            }
          }}
        >
          <Tab.Screen
            name="StoreInfo"
            component={StoreInfo}
            options={{
              title: "Store Info"
            }}
          />
          <Tab.Screen
            name="BusinessAddress"
            component={BusinessAddress}
            options={{
              title: "Business Address"
            }}
          />
          <Tab.Screen
            name="StoreHours"
            component={StoreHours}
            options={{
              title: "Store Hours"
            }}
          />
          <Tab.Screen
            name="ContactInformation"
            component={ContactInformation}
            options={{
              title: "Contact Information"
            }}
          />
          <Tab.Screen
            name="OAuth"
            component={OAuth}
            options={{
              title: "OAuth Authorization"
            }}
          />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
}

export {
  SignUpTab, StoreInfo, BusinessAddress,
  StoreHours, ContactInformation, SignUpProgress,
  ProgressBar, ProgressBox, OAuth, OAuthButton
};


const styles = StyleSheet.create({
  progressBar: {
    height: 30,
    width: '100%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
  },
  progressBarSmall: {
    height: 25,
    width: 25,
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 16,
    marginBottom: 12
  },
  progressList: {
    marginBottom: 10
  }
});

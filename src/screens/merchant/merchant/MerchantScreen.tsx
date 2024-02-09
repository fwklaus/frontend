import React, {useState, useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';
import { containerStyles } from '../../res/styles/container';
import { textStyles } from '../../res/styles/text';

import useSignIn from '../../hooks/useSignIn';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';

import { SignInTab } from '../../tabs/merchant_screen/SignInTab';
import { SignUpTab } from '../../tabs/merchant_screen/SignUpTab';
import { MerchantHomeTab } from '../../tabs/merchant_screen/MerchantHomeTab';
import { OrdersTab } from '../../tabs/merchant_screen/OrdersTab';
import { ProfileTab} from '../../tabs/merchant_screen/ProfileTab';
// import { MaterialHeaderButton } from '../components/MaterialHeaderButton'

const Tab = createBottomTabNavigator();

function SignedInHeader({navigation}) {
  const {signOut} = useSignIn();

  return (
    <HeaderButtons>
      <Item
        title="Take Orders"
        onPress={({pressed}) => {
          console.log('change style on press');


        }}
        style={[styles.button, {backgroundColor: '#1BC100'}]}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="Orders"
        onPress={() => {
          navigation.navigate('Orders');
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="SignOut"
        onPress={() => {
          signOut();
          alert("Signed Out")
          navigation.navigate("MerchantHome");
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
    </HeaderButtons>
  )
}

function SignedOutHeader({navigation}) {
  return (
    <HeaderButtons>
      <Item
        title="Home"
        onPress={() => {
          navigation.navigate("MerchantHome")
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="Terms"
        onPress={() => alert('Terms')}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="Contact"
        onPress={() => alert('Contact')}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="SignUp"
        onPress={() => {
          navigation.navigate("SignUp")
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="SignIn"
        onPress={() => {
          navigation.navigate("SignIn")
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
    </HeaderButtons>
  );
}

function MerchantScreen({navigation}) {
  const { signedIn } = useSignIn();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "ORDERWEASEL",
      headerRight: () => (
        signedIn ? <SignedInHeader navigation={navigation}/> : <SignedOutHeader navigation={navigation}/>
      ),
    });
  }, [navigation, signedIn]);

  return (
    <SafeAreaView style={containerStyles.main}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            display: 'none',
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "anything",
            fontWeight: 'bold'
          },
          tabBarInactiveTintColor: 'grey',
        }}
      >
        <Tab.Screen name="MerchantHome" component={MerchantHomeTab}/>
        <Tab.Screen name="SignIn" component={SignInTab}/>
        <Tab.Screen name="SignUp" component={SignUpTab}/>
        <Tab.Screen name="Orders" component={OrdersTab}/>
        <Tab.Screen name="Profile" component={ProfileTab}/>
      </Tab.Navigator>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 4
  },
  buttonText: {
    color: 'white'
  }
});

export { MerchantScreen };

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions
} from 'react-native';
import { containerStyles } from '../res/styles/container';
import { textStyles } from '../res/styles/text';
import { HeaderButtons, Item} from 'react-navigation-header-buttons';
import { SignInTab } from '../tab-navigator/SignInTab';
import { SignUpTab } from '../tab-navigator/SignUpTab';
import { MerchantHomeTab } from '../tab-navigator/MerchantHomeTab';
// import { MaterialHeaderButton } from '../components/MaterialHeaderButton'

const Tab = createBottomTabNavigator();

function MerchantScreen({navigation}) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "ORDERWEASEL",
      headerRight: () => (
        /* <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}> */
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
      ),
    });
  }, [navigation]);
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

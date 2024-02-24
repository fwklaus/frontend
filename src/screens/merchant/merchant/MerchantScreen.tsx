import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, StyleSheet} from 'react-native';
import useSignIn from '../../../hooks/useSignIn';
import useOrders from '../../../hooks/useOrders';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';

import {containerStyles} from '../../../res/styles/container';

import {SignInTab} from './tabs/SignInTab';
import {SignUpTab} from './tabs/SignUpTab';
import {MerchantHomeTab} from './tabs/MerchantHomeTab';
import {OrdersTab} from './tabs/OrdersTab';
import {ProfileTab} from './tabs/ProfileTab';
// import { MaterialHeaderButton } from '../components/MaterialHeaderButton'

const Tab = createBottomTabNavigator();

function SignedInHeader({navigation}) {
  const {signOut} = useSignIn();
  const {takingOrders, setTakingOrders} = useOrders();

  return (
    <HeaderButtons>
      <Item
        title={takingOrders ? 'Stop Orders' : 'Take Orders'}
        onPress={() => {
          // if taking orders is true, need to do something on the server to accept orders

          setTakingOrders(!takingOrders);
          navigation.navigate('Orders');
        }}
        style={[
          styles.button,
          takingOrders
            ? {backgroundColor: 'red'}
            : {backgroundColor: '#1BC100'},
        ]}
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
          alert('Signed Out');
          navigation.navigate('MerchantHome');
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
    </HeaderButtons>
  );
}

function SignedOutHeader({navigation}) {
  return (
    <HeaderButtons>
      <Item
        title="Home"
        onPress={() => {
          navigation.navigate('MerchantHome');
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
          navigation.navigate('SignUp');
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
      <Item
        title="SignIn"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
        style={styles.button}
        buttonStyle={styles.buttonText}
      />
    </HeaderButtons>
  );
}

function MerchantScreen({navigation}) {
  const {signedIn} = useSignIn();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'ORDERWEASEL',
      headerRight: () =>
        signedIn ? (
          <SignedInHeader navigation={navigation} />
        ) : (
          <SignedOutHeader navigation={navigation} />
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
            fontFamily: 'anything',
            fontWeight: 'bold',
          },
          tabBarInactiveTintColor: 'grey',
        }}>
        <Tab.Screen name="MerchantHome" component={MerchantHomeTab} />
        <Tab.Screen name="SignIn" component={SignInTab} />
        <Tab.Screen name="SignUp" component={SignUpTab} />
        <Tab.Screen name="Orders" component={OrdersTab} />
        <Tab.Screen name="Profile" component={ProfileTab} />
      </Tab.Navigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 4,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
  },
});

export {MerchantScreen};

import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions
} from 'react-native';
import useSignIn from '../../hooks/useSignIn';

import { merchContCSS } from '../../res/styles/merchantContainer';
import { merchTextCSS } from '../../res/styles/merchantText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function AccountInformation() {
  const { currentMerchant } = useSignIn();

  return (
  <>
    <View style={{flexDirection: 'row'}}>
     <View style={styles.fieldInput}>
       <Text style={[merchTextCSS.text, {margin: 13}]}>Restaurant Name</Text>
     </View>
     <View style={styles.fieldInput}>
     </View>
    </View>
  </>
  );
}

function StoreInformation() {
  const { currentMerchant } = useSignIn();

  return (
    <>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={styles.fieldInput}>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Restaurant Name</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Restaurant Phone</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Address</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>City</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>State</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Zip Code</Text>
        </View>
        <View style={styles.fieldInput}>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.restaurant_name}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.phone}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.address}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.city}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.state}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.zip}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={[merchContCSS.button, merchContCSS.mainContent]}>
          <Text style={merchTextCSS.buttonText}>Update Store Info</Text>
        </View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
      </View>
    </>
  );
}
function LoginInformation() {
  const { currentMerchant } = useSignIn();
  return (
    <>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={styles.fieldInput}>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Primary Contact Email</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Password</Text>
        </View>
        <View style={styles.fieldInput}>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.email}/>
          <TextInput style={[merchContCSS.input, styles.profileInput]} placeholder={currentMerchant.password}/>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={[merchContCSS.button, merchContCSS.mainContent]}>
          <Text style={merchTextCSS.buttonText}>Change Email</Text>
        </View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        <View style={[merchContCSS.button, merchContCSS.mainContent]}>
          <Text style={merchTextCSS.buttonText}>Change Password</Text>
        </View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      </View>
    </>
  );
}

function DeleteAccount() {
  return (
    <>
      <View style={[styles.fieldInput, {margin: 10}]}>
        <Text style={[merchTextCSS.text, styles.textMargin, {color: 'red'}]}>
          This action is irreversible. All account and restaurant information will be lost
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={[merchContCSS.button, merchContCSS.mainContent, {backgroundColor: 'red'}]}>
          <Text style={merchTextCSS.buttonText}>Delete Account</Text>
        </View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
      </View>
    </>
  );
}

function ProfileTab() {
  const { currentMerchant } = useSignIn();

  return (
    <SafeAreaView style={[merchContCSS.main, {height: windowHeight, flexDirection: 'row', alignItems: 'left'}]}>
      <ScrollView
        contentContainerStyle={{flexDirection: 'row', alignItems: 'left'}}
        showVerticalScrollIndicator={true}
      >
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        <View style={merchContCSS.mainContent}>
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>{currentMerchant.restaurant_name}</Text>
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Information</Text>
          <StoreInformation />
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>Login Information</Text>
          <LoginInformation />
          <Text style={[merchTextCSS.text, merchTextCSS.header]}>Delete Account</Text>
          <DeleteAccount />
        </View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileInput: {
    height: 30,
    padding: 6,
    margin: 5
  },
  textMargin: {
    margin: 6
  },
  fieldLabel: {
    flex: 1
  },
  fieldInput: {
    flex: 3
  },
  buttonContainer: {
    flexDirection: 'row',
    margin: 6
  }
});

export { ProfileTab, StoreInformation};



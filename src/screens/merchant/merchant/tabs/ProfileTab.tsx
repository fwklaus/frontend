import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ScrollView,
  Dimensions,
  SafeAreaView
} from 'react-native';
import useSignIn from '../../../../hooks/useSignIn';
import useMerchant from '../../../../hooks/useMerchant';

import { merchContCSS } from '../../../../res/styles/merchantContainer';
import { merchTextCSS } from '../../../../res/styles/merchantText';
import  {
  InvalidNameMessage, InvalidPhoneMessage, InvalidStreetMessage,
  InvalidCityMessage, InvalidStateMessage, InvalidZipMessage,
  InvalidEmailMessage, InvalidPasswordMessage, DeleteAccountMessage
  } from '../../../../components/ui/ValidationMessages';

import {
  isValidRestaurantName, isValidStreet, isValidCity,
  isValidState, isValidZip, isValidPhoneNumber,
  isValidEmail, isValidPassword
  } from '../../../../utils/validationUtils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function StoreInformation() {
  const { currentMerchant, setCurrentMerchant } = useSignIn();
  const { updateMerchant, getMerchant, initStoreFields, storeInfo, updateStoreInfo } = useMerchant();
  const [validName, setValidName] = useState(true);
  const [validPhone, setValidPhone] = useState(true);
  const [validStreet, setValidStreet] = useState(true);
  const [validCity, setValidCity] = useState(true);
  const [validState, setValidState] = useState(true);
  const [validZip, setValidZip] = useState(true);
  useEffect(() => {}, [validName, validPhone, validStreet, validCity, validState, validZip]);
  useEffect(() => {
    initStoreFields(currentMerchant);
  }, []);

  return (
    <View style={styles.bottomMargin}>
      <InvalidNameMessage validName={validName} />
      <InvalidPhoneMessage validPhone={validPhone} />
      <InvalidStreetMessage validStreet={validStreet} />
      <InvalidCityMessage validCity={validCity} />
      <InvalidStateMessage validState={validState} />
      <InvalidZipMessage validZip={validZip} />
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
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.restaurant_name}
            onChangeText={(text) => {
              if (isValidRestaurantName(text)
                || text.length === 0) {
                setValidName(true);
              } else {
                setValidName(false);
              }

              updateStoreInfo("restaurant_name", text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.phone}
            onChangeText={(text) => {
              if (isValidPhoneNumber(text)
                || text.length === 0) {
                setValidPhone(true);
              } else {
                setValidPhone(false);
              }

              updateStoreInfo("phone", text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.street}
            onChangeText={(text) => {
              if (isValidStreet(text)
                  || text.length === 0) {
                setValidStreet(true);
              } else {
                setValidStreet(false);
              }

              updateStoreInfo("street", text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.city}
            onChangeText={(text) => {
              if (isValidCity(text)
                  || text.length === 0) {
                setValidCity(true);
              } else {
                setValidCity(false);
              }

              updateStoreInfo("city", text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.state}
            onChangeText={(text) => {
              if (isValidState(text)
                  || text.length === 0) {
                setValidState(true);
              } else {
                setValidState(false);
              }

              updateStoreInfo("state", text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.zip}
            onChangeText={(text) => {
              if (isValidZip(text)
                  || text.length === 0) {
                setValidZip(true);
              } else {
                setValidZip(false);
              }

              updateStoreInfo("zip", text);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[merchContCSS.button, merchContCSS.mainContent]}
          onPress={async ()=>{
            // move callback to useMerchant

            try {
              await updateMerchant(currentMerchant, storeInfo);
              let merchant = await getMerchant(currentMerchant.id, true);
              setCurrentMerchant(merchant);
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          <Text style={merchTextCSS.buttonText}>Update Store Info</Text>
        </Pressable>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
      </View>
    </View>
  );
}

function LoginInformation() {
  const { currentMerchant, setCurrentMerchant } = useSignIn();
  const {
    updateMerchant, getMerchant, updateEmail,
    updatePassword, initLoginInfo,
    password, email, merchants
  } = useMerchant();
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  useEffect(() => {}, [validEmail, validPassword]);
  useEffect(() => {
    initLoginInfo(currentMerchant);
  }, []);

  return (
    <View style={styles.bottomMargin}>
      <InvalidEmailMessage validEmail={validEmail} />
      <InvalidPasswordMessage validPassword={validPassword} />
      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={styles.fieldInput}>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Primary Contact Email</Text>
          <Text style={[merchTextCSS.text, styles.textMargin]}>Password</Text>
        </View>
        <View style={styles.fieldInput}>
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.email}
            onChangeText={(text) => {
              if (isValidEmail(text, merchants, currentMerchant)
                  || text.length === 0) {
                setValidEmail(true);
              } else {
                setValidEmail(false);
              }

              updateEmail(text);
            }}
          />
          <TextInput
            style={[merchContCSS.input, styles.profileInput]}
            placeholder={currentMerchant.password}
            onChangeText={(text) => {
              if ( isValidPassword(text, currentMerchant)
                  || text.length === 0) {
                setValidPassword(true);
              } else {
                setValidPassword(false);
              }

              updatePassword(text);
            }}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[merchContCSS.button, merchContCSS.mainContent]}
          onPress={async ()=>{
            // move callback to useMerchant

            try {
              await updateMerchant(currentMerchant, email);
              let merchant = await getMerchant(currentMerchant.id, true);
              setCurrentMerchant(merchant);
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          <Text style={merchTextCSS.buttonText}>Change Email</Text>
        </Pressable>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        <Pressable
          style={[merchContCSS.button, merchContCSS.mainContent]}
          onPress={async ()=>{
            // move callback to useMerchant

            try {
              await updateMerchant(currentMerchant, password);
              let merchant = await getMerchant(currentMerchant.id, true);
              setCurrentMerchant(merchant);
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          <Text style={merchTextCSS.buttonText}>Change Password</Text>
        </Pressable>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      </View>
    </View>
  );
}

function DeleteAccount() {
  const { currentMerchant, signOut } = useSignIn();
  const { deleteMerchant } = useMerchant();
  const navigation = useNavigation();

  return (
    <View style={styles.bottomMargin}>
      <View style={[styles.fieldInput, {margin: 10}]}>
      <DeleteAccountMessage />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable
          style={[merchContCSS.button, merchContCSS.mainContent, {backgroundColor: 'red'}]}
          onPress={ async() => {
            // move callback to useMerchant

            try {
              await deleteMerchant(currentMerchant.id);
              signOut();
              navigation.navigate("MerchantHome");
            } catch (e) {
              alert(e.message);
            }
          }}
        >
          <Text style={merchTextCSS.buttonText}>Delete Account</Text>
        </Pressable>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
        <View style={[merchContCSS.mainSpacer, {flex: 3}]}>{/*spacer*/}</View>
      </View>
    </View>
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
          <Text style={[merchTextCSS.text, merchTextCSS.header, styles.bottomMargin, {fontSize: 40}]}>{currentMerchant.restaurant_name}</Text>
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
  bottomMargin: {
    marginBottom: 30
  },
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

export { ProfileTab, StoreInformation, LoginInformation, DeleteAccount};

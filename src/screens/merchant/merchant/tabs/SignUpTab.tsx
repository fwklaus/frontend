import React, {useState, useContext, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Animated,
  FlatList,
  Modal
} from 'react-native';
import  { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// import ProgressBarAnimated from 'react-native-progress-bar-animated';
import {STATES} from '../../../../utils/states';

import {SignUpProvider, SignUpContext} from '../../../../context/SignUpContext';
import useMerchant from '../../../../hooks/useMerchant';
import useSignUp from '../../../../hooks/useSignUp';
import useSignIn from '../../../../hooks/useSignIn';

import { merchContCSS } from '../../../../res/styles/merchantContainer';
import { merchTextCSS } from '../../../../res/styles/merchantText';

const Tab = createMaterialTopTabNavigator();
const BULLET_POINT = '\u25CF';

function ProgressBar({count}) {
  let percent = 50;
//   const countInterval = useRef(null);
//   const [count, setCount] = useState(0);
//
//   const loaderValue = useRef(new Animated.Value(0)).current;
//   const load = (count) => {
//     Animated.timing(loaderValue, {
//       toValue: count,
//       duration: 500,
//       useNativeDriver: true
//     }).start();
//   };
//
//   useEffect(() => {
//     load(count);
//     if (count >= 100) {
//       setCount(100);
//       clearInterval(countInterval);
//     }
//   }, [count]);


  return (
    <View style={styles.progressBar}>
      <Animated.View style={[StyleSheet.absoluteFill, {backgroundColor: '#8BED4F', width: "50%"}]}/>
      <Text style={[merchTextCSS.text, {textAlign: 'center'}]}>{percent}%</Text>
    </View>
  );
}

function ProgressBox({percent, index}) {

  return (
    <View style={styles.progressBarSmall}></View>
  );
}

function SignUpProgress() {
  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20, backgroundColor: '#d3d3d3'}]}>
      <View style={{marginBottom: 10, flex: 1, justifyContent: 'flex-end'}}>
        <Text style={[merchTextCSS.text, merchTextCSS.list]}>Sign Up Progress</Text>
        <ProgressBar/>
      </View>
      <View style={[merchContCSS.container, {flexDirection: 'row', flex: 2}]}>
        <View style={[merchContCSS.container, {flex: 1,  justifyContent: 'flex-start', alignItems: 'center'}]}>
          {
            ["20%", "40%", "60%", "80%", "100%"].map((percent, index) => {
              return <ProgressBox percent={percent} key={index} />
            })
          }
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

function NextButton({navigation, nextTab}) {
  return (
    <View style={[merchContCSS.container, {flexDirection: 'row'}]}>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      <Pressable
        style={[merchContCSS.button, {height: 50}]}
        onPress={() => {
           navigation.navigate(nextTab)
        }}
      >
        <Text style={merchTextCSS.buttonText}>Next</Text>
      </Pressable>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </View>
  );
}

function StoreInfo({ navigation }) {
  const { newMerchant, updateNewMerchant, validRestaurantName, validPhoneNumber } = useSignUp();
  const [nameField, setNameField] = useState(false);
  const [phoneField, setPhoneField] = useState(false);
  useEffect(() => {}, [nameField, phoneField]);

  const restaurantName = 'restaurantName';
  const phone = 'phone';

  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>Store Information</Text>
      </View>
      <View>
        <Text style={[ merchTextCSS.text, {color: nameField ? 'green' : 'red'}]}>
         {BULLET_POINT} Restaurant Name is required
        </Text>
        <Text style={[merchTextCSS.text, {color: phoneField ? 'green' : 'red'}]}>
          {BULLET_POINT} Phone number is required and must contain 10 digits
        </Text>
      </View>
      <View style={merchContCSS.tabMain}>
        <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Restaurant Name</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Restaurant Phone</Text>
        </View>
        <View style={merchContCSS.mainContent}>
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[restaurantName]}
            placeholder='e.g. The Red Table'
            onChangeText={(text) => {
              if (validRestaurantName(text)) {
                setNameField(true);
              } else {
                setNameField(false);
              }

              updateNewMerchant(restaurantName, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[phone]}
            placeholder='(555)555-5555'
            onChangeText={(text) => {
              if (validPhoneNumber(text)) {
                setPhoneField(true);
              } else {
                setPhoneField(false);
              }

              updateNewMerchant(phone, text);
            }}
          />
        </View>
      </View>
      <NextButton navigation={navigation} nextTab={"BusinessAddress"}/>
    </SafeAreaView>
  );
}

function BusinessAddress({ navigation }) {
  const { newMerchant, updateNewMerchant, validStreet, validCity, validState, validZip } = useSignUp();
  const [streetField, setStreetField] = useState(false);
  const [cityField, setCityField] = useState(false);
  const [zipField, setZipField] = useState(false);
  const [stateField, setStateField] = useState(false);
  useEffect(() => {}, [streetField, cityField, zipField, stateField]);

  const street = 'street';
  const city = 'city';
  const state = 'state';
  const zip = 'zip';

  return (
    <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
     <View style={merchContCSS.header}>
       <Text style={[merchTextCSS.text, merchTextCSS.header]}>Business Address</Text>
     </View>
     <View>
      <Text style={[ merchTextCSS.text, {color: streetField ? 'green' : 'red'}]}>
        {BULLET_POINT} Street is required and must contain valid characters (A-Z, a-z, 0-9, '  ' and [ . , # & - ])
      </Text>
      <Text style={[merchTextCSS.text, {color: cityField ? 'green' : 'red'}]}>
        {BULLET_POINT} City is required and must contain valid characters (A-Z, a-z, '  ' and [ ' . - ])
      </Text>
      <Text style={[merchTextCSS.text, {color: stateField ? 'green' : 'red'}]}>
        {BULLET_POINT} State code is required
      </Text>
      <Text style={[merchTextCSS.text, {color: zipField ? 'green' : 'red'}]}>
        {BULLET_POINT} Zip code is required and must contain 5 digits
      </Text>
     </View>
     <View style={merchContCSS.tabMain}>
       <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Street</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>City</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>State</Text>
         <Text style={[merchTextCSS.text, {margin: 20}]}>Zip Code</Text>
       </View>
       <View style={merchContCSS.mainContent}>
         <TextInput
          style={merchContCSS.input}
          value={newMerchant[street]}
          placeholder="5555 Main St"
          onChangeText={(text) => {
            if (validStreet(text)) {
              setStreetField(true);
            } else {
              setStreetField(false);
            }

            updateNewMerchant(street, text);
          }}
        />
         <TextInput
          style={merchContCSS.input}
          value={newMerchant[city]}
          placeholder="Seattle"
          onChangeText={(text) => {
            if (validCity(text)) {
              setCityField(true);
            } else {
              setCityField(false);
            }

            updateNewMerchant(city, text);
          }}
         />
          <TextInput
           style={merchContCSS.input}
           value={newMerchant[state]}
           placeholder="Washington"
           onChangeText={(text) => {
            let formattedText;
             if (validState(text)) {
               setStateField(true);
               formattedText = validState(text);
             } else {
               setStateField(false);
             }

             updateNewMerchant(state, formattedText);
           }}
          />
         <TextInput
          style={merchContCSS.input}
          value={newMerchant[zip]}
          placeholder="80008"
          onChangeText={(text) => {
            if (validZip(text)) {
              setZipField(true);
            } else {
              setZipField(false);
            }

            updateNewMerchant(zip, text);
          }}
         />
       </View>
     </View>
     <NextButton navigation={navigation} nextTab={"ContactInformation"}/>
    </SafeAreaView>
  );
}

function ContactInformation({ navigation }) {
  const { newMerchant, updateNewMerchant, validEmail, validPassword, validValidator } = useSignUp();
  const [emailField, setEmailField] = useState(false);
  const [passwordField, setPasswordField] = useState(false);
  const [validatorField, setValidatorField] = useState(false);
  useEffect(()=> {}, [emailField, passwordField, validatorField]);

  const email = 'email';
  const password = 'password';
  const validator = 'validator';

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
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[email]}
            onChangeText={(text) => {
              if (validEmail(text)) {
                setEmailField(true);
              } else {
                setEmailField(false);
              }

              updateNewMerchant(email, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[password]}
            onChangeText={(text) => {
              if (validPassword(text)) {
                setPasswordField(true);
              } else {
                setPasswordField(false);
              }

              updateNewMerchant(password, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[validator]}
            onChangeText={(text) => {
              if (validValidator(text)) {
                setValidatorField(true);
              } else {
                setValidatorField(false);
              }

              updateNewMerchant(validator, text);
            }}
          />
        </View>
      </View>
      <NextButton navigation={navigation} nextTab={"OAuth"}/>
    </SafeAreaView>
  );
}

// function OAuthButton({navigation}) {
//   const { newMerchant, updateNewMerchant } = useSignUp();
//
//   return (
//     <Pressable
//       style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
//       onPress={ async () => {
//         try {
//           // asynchronous callback
//           // Merchant authorizes access to Square
//              // returns API key if authorized
//           // store API key in newMerchant
//
//           // Add API key to newMerchant
//
//         setTimeout(() => {
//           console.log("Replace with redirection to OAuth");
//           navigation.navigate("CreateAccount");
//         }, 3000)
//         } catch (e) {
//           console.error(e);
//         }
//       }}
//     >
//       <Text style={merchTextCSS.buttonText}>Grant Access to OrderWeasel</Text>
//     </Pressable>
//   );
// }

function OAuth({navigation}) {
  const { newMerchant, updateNewMerchant } = useSignUp();

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
          <Pressable
            style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
            onPress={ async () => {
              try {
                // asynchronous callback
                // Merchant authorizes access to Square
                   // returns API key if authorized
                // store API key in newMerchant

                // Add API key to newMerchant

              setTimeout(() => {
                console.log("Replace with redirection to OAuth");
                navigation.navigate("CreateAccount");
              }, 3000)
              } catch (e) {
                console.error(e);
              }
            }}
          >
            <Text style={merchTextCSS.buttonText}>Grant Access to OrderWeasel</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

function CreateAccount({navigation}) {
  const { newMerchant, updateNewMerchant } = useSignUp();
  const { createMerchant, merchants } = useMerchant();
  const { resetFields } = useSignIn();

  return (
        <SafeAreaView style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
          <View style={merchContCSS.header}>
            <Text style={[merchTextCSS.text, merchTextCSS.header]}>Create Account</Text>
          </View>
          <View style={[merchContCSS.tabMain, {flexDirection: 'column', alignItems: 'left'}]}>
            <View style={{flex: 1}}>
              <Text style={[merchTextCSS.text, {margin: 20, color: '#A1000E'}]}>Finish...</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Pressable
                style={{backgroundColor: 'blue', padding: 10, borderRadius: 10}}
                onPress={ async () => {
                  try {
                    await createMerchant(newMerchant);
                    resetFields();
                    // provide a message following redirect, pass in the params object
                    navigation.navigate("SignIn");
                  } catch (e) {
                    console.error(e, "CreateAccount");
                  }
                }}
              >
                <Text style={merchTextCSS.buttonText}>Finish Account Setup</Text>
              </Pressable>
            </View>
          </View>
        </SafeAreaView>
  );
}

function SignUpTab() {
  const { getMerchants } = useMerchant();
  useEffect(() => { getMerchants() }, []);

  return(
    <SignUpProvider>
      <SafeAreaView style={[merchContCSS.main, {flexDirection: 'row', padding: 0}]}>
        <View style={merchContCSS.mainSpacer}>
          <SignUpProgress />
        </View>
        <View style={merchContCSS.mainContent}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
              }
            }}
          >
            <Tab.Screen
              name="StoreInfo"
              component={StoreInfo}
              options={{
                title: "Store Info",
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
            <Tab.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{
                title: "Create Account"
              }}
            />
          </Tab.Navigator>
        </View>
      </SafeAreaView>
    </SignUpProvider>
  );
}

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
  },
//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: 'white',
//     borderColor: 'black',
//     borderWidth: 1,
//     height: 50,
//     width: '90%',
//     paddingHorizontal: 10,
//     zIndex: 1,
//   },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    shadowColor: '#000000',
    shadowRadius: 4,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.5,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  }
});

export {
  SignUpTab, StoreInfo, BusinessAddress,
  NextButton, ContactInformation, SignUpProgress,
  ProgressBar, ProgressBox, OAuth, CreateAccount
};
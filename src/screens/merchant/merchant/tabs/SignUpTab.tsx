import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Animated,
} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
// import ProgressBarAnimated from 'react-native-progress-bar-animated';

import {SignUpProvider} from '../../../../context/SignUpContext';
import useMerchant from '../../../../hooks/useMerchant';
import useSignUp from '../../../../hooks/useSignUp';
import useLogin from '../../../../hooks/useLogin';

import {
  isValidPhoneNumber,
  isValidRestaurantName,
  isValidStreet,
  isValidCity,
  isValidState,
  isValidZip,
  isValidPassword,
  isValidValidator,
  isValidEmail,
} from '../../../../utils/validationUtils';
import {
  InvalidNameMessage,
  InvalidPhoneMessage,
  InvalidStreetMessage,
  InvalidCityMessage,
  InvalidStateMessage,
  InvalidZipMessage,
  InvalidEmailMessage,
  InvalidPasswordMessage,
  InvalidValidatorMessage,
} from '../../../../components/ui/ValidationMessages';

import {merchContCSS} from '../../../../res/styles/merchantContainer';
import {merchTextCSS} from '../../../../res/styles/merchantText';

const Tab = createMaterialTopTabNavigator();
const BULLET_POINT = '\u25CF';

function ProgressBar() {
  let percent = 50;
    const countInterval = useRef(null);
    const [count, setCount] = useState(0);

    const loaderValue = useRef(new Animated.Value(0)).current;
    const load = (count) => {
      Animated.timing(loaderValue, {
        toValue: count,
        duration: 500,
        useNativeDriver: true
      }).start();
    };

    useEffect(() => {
      load(count);
      if (count >= 100) {
        setCount(100);
        clearInterval(countInterval);
      }
    }, [count]);

  return (
    <View style={styles.progressBar}>
      <Animated.View
        style={[
          StyleSheet.absoluteFill,
          {backgroundColor: '#8BED4F', width: '50%'},
        ]}
      />
      <Text style={[merchTextCSS.text, {textAlign: 'center'}]}>{percent}%</Text>
    </View>
  );
}

function ProgressBox({complete}) {
  return (
    <View
      style={[
        styles.progressBarSmall,
        complete ?
        { backgroundColor: 'green'} :
        {backgroundColor: 'red'}
      ]}>
      {complete ?
        <Text style={styles.progressBarSmallText}>✔</Text>:
        <Text style={styles.progressBarSmallText}>X</Text>
      }
    </View>
  )
}

function SignUpProgress() {
	const {
		useSignUpProgressBar, isValidStoreInfo, isValidContactInfo,
		isValidLocationInfo
	} = useSignUp();

	// need to check if authorization is valid
	let validOAuth;

  return (
    <SafeAreaView
      style={[
        merchContCSS.main,
        {alignItems: 'left', padding: 20, backgroundColor: '#d3d3d3'},
      ]}>
      <View style={{marginBottom: 10, flex: 1, justifyContent: 'flex-end'}}>
        <Text style={[merchTextCSS.text, merchTextCSS.list]}>
          Sign Up Progress
        </Text>
        {useSignUpProgressBar ? <ProgressBar /> : <></> }
      </View>
      <View style={[merchContCSS.container, {flexDirection: 'row', flex: 2}]}>
			<View
          style={[
            merchContCSS.container,
            {flex: 1, justifyContent: 'flex-start', alignItems: 'center'},
          ]}>
          <ProgressBox complete={isValidStoreInfo()} />
          <ProgressBox complete={isValidLocationInfo()} />
          <ProgressBox complete={isValidContactInfo()} />
          <ProgressBox complete={false} />
        </View>
        <View
          style={[
            merchContCSS.container,
            {flex: 4, justifyContent: 'flex-start'},
          ]}>
          <Text style={[merchTextCSS.text, styles.progressList]}>
            Store Info
          </Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>Address</Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>
            Contact Info
          </Text>
          <Text style={[merchTextCSS.text, styles.progressList]}>
            Authorization
          </Text>
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
          navigation.navigate(nextTab);
        }}>
        <Text style={merchTextCSS.buttonText}>Next</Text>
      </Pressable>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </View>
  );
}

function BackButton({navigation, previousTab}) {
  return (
    <View style={[merchContCSS.container, {flexDirection: 'row'}]}>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      <Pressable
        style={[merchContCSS.button, {height: 50, backgroundColor: 'white', borderWidth: 1}]}
        onPress={() => {
          navigation.navigate(previousTab);
        }}>
        <Text style={[merchTextCSS.buttonText, {color: 'black'}]}>Back</Text>
      </Pressable>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </View>
  );
}

function StoreInfo({navigation}) {
  const {
    newMerchant, updateNewMerchant, validName,
    setValidName, validPhone, setValidPhone
  } = useSignUp();

  const restaurantName = 'restaurantName';
  const phone = 'phone';

  return (
    <SafeAreaView
      style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>
          Store Information
        </Text>
      </View>
      <View>
        <InvalidNameMessage validName={validName} />
        <InvalidPhoneMessage validPhone={validPhone} />
      </View>
      <View style={merchContCSS.tabMain}>
        <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Restaurant Name</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>
            Restaurant Phone
          </Text>
        </View>
        <View style={merchContCSS.mainContent}>
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[restaurantName]}
            placeholder="e.g. The Red Table"
            onChangeText={text => {
              if (isValidRestaurantName(text)) {
                setValidName(true);
              } else {
                setValidName(false);
              }

              updateNewMerchant(restaurantName, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[phone]}
            placeholder="(555)555-5555"
            onChangeText={text => {
              if (isValidPhoneNumber(text)) {
                setValidPhone(true);
              } else {
                setValidPhone(false);
              }

              updateNewMerchant(phone, text);
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <NextButton navigation={navigation} nextTab={'BusinessAddress'} />
      </View>
    </SafeAreaView>
  );
}

function BusinessAddress({navigation}) {
  const {
    newMerchant, updateNewMerchant, validStreet, setValidStreet,
    validCity, setValidCity, validZip, setValidZip, validState,
    setValidState
  } = useSignUp();

  const street = 'street';
  const city = 'city';
  const state = 'state';
  const zip = 'zip';

  return (
    <SafeAreaView
      style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>
          Business Address
        </Text>
      </View>
      <View>
        <InvalidStreetMessage validStreet={validStreet} />
        <InvalidCityMessage validCity={validCity} />
        <InvalidStateMessage validState={validState} />
        <InvalidZipMessage validZip={validZip} />
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
            onChangeText={text => {
              if (isValidStreet(text)) {
                setValidStreet(true);
              } else {
                setValidStreet(false);
              }

              updateNewMerchant(street, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[city]}
            placeholder="Seattle"
            onChangeText={text => {
              if (isValidCity(text)) {
                setValidCity(true);
              } else {
                setValidCity(false);
              }

              updateNewMerchant(city, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[state]}
            placeholder="Washington (WA)"
            onChangeText={text => {
              if (isValidState(text)) {
                setValidState(true);
              } else {
                setValidState(false);
              }

              updateNewMerchant(state, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[zip]}
            placeholder="80008"
            onChangeText={text => {
              if (isValidZip(text)) {
                setValidZip(true);
              } else {
                setValidZip(false);
              }

              updateNewMerchant(zip, text);
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <BackButton navigation={navigation} previousTab={'StoreInfo'}/>
        <NextButton navigation={navigation} nextTab={'ContactInformation'} />
      </View>
    </SafeAreaView>
  );
}

function ContactInformation({navigation}) {
  const {
    newMerchant, updateNewMerchant, validEmail, setValidEmail,
    validPassword, setValidPassword, validValidator, setValidValidator
  } = useSignUp();
  const {merchants} = useMerchant();

  const email = 'email';
  const password = 'password';
  const validator = 'validator';

  return (
    <SafeAreaView
      style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>
          Contact Information
        </Text>
      </View>
      <View>
        <InvalidEmailMessage validEmail={validEmail} />
        <InvalidPasswordMessage validPassword={validPassword} />
        <InvalidValidatorMessage validValidator={validValidator} />
      </View>
      <View style={merchContCSS.tabMain}>
        <View style={[merchContCSS.mainSpacer, {flex: 2}]}>
          <Text style={[merchTextCSS.text, {margin: 20}]}>
            Primary Contact Email
          </Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>Password</Text>
          <Text style={[merchTextCSS.text, {margin: 20}]}>
            Confirm Password
          </Text>
        </View>
        <View style={merchContCSS.mainContent}>
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[email]}
            placeholder="email@provider.com"
            onChangeText={text => {
              if (isValidEmail(text, merchants, newMerchant)) {
                setValidEmail(true);
              } else {
                setValidEmail(false);
              }

              updateNewMerchant(email, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[password]}
            onChangeText={text => {
              if (isValidPassword(text, newMerchant)) {
                setValidPassword(true);
              } else {
                setValidPassword(false);
              }

              updateNewMerchant(password, text);
            }}
          />
          <TextInput
            style={merchContCSS.input}
            value={newMerchant[validator]}
            onChangeText={text => {
              if (isValidValidator(text, newMerchant)) {
                setValidValidator(true);
              } else {
                setValidValidator(false);
              }

              updateNewMerchant(validator, text);
            }}
          />
        </View>
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <BackButton navigation={navigation} previousTab={'BusinessAddress'}/>
        <NextButton navigation={navigation} nextTab={'CreateAccount'} />
      </View>
    </SafeAreaView>
  );
}

function OAuthButton({navigation}) {
  const { newMerchant, updateNewMerchant } = useSignUp();

  return (
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
          navigation.navigate("Orders");
        }, 3000)
        } catch (e) {
          console.error(e);
        }
      }}
    >
      <Text style={merchTextCSS.buttonText}>Grant Access to OrderWeasel</Text>
    </Pressable>
  );
}

function CreateAccount({navigation}) {
  const {signUp, isAllValid} = useSignUp();
  const {addNewMerchant} = useMerchant();
  const { toggleLogin, currentMerchant, setCurrentMerchant} = useLogin();

  return (
    <SafeAreaView
      style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>
          Create Account
        </Text>
      </View>
      <View
        style={[
          merchContCSS.tabMain,
          {flexDirection: 'column', alignItems: 'left'},
        ]}>
        <View style={{flex: 1}}>
          <Text style={[merchTextCSS.text, {margin: 20, color: '#A1000E'}]}>
            Finish...
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <BackButton navigation={navigation} previousTab={'ContactInformation'}/>
          <Pressable
            style={[merchContCSS.button, {height: 50, flex: 1}]}
            onPress={async () => {
              if (!isAllValid()) {
                alert('Please correct invalid input fields.');
                return;
              }

              try {
                // sign up and create session
                let newMerchant = await signUp();
                let email = newMerchant.newMerchantDetails.email;

                // adds merchant to merchants state
                addNewMerchant(newMerchant);

                // set current merchant and login state for display
                setCurrentMerchant(newMerchant.newMerchantDetails);
                toggleLogin();
                navigation.navigate('OAuth');
                alert(`Welcome ${email}!`);
              } catch (e) {
                alert(e.message);
              }
            }}>
            <Text style={merchTextCSS.buttonText}>Finish Account Setup</Text>
          </Pressable>
					<View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
        </View>
      </View>
    </SafeAreaView>
  );
}

function OAuth({navigation}) {
  const {newMerchant, updateNewMerchant} = useSignUp();

  return (
    <SafeAreaView
      style={[merchContCSS.main, {alignItems: 'left', padding: 20}]}>
      <View style={merchContCSS.header}>
        <Text style={[merchTextCSS.text, merchTextCSS.header]}>OAuth</Text>
      </View>
      <View
        style={[
          merchContCSS.tabMain,
          {flexDirection: 'column', alignItems: 'left'},
        ]}>
        <View style={{flex: 1}}>
          <Text style={[merchTextCSS.text, {margin: 20, color: '#A1000E'}]}>
            {BULLET_POINT} Granting access to your Square Merchant account
            allows OrderWeasel to access your existing menu from Square so you
            don't have to manually input each item yourself
          </Text>
        </View>
        <View style={{flex: 1, alignItems: 'center'}}>
					<OAuthButton navigation={navigation} />
        </View>
      </View>
    </SafeAreaView>
  );
}

function SignUpTab() {
  return (
    <SignUpProvider>
      <SafeAreaView
        style={[merchContCSS.main, {flexDirection: 'row', padding: 0}]}>
        <View style={merchContCSS.mainSpacer}>
          <SignUpProgress />
        </View>
        <View style={merchContCSS.mainContent}>
          <Tab.Navigator
            screenOptions={{
              tabBarLabelStyle: {
                fontSize: 16,
                fontWeight: 'bold',
              },
            }}>
            <Tab.Screen
              name="StoreInfo"
              component={StoreInfo}
              options={{
                title: 'Store Info',
              }}
            />
            <Tab.Screen
              name="BusinessAddress"
              component={BusinessAddress}
              options={{
                title: 'Business Address',
              }}
            />
            <Tab.Screen
              name="ContactInformation"
              component={ContactInformation}
              options={{
                title: 'Contact Information',
              }}
            />
            <Tab.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{
                title: 'Create Account',
              }}
            />
            <Tab.Screen
              name="OAuth"
              component={OAuth}
              options={{
                title: 'OAuth Authorization',
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
    borderRadius: 16,
    marginBottom: 12,
  },
  progressBarSmallText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
  progressList: {
    marginBottom: 10,
  },
  buttonText: {
    flex: 1,
    textAlign: 'center',
  },
});

export {
  SignUpTab,
  StoreInfo,
  BusinessAddress,
  BackButton,
  NextButton,
  ContactInformation,
  SignUpProgress,
  ProgressBar,
  ProgressBox,
  OAuth,
  CreateAccount,
};

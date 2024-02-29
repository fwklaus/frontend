import React, {useState, useContext, createContext} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
  TextInput,
} from 'react-native';

// import { Notifications } from '../../../components/ui/Notifications';

import useOrders from '../../../hooks/useOrders';
import useCarts from '../../../hooks/useCarts';

import {textStyles} from '../../../res/styles/text';
import {containerStyles} from '../../../res/styles/container';

import {
  isValidEmailCheckout,
  isValidNameCheckout,
  isValidPhoneNumber,
} from '../../../utils/validationUtils';

import {} from '../../../utils/validationUtils';
const BULLET_POINT = '\u25CF';

let ValidationsContext = createContext(null);

function CheckoutTopHeader({title}) {
  let logo = '../../../res/images/order_weasel_small.jpg';
  return (
    <View style={[containerStyles.headerContainer, {flex: 1.2}]}>
      <View style={containerStyles.headerLogoContainer}>
        <Image style={containerStyles.logoSize} source={require(logo)} />
      </View>
      <Text style={[textStyles.text, textStyles.smallHeadings, {flex: 3}]}>
        {title}
      </Text>
    </View>
  );
}

// likely the only component where we'll jeep Google API integration
function Address({address}) {
  return (
    <Pressable onPress={() => console.log('Google API to get directions')}>
      <Text
        style={{
          color: 'blue',
          textDecorationLine: 'underline',
          fontWeight: 'bold',
          fontSize: 16,
        }}>
        {address}
      </Text>
    </Pressable>
  );
}

function CheckoutBottomHeader({address}) {
  return (
    <View
      style={{
        flex: 1,
        borderBottomWidth: 1,
        padding: 10,
        justifyContent: 'center',
      }}>
      <Text style={[textStyles.text, textStyles.smallHeadings]}>
        Carryout Order
      </Text>
      <Text style={textStyles.text}>
        Pickup at: <Address address={address} />
      </Text>
    </View>
  );
}

function NotificationsSection() {
  // replace code within main view with Notifications component to add feature
  return (
    <View style={{flex: 3, borderColor: 'black', borderBottomWidth: 1}}>
      <View style={{flex: 2, paddingLeft: 10}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            Text & Email Notifications
          </Text>
        </View>
        <View style={{flex: 3, justifyContent: 'center'}}>
          <Text style={textStyles.text}>
            {BULLET_POINT} Feature not currently available.
          </Text>
          <Text style={textStyles.text}>
            {BULLET_POINT} We'll send you a notification when your order is
            ready👍
          </Text>
        </View>
      </View>
    </View>
  );
}

function ContactInfoSection() {
  // all fields need to be filled
  //  valid email
  // first name and last name are non-empty
  // valid phone number

  // need to validate this shit
  // highlight TextInputs with red if submit without information
  // only allow submission once inputs are filled
  // need validation messages? alert?
  // need

  //   const [validFirstName, setValidFirstName] = useState(false);
  //   const [validLastName, setValidLastName] = useState(false);
  //   const [validEmail, setValidEmail] = useState(false);
  //   const [validPhone, setValidPhone] = useState(false);

  let {
    validFirstName,
    setValidFirstName,
    validLastName,
    setValidLastName,
    validEmail,
    setValidEmail,
    validPhone,
    setValidPhone,
  } = useContext(ValidationsContext);

  return (
    <View style={{flex: 4, borderColor: 'black', borderBottomWidth: 1}}>
      <View style={styles.contactInfoHeader}>
        <Text
          style={[
            textStyles.text,
            textStyles.smallHeadings,
            {flex: 1, marginLeft: 10},
          ]}>
          Contact Info
        </Text>
        <Text style={{color: 'red', fontSize: 12, flex: 1}}>
          *All fields required
        </Text>
      </View>
      <View style={{flex: 10}}>
        <TextInput
          style={[styles.input, validFirstName ? {} : styles.invalidInput]}
          placeholder="First Name"
          onChangeText={text => {
            if (isValidNameCheckout(text)) {
              setValidFirstName(true);
            } else {
              setValidFirstName(false);
            }
          }}
        />
        <TextInput
          style={[styles.input, validLastName ? {} : styles.invalidInput]}
          placeholder="Last Name"
          onChangeText={text => {
            if (isValidNameCheckout(text)) {
              setValidLastName(true);
            } else {
              setValidLastName(false);
            }
          }}
        />
        <TextInput
          style={[styles.input, validEmail ? {} : styles.invalidInput]}
          placeholder="Email"
          onChangeText={text => {
            if (isValidEmailCheckout(text)) {
              setValidEmail(true);
            } else {
              setValidEmail(false);
            }
          }}
        />
        <TextInput
          style={[styles.input, validPhone ? {} : styles.invalidInput]}
          placeholder="Phone"
          onChangeText={text => {
            if (isValidPhoneNumber(text)) {
              setValidPhone(true);
            } else {
              setValidPhone(false);
            }
          }}
        />
      </View>
    </View>
  );
}

function CheckoutTotals({totals}) {
  let subtotal = totals.subtotal;
  let tax = totals.tax;
  let total = totals.total;

  return (
    <View style={{flex: 2, flexDirection: 'row'}}>
      <View style={styles.totalSections}>
        <View>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            Subtotal
          </Text>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            Estimated Tax:
          </Text>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            Total:
          </Text>
        </View>
      </View>
      <View style={styles.totalSections}>
        <View>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            ${subtotal.toFixed(2)}
          </Text>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            ${tax.toFixed(2)}
          </Text>
          <Text style={[textStyles.text, textStyles.smallHeadings]}>
            ${total.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
}

function CheckoutFooter({resId, cart}) {
  const {createOrder} = useOrders();
  const {deleteCart} = useCarts();
  const {validFirstName, validLastName, validEmail, validPhone} =
    useContext(ValidationsContext);
  // once an order is created, need to remove order from AsyncStorage using useCarts

  return (
    <View style={[styles.bottom, {borderTopWidth: 1, borderColor: 'black'}]}>
      <Pressable
        style={styles.submitButton}
        onPress={async () => {
          try {
            // in current implementation, need to create user first before we can create the order
            if (
              !validFirstName ||
              !validLastName ||
              !validEmail ||
              !validPhone
            ) {
              throw new Error('Please provide valid info to submit your order');
            }

            let response = await createOrder(resId, cart);

            //             await deleteCart(resId);
          } catch (e) {
            alert(e.message);
          }
        }}>
        <Text style={textStyles.cartButtonText}>
          Submit Order and Pay Later
        </Text>
      </Pressable>
    </View>
  );
}

function CheckoutScreen({route}) {
  let resInfo = route.params.resInfo;
  let totals = route.params.totals;
  let cart = route.params.cart;

  let title = resInfo.title;
  let address = resInfo.address;
  let resId = resInfo.id;

  const [validFirstName, setValidFirstName] = useState(false);
  const [validLastName, setValidLastName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  return (
    <SafeAreaView style={containerStyles.main}>
      <ValidationsContext.Provider
        value={{
          validFirstName,
          setValidFirstName,
          validLastName,
          setValidLastName,
          validEmail,
          setValidEmail,
          validPhone,
          setValidPhone,
        }}>
        <CheckoutTopHeader title={title} />
        <CheckoutBottomHeader address={address} />
        <ContactInfoSection />
        <NotificationsSection />
        <CheckoutTotals totals={totals} />
        <CheckoutFooter resId={resId} cart={cart} />
      </ValidationsContext.Provider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    paddingLeft: 8,
    margin: 8,
    borderWidth: 1,
    padding: 2,
    borderRadius: 8,
    backgroundColor: '#DEDEDE',
  },
  invalidInput: {
    shadowColor: 'red',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 1,
    borderColor: 'red',
    elevation: 6, // For Android
  },
  bottom: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  submitButton: {
    fontSize: 16,
    color: 'black',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 8,
    borderColor: 'black',
    borderWidth: 1,
    width: '90%',
  },
  totalSections: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactInfoHeader: {
    flex: 1.75,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export {
  CheckoutScreen,
  CheckoutFooter,
  CheckoutTotals,
  NotificationsSection,
  ContactInfoSection,
  CheckoutBottomHeader,
  CheckoutTopHeader,
  Address,
};

import React from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  Pressable,
  Image,
} from 'react-native';
import {ContactInfo} from '../../../components/ui/ContactInfo';
import {Notifications} from '../../../components/ui/Notifications';

import useOrders from '../../../hooks/useOrders';
import useCarts from '../../../hooks/useCarts';

import {textStyles} from '../../../res/styles/text';
import {containerStyles} from '../../../res/styles/container';

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
  return (
    <View style={{flex: 3, borderColor: 'black', borderBottomWidth: 1}}>
      <Notifications />
    </View>
  );
}

function ContactInfoSection() {
  return (
    <View style={{flex: 4, borderColor: 'black', borderBottomWidth: 1}}>
      <ContactInfo />
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
  // once an order is created, need to remove order from AsyncStorage using useCarts

  return (
    <View style={[styles.bottom, {borderTopWidth: 1, borderColor: 'black'}]}>
      <Pressable
        style={styles.submitButton}
        onPress={async () => {
          try {
            // in current implementation, need to create user first before we can create the order

            await createOrder(resId, cart);
            await deleteCart(resId);
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

  return (
    <SafeAreaView style={containerStyles.main}>
      <CheckoutTopHeader title={title} />
      <CheckoutBottomHeader address={address} />
      <ContactInfoSection />
      <NotificationsSection />
      <CheckoutTotals totals={totals} />
      <CheckoutFooter resId={resId} cart={cart} />
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
    backgroundColor: 'grey',
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

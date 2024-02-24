import React from 'react';
import {SafeAreaView, View, Text, Pressable} from 'react-native';
import {merchContCSS} from '../../../../res/styles/merchantContainer';
import {merchTextCSS} from '../../../../res/styles/merchantText';

const BULLET_POINT = '\u25CF';

function ScreenOne() {
  return (
    <>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} Have a restaurant? Sign up and authorize OrderWeasel to
        pull your menu directly from your POS provider so we can take the
        customer's order for you.
      </Text>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} OrderWeasel only integrates with
        <Text style={{color: '#A1000E'}}> Square POS </Text> at this time.
      </Text>
    </>
  );
}

function ScreenTwo() {
  return (
    <>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} We don't handle payments ourselves, so we have very
        little overhead, which allows us to provide a free service rather than
        passing costs on to you and the customer.
      </Text>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} All we ask is you tell your friends about us!
      </Text>
    </>
  );
}

function ScreenThree() {
  return (
    <>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} You can download OrderWeasel on the same device that
        houses your Square POS so you don't have to worry about an extra tablet
        lying around.
      </Text>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} When a customer submits an order, we'll send a
        notification so whoever is on the register can view and enter the order
        in the system.
      </Text>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} We also provide an order queue in the app so you can keep
        tabs on incoming orders. The order queue is used to acknowledge orders
        and mark them as complete so the customer can have a better idea of when
        to arrive.
      </Text>
    </>
  );
}

function ScreenFour() {
  return (
    <>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} You can think of our service as an online alternative to
        calling in an order so customers can order carryout in a convenient way
        ay no extra cost to you or the customer.
      </Text>
      <Text style={[merchTextCSS.text, merchTextCSS.list]}>
        {BULLET_POINT} That's it. It's just another way to connect you to the
        customer.
      </Text>
    </>
  );
}

function SignUpButton({navigation}) {
  return (
    <View style={[merchContCSS.container, {flexDirection: 'row', flex: 0.5}]}>
      <View style={{flex: 4}}>{/*spacer*/}</View>
      <Pressable
        onPress={() => navigation.navigate('SignUp')}
        style={[merchContCSS.button, {flex: 2}]}>
        <Text style={merchTextCSS.buttonText}>Sign Up Now!</Text>
      </Pressable>
    </View>
  );
}

function MerchantHomeTab({navigation}) {
  return (
    <SafeAreaView style={[merchContCSS.main, {flexDirection: 'row'}]}>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
      <View style={merchContCSS.mainContent}>
        <ScreenOne />
        <ScreenTwo />
        <ScreenThree />
        <ScreenFour />
        <SignUpButton navigation={navigation} />
      </View>
      <View style={merchContCSS.mainSpacer}>{/*spacer*/}</View>
    </SafeAreaView>
  );
}

export {
  MerchantHomeTab,
  SignUpButton,
  ScreenOne,
  ScreenTwo,
  ScreenThree,
  ScreenFour,
};

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';

import useLocation from '../hooks/useLocation';

import {containerStyles} from '../res/styles/container';
import {textStyles} from '../res/styles/text';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function MerchantPathway({navigation}) {
  const [smallScreen, setSmallScreen] = useState(() => {
    return windowWidth < 400;
  });

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}>{/*spacer*/}</View>
      {smallScreen ? (
        <Text style={styles.warningText}>
          Merchants: for best user experience, please use a tablet sized device
        </Text>
      ) : (
        <></>
      )}

      <Pressable
        style={() => [
          styles.button,
          {backgroundColor: smallScreen ? 'grey' : 'blue'},
          {flex: 1, justifyContent: 'center'},
        ]}
        onPress={() => {
          if (smallScreen) {
            alert('Please use an adequate device');
            return;
          }

          navigation.navigate('MerchantScreen');
        }}>
        <Text style={styles.buttonText}>I want to sell food</Text>
      </Pressable>
      <View style={{flex: 1}}>{/*spacer*/}</View>
    </View>
  );
}

function CustomerPathway({navigation}) {
  //   const { requestLocationPermission, getLocation, location, setLocation } = useLocation();
  const [largeScreen, setLargeScreen] = useState(() => {
    return windowWidth > 400;
  });

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 1}}>{/*spacer*/}</View>
      {largeScreen ? (
        <Text style={styles.warningText}>
          Customers: for best user experience, please use your mobile device
        </Text>
      ) : (
        <></>
      )}
      <Pressable
        style={() => [
          styles.button,
          {backgroundColor: largeScreen ? 'grey' : 'blue'},
          {flex: 1, justifyContent: 'center'},
        ]}
        onPress={() => {
          if (largeScreen) {
            alert('Please use an adequate device');
            return;
          }
          //               await requestLocationPermission();
          //               await getLocation(location, setLocation);
          navigation.navigate('HomeScreen');
        }}>
        <Text style={styles.buttonText}>I want to buy food</Text>
      </Pressable>
      <View style={{flex: 1}}>{/*spacer*/}</View>
    </View>
  );
}

function WelcomeScreen({navigation}) {
  const {getLocation, location, setLocation} = useLocation();

  useEffect(() => {
    (async function () {
      getLocation(location, setLocation);
    })();
  }, []);

  return (
    <SafeAreaView style={[containerStyles.main, {padding: 10}]}>
      <CustomerPathway navigation={navigation} />
      <MerchantPathway navigation={navigation} />
      <View style={[textStyles.text, {flex: 0.5}]}>
        <Text>
          W:{windowWidth} x H:{windowHeight}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    borderRadius: 16,
  },
  unavailableButton: {
    backgroundColor: 'grey',
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 32,
  },
  warningText: {
    color: 'red',
  },
});

export {WelcomeScreen, CustomerPathway, MerchantPathway};

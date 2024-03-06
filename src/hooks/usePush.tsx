import React, {useContext} from 'react';
import {PermissionsAndroid} from 'react-native';
import {PushContext} from '../context/PushContext';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';

import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

const messagesURL = 'http://172.21.100.74:3000/api/messages';

const usePush = () => {
	const {
		tokens, setTokens, usePushNotifications, setUsePushNotifications, uuid, setUUID
	} = useContext(PushContext);

	// API methods

	async function getFCMToken(){
    try {
      const fcmToken = await messaging().getToken();
      if (fcmToken) {
//         console.log('FCM Token:', fcmToken);
        // add token to State and local storage
        addToken(fcmToken);

        // add tokens to database with the uuid
        // or only save latest token? and store tokens in AsyncStorage?
        await saveFcmToken(fcmToken);
      } else {
        console.log('No FCM token available.');
      }
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };

  async function requestNotificationsPermissions() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Push Notifications permission granted!');
        return true;
      } else {
        console.log('Push Notifications permission denied');
        return false;
      }
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // React Native client-side (when initializing or logging in)
  // Send the token to your server using an HTTP POST request
  // Call saveFcmToken(token) with the obtained FCM token
  // associate token with uuid in AsyncStorage associated with device

  async function saveFcmToken(fcmToken) {
    let body = {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({fcmToken: fcmToken, deviceUUID: uuid}),
    }

    try {
      const response = await fetch(messagesURL + '/save-fcm-token', body);
      const json = await response.json();

      if (response.status !== 200) {
        throw new Error(json.error)
      }

      console.log(json.message); // Success message from the server
    } catch (error) {
      throw new Error('Error saving FCM token: ' + error.message);
    }
  };

  // generate uuid on startup at WelcomeScreen
  async function setDeviceUUID() {
		try {
      let deviceUUID = await AsyncStorage.getItem("uuid");

			if (deviceUUID) {
				console.log('uuid already exists for current device');
				setUUID(deviceUUID);
				return ;
			}

      // save uuid in AsyncStorage if not already saved
			let newUUID = uuidv4();
			setUUID(newUUID)
			await AsyncStorage.setItem("uuid", newUUID);
		} catch (e) {
			throw new Error(e.message);
		}
  }

  // notification handlers

  const foreground = messaging().onMessage(async remoteMessage => {
    console.log(JSON.stringify(remoteMessage))
    alert('A new FCM foreground message arrived!');
  });

	// helpers

	function getCopy(collection) {
		return JSON.parse(JSON.stringify(collection))
	}

	// currently adds token to state
	// add to AsyncStorage
	function addToken(newToken) {
		let tokensCopy = getCopy(tokens);
		tokensCopy.push(newToken);
		setTokens(tokensCopy);
	}

	return {
		addToken,
		requestNotificationsPermissions,
		getFCMToken,
		usePushNotifications,
		setDeviceUUID
	};
};

export default usePush;

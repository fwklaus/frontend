import React from 'react';
import {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushContext = createContext(null);

// FCMTokens used for device identification by FCM server
	// they are periodically regenerated - store all
	// use last FCMtoken in the array
const PushProvider = props => {
  const [usePushNotifications, setUsePushNotifications] = useState(true); // feature flag
  const [tokens, setTokens] = useState([]);
  const [uuid, setUUID] = useState('');

  useEffect(() => {
    console.log(uuid || 'null uuid' + ' (at PushContext)');
  }, [uuid]);

  useEffect(() => {
    console.log(tokens.length > 0 ? JSON.stringify(tokens) : 'no tokens' + " (at PushContext)");

    (async function(){
    // store token in AsyncStorage
			await AsyncStorage.setItem("fcmToken", JSON.stringify(tokens));
    })();
  }, [tokens]);

  return (
    <PushContext.Provider
      value={{
        tokens, setTokens, usePushNotifications, setUsePushNotifications, uuid, setUUID
      }}
    >
      {props.children}
    </PushContext.Provider>
  );
};

export {PushContext, PushProvider};

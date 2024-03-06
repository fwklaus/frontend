import React from 'react';
import {useState, createContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const PushContext = createContext(null);

// You can use the token for sending notifications to this device
	// they are periodically regenerated - store all
const PushProvider = props => {
  const [usePushNotifications, setUsePushNotifications] = useState(true); // feature flag
  const [tokens, setTokens] = useState([]);
  const [uuid, setUUID] = useState('');

  useEffect(() => {
    console.log(uuid || 'null uuid' + ' (at PushContext)');
  }, [uuid]);

  useEffect(() => {
    console.log(JSON.stringify(tokens) + " (at PushContext)");

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

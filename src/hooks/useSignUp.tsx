import {useContext} from 'react';
import {SignUpContext} from '../context/SignUpContext';
import useSessions from './useSessions';

import {getStateCode, formatPhone} from '../utils/validationUtils';

const signUpURL = 'http://172.21.238.183:3000/api/signup/';

const useSignUp = () => {
  const [newMerchant, setNewMerchant] = useContext(SignUpContext);
  const {createNewSession} = useSessions();

  // API methods
  async function signUp() {
    let formattedBody = formatNewMerchant(newMerchant);

    let requestObject = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formattedBody),
    };

    try {
      let response = await fetch(signUpURL, requestObject);
      let json = await response.json();

      if (response.status === 400) {
        throw new Error(json.error);
      }

      createNewSession(response);
      console.log(json.message);
      return json;
    } catch (e) {
      console.log(e.message + ' (at useSignUp.signUp)');
      throw new Error(e.message);
    }
  }

  // Helper functions

  function getCopy(collection) {
    return JSON.parse(JSON.stringify(collection));
  }

  function updateNewMerchant(field, input) {
    let copy = getCopy(newMerchant);
    copy[field] = input;
    setNewMerchant(copy);
  }

  function formatNewMerchant(newMerchant) {
    let newMerchantCopy = getCopy(newMerchant);
    newMerchantCopy.state = getStateCode(newMerchantCopy.state);
    newMerchantCopy.phone = formatPhone(newMerchantCopy.phone);

    return newMerchantCopy;
  }

  return {
    formatNewMerchant,
    updateNewMerchant,
    newMerchant,
    signUp,
  };
};

export default useSignUp;

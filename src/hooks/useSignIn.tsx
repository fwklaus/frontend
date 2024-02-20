import { useContext, useEffect } from 'react';
import { SignInContext } from '../context/SignInContext';
import useMerchant from './useMerchant';

const useSignIn = () => {
  const {
    credentials, setCredentials, signedIn,
    setSignedIn, currentMerchant, setCurrentMerchant
    } = useContext(SignInContext);

   const { postSignIn, merchants } = useMerchant();

  function getCredentialsCopy() {
    return JSON.parse(JSON.stringify(credentials));
  }

  function getMerchant(email) {
    return merchants.filter(merchant => {
         return merchant.email === email
    });
  }

  function signOut() {
    toggleSignIn();
  }

  function toggleSignIn() {
    setSignedIn(!signedIn);
  }

  async function signIn() {
    try {
      await postSignIn(credentials);
      let merchant = getMerchant(credentials.email)[0];
      setCurrentMerchant(merchant);
      toggleSignIn();
    } catch (e) {
      throw new Error(e.message, "at SignIn");
    }
  }

  function updateCredentials(field, text) {
    let copy = getCredentialsCopy();
    copy[field] = text;
    setCredentials(copy);
  }

  function resetFields() {
      setCredentials({
        'email': '',
        'password': ''
      });
  }

  function validEmail() {
    let match = getMerchant(credentials.email);
    return match.length === 1;
  }

  return {
    credentials,
    updateCredentials,
    validEmail,
    resetFields,
    signedIn,
    currentMerchant,
    setCurrentMerchant,
    signOut,
    toggleSignIn,
    signIn
  };
};

export default useSignIn;

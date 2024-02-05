import { useContext, useEffect } from 'react';
import { SignInContext } from '../context/SignInContext';

import loginData from '../data/loginData';

const useSignIn = () => {
  const {
    credentials, setCredentials, signedIn,
    setSignedIn, currentMerchant, setCurrentMerchant
    } = useContext(SignInContext);

  useEffect(() => {
//     console.log(signedIn);
  }, [signedIn]);

  useEffect(() => {
//     console.log(currentMerchant)
  }, [currentMerchant]);

  useEffect(() => {
//     console.log(credentials);
  }, [ credentials]);


  function getCopy() {
    return JSON.parse(JSON.stringify(credentials));
  }

  function getUser() {
    return loginData.filter(merchant => {
      return merchant.password === credentials.password
             && merchant.email === credentials.email;
    });
  }

  function signOut() {
    setSignedIn(!signedIn);
  }

  function signIn() {
    let user = getUser()[0];

    setSignedIn(!signedIn);
    setCurrentMerchant(user);
  }


  function updateCredentials(field, text) {
    let copy = getCopy();
    copy[field] = text;
    setCredentials(copy);
  }

  function resetFields() {
    setCredentials({
      'email': '',
      'password': ''
    });
  }

  function validCredentials() {
    let match = getUser();
    return match.length === 1;
  }

  return {
    credentials,
    updateCredentials,
    validCredentials,
    resetFields,
//     setSignedIn,
    signedIn,
//     currentUser,
    currentMerchant,
    signOut,
    signIn
  };
};

export default useSignIn;

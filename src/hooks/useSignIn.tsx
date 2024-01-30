import { useContext, useEffect } from 'react';
import { SignInContext } from '../context/SignInContext';

import loginData from '../data/loginData';

const useSignIn = () => {
  const { credentials, setCredentials, signedIn, setSignedIn } = useContext(SignInContext);

  useEffect(() => {
    console.log(credentials);
  }, [credentials]);

   useEffect(() => {
    console.log("Signed in: " + signedIn);
   }, [signedIn]);

  function getCopy() {
    return JSON.parse(JSON.stringify(credentials));
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
    let match = loginData.filter(merchant => {
      return merchant.password === credentials.password
             && merchant.email === credentials.email;
    });

    return match.length === 1;
  }

  return {
    credentials,
    updateCredentials,
    validCredentials,
    resetFields,
    signedIn,
    setSignedIn
  };
};

export default useSignIn;

import { useContext, useEffect } from 'react';
import { SignInContext } from '../context/SignInContext';

// import loginData from '../data/loginData';

const useSignIn = () => {
  const {
    credentials, setCredentials, signedIn,
    setSignedIn, currentMerchant, setCurrentMerchant
    } = useContext(SignInContext);

/*   useEffect(() => {
//     console.log(signedIn);
  }, [signedIn]);

  useEffect(() => {
//     console.log(currentMerchant, " from use signIn")
  }, [currentMerchant]);

  useEffect(() => {
//     console.log(credentials);
  }, [ credentials]); */

  function getCopy() {
    return JSON.parse(JSON.stringify(credentials));
  }

  function getUser(merchants) {
    return merchants.filter(merchant => {
      return merchant.password === credentials.password
             && merchant.email === credentials.email;
    });
  }

  function signOut() {
    setSignedIn(!signedIn);
  }

  function signIn(merchants) {
    let user = getUser(merchants)[0];
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

  function validCredentials(merchants) {
    let match = getUser(merchants);


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
    setCurrentMerchant,
    signOut,
    signIn
  };
};

export default useSignIn;

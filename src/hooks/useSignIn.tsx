import { useContext, useEffect } from 'react';
import { SignInContext } from '../context/SignInContext';

import loginData from '../data/loginData';

const useSignIn = () => {
  const {
    credentials, setCredentials, signedIn,
    setSignedIn, currentUser, setCurrentUser
    } = useContext(SignInContext);

  useEffect(() => {
    console.log(signedIn);
  }, [signedIn]);

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser]);

  useEffect(() => {
    console.log(credentials);
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
    let id = '10';

    user = {
      id: id,
      email: user.email
    }
    setSignedIn(!signedIn);
    setCurrentUser(user);
  }

//   function updateCurrentUser() {
//     let user = getUser()[0];
//     let id = '10';
//
// //     should use the real merchant.id here
//     user = {
//       id: id,
//       email: user.email
//     }
//     setCurrentUser(user);
//   }

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
    currentUser,
    signOut,
    signIn
  };
};

export default useSignIn;

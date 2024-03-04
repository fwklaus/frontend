import React from 'react';
import {createContext, useState, useEffect} from 'react';

const SignUpContext = createContext(null);

const SignUpProvider = props => {
  const [validName, setValidName] = useState(false);
  const [validPhone, setValidPhone] = useState(false);

  const [validStreet, setValidStreet] = useState(false);
  const [validCity, setValidCity] = useState(false);
  const [validZip, setValidZip] = useState(false);
  const [validState, setValidState] = useState(false);

  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [validValidator, setValidValidator] = useState(false);

  const [newMerchant, setNewMerchant] = useState({
    restaurantName: '',
    phone: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
    validator: '',
    sq_access_token: '',
    sq_refresh_token: '',
  });
  const [useSignUpProgressBar, setUseSignUpProgressBar] = useState(false);

  useEffect(() => {
    //           console.log(newMerchant);
  }, [newMerchant]);

  useEffect(() => {}, [validName, validPhone]);
  useEffect(() => {}, [validStreet, validCity, validZip, validState]);
  useEffect(() => {}, [validEmail, validPassword, validValidator]);

  return (
    <SignUpContext.Provider
      value={{
        newMerchant, setNewMerchant, useSignUpProgressBar,
        validName, setValidName, validPhone, setValidPhone,
        validStreet, setValidStreet, validCity, setValidCity,
        validZip, setValidZip, validState, setValidState,
        validEmail, setValidEmail, validPassword, setValidPassword,
        validValidator, setValidValidator
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
};

export {SignUpContext, SignUpProvider};

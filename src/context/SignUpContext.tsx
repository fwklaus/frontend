import React from 'react';
import {createContext, useState, useEffect} from 'react';

const SignUpContext = createContext(null);

const SignUpProvider = props => {
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

  useEffect(() => {
//           console.log(newMerchant);
  }, [newMerchant]);

  return (
    <SignUpContext.Provider value={[newMerchant, setNewMerchant]}>
      {props.children}
    </SignUpContext.Provider>
  );
};

export {SignUpContext, SignUpProvider};

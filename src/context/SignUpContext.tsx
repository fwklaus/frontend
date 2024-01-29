import { createContext, useState } from 'react';

const SignUpContext = createContext(null);

const SignUpProvider = (props) => {
  const [newMerchant, setNewMerchant] = useState({
    'restaurant_name': '',
    'phone': '',
    'street': '',
    'city': '',
    'state': '',
    'zip': '',
    'email': '',
    'password': '',
    'validator': ''
  });

  return (
    <SignUpContext.Provider value={[newMerchant, setNewMerchant]}>
      {props.children}
    </SignUpContext.Provider>
  );
}

export { SignUpContext, SignUpProvider };

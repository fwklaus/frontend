import { createContext, useState } from 'react';
const SignInContext = createContext(null);

const SignInProvider = (props) => {
  const [credentials, setCredentials] = useState({
    'email': '',
    'password': ''
  });

  const [signedIn, setSignedIn] = useState(false);

  return (
    <SignInContext.Provider value={{credentials, setCredentials, signedIn, setSignedIn}}>
      {props.children}
    </SignInContext.Provider>
  );
}

export { SignInContext, SignInProvider };

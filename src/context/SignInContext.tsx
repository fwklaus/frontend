import { createContext, useState } from 'react';
const SignInContext = createContext(null);

const SignInProvider = (props) => {
  const [credentials, setCredentials] = useState({
    'email': '',
    'password': ''
  });

  const [signedIn, setSignedIn] = useState(false);

  // should use the id we use to get and set account information
  // set the current user before resetting the fields (which resets credentials)
  // we use the currentUser to get and update the information from the merchant profile page
  const [currentUser, setCurrentUser] = useState({
    'id': '',
    'email': ''
  });

  return (
    <SignInContext.Provider value={{
      credentials, setCredentials, signedIn,
      setSignedIn, signedIn, setSignedIn,
      currentUser, setCurrentUser
    }}>
      {props.children}
    </SignInContext.Provider>
  );
}

export { SignInContext, SignInProvider };

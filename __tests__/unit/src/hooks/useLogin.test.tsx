/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
// import useSignIn from '../../../../src/hooks/useSignIn';
// import {SignInProvider} from '../../../../src/context/SignInContext';

import useLogin from '../../../../src/hooks/useLogin';
import {LoginProvider} from '../../../../src/context/LoginContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('useLogin Tests', () => {
  it('renders correctly', () => {
    function App() {
      return (
        <LoginProvider>
          <Test />
        </LoginProvider>
      );
    }

    function Test() {
      const {
        credentials,
        updateCredentials,
        validCredentials,
        resetFields,
        loggedIn,
        setLoggedIn,
        currentMerchant,
        toggleSignOut,
        toggleSignIn,
      } = useLogin();

      return <Text>Test</Text>;
    }

    <App />;
  });
});

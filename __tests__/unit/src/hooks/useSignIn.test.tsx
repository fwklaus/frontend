/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  Text
} from 'react-native';
import useSignIn from '../../../../src/hooks/useSignIn';
import { SignInProvider } from '../../../../src/context/SignInContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("useSignIn Tests", () => {
  it("renders correctly", () => {
    function App() {
      return (
        <SignInProvider>
          <Test />
        </SignInProvider>
      );
    }

    function Test() {
      const {
        credentials,
        updateCredentials,
        validCredentials,
        resetFields,
        signedIn,
        currentMerchant,
        signOut,
        signIn
      } = useSignIn();

      return (
        <Text>Test</Text>
      );
    }

    <App />
  });
})

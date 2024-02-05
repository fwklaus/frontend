/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  Text
} from 'react-native';
import useSignUp from '../../../../src/hooks/useSignUp';
import { SignUpProvider } from '../../../../src/context/SignUpContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("useSignUp Tests", () => {
  it("renders correctly", () => {
    function App() {
      return (
        <SignUpProvider>
          <Test />
        </SignUpProvider>
      );
    }

    function Test() {
      const {
        newMerchant,
        updateNewMerchant,
        validPassword,
      } = useSignUp();

      return (
        <Text>Test</Text>
      );
    }

    <App />
  });
})

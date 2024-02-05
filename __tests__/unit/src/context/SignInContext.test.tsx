/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import { SignInContext, SignInProvider } from '../../../../src/context/SignInContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("SignInProvider Tests", () => {
  it("renders correctly", () => {
    <SignInProvider>
       <Text>Test</Text>
    </SignInProvider>
  })
})

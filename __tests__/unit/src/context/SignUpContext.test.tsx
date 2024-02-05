/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import { SignUpContext, SignUpProvider } from '../../../../src/context/SignUpContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("SignUpProvider Tests", () => {
  it("renders correctly", () => {
    <SignUpProvider>
       <Text>Test</Text>
    </SignUpProvider>
  })
})

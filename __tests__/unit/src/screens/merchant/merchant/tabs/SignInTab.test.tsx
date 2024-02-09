/**
 * @format
 */

import 'react-native';
import React from 'react';
import { SignInTab, SignInButton } from '../../../../../src/tabs/merchant_screen/SignInTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("SignInTab Tests", () => {
  it("renders correctly", () => {
    <SignInTab />
  });
});

describe("SignInButton Tests", () => {
  it("renders correctly", () => {
    <SignInButton />
  })
})

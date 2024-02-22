/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  SignInTab,
  SignInButton,
} from '../../../../../../../src/screens/merchant/merchant/tabs/SignInTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('SignInTab Tests', () => {
  it('renders correctly', () => {
    <SignInTab />;
  });
});

describe('SignInButton Tests', () => {
  it('renders correctly', () => {
    <SignInButton />;
  });
});

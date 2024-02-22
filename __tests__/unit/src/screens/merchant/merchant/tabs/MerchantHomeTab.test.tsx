/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  MerchantHomeTab,
  SignUpButton,
  ScreenOne,
  ScreenTwo,
  ScreenThree,
  ScreenFour,
} from '../../../../../../../src/screens/merchant/merchant/tabs/MerchantHomeTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('MerchantHomeTab Tests', () => {
  it('renders correctly', () => {
    <MerchantHomeTab />;
  });
});

describe('SignUpButton Tests', () => {
  it('renders correctly', () => {
    <SignUpButton />;
  });
});

describe('ScreenOne Tests', () => {
  it('renders correctly', () => {
    <ScreenOne />;
  });
});

describe('ScreenTwo Tests', () => {
  it('renders correctly', () => {
    <ScreenTwo />;
  });
});

describe('ScreenThree Tests', () => {
  it('renders correctly', () => {
    <ScreenThree />;
  });
});

describe('ScreenFour Tests', () => {
  it('renders correctly', () => {
    <ScreenFour />;
  });
});

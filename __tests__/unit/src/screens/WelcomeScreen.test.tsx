/**
 * @format
*/

import 'react-native';
import React from 'react';
import { WelcomeScreen, CustomerPathway, MerchantPathway } from '../../../../src/screens/WelcomeScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("WelcomeScreen Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <WelcomeScreen navigation={navigation}/>
  });
});


describe("CustomerPathway Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <CustomerPathway navigation={navigation}/>
  });
});

describe("MerchantPathway Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <MerchantPathway navigation={navigation}/>
  });
});
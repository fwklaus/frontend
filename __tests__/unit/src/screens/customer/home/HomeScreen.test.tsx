/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  HomeScreen,
  ServicesTab,
  TermsTab,
} from '../../../../../../src/screens/customer/home/HomeScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('HomeScreen tests', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <HomeScreen navigation={navigation} />;
  });

  it.todo('navigates to HomeTab when services tab is pressed');
  it.todo('navigates to ServicesTab when services tab is pressed');
  it.todo('navigates to TermsTab when services tab is pressed');
});

describe('ServicesTab Tests', () => {
  it('renders correctly', () => {
    <ServicesTab />;
  });
});

describe('TermsTab Tests', () => {
  it('renders correctly', () => {
    <TermsTab />;
  });
});

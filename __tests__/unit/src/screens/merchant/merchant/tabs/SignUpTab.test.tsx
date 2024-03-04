/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  SignUpTab,
  StoreInfo,
  BusinessAddress,
  NextButton,
  ContactInformation,
  SignUpProgress,
  ProgressBar,
  ProgressBox,
//   OAuth,
  CreateAccount,
} from '../../../../../../../src/screens/merchant/merchant/tabs/SignUpTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('SignUpTab Tests', () => {
  it('renders correctly', () => {
    <SignUpTab />;
  });
});

describe('StoreInfo Tests', () => {
  it('renders correctly', () => {
    <StoreInfo />;
  });
});

describe('BusinessAddress Tests', () => {
  it('renders correctly', () => {
    <BusinessAddress />;
  });
});

describe('NextButton Tests', () => {
  it('renders correctly', () => {
    <NextButton />;
  });
});

describe('ContactInformation Tests', () => {
  it('renders correctly', () => {
    <ContactInformation />;
  });
});

describe('SignUpProgress Tests', () => {
  it('renders correctly', () => {
    <SignUpProgress />;
  });
});

// describe('OAuth Tests', () => {
//   it('renders correctly', () => {
//     <OAuth />;
//   });
// });

describe('ProgressBar Tests', () => {
  it('renders correctly', () => {
    <ProgressBar />;
  });
});

describe('ProgressBox Tests', () => {
  it('renders correctly', () => {
    <ProgressBox />;
  });
});

describe('CreateAccount Tests', () => {
  it('renders correctly', () => {
    <CreateAccount />;
  });
});

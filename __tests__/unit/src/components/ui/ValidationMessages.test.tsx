/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import {
  InvalidNameMessage, InvalidPhoneMessage, InvalidStreetMessage,
  InvalidCityMessage, InvalidStateMessage, InvalidZipMessage,
  InvalidEmailMessage, InvalidPasswordMessage, InvalidValidatorMessage,
  DeleteAccountMessage
  } from '../../../../../src/components/ui/ValidationMessages';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('InvalidNameMessage tests', () => {
  it('renders correctly', () => {
    <InvalidNameMessage />
  });
});

describe('InvalidPhoneMessage tests', () => {
  it('renders correctly', () => {
    <InvalidPhoneMessage />
  });
});


describe('InvalidStreetMessage tests', () => {
  it('renders correctly', () => {
    <InvalidStreetMessage />
  });
});


describe('InvalidCityMessage tests', () => {
  it('renders correctly', () => {
    <InvalidCityMessage />
  });
});


describe('InvalidStateMessage tests', () => {
  it('renders correctly', () => {
    <InvalidStateMessage />
  });
});


describe('InvalidZipMessage tests', () => {
  it('renders correctly', () => {
    <InvalidZipMessage />
  });
});

describe('InvalidValidatorMessage tests', () => {
  it('renders correctly', () => {
    <InvalidValidatorMessage />
  });
});

describe('DeleteAccountMessage tests', () => {
  it('renders correctly', () => {
    <DeleteAccountMessage />
  });
});

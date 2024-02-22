/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  CheckoutScreen,
  CheckoutFooter,
  CheckoutTotals,
  NotificationsSection,
  ContactInfoSection,
  CheckoutBottomHeader,
  CheckoutTopHeader,
  Address,
} from '../../../../../../src/screens/customer/checkout/CheckoutScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('CheckoutScreen tests', () => {
  it('renders correctly', () => {
    let navigation = {
      navigate: jest.fn(),
    };

    let params = {
      id: 1,
      title: 'The Red Pickle',
      category: 'American',
      distance: 5.2,
      rating: 5,
      address: '5555 Main St, City, State, 80080',
    };

    <CheckoutScreen navigation={navigation} params={params} />;
  });

  it.todo(
    'navigates to OrderSuccess screen when "Submit Order and Pay Later" button is pressed',
  );
  it.todo('order success message created for successful order');
  it.todo('CheckoutScreen rerenders for unsuccessful order');
});

describe('CheckoutFooter tests', () => {
  it('renders correctly', () => {
    <CheckoutFooter />;
  });
});

describe('CheckoutTotals tests', () => {
  it('renders correctly', () => {
    <CheckoutTotals />;
  });
});

describe('NotificationsSection tests', () => {
  it('renders correctly', () => {
    <NotificationsSection />;
  });
});

describe('ContactInfoSection tests', () => {
  it('renders correctly', () => {
    <ContactInfoSection />;
  });
});

describe('CheckoutBottomHeader tests', () => {
  it('renders correctly', () => {
    <CheckoutBottomHeader />;
  });
});

describe('CheckoutTopHeader tests', () => {
  it('renders correctly', () => {
    <CheckoutTopHeader />;
  });
});

describe('Address tests', () => {
  let address = '5555 Main street';

  it('renders correctly', () => {
    <Address address={address} />;
  });

  it.todo('Gets current location using Google API when pressing it');
});

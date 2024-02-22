/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  OrdersTab,
  NewOrdersPanel,
  OpenOrdersPanel,
  CompleteOrdersPanel,
  Status,
} from '../../../../../../../src/screens/merchant/merchant/tabs/OrdersTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('OrdersTab Tests', () => {
  it('renders correctly', () => {
    <OrdersTab />;
  });
});

describe('NewOrdersPanel Tests', () => {
  it('renders correctly', () => {
    <NewOrdersPanel />;
  });
});

describe('OpenOrdersPanel Tests', () => {
  it('renders correctly', () => {
    <OpenOrdersPanel />;
  });
});

describe('CompleteOrdersPanel Tests', () => {
  it('renders correctly', () => {
    <CompleteOrdersPanel />;
  });
});

describe('Status Tests', () => {
  it('renders correctly', () => {
    <Status />;
  });
});

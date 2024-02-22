/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  CartTab,
  CartFooter,
  CartHeader,
  Item,
} from '../../../../../../../src/screens/customer/restaurant/tabs/CartTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('CartHeader tests', () => {
  let params = {
    params: {
      id: 1,
      title: 'The Red Pickle',
      category: 'American',
      distance: 5.2,
      rating: 5,
      address: '5555 Main St, City, State, 80080',
    },
  };

  it('renders correctly', () => {
    <CartHeader params={params} />;
  });
});

describe('CartFooter tests', () => {
  const navigation = {
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

  it('renders correctly', () => {
    <CartFooter navigation={navigation} params={params} />;
  });

  it.todo('navigates to MenuTab when Close Cart button is pressed');
  it.todo('navigates to CheckoutScreen when Checkout button is pressed');
});

describe('CartTab Tests', () => {
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

  it('renders correctly', () => {
    <CartTab navigation={navigation} params={params} />;
  });

  it.todo('deletes an item from the cart when we press the trash can icon');
});

describe('Item Tests', () => {
  it('renders correctly', () => {
    <Item />;
  });
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import { CheckoutScreen } from '../../../../src/screens/CheckoutScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Component tests', () => {

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
      address: '5555 Main St, City, State, 80080'
    };

    <CheckoutScreen navigation={navigation} params={params} />
  });

  it.todo('navigates to OrderSuccess screen when "Submit Order and Pay Later" button is pressed');
  it.todo('order success message created for successful order');
  it.todo('CheckoutScreen rerenders for unsuccessful order');
});

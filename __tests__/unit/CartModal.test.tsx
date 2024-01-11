/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import { CartModal, QuantityInput } from '../../src/components/CartModal';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe("CartModal tests", () => {
  it('renders correctly', () => {
    let item = {
      id: 1,
      name: 'Pizza',
      cost: '9.99',
      description: 'delicious'
    }

    let restaurantId = 10;

     renderer.create(<CartModal item={item} restaurantId={restaurantId} />)
  });
});


describe("QuantityInput tests", () => {
  it ('renders correctly', () => {
    renderer.create(<QuantityInput />);
  });
});


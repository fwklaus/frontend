/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MenuItem } from '../../../../../src/components/list/MenuItem';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  it('renders correctly', () => {
    let id = "1";
    let item = {
      id: 1,
      name: 'blueberry',
      cost: 8.99,
      description: 'Yummy...',
      picture: '../images/order_weasel_small.jpg'
    };

    <MenuItem item={item} restaurantId={id}/>
  });
});

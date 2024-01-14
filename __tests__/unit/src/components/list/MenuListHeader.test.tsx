/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MenuListHeader } from '../../../../../src/components/list/MenuListHeader';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  it('renders correctly', () => {
    let params = {
      id: 1,
      title: 'The Red Pickle',
      category: 'American',
      distance: 5.2,
      rating: 5,
      address: '5555 Main St, City, State, 80080'
    };

    <MenuListHeader params={params} />
  });
});

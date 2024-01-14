/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MenuScreenHeader } from '../../../../../src/components/screen/MenuScreenHeader';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let params = {
    id: 1,
    title: 'The Red Pickle',
    category: 'American',
    distance: 5.2,
    rating: 5,
    address: '5555 Main St, City, State, 80080'
  };

  it('renders correctly', () => {
    <MenuScreenHeader params={params}/>
  });
});

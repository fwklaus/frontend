/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ResListResults } from '../../../../../src/components/list/ResListResults';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let list = [
    { id: 1, title: 'The Red Pickle', category: 'American', distance: 5.2, rating: 5, address: '5555 Main St, City, State, 80080' },
    { id: 2, title: 'Yes Siam Thai', category: 'Thai', distance: 6, rating: 5, address: '5555 Main St, City, State, 391023' },
  ];

  it('renders correctly', () => {
    <ResListResults list={list}/>
  });
});

/**
 * @format
 */

import 'react-native';
import React from 'react';
import { GetStars } from '../../../../../src/components/api/GetStars';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let address = '5555 Main St.'
  it('renders correctly', () => {
    <GetStars address={address}/>
  });

  it.todo('renders Image component with given number of stars')
});

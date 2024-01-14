/**
 * @format
 */

import 'react-native';
import React from 'react';
import { GetDirections } from '../../../../../src/components/api/GetDirections';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let address = '5555 Main St.'
  it('renders correctly', () => {
    <GetDirections address={address}/>
  });

  it.todo('opens up map to restaurant using Google API')
});

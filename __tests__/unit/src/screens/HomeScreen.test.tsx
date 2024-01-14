/**
 * @format
 */

import 'react-native';
import React from 'react';
import { HomeScreen } from '../../../../src/screens/HomeScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <HomeScreen navigation={navigation}/>
  });
});

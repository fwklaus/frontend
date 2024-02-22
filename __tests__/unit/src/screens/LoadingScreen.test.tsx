/**
 * @format
 */

import 'react-native';
import React from 'react';
import {LoadingScreen} from '../../../../src/screens/LoadingScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('LoadingScreen Tests', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <LoadingScreen navigation={navigation} />;
  });
});

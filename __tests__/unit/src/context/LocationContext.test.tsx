/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import {LocationProvider} from '../../../../src/context/LocationContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('LocationProvider Tests', () => {
  it('renders correctly', () => {
    <LocationProvider>
      <Text>Test</Text>
    </LocationProvider>;
  });
});

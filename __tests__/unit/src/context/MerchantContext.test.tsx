/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import {MerchantProvider} from '../../../../src/context/MerchantContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('MerchantProvider Tests', () => {
  it('renders correctly', () => {
    <MerchantProvider>
      <Text>Test</Text>
    </MerchantProvider>;
  });
});

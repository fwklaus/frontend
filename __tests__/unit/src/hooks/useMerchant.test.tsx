/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import useMerchant from '../../../../src/hooks/useMerchant';
import {MerchantProvider} from '../../../../src/context/MerchantContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('useMerchant Tests', () => {
  it('renders correctly', () => {
    function App() {
      return (
        <MerchantProvider>
          <Test />
        </MerchantProvider>
      );
    }

    function Test() {
      const {createMerchant, merchants} = useMerchant();

      return <Text>Test</Text>;
    }

    <App />;
  });
});

/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import { MerchantContext, MerchantProvider } from '../../../../src/context/MerchantContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("MerchantProvider Tests", () => {
  it("renders correctly", () => {
    <MerchantProvider>
       <Text>Test</Text>
    </MerchantProvider>
  })
})

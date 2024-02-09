/**
 * @format
*/

import 'react-native';
import React from 'react';
import { MerchantScreen } from '../../../../../../src/screens/merchant/merchant/MerchantScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("MerchantScreen Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it('renders correctly', () => {
    <MerchantScreen navigation={navigation}/>
  });
});
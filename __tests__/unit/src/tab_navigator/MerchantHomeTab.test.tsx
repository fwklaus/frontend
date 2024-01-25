/**
 * @format
 */

import 'react-native';
import React from 'react';
import { MerchantHomeTab } from '../../../../src/tab-navigator/MerchantHomeTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("MerchantHomeTab Tests", () => {
  it("renders correctly", () => {
    <MerchantHomeTab />
  })
})
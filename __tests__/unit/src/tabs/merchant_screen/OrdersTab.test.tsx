/**
 * @format
 */

import 'react-native';
import React from 'react';
import { OrdersTab } from '../../../../../src/tabs/merchant_screen/OrdersTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("OrdersTab Tests", () => {
  it("renders correctly", () => {
    <OrdersTab />
  })
})
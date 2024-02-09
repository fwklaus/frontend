/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  OrdersTab, PickupPendingPanel, ClosedOrdersPanel,
  OpenOrdersPanel, Unavailable, TakingOrders
  } from '../../../../../src/tabs/merchant_screen/OrdersTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("OrdersTab Tests", () => {
  it("renders correctly", () => {
    <OrdersTab />
  })
});

describe("PickupPendingPanel Tests", () => {
  it("renders correctly", () => {
    <PickupPendingPanel />
  })
})

describe("ClosedOrdersPanel Tests", () => {
  it("renders correctly", () => {
    <ClosedOrdersPanel />
  })
})

describe("OpenOrdersPanel Tests", () => {
  it("renders correctly", () => {
    <OpenOrdersPanel />
  })
})

describe("Unavailable Tests", () => {
  it("renders correctly", () => {
    <Unavailable />
  })
})


describe("TakingOrders Tests", () => {
  it("renders correctly", () => {
    <TakingOrders />
  })
})

/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  ProfileTab, StoreInformation,
  LoginInformation, DeleteAccount
  } from '../../../../../src/tabs/merchant_screen/ProfileTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("ProfileTab Tests", () => {
  it("renders correctly", () => {
    <ProfileTab />
  })
})

describe("StoreInformation Tests", () => {
  it("renders correctly", () => {
    <StoreInformation />
  })
})

describe("LoginInformation Tests", () => {
  it("renders correctly", () => {
    <LoginInformation />
  })
})

describe("DeleteAccount Tests", () => {
  it("renders correctly", () => {
    <DeleteAccount />
  })
})
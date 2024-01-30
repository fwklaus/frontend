/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ProfileTab } from '../../../../../src/tabs/merchant_screen/ProfileTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("ProfileTab Tests", () => {
  it("renders correctly", () => {
    <ProfileTab />
  })
})
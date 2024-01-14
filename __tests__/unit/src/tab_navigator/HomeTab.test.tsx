/**
 * @format
 */

import 'react-native';
import React from 'react';
import { HomeTab } from '../../../../src/tab-navigator/HomeTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Component Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it("renders correctly", () => {
    <HomeTab navigation={navigation}/>
  })
})
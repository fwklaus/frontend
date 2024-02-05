/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import { LocationContext, LocationProvider } from '../../../../src/context/LocationContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("LocationProvider Tests", () => {
  it("renders correctly", () => {
    <LocationProvider>
       <Text>Test</Text>
    </LocationProvider>
  })
})

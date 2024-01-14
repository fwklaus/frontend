/**
 * @format
 */

import 'react-native';
import React from 'react';
import { Address } from '../../../../../src/components/api/Address';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let address = '5555 Main street';

  it('renders correctly', () => {
    <Address address={address}/>
  });

  it.todo("Gets current location using Google API when pressing it")
});

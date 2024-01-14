/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ResListHeader } from '../../../../../src/components/list/ResListHeader';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  let currentAddress = '5555 Main St.'

  it('renders correctly', () => {
    <ResListHeader currentAddress={currentAddress} />
  });
});

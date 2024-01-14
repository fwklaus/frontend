/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import { QuantityInput } from '../../../../../src/components/ui/QuantityInput';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('Component tests', () => {
  it('renders correctly', () => {
    <QuantityInput />
  });

  it.todo("increases the quantity of the menuItem when '+' button is pressed");
  it.todo("decreases the quantity of the menuItem when '-' button is pressed");
});

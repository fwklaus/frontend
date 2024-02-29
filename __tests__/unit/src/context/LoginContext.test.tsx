/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import {LoginProvider} from '../../../../src/context/LoginContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('LoginProvider Tests', () => {
  it('renders correctly', () => {
    <LoginProvider>
      <Text>Test</Text>
    </LoginProvider>;
  });
});

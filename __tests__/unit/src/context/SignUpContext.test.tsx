/**
 * @format
 */

import 'react-native';
import {Text} from 'react-native';
import React from 'react';
import {SignUpProvider} from '../../../../src/context/SignUpContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('SignUpProvider Tests', () => {
  it('renders correctly', () => {
    <SignUpProvider>
      <Text>Test</Text>
    </SignUpProvider>;
  });
});

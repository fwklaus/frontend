/**
 * @format
 */

import 'react-native';
import React, { useState } from 'react';
import { ContactInfo } from '../../../../../src/components/ui/ContactInfo';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe('Component tests', () => {
  it('renders correctly', () => {
    <ContactInfo />
  });
});




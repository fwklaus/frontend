/**
 * @format
 */

import 'react-native';
import React from 'react';
import {ContactInfo} from '../../../../../src/components/ui/ContactInfo';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('ContactInfo tests', () => {
  it('renders correctly', () => {
    <ContactInfo />;
  });
});

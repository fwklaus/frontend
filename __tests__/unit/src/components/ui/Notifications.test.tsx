/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Notifications} from '../../../../../src/components/ui/Notifications';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('Notifications tests', () => {
  it('renders correctly', () => {
    <Notifications />;
  });
});

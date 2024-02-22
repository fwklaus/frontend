/**
 * @format
 */

import 'react-native';
import React from 'react';
import {OrderItemModal} from '../../../../../src/components/ui/OrderItemModal';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('OrderItemModal tests', () => {
  it('renders correctly', () => {
    <OrderItemModal />;
  });

  it.todo("exits to OrdersTab when 'X' is pressed");
});

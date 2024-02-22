/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  CartModal,
  QuantityInput,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '../../../../../src/components/ui/CartModal';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('CartModal tests', () => {
  it('renders correctly', () => {
    let item = {
      id: 1,
      name: 'Pizza',
      cost: '9.99',
      description: 'delicious',
    };

    <CartModal item={item} />;
  });

  it.todo("exits to MenuTab when 'X' is pressed");

  it.todo('exits to MenuTab when the Add to Cart button is pressed');
});

describe('QuantityInput tests', () => {
  it('renders correctly', () => {
    <QuantityInput />;
  });

  it.todo("increases the quantity of the menuItem when '+' button is pressed");
  it.todo("decreases the quantity of the menuItem when '-' button is pressed");
});

describe('ModalHeader tests', () => {
  it('renders correctly', () => {
    <ModalHeader />;
  });
});

describe('ModalBody tests', () => {
  it('renders correctly', () => {
    <ModalBody />;
  });
});

describe('ModalFooter tests', () => {
  it('renders correctly', () => {
    <ModalFooter />;
  });
});

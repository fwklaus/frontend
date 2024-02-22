/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import useCart from '../../../../src/hooks/useCart';
import {CartProvider} from '../../../../src/context/CartContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('useCart Tests', () => {
  it('renders correctly', () => {
    function App() {
      return (
        <CartProvider>
          <Test />
        </CartProvider>
      );
    }

    function Test() {
      const {
        menu,
        cart,
        deleteItem,
        editItem,
        addItem,
        getIndex,
        getCopy,
        increment,
        decrement,
      } = useCart();

      return <Text>Test</Text>;
    }

    <App />;
  });
});

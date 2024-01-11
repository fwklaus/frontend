/**
 * @format
 */

import 'react-native';
import React from 'react';
import { CartHeader, CartFooter, CartTab } from '../../src/tab-navigator/CartTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';


describe("CartHeader tests", () => {
  it('renders correctly', () => {
    let params = {
      id: 10,
      title: 'Red Dog'
    }

    renderer.create(<CartHeader params={params}/>)
  });
});


describe("CartFooter tests", () => {

  it('renders correctly', () => {
    renderer.create(<CartFooter />)
  });
});


describe("CartTab tests", () => {

  it('renders correctly', () => {
    renderer.create(<CartTab />)
  });
});
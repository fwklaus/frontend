/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  MenuTab,
  MenuItem,
  MenuScreenHeader,
  MenuScreenFooter,
  MenuListHeader,
  SectionHeader,
} from '../../../../../../../src/screens/customer/restaurant/tabs/MenuTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('MenuScreenHeader tests', () => {
  let params = {
    id: 1,
    title: 'The Red Pickle',
    category: 'American',
    distance: 5.2,
    rating: 5,
    address: '5555 Main St, City, State, 80080',
  };

  it('renders correctly', () => {
    <MenuScreenHeader params={params} />;
  });
});

describe('MenuListHeader tests', () => {
  it('renders correctly', () => {
    let params = {
      id: 1,
      title: 'The Red Pickle',
      category: 'American',
      distance: 5.2,
      rating: 5,
      address: '5555 Main St, City, State, 80080',
    };

    <MenuListHeader params={params} />;
  });
});

describe('MenuItem tests', () => {
  it('renders correctly', () => {
    let id = '1';
    let item = {
      id: 1,
      name: 'blueberry',
      cost: 8.99,
      description: 'Yummy...',
      picture: '../images/order_weasel_small.jpg',
    };

    <MenuItem item={item} restaurantId={id} />;
  });

  it.todo('opens up CartModal when pressed');
});

describe('MenuScreenFooter tests', () => {
  const navigation = {
    navigate: jest.fn(),
  };

  let params = {
    id: 1,
    title: 'The Red Pickle',
    category: 'American',
    distance: 5.2,
    rating: 5,
    address: '5555 Main St, City, State, 80080',
  };

  it('renders correctly', () => {
    <MenuScreenFooter navigation={navigation} params={params} />;
  });

  it.todo('navigates to CartTab when View Cart button is pressed');
});

describe('MenuTab Tests', () => {
  let navigation = {
    navigate: jest.fn(),
  };

  let params = {
    id: 1,
    title: 'The Red Pickle',
    category: 'American',
    distance: 5.2,
    rating: 5,
    address: '5555 Main St, City, State, 80080',
  };

  it('renders correctly', () => {
    <MenuTab params={params} navigation={navigation} />;
  });

  it.todo('Pressing on a list section header opens a sublist of food items');
});

describe('SectionHeader Tests', () => {
  it('renders correctly', () => {
    <SectionHeader />;
  });
});

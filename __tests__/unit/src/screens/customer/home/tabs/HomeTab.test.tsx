/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  HomeTab,
  RestaurantItem,
  ResListHeader,
  ResListResults
} from '../../../../../../../src/screens/customer/home/tabs/HomeTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('ResListHeader tests', () => {
  let currentAddress = '5555 Main St.'

  it('renders correctly', () => {
    <ResListHeader currentAddress={currentAddress} />
  });
});

describe('ResListResults tests', () => {
  let list = [
    { id: 1, title: 'The Red Pickle', category: 'American', distance: 5.2, rating: 5, address: '5555 Main St, City, State, 80080' },
    { id: 2, title: 'Yes Siam Thai', category: 'Thai', distance: 6, rating: 5, address: '5555 Main St, City, State, 391023' },
  ];

  it('renders correctly', () => {
    <ResListResults list={list}/>
  });
});


describe('RestaurantItem tests', () => {
  let resItem = {
    id: 1,
    title: 'The Red Pickle',
    category: 'American',
    distance: 5.2,
    rating: 5,
    address: '5555 Main St, City, State, 80080'
  };

  it('renders correctly', () => {
    <RestaurantItem resItem={resItem}/>
  });

  it.todo('navigates to RestaurantScreen when pressed')
});

describe("HomeTab Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

  it("renders correctly", () => {
    <HomeTab navigation={navigation}/>
  })
});

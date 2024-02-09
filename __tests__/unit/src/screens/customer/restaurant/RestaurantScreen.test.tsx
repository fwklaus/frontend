/**
 * @format
*/

import 'react-native';
import React from 'react';
import { RestaurantScreen } from '../../../../../../src/screens/customer/restaurant/RestaurantScreen';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("RestaurantScreen Tests", () => {
  let navigation = {
    navigate: jest.fn(),
  };

 let params = [
   {
     "title": "Beer",
     "data": [
       {id: 17, name: 'Coors', cost: 6.99, description: 'Tastes cheap'},
       {id: 18, name: 'Blue Moon', cost: 6.99, description: 'Gateway from Coors to better beers'},
     ]
   },
   {
     "title": "Cocktails",
     "data": [
       {id: 21, name: 'Egg Nog', cost: 11.50, description: 'Great around the holidays'},
       {id: 22, name: 'Old Fashioned', cost: 10.50, description: 'Classic, simple, makes you feel adult'},
     ]
   },
   {
     "title": "Eats",
     "data": [
       {id: 25, name: 'Mixed Nuts', cost: 5.00, description: 'Like they serve in Coach'},
       {id: 27, name: 'Jalapeño Poppers', cost: 8.00 , description: 'Honey, cancel the flight. Meet me in the lounge'},
     ]
   },
 ];

  it("renders correctly", () => {
    <RestaurantScreen navigation={navigation} params={params}/>
  });
})
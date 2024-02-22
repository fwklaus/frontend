/**
 * @format
 */

import 'react-native';
import React from 'react';
import {Text} from 'react-native';
import useLocation from '../../../../src/hooks/useLocation';
import {LocationProvider} from '../../../../src/context/LocationContext';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

describe('useLocation Tests', () => {
  it('renders correctly', () => {
    function App() {
      return (
        <LocationProvider>
          <Test />
        </LocationProvider>
      );
    }

    function Test() {
      const {
        getLocation,
        loadRestaurants,
        restaurantData,
        refreshing,
        currentAddress,
        requestLocationPermission,
      } = useLocation();

      return <Text>Test</Text>;
    }

    <App />;
  });
});

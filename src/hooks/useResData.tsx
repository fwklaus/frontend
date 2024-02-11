import { useContext, useEffect } from 'react';
import { ResDataContext } from '../context/ResDataContext';

// fetching nearby restaurant data example
import DATA from '../data/restaurantData.js';

//  getRestaurants? - based on location

const useResData = () => {
  const {
    refreshing,
    setRefreshing,
    restaurantData,
    setRestaurantData
  } = useContext(ResDataContext);

  useEffect(()=>{},[restaurantData]);

  function loadRestaurants() {
    setRestaurantData(DATA);

    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
  }

  return {
    loadRestaurants,
    restaurantData,
    refreshing,
  }
};

export default useResData;

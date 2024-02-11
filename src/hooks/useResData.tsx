import { useContext, useEffect } from 'react';
import { ResDataContext } from '../context/ResDataContext';

// importing seed restaurant data
import DATA from '../data/restaurantData.js';

// importing seed menu data
import menuData from '../data/menuData.js'

const useResData = () => {
  const {
    refreshing, setRefreshing, restaurantData,
    setRestaurantData, menu, setMenu
  } = useContext(ResDataContext);

  useEffect(()=>{},[restaurantData]);

  // refactor to fetch data
  // based on proximity - takes location?
  function loadRestaurants() {
    setRestaurantData(DATA);

    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
  }

  // refactor to fetch data
  function loadMenu(restaurantId) {
    let getMenuData = (id) => {
      return menuData[id];
    };

    setMenu(() => getMenuData(restaurantId));

    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
  }

  return {
    menu,
    loadMenu,
    loadRestaurants,
    restaurantData,
    refreshing,
  }
};

export default useResData;


//   const loadMenu = () => {
      // // fetching menu data for a restaurant example
//       function getMenuData(id) {
//         return menuData[id];
//       }

//       setMenu(() => getMenuData(restaurantId));
  //     console.log("...logging from useRes.tsx");




      // use the following when there's actually a server to fetch from

      // fetch('load/menu/for/id')
      //  .then((response) => response.json())
      //  .then((responseJson) => {
      //    setRefreshing(false);
      //    var menuData = menuData.concat(responseJson.results);
      //    setMenuData(menuData);
      //  })
      //  .catch((error) => {
      //    console.error(error);
      //  });



//        setRefreshing(true);
//           setTimeout(() => {
//             setRefreshing(false);
//           }, 1000);
//   }


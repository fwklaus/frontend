import { useContext, useEffect, useState } from 'react';
import { ResDataContext } from '../context/ResDataContext';

// importing seed restaurant data
import DATA from '../data/restaurantData.js';

// importing seed menu data
import menuData from '../data/menuData.js'

const useResData = () => {
  const {
    refreshing, setRefreshing, restaurantData,
    setRestaurantData, menu, setMenu,
    resId, setResId
  } = useContext(ResDataContext);
  const [expandedSections, setExpandedSections] = useState(new Set());

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

    setMenu(getMenuData(restaurantId));

    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
  }

  function handleToggle(title) {
    setExpandedSections((expandedSections) => {
      const next = new Set(expandedSections);
      if (next.has(title)) {
        next.delete(title);
      } else {
         next.add(title);
      }
         return next;
   });
  }

  return {
    resId,
    setResId,
    menu,
    loadMenu,
    loadRestaurants,
    restaurantData,
    refreshing,
    expandedSections,
    setExpandedSections,
    handleToggle
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


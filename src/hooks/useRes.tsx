// import { useState } from 'react';
// // import { RestaurantContext } from '../context/RestaurantContext';
// import restaurantData from '../data/restaurantData.js';
// import menuData from '../data/menuData.js'
//
// // rename file to whatever and place in utils
//
//
//   // request restaurant data based on proximity to current location
//   // calculate distance
//   // get rating
//   // all done through Google?
//   // get nearby restaurants based on current address
//
// const loadRestaurants = (address) => {
//   const [refreshing, setRefreshing] = useState(false);
//   const [resData, setResData] = useState([]);
//
//   // load restaurants based on proximity
//   // will fetch the restaurantData based on proximity
//
//     setResData(restaurantData);
//
// //   console.log("...logging from useRes.tsx");
//
//   // use the following when we can actually fetch from the server
//
//   //       fetch('load/restaurants')
//   //         .then((response) => response.json())
//   //         .then((responseJson) => {
//   //           setRefreshing(false);
//   //           var newdata = userData.concat(responseJson.results);
//   //           setResData(newdata);
//   //         })
//   //         .catch((error) => {
//   //           console.error(error);
//   //         });
//
//   setRefreshing(true);
//     setTimeout(() => {
//       setRefreshing(false);
//     }, 2000);
//
//   return { refreshing, resData };
// }
//
// const loadMenu = (id) => {
//     const [refreshing, setRefreshing] = useState(false);
//     const [menu, setMenu] = useState([]);
//
//     // // fetching menu data for a restaurant example
//     function getMenuData(id) {
//       return menuData[id];
//     }
//
//     setMenu(() => getMenu(id));
//     console.log("...logging from useRes.tsx");
//
//     // use the following when there's actually a server to fetch from
//
//     // fetch('load/menu/for/id')
//     //  .then((response) => response.json())
//     //  .then((responseJson) => {
//     //    setRefreshing(false);
//     //    var menuData = menuData.concat(responseJson.results);
//     //    setMenuData(menuData);
//     //  })
//     //  .catch((error) => {
//     //    console.error(error);
//     //  });
//
//      setRefreshing(true);
//         setTimeout(() => {
//           setRefreshing(false);
//         }, 2000);
//
//
//   return { refreshing, menuData };
// }
//
// const useToggle = () => {
//   const [expandedSections, setExpandedSections] = useState(new Set());
//
//   const handleToggle = (title) => {
//      setExpandedSections((expandedSections) => {
//         const next = new Set(expandedSections);
//         if (next.has(title)) {
//           next.delete(title);
//         } else {
//            next.add(title);
//         }
//            return next;
//      });
//   }
//
//   return {expandedSections, handleToggle};
// }
//
// export {loadRestaurants, loadMenu, useToggle};

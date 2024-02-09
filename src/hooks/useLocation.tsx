import { useContext, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { LocationContext } from '../context/LocationContext';
// import { GOOGLE_API_KEY } from 'react-native-dotenv';
import { GOOGLE_API_KEY } from '@env';
const baseURL = "172.25.103.21:3000";

import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

// fetching nearby restaurant data example
import DATA from '../data/restaurantData.js';

// initialize module using valid API key required for purposes of quota management
  // should store key in environmental variable? module?
// use OrderWeasel.gmail account
// this is currently my personal account

Geocoder.init(GOOGLE_API_KEY);
// Geocoder.init('AIzaSyBEH9uEYLCkCyKMrO6HN9ey5U1QfjkZLwc');

//  getDirections - based on location
//  getRestaurants? - based on location

const useLocation = () => {
  const {
    location, setLocation, refreshing,
    setRefreshing, restaurantData, setRestaurantData,
    currentAddress, setCurrentAddress
   } = useContext(LocationContext);

//   useEffect(()=> {
//     (async () => {
//       try {
//         let response = await fetch(`${baseURL}/api/merchants/gKey`);
//         let json = await response.json();
//         console.log(json);
//       } catch (e) {
//         console.log(e);
//       }
// //         .then(response => response.json())
// //         .then(json => console.log(json))
// //         .catch(e => console.log(e, "from useEffect in useLocation"));
//     })();
//   }, [])

  useEffect(() => {}, [location]);
  useEffect(()=> {}, [restaurantData]);

//   function formatAddress(components) {
//     let comps = {};
//     components.forEach(comp => {
//       let type = comp.types[0];
//       let name = comp.short_name;
//       comps[type] = name;
//     })
//
//     return comps;
//   }

//   function getAddress(location) {
//     if (location && location.coords && location.coords.latitude) {
//       return Geocoder.from(location.coords.latitude, location.coords.longitude)
//         .then(json => {
//           return json.results[0].address_components;
//         }).then((addressComponents) => {
//           return addressComponents;
//         }).catch(error => {
//           throw new Error(error)
//       });
//     } else {
//       throw new Error("Invalid location coordinates in getAddress");
//     }
//   }

  async function getAddress({latitude, longitude}) {
    let googleURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
    let queryParams = `latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`

    try {
      let response = await fetch(googleURL + queryParams);
      let json = await response.json();
      if (json.results.length > 0) {
        const address = json.results[0].formatted_address;
        return address;
      } else {
        throw new Error("No results found for getAddress");
      }
    } catch (e) {
      console.log(e);
    }
  }

  // working
  function getCoordinates(hasPermission, {location, setLocation}) {
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({latitude, longitude});
        },
        (error) =>  console.log(`${error.code}: ${error.message}`),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    } else {
      throw new Error('Permission required to access geolocation')
    }
  }

  // working
  async function requestLocationPermission() {
     try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Geolocation Permission',
          message:
            'OrderWeasel needs access to your location ' +
            'so you can get more accurate directions ' +
            'to the restaurant after you place your order.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK'
        }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Geolocation access permission granted!');
        return true;
      } else {
        console.log('Geolocation access permission denied');
        return false;
      }
     } catch (error) {
       throw new Error(error);
     }
  }

  // working
  async function getLocation(location, setLocation) {
    let address;

    try {
      const hasPermission = await requestLocationPermission();
      await getCoordinates(hasPermission, {location, setLocation});
//       let address = await getAddress(location);
//       return address;
    } catch (error) {
       console.log(error, " in GetLocation");
    }
  }

  // working
  function loadRestaurants() {
    setRestaurantData(DATA);

    setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
  }

  return {
    location,
    getLocation,
    setLocation,
    loadRestaurants,
    restaurantData,
    refreshing,
    getAddress,
    currentAddress,
    setCurrentAddress,
    requestLocationPermission
  }
};

export default useLocation;





//   const loadRestaurants = (address) => {
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
// }
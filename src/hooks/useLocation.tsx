import { useContext, useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import { LocationContext } from '../context/LocationContext';

import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

// fetching nearby restaurant data example
import DATA from '../data/restaurantData.js';

// initialize module using valid API key required for purposes of quota management
  // should store key in environmental variable? module?
// use OrderWeasel.gmail account
// this is currently my personal account
Geocoder.init('AIzaSyBEH9uEYLCkCyKMrO6HN9ey5U1QfjkZLwc');

//  getDirections - based on location
//  getRestaurants? - based on location


const useLocation = () => {
  const {
    location, setLocation, refreshing,
    setRefreshing, restaurantData, setRestaurantData,
    currentAddress, setCurrentAddress
   } = useContext(LocationContext);

  useEffect(() => {}, [location]);
  useEffect(()=> {}, [restaurantData]);

  function formatAddress(components) {
    let comps = {};
    components.forEach(comp => {
      let type = comp.types[0];
      let name = comp.short_name;
      comps[type] = name;
    })

    return comps;
  }

  function getAddress() {
    if (location && location.coords && location.coords.latitude) {
      return Geocoder.from(location.coords.latitude, location.coords.longitude)
        .then(json => {
          return json.results[0].address_components;
        }).then((addressComponents) => {
          return addressComponents;
        }).catch(error => {
          throw new Error("Redundant as fuck")
      });
    } else {
      throw new Error('Fuck you');
    }
  }

  async function getCoordinates(hasPermission) {
    let success = (position) => setLocation(position);
    let failure = (error) => {
      console.log(`${error.code}: ${error.message}`);
    };
    let options = {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000};

    if (hasPermission) {
      Geolocation.getCurrentPosition(success, failure, options);
    } else {
      throw new Error('Permission required to access geolocation')
    }
  }

//   working
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
  async function getLocation() {
    let address;

    try {
      const hasPermission = await requestLocationPermission();
      await getCoordinates(hasPermission);
      let components = await getAddress();
      address = formatAddress(components);

      console.log(address);

    } catch (error) {
       throw new Error(error);
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
    getLocation,
    loadRestaurants,
    restaurantData,
    refreshing,
    currentAddress,
    getLocation,
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
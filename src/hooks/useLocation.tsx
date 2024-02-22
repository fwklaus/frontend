import {useContext, useEffect} from 'react';
import {PermissionsAndroid} from 'react-native';
import {LocationContext} from '../context/LocationContext';
import {GOOGLE_API_KEY} from '@env';
const baseURL = '172.25.103.21:3000';

import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';

// initialize module using valid API key required for purposes of quota management
// should store key in environmental variable? module?
// use OrderWeasel.gmail account
// this is currently my personal account

Geocoder.init(GOOGLE_API_KEY);

const useLocation = () => {
  const {location, setLocation, currentAddress, setCurrentAddress} =
    useContext(LocationContext);
  useEffect(() => {}, [location]);

  async function getAddress({latitude, longitude}) {
    let googleURL = 'https://maps.googleapis.com/maps/api/geocode/json?';
    let queryParams = `latlng=${latitude},${longitude}&key=${GOOGLE_API_KEY}`;

    try {
      let response = await fetch(googleURL + queryParams);
      let json = await response.json();
      if (json.results.length > 0) {
        const address = json.results[0].formatted_address;
        return address;
      } else {
        throw new Error('No results found for getAddress');
      }
    } catch (e) {
      console.log(e);
    }
  }

  // working
  function getCoordinates(hasPermission, {location, setLocation}) {
    if (hasPermission) {
      Geolocation.getCurrentPosition(
        position => {
          const {latitude, longitude} = position.coords;
          setLocation({latitude, longitude});
        },
        error => console.log(`${error.code}: ${error.message}`),
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } else {
      throw new Error('Permission required to access geolocation');
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
          buttonPositive: 'OK',
        },
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
    } catch (error) {
      console.log(error, ' in GetLocation');
    }
  }

  return {
    location,
    getLocation,
    setLocation,
    getAddress,
    currentAddress,
    setCurrentAddress,
    requestLocationPermission,
  };
};

export default useLocation;

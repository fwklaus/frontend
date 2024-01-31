import { createContext, useState } from 'react';

const LocationContext = createContext(null);

const LocationProvider = (props) => {
  const [location, setLocation] = useState({});
  const [refreshing, setRefreshing] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [currentAddress, setCurrentAddress] = useState('5555 Main Street');

  return (
    <LocationContext.Provider
      value={{
        location, setLocation, refreshing,
        setRefreshing, restaurantData, setRestaurantData,
        currentAddress, setCurrentAddress
      }}
    >
      {props.children}
    </LocationContext.Provider>
  );
}

export { LocationContext, LocationProvider };

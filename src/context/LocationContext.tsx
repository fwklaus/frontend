import { createContext, useState, useEffect } from 'react';

const LocationContext = createContext(null);

const LocationProvider = (props) => {
  const [location, setLocation] = useState(false);
  const [currentAddress, setCurrentAddress] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  useEffect(() => console.log(location), [location]);
  useEffect(() => console.log(currentAddress), [currentAddress]);

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

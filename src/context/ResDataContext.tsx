import { createContext, useState, useEffect } from 'react';
const ResDataContext = createContext(null);

const ResDataProvider = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);

  return (
    <ResDataContext.Provider
      value={{ refreshing, setRefreshing, restaurantData, setRestaurantData }}
    >
      {props.children}
    </ResDataContext.Provider>
  );
}

export { ResDataContext, ResDataProvider };

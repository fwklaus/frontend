import { createContext, useState, useEffect } from 'react';
const ResDataContext = createContext(null);

const ResDataProvider = (props) => {
  const [refreshing, setRefreshing] = useState(false);
  const [restaurantData, setRestaurantData] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
//     console.log("Menu in ResDataContext: " + JSON.stringify(menu));
  }, [menu]);

  return (
    <ResDataContext.Provider
      value={{
        refreshing, setRefreshing, restaurantData,
        setRestaurantData, menu, setMenu
      }}
    >
      {props.children}
    </ResDataContext.Provider>
  );
}

export { ResDataContext, ResDataProvider };

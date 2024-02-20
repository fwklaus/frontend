import { createContext, useState, useEffect } from 'react';

const OrdersContext = createContext(null);

const OrdersProvider = (props) => {
  const [orders, setOrders] = useState([]);
  const [takingOrders, setTakingOrders] = useState(false);

  return (
    <OrdersContext.Provider value={{orders, setOrders, takingOrders, setTakingOrders}}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };

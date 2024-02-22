import React from 'react';
import {createContext, useState, useEffect} from 'react';

const OrdersContext = createContext(null);

const OrdersProvider = props => {
  const [takingOrders, setTakingOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [newOrders, setNewOrders] = useState([]);
  const [openOrders, setOpenOrders] = useState([]);
  const [completeOrders, setCompleteOrders] = useState([]);

  // load orders from database
  useEffect(() => {
    //     console.log(orders, "orders in OrdersContext");
    //     console.log(newOrders, "newOrders in OrdersContext");
    //     console.log(openOrders, "openOrders in OrdersContext");
    //     console.log(completeOrders, "completeOrders in OrdersContext");
  }, [orders, newOrders, openOrders, completeOrders]);

  return (
    <OrdersContext.Provider
      value={{
        takingOrders,
        setTakingOrders,
        orders,
        setOrders,
        newOrders,
        setNewOrders,
        openOrders,
        setOpenOrders,
        completeOrders,
        setCompleteOrders,
      }}>
      {props.children}
    </OrdersContext.Provider>
  );
};

export {OrdersContext, OrdersProvider};

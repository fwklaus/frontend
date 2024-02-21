import { createContext, useState, useEffect } from 'react';

const OrdersContext = createContext(null);

const OrdersProvider = (props) => {
  const [takingOrders, setTakingOrders] = useState(false);
  const [orders, setOrders] = useState([]);
  const [openOrders, setOpenOrders] = useState([]);
  const [closedOrders, setClosedOrders] = useState([]);
  const [pickupPendingOrders, setPickupPendingOrders] = useState([]);

  // load orders from database
  useEffect(() => {
//     console.log(orders, "Orders in OrdersContext");
    console.log(openOrders, "openOrders in OrdersContext");
//     console.log(closedOrders, "Orders in OrdersContext");
//     console.log(pickupPendingOrders, "Orders in OrdersContext");
  }, [orders, openOrders, closedOrders, pickupPendingOrders]);

  return (
    <OrdersContext.Provider value={{
      takingOrders, setTakingOrders, orders,
      setOrders, openOrders, setOpenOrders,
      closedOrders, setClosedOrders, pickupPendingOrders,
      setPickupPendingOrders
    }}>
      {props.children}
    </OrdersContext.Provider>
  );
}

export { OrdersContext, OrdersProvider };

import { useContext, useEffect } from 'react';
import { OrdersContext } from '../context/OrdersContext';
import ordersData from '../data/orders';

const useOrders = () => {
  const {
    takingOrders, setTakingOrders, orders,
    setOrders, openOrders, setOpenOrders,
    closedOrders, setClosedOrders, pickupPendingOrders,
    setPickupPendingOrders
    } = useContext(OrdersContext);

  // orders should be loaded from the database
  // ideally, orders would all be in orders, and we would sort based on their status
    // until orders have a "status", or "ready" state, we'll have to sort into separate state
     // arrays based on user actions in the interface
  function loadOrders() {
    setOpenOrders(ordersData)
  }

  return {
    takingOrders,
    setTakingOrders,
    openOrders,
    setOpenOrders,
    closedOrders,
    setClosedOrders,
    pickupPendingOrders,
    setPickupPendingOrders,
    loadOrders
  }
};

export default useOrders;

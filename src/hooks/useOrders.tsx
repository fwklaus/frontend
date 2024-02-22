import {useContext} from 'react';
import {OrdersContext} from '../context/OrdersContext';
import ordersData from '../data/orders';

const useOrders = () => {
  const {
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
  } = useContext(OrdersContext);

  // orders should be loaded from the database
  // ideally, orders would all be in orders, and we would sort based on their status
  // until orders have a "status", or "ready" state, we'll have to sort into separate state
  // arrays based on user actions in the interface
  async function loadOrders() {
    try {
      setNewOrders(ordersData);
    } catch (e) {
      throw new Error(e.message, 'at loadOrders');
    }
  }

  async function createOrder(resId, cart) {
    try {
      console.log(`Create order for restaurant #${resId}`);
      console.log(`Cart Contents: ${JSON.stringify(cart)}`);
    } catch (e) {
      throw new Error(e.message, 'at createOrder');
    }
  }

  return {
    takingOrders,
    setTakingOrders,
    newOrders,
    setNewOrders,
    openOrders,
    setOpenOrders,
    completeOrders,
    setCompleteOrders,
    loadOrders,
    createOrder,
  };
};

export default useOrders;

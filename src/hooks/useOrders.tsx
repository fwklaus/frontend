import { useContext, useEffect } from 'react';
import { OrdersContext } from '../context/OrdersContext';

const useOrders = () => {
  const { orders, setOrders, takingOrders, setTakingOrders } = useContext(OrdersContext);

  return {
    takingOrders,
    setTakingOrders
  }
};

export default useOrders;

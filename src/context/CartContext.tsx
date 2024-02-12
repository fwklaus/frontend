import { createContext, useState, useEffect } from 'react';
// import menu from '../data/seedData';

// menuData should be supplied after selecting a menu
// we can either load it here and provide it through the context or pass it to useCart hook at invocation

const CartContext = createContext(null);

const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };

import { createContext, useState, useEffect } from 'react';
const CartsContext = createContext(null);

const CartsProvider = (props) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
//     console.log(`carts in CartsContext : ${JSON.stringify(carts)}`);
  }, [carts]);

  return (
    <CartsContext.Provider value={[carts, setCarts]}>
      {props.children}
    </CartsContext.Provider>
  );
}

export { CartsContext, CartsProvider };

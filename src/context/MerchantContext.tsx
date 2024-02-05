import { createContext, useState } from 'react';

const MerchantContext = createContext(null);

const MerchantProvider = (props) => {
  const [merchants, setMerchants] = useState([]);

  return (
    <MerchantContext.Provider value={[merchants, setMerchants]}>
      {props.children}
    </MerchantContext.Provider>
  );
}

export { MerchantContext, MerchantProvider };
